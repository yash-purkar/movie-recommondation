import "./Styles.css";
import Data from "./Data";
import { useState } from "react";

export default function App() {
  const [type, setType] = useState("History");
  //

  function handleClick(typ) {
    setType(typ);
  }

  return (
    <div className="App">
      <h1>Good Movies</h1>
      <p>
        Here All of these my favourite movies you can watch to aquire some
        kowledge about given things.
      </p>

      {Object.keys(Data).map((typ) => {
        return <button onClick={() => handleClick(typ)}>{typ}</button>;
      })}

      {Data[type].map((val) => {
        return (
          <ul>
            <li>{val.heading}</li>
            <li>{val.rating}</li>
          </ul>
        );
      })}

      <h5 style={{ marginTop: "120px", color: "gray" }}>worikin on style</h5>
    </div>
  );
}


