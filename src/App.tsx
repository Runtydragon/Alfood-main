import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormularioRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';
import Home from './paginas/Home';
import PaginaBaseAdmin from './paginas/PaginaBaseAdmin';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin element=" element={<PaginaBaseAdmin/>}>

          <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes />} />
          <Route path="/admin/restaurantes/novo" element={<FormularioRestaurante />} />
          <Route path="/admin/restaurantes/:id" element={<FormularioRestaurante />} />

      </Route>
    </Routes>
  );
}

export default App;
