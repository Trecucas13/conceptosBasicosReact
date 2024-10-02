import { useState } from "react";

export const Contador = () => {
  const [contador, setContar] = useState(0);

  const mas = () => {
    setContar(contador + 1);
  };

  const menos = () => {
    setContar(contador - 1);
  };

  return (
    <div className="container">
      <div className="counterContain">
        <button onClick={menos}>-</button>
        <h1 className="counter">Contador: {contador}</h1>
        <button onClick={mas}>+</button>
      </div>
    </div>
  );
};