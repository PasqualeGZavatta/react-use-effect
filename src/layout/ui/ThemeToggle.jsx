/*
Esercizio 2 – Theme switcher (light/dark)

Creare un componente ThemeToggle con un pulsante che alterna tema chiaro e scuro.
Lo stato theme viene salvato in localStorage e recuperato al caricamento.
Un useEffect applica una classe al document per light e dark mode
Il testo del pulsante cambia in base al tema attivo.

Bonus: gestire la visibilità del componente con conditional rendering e aggiungere una cleanup function di useEffect() che ripristina il tema light quando il componente viene smontato. Verificare il comportamento. */

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isCurrentThemeLight, setIsCurrentThemeLight] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("light-theme"));
    if (saveData !== null) {
      return saveData;
    } else {
      return true;
    }
  });

  useEffect(() => {
    localStorage.setItem("light-theme", JSON.stringify(isCurrentThemeLight));

    if (isCurrentThemeLight) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [isCurrentThemeLight]);

  function handleChangeTheme() {
    setIsCurrentThemeLight((prevTheme) => !prevTheme);
    console.log("clicked");
  }

  return (
    <>
      <button
        className={`btn ${isCurrentThemeLight ? "btn-light" : "btn-dark"} border-black`}
        onClick={handleChangeTheme}>
        {isCurrentThemeLight ? <Moon /> : <Sun />}
      </button>
    </>
  );
}
