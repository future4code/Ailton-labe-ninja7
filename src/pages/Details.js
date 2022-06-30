import React, { Component } from 'react'
import styled from 'styled-components';
import { HeaderNinja, Titulo, Logo, GoCart } from './estilos'
import ninja from "../assets/ninja.png"
import ImgCarrinho from "../assets/cart.png"

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class Details extends Component {
  render() {
    return (
      <div>
        <Cabecalho>
          <HeaderNinja>
            <Logo src={ninja} onClick={this.props.goToInicial}></Logo>
            <Titulo>LabeNinjas</Titulo>
          </HeaderNinja>
            <div>
            <GoCart
              src={ImgCarrinho}
              onClick={this.props.goToCarrinho}
            ></GoCart>
          </div>
        </Cabecalho>
        </div>
    )
  }
}
