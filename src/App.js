import React, { Component } from 'react'
import Telainicial from './pages/Telainicial'
import Telacadastro from './pages/Telacadastro'
import Telaservicos from './pages/Telaservicos'
import Cart from './pages/Cart'
import Details from "./pages/Details"
import Cadastro from './components/cadastro/cadastro'

export default class App extends React.Component {

  // Declarando o estado para troca de telas.
  state = {
    telaAtual: "inicial",
    clickedProduto: "",
  }

  // Funções de troca de telas.
  goToInicial = () => {
    this.setState({telaAtual: "inicial"})
  }

  goToCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  goToListaServicos = () => {
    this.setState({telaAtual: "servicos"})
  }

  goToCarrinho = () => {
    this.setState({telaAtual: "carrinho"})
  }

  goToDetalhes = (id) => {
    this.setState({telaAtual: "detalhes", clickedProduto: id})
  }

  // Switch para a escolha das telas.
  selectPage = () => {
    switch (this.state.telaAtual){
      case "inicial":
        return <Telainicial goToCadastro={this.goToCadastro} goToListaServicos={this.goToListaServicos}/>
      case "cadastro":
        return <Telacadastro goToInicial={this.goToInicial} />
      case "servicos":
          return <Telaservicos goToInicial={this.goToInicial} goToCarrinho={this.goToCarrinho} goToDetalhes={this.goToDetalhes}/>
      case "carrinho":
        return <Cart goToInicial={this.goToInicial} goToListaServicos={this.goToListaServicos}/>
        case "detalhes":
        return <Details goToInicial={this.goToInicial} goToListaServicos={this.goToListaServicos} goToCarrinho={this.goToCarrinho} id={this.state.clickedProduto}/>
      default:
        return <Telainicial goToCadastro={this.goToCadastro} />
    }
  }

  render(){
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}