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
		alchemy.id = Math.random() * 1000;
		//always use setState and dont alter original state straight away
		let newAlchemies = [...this.state.alchemies, alchemy];
		this.setState({
			alchemies: newAlchemies
		});
	}

	deleteAlchemy = (id) => {
		let newAlchemies = this.state.alchemies.filter(alchemy => {
			if(alchemy.id !== id) {
				//if return true, then current alchemy should stay in the new alchemies
				return true;
			} else {
				//if return false, then current alchemy should stay out of new alchemies
				return false;
			}
		});
		this.setState({alchemies: newAlchemies});
	}
  render() {
	  return (
        <div className="App">
    		<h1>My first React App</h1>
    		<p>Welcome Geeks!</p>
			<Alchemy deleteAlchemy={this.deleteAlchemy} alchemies = {this.state.alchemies} />
			<AddAlchemy addAlchemy = {this.addAlchemy}/>

		</div>
      );
  }
}

export default App;
