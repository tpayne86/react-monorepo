import {css} from 'styled-components';
import * as variables from '../variables';

export const font = (size = 'M') => {
  return css `
    font-size: ${variables[size]}
  `
}

export const text = (type) =>{
  return css `
   text-align: ${type}
  `
}
export default font
