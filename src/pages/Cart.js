import React, { Component } from "react";
import styled from "styled-components";
// import { Cabecalho } from "../components/Header";
import ninja from "../assets/ninja.png";
import { Container, Logo, Titulo, GoCart, HeaderNinja, Main } from "./estilos";
import ImgCart from "../assets/carrinho-cart.png"

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class Cart extends Component {
  render() {
    return (
      <Container>
      <Cabecalho>
          <HeaderNinja>
            <Logo src={ninja} onClick={this.props.goToInicial}></Logo>
            <Titulo>LabeNinjas</Titulo>
          </HeaderNinja>
          <div>
            <GoCart
              src={ImgCart}
              onClick={this.props.goToListaServicos}
            ></GoCart>
          </div>
        </Cabecalho>
        <Main>
      
        </Main>
        </Container>
    );
  }
}
