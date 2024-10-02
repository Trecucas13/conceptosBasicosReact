export const Traducido = ({ nombre, idioma }) => {
  const traducir = () => {
    switch (idioma) {
      case "es":
        return `Hola, soy  ${nombre}!`;
      case "en":
        return `Hello, I'm  ${nombre}!`;
      case "fr":
        return `Bonjour, je m'appelle  ${nombre}!`;
      case "gr":
        return `γεια είμαι ${nombre}!`;
      default:
        return `Hola, soy ${nombre}!`;
    }
  };

  return <h1>{traducir()}</h1>;
};

