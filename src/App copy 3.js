import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [jmeno, setJmeno] = useState("");
  const [velikost, setVelikost] = useState("malá");
  const [kod, setKod] = useState("kod1");
  const [barva, setBarva] = useState("");
  const [barva2, setBarva2] = useState("red");
  const [rybicky, setRybicky] = useState([
    {
      id: 1,
      jmeno: "Nemo",
      velikost: "malá",
    },
    {
      id: 2,
      jmeno: "Dory",
      velikost: "střední",
    },
    {
      id: 3,
      jmeno: "Marlin",
      velikost: "velká",
    },
  ]);
  return (
    <div className="App text-center">
      <button
        type="button"
        className="btn btn-primary m-5"
        onClick={() => {
          setKod("kod1");
          setBarva("");
          setBarva2("red");
        }}
        style={{ backgroundColor: barva2 }}
      >
        Databáze
      </button>
      <button
        type="button"
        className="btn btn-primary m-5"
        onClick={() => {
          setKod("kod2");
          setBarva("red");
          setBarva2("");
        }}
        style={{ backgroundColor: barva }}
      >
        Skladové hos.
      </button>
      {kod === "kod1" && (
        <div>
          <div>
            <h2>Seznam rybiček</h2>
            {rybicky.map((rybka) => (
              <div key={rybka.id}>
                {rybka.id} / {rybka.jmeno} / ({rybka.velikost})
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setRybicky(rybicky.filter((o) => o.id !== rybka.id));
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Jméno"
              id="name"
              onChange={(e) => setJmeno(e.target.value)}
              value={jmeno}
            />
            {/* <input
          type="text"
          className="form-control"
          placeholder="Velikost"
          id="name"
          onChange={(e) => setVelikost(e.target.value)}
          value={velikost}
        /> */}

            <select
              className="form-select"
              //aria-label="Default select example"
              defaultValue="malá"
              onChange={(e) => setVelikost(e.target.value)}
            >
              <option value="malá">malá</option>
              <option value="velká">velká</option>
            </select>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (jmeno === "" || velikost === "") {
                  alert("Vyplň všechny údaje");
                  return;
                }
                setRybicky([
                  ...rybicky,
                  {
                    id:
                      rybicky.length > 0
                        ? Math.max(...rybicky.map((r) => r.id)) + 1
                        : 1,
                    jmeno: jmeno,
                    velikost: velikost,
                  },
                ]);
                setJmeno("");
                setVelikost("");
              }}
            >
              Odešli
            </button>
          </div>
        </div>
      )}
      {kod === "kod2" && <div></div>}
    </div>
  );
}

export default App;
