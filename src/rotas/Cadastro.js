import React, { useState } from "react";
import { criarCliente } from "../Componentes/Servicos/cliente";
import "./CadastroCliente.css";

function CadastroCliente() {
  const [Nome, setNome] = useState("");
  const [Senha, setSenha] = useState("");
  const [Celular, setCelular] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCadastro = async () => {
    try {
      const novoPets = await criarCliente({
        Nome,
        Senha,
        Celular,
      });

      console.log("Novo Cliente cadastrado:", novoCliente);

      setShowAlert(true);

      setNome("");
      setSenha("");
      setCelular("");

      // Esconde a mensagem após 3 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar Cliente:", error);
    }
  };

  return (
    <div className="cadastro-Cliente-container">
      <form>
        <h1>CADASTRE-SE:</h1>
        <br />
        <label>Nome:</label>
        <input
          type="text"
          value={Nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <br />
        <br />

        <label>Senha:</label>
        <input
          type="password"
          value={Senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <br />
        <br />

        <label>Celular:</label>
        <input
          type="text"
          value={petCelular}
          onChange={(e) => setCelular(e.target.value)}
        />

        <br />
        <br />

        <button type="button" onClick={handleCadastro} className="botao">
          Cadastrar
        </button>

        {showAlert && (
          <div className="alerta">
            <p>Cadastrado com sucesso!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default CadastroCliente;
