import React from 'react';
import './App.css';
import {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
  
    this.state= {
      monsters:[],
      searchField:''
  };

}

//arrow function binds automatically the this keyword to the 
//CONTEXT that the function is defined
handleChange = e => {
  this.setState({searchField: e.target.value});
}

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
    }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1 className="title"> Monsters Rolodex </h1>
     <SearchBox 
      placeholder="search monster"
      handleChange= {this.handleChange}
      /> 

      <CardList monsters={filteredMonsters}/>

    </div>
    );
}

}


export default App;
