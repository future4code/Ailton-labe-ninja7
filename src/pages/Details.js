import React, { Component } from 'react'
import styled from 'styled-components';
import { HeaderNinja, Titulo, Logo, GoCart, AddImg } from './estilos'
import ninja from "../assets/ninja.png"
import ImgCarrinho from "../assets/cart.png"
import axios from 'axios';
import AddCart from "../assets/carrinho-cart-preto.png";

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
margin-top:10%;
`
const TituloDetalhe = styled.p`
color: white;
background-color: #f05b00;
font-size: 2.5rem;
border: 1px solid #f05b00;
border-radius: 10px;
margin-bottom: 2rem;
width: 20rem;
display: flex;
align-items: center;
justify-content: center;

`
const PagamentoDetalhe = styled.span`
background-color: yellowgreen;
font-size: 1.5rem;
border: 1px solid;
border-radius: 10px;
display: flex;
`
const PagamentoDetalhe1 = styled.span`
font-size: 1.5rem;
display: flex;
`
const DataDetalhe = styled.span`
font-size: 1.5rem;
display: flex;
margin-top: 1rem;
margin-bottom: 1rem;
text-decoration: underline;
`
const DescricaoDetalhe1 = styled.span`
font-size: 1.5rem;
display: flex;
margin-bottom: 1rem;
`
const BotaoAddCarrinho = styled.button`
background-color: blueviolet;
font-size: 1.5rem;
border: 1px solid;
border-radius: 10px;
margin-bottom: 1rem;
`
const BotaoVoltar = styled.button`
font-size: 1.5rem;
border: 1px solid;
border-radius: 10px;
margin-bottom: 1rem;
`

export default class Details extends Component {
  state = {
    jobDetail: {},
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
        this.setState({jobDetail:resp.data})
        console.log(resp.data)
      })
      .catch((erro) =>{
        console.log(erro)
      })
    }
   
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
        <Main>
        <TituloDetalhe>{this.state.jobDetail.title}</TituloDetalhe>
        <PagamentoDetalhe1>Aceita:<PagamentoDetalhe> &nbsp; {this.state.jobDetail.paymentMethods} &nbsp; </PagamentoDetalhe></PagamentoDetalhe1>
        <DataDetalhe>Até &nbsp; {this.state.jobDetail.dueDate!=null ? new Intl.DateTimeFormat("pt-BR").format(new Date(this.state.jobDetail.dueDate)) : ""} &nbsp; por &nbsp; <strong> R${this.state.jobDetail.price},00</strong></DataDetalhe>
        <DescricaoDetalhe1>{this.state.jobDetail.description}</DescricaoDetalhe1>
        <BotaoAddCarrinho> &nbsp; <AddImg src={AddCart}></AddImg> &nbsp; Adicionar ao Carrinho &nbsp; </BotaoAddCarrinho>
        <BotaoVoltar onClick={this.props.goToListaServicos}>&nbsp; ↩ Voltar para Lista &nbsp;</BotaoVoltar>
        </Main>
       </div>
    )
  }
}
