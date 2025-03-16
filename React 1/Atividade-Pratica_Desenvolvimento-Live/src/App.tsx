import { useState } from "react";

function App() {
  const [name, setName] = useState("Gabriel");

  console.log(name);

  return (
    <>
      <h1>{name}</h1>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Mudar nome</button>
    </>
  );
}

export default App;
