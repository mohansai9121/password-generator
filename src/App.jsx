//import { Container,Navbar,Content,Footer, Header, FlexboxGrid,Panel,Form,Button,ButtonToolbar } from "rsuite"
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {IconButton} from 'rsuite';
import {toast} from 'react-hot-toast'
const App = () => {
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let smallLetters = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "0123456789"
  let symbols = "!@#$%^&*()-_+[]{}|?/><"
  let characters = ""
  //const [allCharacters, setAllCharacters] = useState("")
  const [capitals,setCapitals] = useState(false)
  const [smalls, setSmalls] = useState(false)
  const [nums, setNums] = useState(false)
  const [specialChars, setSpecialChars] = useState(false)
  const [length, setLength] = useState(6)
  const [newPassword, setNewPassword] = useState("")
  const [passwordsList, setPasswordsList] = useState([])
  const capitalHandler = ()=>{
    setCapitals(true)
  }
  const smallHandler = ()=>{
    setSmalls(true)
  }
  const numsHandler = ()=>{
    setNums(true)
  }
  const specialCharHandler = ()=>{
    setSpecialChars(true)
  }
  console.log(length)
  const passwordGeneration = ()=>{
    if(capitals){
      characters += capitalLetters
    }
    if(smalls){
      characters += smallLetters
    }
    if(nums){
      characters += numbers
    }
    if(specialChars){
      characters += symbols
    }
    console.log(characters)
    if(capitals || smalls || nums || specialChars){
      let password = ""
      for(let i=0; i<length; i++){
        let index = Math.floor(Math.random()*characters.length)
        password += characters[index]
      }
      setNewPassword(password)
      let p = [...passwordsList]
      p.push(password)
      setPasswordsList(p)
      localStorage.setItem("passwords",JSON.stringify(p))
      setCapitals(false)
      setSmalls(false)
      setNums(false)
      setSpecialChars(false)
    }
    else{
      toast.error("Please select atleast one of the check-boxes")
    }
  }
  const deleteHandler = (idx)=>{
    let pws = [...passwordsList]
    pws.splice(idx,1)
    setPasswordsList(pws)
    localStorage.setItem("passwords", JSON.stringify(pws))
  }
  const copy = async()=>{
    if(newPassword){
      await navigator.clipboard.writeText(newPassword)
      toast.success("Password copied Successfully!!")
    }
    else{
      toast.error("Err-No password to Copy!!")
    }
  }
  useEffect(()=>{
    let savedPasswords = JSON.parse(localStorage.getItem("passwords"))
    if(savedPasswords){
      setPasswordsList(savedPasswords)
    }
  },[])
  return (
    <div className="app">
      <h1 className="heading">Password Generator</h1><br></br><hr></hr>
      <div className="scrolling"><span className="text-shadow">Create strong passwords</span></div><hr></hr><br></br>
      <div className="card">
        <span style={{backgroundColor:'orange', borderRadius:'5px', padding:'5px', fontSize:'large'}}>Strong Password generator</span><br/><br></br>
        <input type="text" readOnly placeholder="Password appears here..." value={newPassword} style={{borderRadius:'5px'}}/>
        <IconButton appearance="ghost" icon={<FaCopy/>} title="Copy" onClick={copy}/>
        <div style={{margin:'10px'}}>
          <label htmlFor="number">Password length:</label>
          <input type="number" id="number" min={6} max={25} placeholder=">5" value={length} onChange={(e)=>setLength(e.target.value)}/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="capital">Include Capital Letters</label>
          <input type="checkbox" id="capital" checked={capitals} onChange={capitalHandler}/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="small">Include small Letters</label>
          <input type="checkbox" id="small" checked={smalls} onChange={smallHandler}/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" id="numbers" checked={nums} onChange={numsHandler}/>
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="symbols">Include Special symbols</label>
          <input type="checkbox" id="symbols" checked={specialChars} onChange={specialCharHandler}/>
        </div>
        <button className="submitButton" onClick={passwordGeneration}>Generate Password</button>
      </div><br></br>
      <h3>Generated Passwords are:</h3>
      <div>{passwordsList && passwordsList.map((password, index)=>{
        return(
          <div key={index} className="passwordListing">
            <p>{password}</p>
            <IconButton appearance="ghost" icon={<MdDelete/>} title="delete" style={{backgroundColor:'#F9441E', borderRadius:'5px'}} onClick={deleteHandler}>Delete</IconButton>
          </div>
        )
      })}</div>
    </div>
  )
}

export default App
