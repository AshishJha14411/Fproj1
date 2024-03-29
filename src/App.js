import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const handleChange = (e) => {
    let rawText = e.target.value;
    setText(rawText.split(" ").join("+"));
  };
  const calldata = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${text}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    setData(response.data);
  };

  return (
    <div className="App">
      <h1 className="header">Movie Search App</h1>
      <input
        placeholder="Enter the Movie you want to search for"
        onChange={handleChange}
      />
      <button onClick={calldata}>Search</button>
      <Card movieData={data} />
    </div>
  );
}

export default App;
