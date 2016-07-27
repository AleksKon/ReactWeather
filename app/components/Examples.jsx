var React = require('react');


// var Examples = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<h3>Examples Component</h3>
				
// 			</div>
			
// 		);
// 	}
// });

var Examples = (props) => {
	return(
			<div>
				<h2>Examples Component</h2>
				<p>Welcome to the examples page</p>
			</div>
			
		);
};

module.exports = Examples;