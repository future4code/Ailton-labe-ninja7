import React, { Component } from "react";
import styled from "styled-components";
// import { Cabecalho } from "../components/Header";
import ninja from "../assets/ninja.png";
import { Container, Logo, Titulo, GoCart, HeaderNinja, Main } from "./estilos";
import ImgCart from "../assets/carrinho-cart.png"
import axios from "axios";
import CarrinhoCard from "../components/CarrinhoCard";

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardPagamento = styled.span`
display: flex;
justify-content: space-between;
width: 50%;
background-color: yellowgreen;
border: 1px solid;
border-radius: 10px;
padding-left:2rem;
padding-right:2rem;
padding-top:1rem;
padding-bottom:1rem;
`


export default class Cart extends Component {
  state = {
    listaCarrinho: [],
  }

  componentDidMount() {
    this.getJobById();
  }

  getJobById = () => {
    axios
      .get(`https://labeninjas.herokuapp.com/jobs/${this.props.id}`, {
        headers: {
          Authorization: "0f182c1c-2a1e-44b8-8de6-92e39774d598",
        },
      })
      .then((resp) =>{
        this.setState({listaCarrinho:resp.data})
      })
      .catch((erro) =>{
        console.log(erro)
      })
    }

    onClickAlert = () => {
      return alert("Compra Realizada com Sucesso!")
    }

    

  render() {

    const mapCarrinho = this.state.listaCarrinho.map((job) =>{
      if (this.state.listaCarrinho.length !== 0){
        return(
          <CarrinhoCard
          key={job.id}
          title={job.title}
          price={job.price}
          />
        )
      }
    })

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
        {mapCarrinho}
        
        <CardPagamento>
            <span>Total das Compras: R$,00</span>
            <button onClick={this.onClickAlert}>🛒 Pagar</button>
        </CardPagamento>
        </Main>
        </Container>
    );
  }
}
