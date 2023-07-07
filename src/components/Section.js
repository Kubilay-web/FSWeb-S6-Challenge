import React from "react";
import styled from "styled-components";

const Aciklama = styled.div`
  display: ${(props) => (props.icerik !== props.dataName ? "none" : "block")};
`;

const SectionContainer = styled.div`
  max-width:500px;
  margin:10px auto 10px auto;
  background-color: brown;
  color: white;
  padding: 10px 0 10px 0px;
`;

const Section = ({ data, handleClick, icerik }) => {
  const handleButtonClick = () => {
    handleClick(data.name);
  };

  return (
    <SectionContainer>
      <h3>{data.name}</h3>
      <button onClick={handleButtonClick}>
        {icerik !== data.name ? "↓" : "↑"}
      </button>
      <Aciklama icerik={icerik} dataName={data.name}>
        <p>Gender: {data.gender}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>BirthYear: {data.birth_year}</p>
        <p>Eye Color: {data.eye_color}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Skin Color: {data.skin_color}</p>
        <p>Appears in {data.films.length} films</p>
      </Aciklama>
    </SectionContainer>
  );
};

export default Section;
