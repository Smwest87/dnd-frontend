import React from 'react';
import ReactDOM from 'react-dom';


class Character extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        Character: {
          Id: null,
        Name: null,
        Class: null,
        Level: null,
        HitPointMaximum: null,
        Strength: null,
        Dexterity: null,
        Constitution: null,
        Wisdom: null,
        Intelligence: null,
        Charisma: null,
        Initiative: null
        }
      }
    }
    componentDidMount() {
      // Simple GET request using fetch
      fetch('http://localhost:10000/character/41')
          .then(response => { const res = response.json();
          console.log(res);
          return res }).then(data => this.setState({ Character: {
            Id: data.Id,
            Name: data.Name,
            Class: data.Class,
            Level: data.Level,
            HitPointMaximum: data.HistPointMaximum,
            Strength: data.Strength,
            Dexterity: data.Dexterity,
            Constitution: data.Constitution,
            Wisdom: data.Wisdom,
            Intelligence: data.Intelligence,
            Charisma: data.Charisma,
            Initiative: data.Initiative
          } }));
  }
    render() {
      return (
        <div>
        <h1>Character</h1>
          <div>Id: {this.state.Character.Id}</div>
          <div>Name: {this.state.Character.Name}</div>
          <div>Class: {this.state.Character.Class}</div>
          <div>Level: {this.state.Character.Level}</div>
          <div>Hit Point Maximum: {this.state.Character.HitPointMaximum}</div>
          <div>Strength: {this.state.Character.Strength}</div>
          <div>Dexterity: {this.state.Character.Dexterity}</div>
          <div>Constitution: {this.state.Character.Constitution}</div>
          <div>Wisdom: {this.state.Character.Wisdom}</div>
          <div>Intelligence: {this.state.Character.Intelligence}</div>
          <div>Charisma: {this.state.Character.Charisma}</div>
          <div>Initiative: {this.state.Character.Initiative}</div>
          </div>
      );
    }
  }
  
  
  
  
  ReactDOM.render(
    <Character/>,
    document.getElementById('root')
  );
  
  
  