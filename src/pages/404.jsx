import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; 
    min-height: 100vh;
    background: radial-gradient(circle at 30% 50%, #102f4b, rgba(1, 24, 59, 0.74) 70%);
    color: white; 
    font-family: Arial, sans-serif;
  }
`

const Container = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TituloEstilizado = styled.h1`
  font-size: 9rem;
  font-weight: 700;
  margin: 0;
`

const IconeEstilizado = styled(FaExclamationTriangle)`
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #f9c74f; 
`

const BotaoVoltar = styled.button`
  border: 2px solid black;
  margin-top: 2rem;
  padding: 0.5em 5rem;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0b643;
  }
`

const NotRouter = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <IconeEstilizado />
        <TituloEstilizado>404</TituloEstilizado>
        <h2>ERROR 404, PAGE NOT FOUND</h2>
        <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
      </Container>
    </>
  )
}

export default NotRouter;
