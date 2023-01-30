import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Usuario from "../../components/Usuario";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("LOGIN");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [showError, setShowError] = useState(false);
  const [inputColor, setInputColor] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      email: "joao@oi.net.br",
      password: "oidevs",
    },
    {
      id: 2,
      email: "jady@oi.net.br",
      password: "oidevs",
    },
    {
      id: 3,
      email: "raniel@oi.net.br",
      password: "caneta", // azul
    },
    {
      id: 4,
      email: "carol@oi.net.br",
      password: "carol",
    },
  ]);

  return (
    <div className="container">
      <div className="box">
        <Title title={title} />
        {showError && <Usuario text="Credenciais inválidas" />}
        <Input
          label="Usuário"
          color={inputColor}
          passarValor={(e) => setNomeDeUsuario(e.target.value)}
        />
        <Input
          label="Senha"
          color={inputColor}
          hideContent
          passarValor={(e) => setSenha(e.target.value)}
        />

        <Button
          button="Entrar"
          noClique={() => {
            const usuarioSelecionado = usuarios.find(
              (usuario) =>
                usuario.email === nomeDeUsuario && usuario.password === senha
            );

            if (usuarioSelecionado) {
              navigate("/home", { state: { listaDeUsuarios: usuarios } });
            } else {
              setInputColor("red");
              setShowError(true);
            }
          }}
        />
        <Button
          button="Será que muda?"
          noClique={() => {
            setTitle("Mudou ne kkk");
          }}
        />
        <Link span="Esqueci minha senha" url="https://www.google.com" />
      </div>
    </div>
  );
};

export default Login;
