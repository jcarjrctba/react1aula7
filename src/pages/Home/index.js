import "../../pages/Login/styles.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { listaDeUsuarios } = location.state;

  const paraLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="box">
        <Title title="Home" />

        <ul>
          {listaDeUsuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.email}</li>
          ))}
        </ul>

        <Button button="Voltar para login" noClique={paraLogin} />
      </div>
    </div>
  );
};

export default Home;
