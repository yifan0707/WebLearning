import React from 'react';

/*
	This is a UI Component which we dont need to state so
	that we can focusing more on the UI
*/
//we pass props as a parameter in the arrow function
const Alchemy = ({ alchemies }) => {
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
