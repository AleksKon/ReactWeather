var React = require('react');
var{Link} = require('react-router');

var Examples = (props) => {
	return(
			<div className="row">
				<h1 className="text-center">Examples</h1>
				<p>Welcome to the examples page. Here are a few examples to try out:</p>
				<ol>
					<li>
						<Link to="/?location=New York">New York, NY</Link>
					</li>
					<li>
						<Link to="/?location=Austin">Austin, TX</Link>
					</li>
					<li>
						<Link to="/?location=San Diego">San Diego, CA</Link>
					</li>
				</ol>
			</div>
			
		);
};

module.exports = Examples;