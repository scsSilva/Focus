import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";
import * as Styles from "./styles";

const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <Styles.Container>
      <h1>Meu histórico</h1>

      <Styles.List>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Styles.Status statusColor="green">
                        Concluído
                      </Styles.Status>
                    )}
                    {cycle.interruptDate && (
                      <Styles.Status statusColor="red">
                        Interrompido
                      </Styles.Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptDate && (
                      <Styles.Status statusColor="yellow">
                        Em andamento
                      </Styles.Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Styles.List>
    </Styles.Container>
  );
};

export default History;
