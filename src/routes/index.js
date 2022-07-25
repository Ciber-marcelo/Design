//lembra que vc ta usando a versão 6 do "react-router-dom" caso precisa epsquisar algo
// a parte do "BrowserRouter as Router" esta dizendo q o BrowserRouter vai ser chamado de Router, pelo oque entendi serve apenas para encurtar o codigo
import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom";

import Flex from "../screens/Flex";
import Instagram from "../screens/Instagram";
import ChangeScreen from "../components/ChangeScreen";

function Rotas() {
   return (
      <Router>
         <ChangeScreen/>
         <Routes>
            <Route path="/" element={<Flex />} />
            <Route path="/instagram" element={<Instagram />} />
         </Routes>
      </Router>
   );
}

export default Rotas;