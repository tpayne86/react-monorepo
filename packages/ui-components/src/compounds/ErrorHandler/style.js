import styled from 'styled-components';
import { flex, flexCenter, justifyAround } from '@healthifyme/styles/lib/flex';
import { margin, marginRemove } from '@healthifyme/styles/lib/margin';

export const Wrapper = styled.div`
  ${flex};
  ${flexCenter};
  ${justifyAround}
`;

export const Image = styled.img`width: 100px;`;

export const StackTrace = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffefef;
  overflow: auto;
  padding: 20px;
  color: #8d2424;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.98;
`;

export const ErrorTrace = styled.div`
  ${margin('top', 'SMALL')}
  ${margin('bottom', 'SMALL')}
`;

export const Pre = styled.pre`
  ${marginRemove}
`;

export const Paragraph = styled.p`
  font-weight: bold;
`;
