import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [text, setText] = useState("")
  const handleChange = (e) => {
    let rawText = e.target.value
    setText(rawText.split(" ").join("+"))
  }
  const calldata = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${text}&apikey=46c1e856`
    );
    setData(response.data)
  };

  return <div className="App">
    <input 
    placeholder="Enter the Movie you want to search for"
    onChange={handleChange}
    />
    <button
    onClick={calldata}
    >Search</button>
  </div>;
}

export default App;
