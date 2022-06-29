import React, { Component } from 'react'
import styled from 'styled-components'

export const Cabecalho = styled.div`
background-color: #f05b00;
height: 4em;
display: flex;
flex-direction: row;
align-items: center;
`

export default class Header extends Component {
  render() {
    return (
      <div>Header</div>
    )
  }
}
