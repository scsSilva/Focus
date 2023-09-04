import { useContext } from "react";
import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CyclesContext } from "../../contexts/CyclesContext";
import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";
import * as Styles from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(1).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <Styles.Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <Styles.StopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interromper
          </Styles.StopCountdownButton>
        ) : (
          <Styles.StartCountdownButton
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </Styles.StartCountdownButton>
        )}
      </form>
    </Styles.Container>
  );
};

export default Home;
