import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


const Character = () => {

    const [character,setCharacter] = React.useState({})

    const fetchCharacter = async  () => {
      const response = await fetch('http://localhost:10000/character/41')
          const data = await response.json()
          console.log(data)
          setCharacter({
            id: data.id,
            name: data.name,
            class: data.class,
            level: data.level,
            hitPointMaximum: data.histPointMaximum,
            strength: data.strength,
            dexterity: data.dexterity,
            constitution: data.constitution,
            wisdom: data.wisdom,
            intelligence: data.intelligence,
            charisma: data.charisma,
            initiative: data.initiative
          })
    }
    
    useEffect(()=> {fetchCharacter()}, [])

      return (
        <div>
        <h1>Character</h1>
          <div>Id: {character.id}</div>
          <div>Name: {character.name}</div>
          <div>Class: {character.class}</div>
          <div>Level: {character.level}</div>
          <div>Hit Point Maximum: {character.hitPointMaximum}</div>
          <div>Strength: {character.strength}</div>
          <div>Dexterity: {character.dexterity}</div>
          <div>Constitution: {character.constitution}</div>
          <div>Wisdom: {character.wisdom}</div>
          <div>Intelligence: {character.intelligence}</div>
          <div>Charisma: {character.charisma}</div>
          <div>Initiative: {character.initiative}</div>
          </div>
      );
  }
  
  
  
  
  ReactDOM.render(
    <Character/>,
    document.getElementById('root')
  );
  
  
  