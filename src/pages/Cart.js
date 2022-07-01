import React, { Component } from "react";
import styled from "styled-components";
// import { Cabecalho } from "../components/Header";
import ninja from "../assets/ninja.png";
import { Container, Logo, Titulo, GoCart, HeaderNinja, Main } from "./estilos";
import ImgCart from "../assets/carrinho-cart.png"
import axios from "axios";
import Telaservicos from "./Telaservicos";

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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
    novaListaCarrinho:[],
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
        // this.setState({listaCarrinho:resp.data})
        const novaListaCarrinho = [...this.state.listaCarrinho]
        novaListaCarrinho.push(resp.data)
        this.setState({listaCarrinho: novaListaCarrinho})
      })
      .catch((erro) =>{
        console.log(erro)
      })
    }

    onClickAdd = (id, title, price) => {
      const novaLista = [...this.state.listaCarrinho];
      const novaProduto = {
        id: id,
        title: title,
        price: price
      };
      novaLista.push(novaProduto);
      this.setState({listaCarrinho: novaLista});
    };

    onClickAlert = () => {
      return alert("Compra Realizada com Sucesso!")
    }

  render() {
    return (
      
<div>
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

        <CardCarrinho>
          <TextoTitulo>{this.state.listaCarrinho.title}</TextoTitulo>
          <TextoTitulo>R${this.state.listaCarrinho.price},00</TextoTitulo>
          <button>Remover</button>
        </CardCarrinho>
        <CardPagamento>
            <span>Total das Compras: R$,00</span>
            <button onClick={this.onClickAlert}>🛒 Pagar</button>
        </CardPagamento>
        </Main>
        </Container>
        <Telaservicos onClickAdd={this.onClickAdd} />
      </div>
    );
  }
}
