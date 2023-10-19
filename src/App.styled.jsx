import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #e5e7eb;
  border-radius: 6px;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;

  margin: 0;
  padding: 1.5em;
  min-height: 100hv;
  text-align: center;
`;

export const H1 = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Equals = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;
