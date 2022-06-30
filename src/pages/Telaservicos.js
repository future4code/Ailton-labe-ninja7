import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ninja from "../assets/ninja.png";
import ImgCarrinho from "../assets/cart.png";
import {
  Logo,
  Titulo,
  MainServicos,
  GoCart,
  HeaderNinja,
  InputDiv,
  InputBusca,
  Filtros,
  JobsCard,
  Card,
  FooterCard,
  TituloCard,
  TextoCard,
  AddImg,
} from "./estilos";
import AddCart from "../assets/carrinho-cart-preto.png";

const Cabecalho = styled.div`
  background-color: #f05b00;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class Telaservicos extends Component {
  state = {
    telaAtual: "servicos",
    listaDeJobs: [],
    valorMin: "",
    valorMax: "",
    pesquisa: "",
  };

  updatePesquisa = (evento) => {
    this.setState({
      pesquisa: evento.target.value
    })
   
  }

  updateValorMin = (evento) => {
    this.setState({
      valorMin: evento.target.value
    })
  }

  updateValorMax = (evento) => {
    this.setState({
      valorMax: evento.target.value
    })
  }

  componentDidMount() {
    this.getAllJobs();
  }

  // Função para localizar os serviços
  getAllJobs = () => {
    axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: {
          Authorization: "0f182c1c-2a1e-44b8-8de6-92e39774d598",
        },
      })
      .then((response) => {
        this.setState({ listaDeJobs: response.data.jobs });
        console.log(response.data.jobs);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.message);
      });
  };

  render() {
    const jobsList = this.state.listaDeJobs.filter(job =>{
      return job.description.toLowerCase().includes(this.state.pesquisa.toLowerCase())
    })
    .filter(job=>{
      return this.state.valorMin === '' || job.price >= this.state.valorMin
    })
    .filter(job=>{
      return this.state.valorMax === '' || job.price <= this.state.valorMax
    })
    .map((job) => {
      return (
        <JobsCard>
          <TituloCard key={job.id}>{job.description}</TituloCard>
          <TextoCard>
            Até {job.dueDate.split('T')[0]} por <b>R$:{job.price},00 </b>
          </TextoCard>
          <FooterCard>
            <button onClick={this.props.goToDetalhes}>DETALHES</button>
            <AddImg src={AddCart}></AddImg>
          </FooterCard>
        </JobsCard>
      );
    });

    return (
      <div>
        <Cabecalho>
          <HeaderNinja>
            <Logo src={ninja} onClick={this.props.goToInicial}></Logo>
            <Titulo>LabeNinjas</Titulo>
          </HeaderNinja>
          <InputDiv>
            <InputBusca placeholder="Busca" onChange={this.updatePesquisa} value={this.state.pesquisa}></InputBusca>
          </InputDiv>
          <div>
            <GoCart
              src={ImgCarrinho}
              onClick={this.props.goToCarrinho}
            ></GoCart>
          </div>
        </Cabecalho>
        <Filtros>
          <select placeholder="Ordenar por">
            <option value="Preço Crescente">Preço Crescente</option>
            <option value="Preço Decrescente">Preço Decrescente</option>
            <option value="Job">Job</option>
            <option value="Prazo">Prazo</option>
          </select>
          <input placeholder="Valor Minimo" type="Number" value={this.state.valorMin} onChange={this.updateValorMin}></input>
          <input placeholder="Valor Maximo" type="Number" value={this.state.valorMax} onChange={this.updateValorMax}></input>
        </Filtros>
        <MainServicos>
          <h2>QUANTIDADE DE PRODUTOS ENCONTRADOS: {jobsList.length}</h2>
          <Card>{jobsList}</Card>
        </MainServicos>
      </div>
    );
  }
}
