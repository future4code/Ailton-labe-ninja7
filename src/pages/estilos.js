import styled from "styled-components"

// CSS que estavam dentro do APP.JS
export const Logo = styled.img`  
  margin-left: 15px;
  width: 50px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export const Titulo = styled.span`
  font-weight: bold;
  color: #ffffff;
  font-size: 1.5rem;  
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Imagem = styled.img`
  justify-content: center;
  align-items: center;
  width: 1000px;
`

export const Button = styled.button`
  width: 250px;
  background-color: #f05b00;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`
export const MainButton = styled.div`
  display: flex;
  gap: 50px;

`

// ESTILIZAÇÃO TelaServicos.js
export const GoCart = styled.img`  
margin-right: 15px;
width: 50px;
`
export const HeaderNinja = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const InputDiv = styled.div`
  padding-right: 120px;
`;

export const InputBusca = styled.input`
  width: 300px;
  height: 35px;
`;

export const MainServicos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

`

export const Filtros = styled.div`
display: flex;
justify-content: center;
padding: 15px;
gap: 15px;

`
export const JobsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    border: none;
    border-radius: 10px;
    margin: .5rem;
    background-color: #edc4a1;
    height: 120%;
    width: 20rem;
    
`
export const Card = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
width: fit-content;
height: fit-content;
width: 100%;
height: 100%;
`

export const FooterCard = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`

export const TituloCard = styled.h2`
color: #f05b00;
margin: 10px;
font-weight: bold;
`
export const TextoCard = styled.p`
margin: 20px;
`
export const AddImg = styled.img`
width: 25px;
`
// Fim dos CSS que estavam no APP.JS
