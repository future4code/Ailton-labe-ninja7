import React from 'react';
import Cadastro from '../components/cadastro/cadastro'
import { Cabecalho } from '../components/Header'
import ninja from '../assets/ninja.png'
import ninjaMain from '../assets/ninja_main.png'
import { Container, Logo, Titulo, Main, MainButton, Imagem, Button } from './estilos'

export default class Telacadastro extends React.Component {

state = {
    telaAtual: "cadastro",
}

//   // Funções de troca de telas.
//   goToInicial = () => {
//     this.setState({telaAtual: "inicial"})
//   }

render() {

return (
    <Container>
        <Cabecalho>
          <Logo src={ninja} onClick={this.props.goToInicial}></Logo>
          <Titulo>LabeNinjas</Titulo>
        </Cabecalho>
        <Main>
            <br/>
            <div>
                <Cadastro goToInicial={this.props.goToInicial}/>
            </div>
        </Main>
    </Container>
    );
}
}