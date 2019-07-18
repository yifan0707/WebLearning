import React from 'react';

/*
	This is a UI Component which we dont need a state so
	that we can focusing more on the UI
*/
//we pass props as a parameter in the arrow function
const Alchemy = ({ alchemies, deleteAlchemy }) => {
	//deconstructing!
	//const { name, age, hair } = this.props;
	//const { alchemies } = props;
	const alchemyList = alchemies.map(alchemy => {
		if(alchemy.age > 18) {
			return (
				<div className="alchemy" key={alchemy.id}>
					<div>Name: { alchemy.name }</div>
					<div>Age: { alchemy.age }</div>
					<div>Hair: { alchemy.hair }</div>
					{/*
						we change deleteAlchemy(alchemy.id) to
						() => {deleteAlchemy(alchemy.id)}

						since we don't want the function to be executed automatically
						but only when we click the delete button
					*/}
					<button onClick = {() => {deleteAlchemy(alchemy.id)}}>Delete ninja</button>
					<br/>
				</div>
			)
		} else {
			return null;
		}
	});
	return(
		<div className="alchemy-list">
			{ alchemyList }
		</div>
	);
}


export default Alchemy;
