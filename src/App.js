import React, { Component } from 'react'
import styled from 'styled-components'
import {Cabecalho} from './components/Header'
import ninja from './assets/ninja.png'
import ninjaMain from './assets/ninja_main.png'
import Cadastro from './pages/Cadastro'
import Servicos from './pages/Servicos'
import Details from './pages/Details'
import Cart from './pages/Cart'

const Logo = styled.img`  
  margin-left: 15px;
  width: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  `

const Titulo = styled.span`
  font-weight: bold;
  color: #ffffff;
  font-size: 1.5rem;  
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Imagem = styled.img`
  justify-content: center;
  align-items: center;
  width: 500px;
`

const Button = styled.button`
  width: 250px;
  background-color: #f05b00;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`

const MainButton = styled.div`
  display: flex;
  gap: 10px;
  
`
export default class App extends Component {

  state = {
    telaAtual: "home",
  }

/*escolherTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return <App />
      case "cadastro":
        return <Cadastro />
      case "servicos":
        return <Servicos />
      case "detalhes":
        return <Details />
      case "carrinho":
        return <Cart />
      default:
        return <App />
  }
}*/

  mudaTela = (nomeTela) => {
    this.setState({telaAtual: nomeTela})
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
          <Button onClick={() => this.mudaTela("cadastro")}>Ir para Cadastro</Button>
          <Button onClick={() => this.mudaTela("servicos")}>Ir para Serviços</Button>
          </MainButton>
          
        </Main>
      </Container>
    )
  }
}