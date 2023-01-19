import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState("light");

  const [toggleText, setToggleText] = useState('Enable');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
    });

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(23 20 20)'
      document.body.style.color = '#d9d9d9'
      document.body.style.transition = '0.15s all ease'
      setToggleText('Disable');
      showAlert("Dark mode has been Enableed","success")
    }
    else {
      setMode('light'); 
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
      setToggleText('Enable');
      showAlert("light mode has been Enableed","success")
    }
  }

  

  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} toggleText={toggleText} aboutUS="About Text Utils" />
      <Alert alert={alert} />
      <div className="container textFormContainer my-3">
        <TextForm heading="Enter Your Text Here to Analyze" showAlert={showAlert}/>

        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
