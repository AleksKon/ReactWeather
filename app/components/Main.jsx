var React = require('react');

var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// var Main = React.createClass({
// 	render: function (){
// 		return(
// 			<div>
// 				<Nav/>
// 				{this.props.children}		
// 			</div>
// 		);
// 	}
// });

var Main = (props) => {
	return(
			<div>
				<Nav/>
				{props.children}		
			</div>
		);
};



module.exports = Main;