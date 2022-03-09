import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enable', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enable', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
        <Route path="/about">
          <About mode={mode}/>
        </Route>
        <Route path="/">
          <TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter ' mode={mode} />
        </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;