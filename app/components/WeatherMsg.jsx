var React = require('react');

// var WeatherMsg = React.createClass({
	
// 	render: function(){
// 		var {temp, location} = this.props;

// 		return(
// 			<div>
// 				<p>It is {temp} degrees in {location} </p>
// 			</div>
			
// 		);
// 	}
// });

var WeatherMsg = ({temp, location}) => {
		return(
			<div>
				<p>It is {temp} degrees in {location} </p>
			</div>
			
		);
};

module.exports = WeatherMsg;