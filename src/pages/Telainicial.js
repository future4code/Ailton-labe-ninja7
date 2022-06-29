import React, { Component } from 'react'
import styled from 'styled-components'
import { Cabecalho } from '../components/Header'
import ninja from '../assets/ninja.png'
import ninjaMain from '../assets/ninja_main.png'
import { Container, Logo, Titulo, Main, MainButton, Imagem, Button } from './estilos'


export default class Telainicial extends Component {

  state = {
    telaAtual: "inicial",
  }


  render() {
    return (
      <Container>
        <Cabecalho>
          <Logo src={ninja}></Logo>
          <Titulo>LabeNinjas</Titulo>
        </Cabecalho>

        <Main>
          <Imagem src={ninjaMain}></Imagem>
          <MainButton>
          <Button onClick={this.props.goToCadastro}>Ir para Cadastro</Button>
          <Button onClick={this.props.goToListaServicos}>Ir para Serviços</Button>
          </MainButton>
          
        </Main>
      </Container>
    )
  }
}