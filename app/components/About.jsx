var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return(
			<div className="row">
				<h1 className='text-center'>About</h1>
				<p>This is a weather application built on React. I have bulit this for the Complete React Web App Developer Course.
				</p>
				<p>Here are some of the tools I used:</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react/">React</a> - a JavaScript framework
					</li>
					<li>
						<a href="http://openweathermap.org/">Open Weather Maps</a> - API used for weather search by city
					</li>
				</ul>
			</div>
	);
};


module.exports = About;