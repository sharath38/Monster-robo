import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search/Search'


class App extends Component{
  constructor(){
    super()
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(users => this.setState({monster: users}));
  }

render(){
  const {monster , searchField} = this.state

   const fileredMonster = monster.filter((monster) =>(
     monster.name.toLowerCase().includes(searchField.toLowerCase())
   ))  
  return(
     <div className ='App'>
     <h1>Monster Roller</h1>
      <SearchBox 
      placeholder = " search monster"
      handleChange = { e => (
        this.setState({searchField: e.target.value})
        )}
      />
     
       <CardList monsters = {fileredMonster} />
          
     </div>
   )
}
}

export default App;
