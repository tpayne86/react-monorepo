import {css} from 'styled-components';
import * as variables from '../variables/'

export const marginCenter = css `
  margin: 0 auto;
`;
export const marginRemove = css `
  margin: 0;
`;

export const margin = (dir,size = 'M') => {
  if(!dir){
    return css `
      margin: ${variables[size]}
    `
  } else {
    return css `
     margin-${dir}: ${variables[size]}
    `
  }
}

export const paddingRemove = css `
  padding: 0
`

export const padding = (dir,size = 'M') => {
  if(!dir){
    return css `
      padding: ${variables[size]}
    `
  } else {
    return css `
     padding-${dir}: ${variables[size]}
    `
  }
}
