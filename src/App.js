import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Home} from "./components/Pages/Home";
import {Input} from "./components/Pages/Input";
import {Tree} from "./components/Pages/Tree";
import {LastTrees} from "./components/Pages/LastTrees";

function App() {

  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <div>
        <Routes>
          <Route path={"/"} element={ <Home /> }></Route>
          <Route path={"/enter-numbers"} element={ <Input /> }></Route>
          <Route path={"/process-numbers"} element={ <Tree inputId={1}/> }></Route>
          <Route path={"/previous-trees"} element={ <LastTrees /> }></Route>
        </Routes>
      </div>



    </BrowserRouter>
  );
}

export default App;
