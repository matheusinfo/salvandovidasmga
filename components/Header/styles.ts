import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 150px;
  height: 70px;
  background: #000;

  @media (max-width: 799px){
    display: none;
  }
`

export const HyperLink = styled.a<Props>`
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: all 0.5s;
  color: ${props => !props.active ? '#fff' : '#f7bb00'};
  padding: 25px 0;
  border-bottom:  ${props => !props.active ? '0' : '1px solid #f7bb00'};
  
  :hover {
    color: #f7bb00;
  }
`