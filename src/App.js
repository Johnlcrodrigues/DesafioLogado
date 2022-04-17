import "./App.css";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ListaDeUsuarios from "./ListaDeUsuarios";
import ComponenteLogin from "./ComponenteLogin";

function App() {
  return(
    <BrowserRouter>            
        <Routes>
            <Route path="*" element={<ComponenteLogin>Ola</ComponenteLogin>}> </Route>
            <Route path="/logado" element={ <ListaDeUsuarios></ListaDeUsuarios>}> </Route>
        </Routes>
    </BrowserRouter>
  );
}


export default App;

