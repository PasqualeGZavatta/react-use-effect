import { useEffect, useState } from "react";
import { Ban } from "lucide-react";

/*Esercizio 1 – Blocco note persistente

Creare un componente NotePad con una <textarea>.
Il testo digitato viene salvato in localStorage a ogni modifica.
Al ricaricamento della pagina il testo viene recuperato da localStorage.
Sotto la textarea viene mostrato il numero di caratteri.
Il titolo della tab del browser mostra X caratteri.

Bonus: un pulsante "Svuota" che cancella testo e chiave dal localStorage.
 */
export default function BloccoNote() {
  const [text, setText] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("text-note"));
    if (saveData !== null) {
      return saveData;
    } else {
      return "";
    }
  });

  function handleReset() {
    setText("");
    localStorage.removeItem("text-note");
  }

  useEffect(() => {
    console.log("sto scrivendo");
    localStorage.setItem("text-note", JSON.stringify(text));
    document.title = `${text.trim().length} caratteri`;
  }, [text]);

  return (
    <>
      <div className="container mb-3  ">
        <div className="">
          <div className="d-flex ">
            <label
              htmlFor="nota"
              className="fw-bold mb-3 fs-5">
              {" "}
              Blocco Note
            </label>
            <textarea
              value={text}
              className="form-control w-75"
              name="nota"
              rows="3"
              onChange={(e) => setText(e.target.value)}></textarea>
            <p className="text-end w-75">Text lenght: {text.trim().length}</p>
          </div>

          <button
            className="btn btn-secondary"
            onClick={handleReset}>
            {" "}
            <Ban />
          </button>
        </div>
      </div>
    </>
  );
}
