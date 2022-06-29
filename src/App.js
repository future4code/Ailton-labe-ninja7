import React, { Component } from 'react'
import Telainicial from './pages/Telainicial'
import Telacadastro from './pages/Telacadastro'
import Telaservicos from './pages/Telaservicos'

export default class App extends React.Component {

  // Declarando o estado para troca de telas.
  state = {
    telaAtual: "inicial",
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

  // Switch para a escolha das telas.
  selectPage = () => {
    switch (this.state.telaAtual){
      case "inicial":
        return <Telainicial goToCadastro={this.goToCadastro} goToListaServicos={this.goToListaServicos}/>
      case "cadastro":
        return <Telacadastro goToInicial={this.goToInicial} />
      case "servicos":
          return <Telaservicos goToInicial={this.goToInicial} />
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