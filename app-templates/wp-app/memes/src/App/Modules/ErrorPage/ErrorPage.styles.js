import s from 'styled-components';

export const Wrapper = s.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Section = s.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  color: black;
`;

export const BaseImage = s.img`
  width: 400px;
`;
