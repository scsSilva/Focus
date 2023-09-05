import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 0.5rem;

  @media (max-width: 700px) and (min-width: 500px) {
    align-items: center;
    gap: 0.5rem;
    font-size: 5rem;
  }

  @media (max-width: 500px) {
    align-items: center;
    gap: 0;
    font-size: 2.5rem;
  }

  div {
    display: flex;
    gap: 1rem;

    span {
      background: ${(props) => props.theme["gray-700"]};
      padding: 2rem 1rem;
      border-radius: 8px;

      @media (max-width: 700px) and (min-width: 500px) {
        padding: 1rem;
      }

      @media (max-width: 500px) {
        padding: 0.1rem 1rem;
      }
    }
  }
`;

export const Separator = styled.span`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
