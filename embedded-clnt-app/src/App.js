import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import clnt from "socket.io-client"


function App() {
  const [currCmd,setCurrCmd] = useState('')
  const [commands,setCommands] = useState([])
  const [gsocket,setSocket] = useState()
  const [lunchpadRes,setLunchpadRes] = useState('')
  useEffect(() => {
    axios.get('/api/EmbeddedConfig').then((res) => {
      setCommands(res.data)
      
    })
   
  }, [])
  
  const sendMsg = async() => {
  
    gsocket.emit("cmd", currCmd)  
    gsocket.on("server", (res) => {
       setLunchpadRes(JSON.stringify(res))
        })
    }

  const connectToSocket = () => {
    
    const socket = clnt("https://socket-relay-service.webpubsub.azure.com", {path: "/clients/socketio/hubs/Hub"});
    setSocket(socket)
  }
  
  return (
    <div className="App">
         <h1>Commands to send to lunchpad using web socket protocal</h1>
         
         <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"><Select options={ commands } onChange={(e) =>setCurrCmd(e.label)} /></div>
            <div className="col-md-4"></div>
         </div>
      <label>Response from Lunchpad</label>
      <input type='text' value={lunchpadRes}  className='form-control'/>
      <div>
        <button className='btn btn-success m-4' onClick={connectToSocket}>Connect to socket server using Azure relay bus pub/sub</button> 
      </div>
      <div>
        <button className='btn btn-success m-4' onClick={sendMsg}>Send Message </button> 
      </div>
     
    </div>


    
  );
}

export default App;