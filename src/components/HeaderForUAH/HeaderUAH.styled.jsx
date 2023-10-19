import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1em;
  margin: 1em;

  border: 2px solid #057c48;
  border-radius: 6px;

  background: rgb(0, 123, 71);
  background: linear-gradient(
    300deg,
    rgba(0, 123, 71, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;
