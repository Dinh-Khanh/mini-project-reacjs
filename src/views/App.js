import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <p> APP OF DINH KHANH </p>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
