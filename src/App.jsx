//import { Container,Navbar,Content,Footer, Header, FlexboxGrid,Panel,Form,Button,ButtonToolbar } from "rsuite"
import { FaCopy } from "react-icons/fa";
import {IconButton} from 'rsuite';
const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Password Generator</h1><br></br><hr></hr>
      <div className="scrolling"><span className="text-shadow">Create strong passwords</span></div><hr></hr><br></br>
      <div className="card">
        <span style={{backgroundColor:'orange', borderRadius:'5px', padding:'5px', fontSize:'large'}}>Strong Password generator</span><br/><br></br>
        <input type="text" readOnly placeholder="Min. 6 characters" style={{borderRadius:'5px'}}/>
        <IconButton appearance="ghost" icon={<FaCopy/>} title="Copy"/>
        <div style={{margin:'10px'}}>
          <label htmlFor="number">Password length:</label>
          <input type="number" id="number" min={6} placeholder=">5"/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="capital">Include Capital Letters</label>
          <input type="checkbox" id="capital"/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="small">Include small Letters</label>
          <input type="checkbox" id="small"/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" id="numbers"/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="symbols">Include Special symbols</label>
          <input type="checkbox" id="symbols"/>
        </div>
        <button className="submitButton">Generate Password</button>
      </div><br></br>
    </div>
  )
}

export default App
