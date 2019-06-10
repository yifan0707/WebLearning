import React, {Component} from 'react'

class AddAlchemy extends Component {
	state = {
		name: null,
		age:null,
		hair: null,
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addAlchemy(this.state);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange} />
					<label htmlFor="age">Age:</label>
					<input type="text" id="age" onChange={this.handleChange} />
					<label htmlFor="hair">Hair:</label>
					<input type="text" id="hair" onChange={this.handleChange} />
					<button type="submit">submit</button>
				</form>
			</div>
		)
	}
}

export default AddAlchemy
