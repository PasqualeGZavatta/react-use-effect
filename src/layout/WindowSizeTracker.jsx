/* Esercizio 3 – Window size tracker

Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.
Stato inizializzato con window.innerWidth e window.innerHeight.
useEffect che registra un listener sull'evento resize.
Mostrare anche un badge con il breakpoint corrente: mobile (< 768px), tablet (< 992px), desktop.
Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima.*/

import { useEffect } from "react";
import { useState } from "react";
import { Phone, Tablet, Monitor } from "lucide-react";

export default function WindowSizeTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  function handleResize() {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }

  let icon;
  if (windowWidth < 768) {
    icon = <Phone />;
  } else if (windowWidth < 992) {
    icon = <Tablet />;
  } else {
    icon = <Monitor />;
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container mb-2">
        {" "}
        <p className="text-center">{`Altezza: ${windowHeight} Larghezza: ${windowWidth}`}</p>
        <p className="text-center "> {icon}</p>
      </div>
    </>
  );
}
