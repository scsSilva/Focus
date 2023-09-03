import { Play } from "phosphor-react";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <form>
        <Styles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styles.TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
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
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </Styles.FormContainer>

        <Styles.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Styles.Separator>:</Styles.Separator>
          <span>0</span>
          <span>0</span>
        </Styles.CountdownContainer>

        <Styles.StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </Styles.StartCountdownButton>
      </form>
    </Styles.Container>
  );
};

export default Home;
