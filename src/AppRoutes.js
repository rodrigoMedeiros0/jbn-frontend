import { Navigate, Route, Routes } from "react-router-dom";

//pags components render in Routes
import Home from "../src/pages/public/Home";
import Empreendimentos from "../src/pages/public/Empreendimentos";
import EmpreendimentosID from "./pages/public/EmpreendimentosID";
import QuemSomos from "./pages/public/QuemSomos";
import Contato from "./pages/public/Contato";
import Login from "./pages/public/Login";
import PagNaoExiste from "./pages/PagNaoExiste";
import PainelEmpreendimentos from "./pages/privates/PainelEmpreendimentos";
import AtualizarEmpreendimento from "./pages/privates/AtualizarEmpreendimento";
import DeletarEmpreendimento from "./pages/privates/DeletarEmpreendimento";
import NovoEmpreendimento from "./pages/privates/NovoEmpreendimento";
import NovoUsuario from "./pages/privates/NovoUsuario";
import PainelUsuarios from "./pages/privates/PainelUsuarios";
import ModalLoading from "./componentes/ModalLoading";

//context
import { AuthProvider, AuthContext } from "./contexts/auth";
import { useContext } from "react";


const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if(loading) {
    return <ModalLoading loading={loading}/>
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* PAGES PUBLIC  */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empreendimentos" element={<Empreendimentos />} />
        <Route exact path="/empreendimentos/:id" element={<EmpreendimentosID />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/fale-conosco" element={<Contato />} />
        <Route exact path="/login" element={<Login />} />
        {/* PAGES PRIVATE  */}
        <Route
          exact
          path="/autenticado/empreendimentos"
          element={
            <Private>
              <PainelEmpreendimentos />
            </Private>
          }
        />
        <Route
          path="/autenticado/empreendimentos/novo"
          element={
            <Private>
              <NovoEmpreendimento />
            </Private>
          }
        />
        <Route
          path="/autenticado/empreendimentos/atualizar/:id"
          element={
            <Private>
              <AtualizarEmpreendimento />
            </Private>
          }
        />
        <Route
          path="/autenticado/empreendimentos/deletar/:id"
          element={
            <Private>
              <DeletarEmpreendimento />
            </Private>
          }
        />
        <Route
          path="/autenticado/usuarios"
          element={
            <Private>
              <PainelUsuarios />
            </Private>
          }
        />
        <Route
          path="/autenticado/usuarios/novo"
          element={
            <Private>
              <NovoUsuario />
            </Private>
          }
        />
        {/* Page not found */}
        <Route exact path="*" element={<PagNaoExiste />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
