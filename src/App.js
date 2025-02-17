import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [jmeno, setJmeno] = useState("");
  const [velikost, setVelikost] = useState("malá");
  const [kod, setKod] = useState("kod1");
  const [barva, setBarva] = useState("");
  const [barva2, setBarva2] = useState("grey");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [pocetMalychRybek, setPocetMalychRybek] = useState(0);
  const [pocetVelkychRybek, setPocetVelkychRybek] = useState(0);
  const [m_rybky, setM_rybky] = useState(0);
  const [v_rybky, setV_rybky] = useState(0);
  const [objem, setObjem] = useState(0);

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

  useEffect(() => {
    const pocetVelkychRybek = rybicky.filter(
      (rybka) => rybka.velikost === "velká"
    ).length;
    setV_rybky(pocetVelkychRybek);
  }, [rybicky]); // useEffect závisí na změně seznamu rybiček

  useEffect(() => {
    setObjem(a * b * c);
  }, [a, b, c]);

  const tlacitko = m_rybky * 10 + v_rybky * 20 > objem * 0.001;

  return (
    <div className="App text-center container-sm">
      <button
        type="button"
        className="btn btn-primary m-5"
        onClick={() => {
          setKod("kod1");
          setBarva("");
          setBarva2("grey");
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
          setBarva("grey");
          setBarva2("");
        }}
        style={{ backgroundColor: barva }}
      >
        Kalkulačka
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
          </div>
        </div>
      )}
      {kod === "kod2" && (
        <div>
          <h2>Zadej rozměry akvária</h2>
          <input
            type="number"
            className="form-control"
            placeholder="Délka v cm"
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="šírka v cm"
            onChange={(e) => setB(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="výška v cm"
            onChange={(e) => setC(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: tlacitko ? "red" : "green" }}
            disabled={tlacitko}
          >
            Schválit
          </button>
          <p>Objem akvária je {objem / 1000} v l</p>
        </div>
      )}
    </div>
  );
}

export default App;
