import {css} from 'styled-components'

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 461px) {
        ${props}
    }
  `
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 460px) {
        ${props}
    }
  `
}


