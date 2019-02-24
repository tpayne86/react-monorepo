import s from 'styled-components';
import { marginCenter } from '@nikaah/styles/lib/box';

export const Content = s.div`
  background: #fff;
  padding: 24px;
  min-height: 90vh;
  max-width:80%;
  ${marginCenter};
`;

export const Logo = s.p`
  height: 31px;
  float: left;
  font-size: 30px;
  text-decoration: none;
  color: white;
  margin-right: 20px;
  margin-bottom:0px;
`;
