import React, { Component } from 'react';
import './App.css';
import Alchemy from './Alchemy';
import AddAlchemy from './AddAlchemy'

class App extends Component {
	state = {
		alchemies : [
			{ name: "Von Hohenheim", age: 1000, hair: "golden" , id: 1},
			{ name: "Edward Elric", age: 18, hair: "golden" , id: 2},
			{ name: "Alphonse Elric", age: 18, hair: "golden", id: 3}
		]
	}
	addAlchemy = (alchemy) => {
		alchemy.id = Math.random();
		//always use setState and dont alter original state straight away
		let newAlchemies = [...this.state.alchemies, alchemy];
		this.setState({
			alchemies: newAlchemies
		});
	}
  render() {
	  return (
        <div className="App">
    		<h1>My first React App</h1>
    		<p>Welcome Geeks!</p>
			<Alchemy alchemies = {this.state.alchemies} />
			<AddAlchemy addAlchemy = {this.addAlchemy}/>

		</div>
      );
  }
}

export default App;
