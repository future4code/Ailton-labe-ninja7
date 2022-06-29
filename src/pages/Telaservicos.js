import React, { Component } from 'react'
import { Cabecalho } from '../components/Header'
import ninja from '../assets/ninja.png'
import ninjaMain from '../assets/ninja_main.png'
import { Container, Logo, Titulo, Main, MainButton, Imagem, Button } from './estilos'

export default class Telaservicos extends Component {

state = {
    telaAtual: "servicos",
}

  render() {
    return (
      <div>
        <Cabecalho>
          <Logo src={ninja} onClick={this.props.goToInicial}></Logo>
          <Titulo>LabeNinjas</Titulo>
        </Cabecalho>
        <Main>
          <h2> Estamos na página de serviços </h2>
          <hr/>
          <button onClick={this.props.goToInicial}>Tela Inicial</button>
        </Main>  
      </div>
    )
  }
}
