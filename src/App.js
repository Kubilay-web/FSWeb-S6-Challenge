import { useEffect, useState } from "react";
import axios from "axios";
import Arama from "./components/Arama";
import Section from "./components/Section";

const App = () => {
  const [data, setData] = useState([]);
  const [arama, setArama] = useState("");
  const [icerik, setIcerik] = useState("");

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then((response) => setData(response.data));
  }, []);

  function handleClick(name) {
    setIcerik(name === icerik ? null : name);
  }

  const filteredData = data.filter((person) => {
    if (arama === "") {
      return person;
    } else if (person.name.toLowerCase().includes(arama.toLowerCase())) {
      return person;
    }
  });

  const sections = filteredData.map((person) => (
    <Section
      key={person.name}
      data={person}
      handleClick={handleClick}
      icerik={icerik}
      setIcerik={setIcerik}
    />
  ));

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <h1 className="Header">Star Wars Characters List</h1>
      <Arama setArama={setArama} arama={arama} />
      {sections}
    </div>
  );
}

export default App;
