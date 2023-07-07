import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 200px;
  background-color: #fff;
  color: black;
  border-style: solid;
`;

const Arama = ({ arama, setArama }) => {
  const handleChange = (event) => {
    setArama(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Arama"
      onChange={handleChange}
      value={arama}
    />
  );
};

export default Arama;
