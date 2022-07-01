import React, { Component } from "react";
import {
  DivCadastro,
  InputCadastro,
  InputCadastroDescricao,
  H2,
  ContainerCadastro,
  ButtonCadastro,
  SelectCadastro,
  ButtonInicial
} from "./cadastroestilo";
import axios from "axios";

export default class Cadastro extends Component {
  state = {
    nomeNinja: "",
    descricao: "",
    valor: "",
    date: "",
    formapagamento: [],
    copiaformapagamento: "",
  };
  // Inputs Controlados
  onChangeNome = (event) => {
    this.setState({ nomeNinja: event.target.value });
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
    const copiaformapagamento = [...this.state.formapagamento]
    copiaformapagamento.push(event.target.value)
    this.setState({ formapagamento: copiaformapagamento });
  
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
      title: this.state.nomeNinja,
      description: this.state.descricao,
      price: Number(this.state.valor),
      paymentMethods: this.state.formapagamento,
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
      <ContainerCadastro>
        <DivCadastro>
          <H2>Vamos fazer seu cadastro de Ninja</H2>
          <br/>
          <InputCadastro
            placeholder={"Nome"}
            value={this.state.nomeNinja}
            onChange={this.onChangeNome}
          />
          <br />
          <InputCadastroDescricao
            placeholder={"Seu serviço"}
            value={this.state.descricao}
            onChange={this.onChangeDescricao}
          />
          <br />
          <InputCadastro
            type={"number"}
            placeholder={"Valor"}
            value={this.state.valor}
            onChange={this.onChangeValor}
          />
          <br />
          <SelectCadastro
            name="Formas de Pagamento"
            id="pagamento"
            onChange={this.onChangeFormaPagamento}
            value={this.state.formapagamento}
          >
            <option value="debito">Cartão de Débito</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="pix">PIX</option>
            <option value="Boleto">Boleto</option>
          </SelectCadastro>
          <br />
          <InputCadastro
            type={"date"}
            placeholder={"Data de Validade"}
            value={this.state.date}
            onChange={this.onChangeDate}
          />
          <br />
          <ButtonCadastro onClick={this.createServico}>Cadastrar um Ninja</ButtonCadastro>
          <br/>
          <ButtonInicial onClick={this.props.goToInicial}>Tela Inicial</ButtonInicial>
        </DivCadastro>
      </ContainerCadastro>
    );
  }
}

