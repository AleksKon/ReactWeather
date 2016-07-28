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
				<h3 className="text-center">It is {temp} degrees in {location} </h3>
			</div>
			
		);
};

module.exports = WeatherMsg;