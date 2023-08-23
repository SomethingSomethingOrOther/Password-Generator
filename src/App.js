import './App.css';
import {useState} from "react"



function App() {
  const [passwordLength,setPasswordLength] =useState(6)
  const [includesNumber,setIncludesNumber] =useState(false)
  const [includesLowerCase,setIncludesLowerCase] =useState(false)
  const [includesUpperCase,setIncludesUpperCase] =useState(false)
  const [includesSymbols,setIncludesSymbols] =useState(false)
  const [generatedPassword,setGeneratedPassword] =useState("szget")



const handleIncludesChar=(e)=>{
  const value=e.target.value
     if (e.target.name === "includesNumber"){
          setIncludesNumber(value)
     }else if (e.target.name === "includesUpperCase"){
      setIncludesUpperCase(value)
      }else if (e.target.name === "includesLowerCase"){
      setIncludesLowerCase(value)
     } else if (e.target.name === "includesSymbols"){
      setIncludesSymbols(value)
 } 
} 

const generateRandomCharacter = (characters) => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

   const handleGenerator = () => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*";
  const numbers = "0123456789";
  let newPassword = "";

  const availableCharacters = (
    (includesLowerCase ? lowerCase : "") +
    (includesUpperCase ? upperCase : "") +
    (includesSymbols ? symbols : "") +
    (includesNumber ? numbers : "")
  );

  if (availableCharacters.length === 0) {
    setGeneratedPassword("No character types selected");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = generateRandomCharacter(availableCharacters);
    newPassword += randomCharacter;
  }

  setGeneratedPassword(newPassword);
};




  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Password Generator
        </h1>
      </header>
      
      <div>
        <p>password length:{passwordLength} {" "} <input 
        value={passwordLength}
        type="range" max="15" onChange={(e)=>setPasswordLength(e.target.value)}/></p>
        <p>Include Lowercase character: <input value={includesLowerCase}onChange={handleIncludesChar}name="includesLowerCase"  type="checkbox" /></p>
        <p>Include Uppercase character: <input value={includesUpperCase}onChange={handleIncludesChar}name="includesUpperCase" type="checkbox" /></p>
        <p>Include Number:              <input value={includesNumber}onChange={handleIncludesChar}name="includesNumber" type="checkbox" /></p>
        <p>Include Symbols:             <input value={includesSymbols}onChange={handleIncludesChar}name="includesSymbols" type="checkbox" /></p>
        <p><label>
          Your generator password:
          <input
              value={generatedPassword}
              onChange={(e)=>setGeneratedPassword(e.target.value)}
             type="text"
             readOnly
      />
        </label>
        <button onClick={handleGenerator}>Generate</button>
        </p>
        <div>
        
        </div>
      </div>
      <div >
       <p></p>
      </div>
    </div>

  );
}

export default App;
