import React, { Component } from "react";
import {
  DivCadastro,
  InputCadastro,
  InputCadastroDescricao
} from "./cadastroestilo";
import axios from "axios";

export default class Cadastro extends Component {
  state = {
    jobTitulo: "",
    descricao: "",
    valor: "",
    date: "",
    formapagamento: [],
    // formapagamento: "",
  };
  // Inputs Controlados
  onChangeNome = (event) => {
    this.setState({ jobTitulo: event.target.value });
  };
  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };
  onChangeValor = (event) => {
    this.setState({ valor: Number(event.target.value) });
  };
  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
    console.log(event.target.value);
  };
  onChangeFormaPagamento = (event) => {
    this.setState({ formapagamento: event.target.value });
    console.log(event.target.value);
  };
  // Função para localizar os serviços
  getServicos = () => {
    axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: {
          Authorization: "0f182c1c-2a1e-44b8-8de6-92e39774d598"
        }
      })
      .then((response) => {
        // this.getServico();
        alert("Cadastro realizado com sucesso!");
        console.log("Entrou no then");
      })
      .catch((error) => {
        console.log("Deu erro: ", error.message);
      });
  };

  // Função para adicionar um servico usando o Axios
  createServico = () => {
    const body = {
      title: this.state.jobTitulo,
      description: this.state.descricao,
      price: Number(this.state.valor),
      paymentMethods: [toString(this.state.formapagamento)],
      dueDate: this.state.date
    };
    axios
      .post("https://labeninjas.herokuapp.com/jobs", body, {
        headers: {
          Authorization: "0f182c1c-2a1e-44b8-8de6-92e39774d598"
        }
      })
      .then((response) => {
        //this.getServico();
        alert("Cadastro realizado com sucesso!");
        console.log(response);
        this.setState({
          title: "",
          description: "",
          price: "",
          paymentMethods: [],
          // paymentMethods: "",
          dueDate: ""
        });
      })
      .catch((error) => {
        console.log("Deu erro: ", error.message);
        console.log("valor do body: ", body);
      });
  };

  render() {
    return (
      <div>
        <DivCadastro>
          <h2>Vamos fazer seu cadastro de Ninja</h2>
          <InputCadastro
            placeholder={"Seu Serviço"}
            value={this.state.jobTitulo}
            onChange={this.onChangeNome}
          />
          <hr />
          <InputCadastroDescricao
            placeholder={"Detalhes do serviço"}
            value={this.state.descricao}
            onChange={this.onChangeDescricao}
          />
          <hr />
          <InputCadastro
            type={"number"}
            placeholder={"Valor"}
            value={this.state.valor}
            onChange={this.onChangeValor}
          />
          <hr />
          <select
            name="Formas de Pagamento"
            id="pagamento"
            onChange={this.onChangeFormaPagamento}
          >
            <option value="debito">Cartão de Débito</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="pix">PIX</option>
            <option value="Boleto">Boleto</option>
          </select>
          <hr />
          <InputCadastro
            type={"date"}
            placeholder={"Data de Validade"}
            value={this.state.date}
            onChange={this.onChangeDate}
          />
          <hr />
          <button onClick={this.createServico}>Cadastrar um Ninja</button>
        </DivCadastro>
      </div>
    );
  }
}

