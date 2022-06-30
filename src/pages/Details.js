import React, { Component } from 'react'
import styled from 'styled-components';
import { HeaderNinja, Titulo, Logo, GoCart } from './estilos'
import ninja from "../assets/ninja.png"
import ImgCarrinho from "../assets/cart.png"
import axios from 'axios';

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
margin-top:15%;
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
        <h1>{this.state.jobDetail.title}</h1>
        <p>Aceita: {this.state.jobDetail.paymentMethods}</p>
        <p>Até {this.state.jobDetail.dueDate}  por  <strong>R${this.state.jobDetail.price},00</strong></p>
        <p>{this.state.jobDetail.description}</p>
        <button>Adicionar ao Carrinho</button>
        <button onClick={this.props.goToListaServicos}>Voltar para Lista</button>
        </Main>
       </div>
    )
  }
}
