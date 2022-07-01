import React, { Component } from 'react'
import styled from "styled-components";

const CardCarrinho = styled.span`
display: flex;
justify-content: space-between;
width: 50%;
background-color: blueviolet;
margin-top:5rem;
margin-bottom:2rem;
border: 1px solid;
border-radius: 10px;
padding-left:2rem;
padding-right:2rem;
padding-top:1rem;
padding-bottom:1rem;
`

const TextoTitulo = styled.span`
font-size: 2rem;
color: white;
`

export default class CarrinhoCard extends Component {
  render() {
    return (
        <CardCarrinho>
          <TextoTitulo>{this.props.title}</TextoTitulo>
          <TextoTitulo>R${this.props.price},00</TextoTitulo>
          <button>Remover</button>
        </CardCarrinho>
        // <Menu>
        //   <p>{this.props.name}</p>
        //   <p>R${this.props.preco},00</p>
        //   <button onClick={() => this.props.remover(this.props.id)}>Remover</button>
        // </Menu>
      )
  }
}
