import React, { Component, useEffect, useState }from 'react';
import axios from 'axios';


import LoginForm from './components/LoginForm.js';
import Smartphone from './components/Smartphone.js';
import './App.css';

// class App extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         host : '',
//       }
//     }
  
//     componentDidMount() {
//       this._getHost();
//     }
  
//     _getHost = async() => {
//       const res = await axios.get('/api/host');
//       this.setState({ host : res.data.host })
//     }
  
//     render() {
//       return(
//         <div className='App'>
//           <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
//         </div>
//       )
//     }
//   }
  
function App(props){
    const [host,setHost] = useState({ host:''})
    console.log(host);

    useEffect(() => {
        _getHost();
    },[])

    const _getHost = async() => {
        const res = await axios.get('/api/host');
        setHost({host:res.data.host});
        console.log()
    }
    return (
        <>
        <div className="container">
            <div id='smartphone'>
                <Smartphone/>
            </div>
            <div id='loginform'>
                <LoginForm />
            </div>
        </div>
        </>
    );
}

export default App;