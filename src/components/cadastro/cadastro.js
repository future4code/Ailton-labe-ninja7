import React, { Component } from 'react'
import { DivCadastro, InputCadastro, InputCadastroDescricao } from './cadastroestilo';
import axios from 'axios';

export default class Cadastro extends Component {

  state = {
    nomeNinja: "",
    descricao: "",
    valor: "",
    date: ""
  }

  // Inputs Controlados

  onChangeNome =(event) => {
    this.setState({ nomeNinja: event.target.value})
  };

  onChangeDescricao =(event) => {
    this.setState({ descricao: event.target.value})
    console.log(event.target.value)
  };

  onChangeValor =(event) => {
    this.setState({ valor: event.target.value})
    console.log(event.target.value)
  };

  onChangeDate =(event) => {
    this.setState({ date: event.target.value})
    console.log(event.target.value)
  };
  render() {
    return (
      <div>
        <DivCadastro>
            <h2>Vamos fazer seu cadastro de Ninja</h2>
            <InputCadastro
            placeholder={"Nome"}
            value={this.state.nomeNinja}
            onChange={this.onChangeNome}
          />
          <hr/>
          <InputCadastroDescricao
            placeholder={"Seu serviço"}
            value={this.state.descricao}
            onChange={this.onChangeDescricao}
          />
          <hr/>
          <InputCadastro
            type={"number"}
            placeholder={"Valor"}
            value={this.state.valor}
            onChange={this.onChangeValor}
          />
          <hr/>
          <select name="Formas de Pagamento" id="pagamento">
            <option value="debito">Cartão de Débito</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="pix">PIX</option>
            <option value="Boleto">Boleto</option>
          </select>
          <hr/>
          <InputCadastro
            type={"date"}
            placeholder={"Data de Validade"}
            value={this.state.date}
            onChange={this.onChangeDate}
          />
          <hr/>
          <button>Cadastrar um Ninja</button>

        </DivCadastro>
      </div>
    )
  }
}