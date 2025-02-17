import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [jmeno, setJmeno] = useState("");
  const [velikost, setVelikost] = useState("malá");
  const [kod, setKod] = useState("kod1");
  const [barva, setBarva] = useState("");
  const [barva2, setBarva2] = useState("red");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [pocetMalychRybek, setPocetMalychRybek] = useState(0);
  const [m_rybky, setM_rybky] = useState(0);

  const [rybicky, setRybicky] = useState([
    {
      id: 1,
      jmeno: "Nemo",
      velikost: "malá",
    },
    {
      id: 2,
      jmeno: "Dory",
      velikost: "malá",
    },
    {
      id: 3,
      jmeno: "Marlin",
      velikost: "velká",
    },
  ]);
  useEffect(() => {
    // Přepočítáme počet malých rybiček při každé změně seznamu rybiček
    const pocetMalychRybek = rybicky.filter(
      (rybka) => rybka.velikost === "malá"
    ).length;
    setM_rybky(pocetMalychRybek);
  }, [rybicky]); // useEffect závisí na změně seznamu rybiček
  return (
    <div className="App text-center container-sm">
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
              onChange={(e) => setVelikost(e.target.value)}
              value={velikost}
            >
              <option value="malá">malá</option>
              <option value="velká">velká</option>
            </select>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (jmeno === "") {
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

                setM_rybky(rybicky.filter((o) => o.velikost === "malá").length);
              }}
            >
              Odešli
            </button>
            <p>{m_rybky}</p>
          </div>
        </div>
      )}
      {kod === "kod2" && (
        <div>
          <h2>Zadej rozměry akvária</h2>
          <input
            type="number"
            className="form-control"
            placeholder="Délka"
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="šírka"
            onChange={(e) => setB(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="výška"
            onChange={(e) => setC(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (a * b * c || velikost === "") {
              }
            }}
          >
            Schválit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
