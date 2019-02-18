import styled from 'styled-components';
import {
  flex, flexWrap, justifyBetween, flexCol,
} from '@healthifyme/styles/lib/flex';

import { margin } from '@healthifyme/styles/lib/box';

export const Wrapper = styled.div`
  position: relative
  ${flex};
  ${flexWrap}
  ${justifyBetween}
`;

export const Flex = styled.div`
 ${flex}
`;

export const FlexCol = styled.div`
  ${flex};
  ${flexCol};
  width: 300px
`;

export const Item = styled.div`
  ${margin('MD')}
`;
