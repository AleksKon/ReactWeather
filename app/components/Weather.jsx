var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
	getInitialState: function() {
	    // default state
	    return {
	          isLoading: false
	    };
	},
	handleSearch: function(location){
		var that = this;

		
		this.setState({isLoading:true});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		},function(errorMessage){
			that.setState({
				isLoading:false,
				location:'',
				temp:''
				
			});
			alert(errorMessage);
		});
	},
	render: function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching Weather... </h3>;
			}else if(temp && location){
				return <WeatherMsg temp={temp} location = {location} />;
			}
		}

		return(
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch = {this.handleSearch}/>
				{renderMessage()}
			</div>			
		);
	}
});

module.exports = Weather;