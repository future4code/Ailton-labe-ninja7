import React, { Component } from "react";
import styled from "styled-components";
import ImgCart from "../assets/carrinho-cart-preto.png";
import { Card } from "../pages/estilos";

const TextoTituloCard = styled.p`
  color: #f05b00;
  margin: 10px;
`;
const BotoesCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;
const CarrinhoCard = styled.img`
  width: 25px;
`;

export default class CardJobs extends Component {
  render() {
    return (
      <Card>
        <TextoTituloCard>{this.props.name}</TextoTituloCard>
        <p>
          Até {this.props.prazo} por R${this.props.preco},00
        </p>
        <BotoesCard>
          <button>Detalhes</button>
          <CarrinhoCard src={ImgCart}></CarrinhoCard>
        </BotoesCard>
      </Card>
    );
  }
}
