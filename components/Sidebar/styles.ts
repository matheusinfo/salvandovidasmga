import styled from 'styled-components'

interface StyledProps {
  small: boolean
}

export const Container = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.5s;
  overflow: hidden;
  background-color: ${props => props.small ? 'none' : 'rgba(0,0,0,0.6)'};
  z-index: ${props => props.small ? '1' : '999'};

  @media (min-width: 800px){
    display: none;
  }

  > button {
    z-index: 999;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: 0;
  }
`

export const Bar = styled.div<StyledProps>`
  z-index: 999;
  display: inline-flex;
  float: right;
  width: ${props => props.small ? '0px' : '220px'};
  height: inherit;
  background: #121214;
  transition: all 0.5s;
`

export const BarItens = styled.div<StyledProps>`
  display: ${props => props.small ? 'none' : 'flex'};
  flex-direction: column;
  margin: 60px 25px;
`