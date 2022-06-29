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
                <Cadastro />
                <button onClick={this.props.goToInicial}>Tela Inicial</button>
            </div>
        </Main>
    </Container>
    );
}
}