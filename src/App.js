// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
//    Go to google and search react router dom and go to quick start website and then download in terminal by as "npm install ract-router-dom@5"  by this we download 5th version.
//   Given below is copied from same quick start website.

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// let name = "<b>Aarya</b>"
function App() {
  const [mode, setMode] = useState('light')  //  Wheather dark Mode is enable or not
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
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "danger")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // },1000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils';
      // },2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    // <>
    //  <h1>Hello</h1>                                       {/*This will give error so make it responsive we have to use closing tag and starting tag before use so we add this - <></> */}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Priyanshu
    //     </a>
    //   </header>
    // </div>
    // </>
    <>
      {/* <div className="blank" >Lovely</div>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <h1>Hello {name}</h1>
    <div className="container">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores officia voluptatibus aperiam!</p>
    </div> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            {/* We use exact here for get the exact link not similar link when not get the exact link. */}
            {/* /users  --> Component 1
            /users/home -->  -->  Component 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter ,Remove extra Spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;