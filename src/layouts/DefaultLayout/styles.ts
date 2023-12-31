import styled from "styled-components";

export const Container = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-800"]};
  margin: 5rem auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 56.25rem;
  }

  @media (max-width: 900px) and (min-width: 700px) {
    max-width: 43.75rem;
  }

  @media (max-width: 700px) and (min-width: 500px) {
    max-width: 31.25rem;
  }

  @media (max-width: 500px) {
    max-width: 21.875rem;
  }

  @media (max-height: 700px) {
    height: calc(100vh - 3rem);
    margin: 1.5rem auto;
  }
`;
