var request = require('request');
var apiOptions = {
	server : "https://getmean-ideheer.c9users.io:8080"
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "https://usc.herokuapp.com";
}

/* GET 'home' page */
module.exports.login = function(req, res) {
	res.render('login-signup', {title: 'Login info'});
};

/* GET 'Location info' page */
module.exports.main = function(req, res) {
	res.render('main', {title: 'Main'});
};

/* GET Pet form page */
module.exports.pets = function(req, res) {
	res.render('pets', {title:'Pet Services'});
};

/* GET Rides form page */
module.exports.rides = function(req, res) {
	res.render('rides', {title:'Rideshare Services'});
};

/* GET Goods page */
module.exports.goods = function(req, res) {
	res.render('goods', {title:'Goods'});
};

var renderHomepage = function(req, res){
	res.render('provider-list', {
		title: 'Universal Student Collective - Neato!',
		sidebar: 'Find a student to help you out!',
		providers: [{
			name: 'Rick Sanchez',
			address: '3122 Madera Ave, Oakland, CA 94619',
			rating: '3',
			attributes: ['Certified', 'Small Dogs', 'Medium Dogs'],
			distance: '.2 mi'
		},{
			name: 'Gladys Bentley',
			address: '2312 Teviot St. Los Angeles, CA, 93009',
			rating: '5',
			attributes: ['Certified', 'Cats', 'Piano'],
			distance: '609'
		},{
			name: 'Samantha Bee',
			address: '30 Rockefeller Plaza, New York, NY 10112',
			rating: '4',
			attributes: ['Small to Large Dogs', 'Cats', 'Sarcasm'],
			distance: '2,907 mi'
		}]
	});
};
module.exports.homelist = function(req, res) {
	var requestOptions, path;
	path = '/api/providers';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {
			lng : -112.393386,
			lat : 48.671091,
			maxDistance : 20
		}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderHomepage(req, res);
		}
	);
};

/* GET provider list 
module.exports.providers = function(req, res) {
	res.render('provider-list', {
		title:'Service Providers',
		sidebar: 'Find a student to help you out!',
		providers: [{
			name: 'Rick Sanchez',
			address: '3122 Madera Ave, Oakland, CA 94619',
			rating: '3',
			attributes: ['Certified', 'Small Dogs', 'Medium Dogs'],
			distance: '.2 mi'
		},{
			name: 'Gladys Bentley',
			address: '2312 Teviot St. Los Angeles, CA, 93009',
			rating: '5',
			attributes: ['Certified', 'Cats', 'Piano'],
			distance: '609'
		},{
			name: 'Samantha Bee',
			address: '30 Rockefeller Plaza, New York, NY 10112',
			rating: '4',
			attributes: ['Small to Large Dogs', 'Cats', 'Sarcasm'],
			distance: '2,907 mi'
		}]
	});
};*/