import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [jmeno, setJmeno] = useState("");
  const [druh, setDruh] = useState("");
  const [velikost, setVelikost] = useState("");
  const [rybicky, setRybicky] = useState([
    {
      id: 1,
      jmeno: "Nemo",
      druh: "Neonka",
      velikost: "malá",
    },
    {
      id: 2,
      jmeno: "Dory",
      druh: "Pleco",
      velikost: "střední",
    },
    {
      id: 3,
      jmeno: "Marlin",
      druh: "Gupka",
      velikost: "velká",
    },
  ]);
  return (
    <div className="App text-center">
      <div>
        <h2>Seznam rybiček</h2>
        {rybicky.map((rybka) => (
          <div key={rybka.id}>
            {rybka.jmeno} / {rybka.druh} / ({rybka.velikost})
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setRybicky(rybicky.filter((o) => o.id !== rybka.id));
              }}
            >
              X
            </button>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Jméno"
                id="name"
                onChange={(e) => setJmeno(e.target.value)}
                value={jmeno}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
