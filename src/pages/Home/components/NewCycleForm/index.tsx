import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import * as Styles from "./styles";

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <Styles.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <Styles.TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="React" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <Styles.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </Styles.FormContainer>
  );
};

export default NewCycleForm;
