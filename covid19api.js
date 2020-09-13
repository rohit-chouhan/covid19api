// covid19api
//Author: Rohit Chouhan
//https://github.com/rohit-chouhan

var request = require('../request');

//---------- World ---------------------

exports.worldconfirmed = function(callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.confirmed.value);
        }
        else
            console.log(error);
    })
}

exports.worldrecovered = function(callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.recovered.value);
        }
        else
            console.log(error);
    })
}

exports.worlddeaths = function(callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.recovered.value);
        }
        else
            console.log(error);
    })
}

//---------- World  END ---------------------

exports.confirmed = function(country, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.confirmed.value);
        }
        else
            console.log(error);
    })
}

exports.recovered = function(country, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.recovered.value);
        }
        else
            console.log(error);
    })
}

exports.deaths = function(country, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
            callback(dt.recovered.value);
        }
        else
            console.log(error);
    })
}

exports.stateactive = function(country, state, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/confirmed',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
			var check_state = state;
			var filteredRes = dt.find(function(item, i){
			if(item.provinceState === check_state){
				 callback(item.active);
			}
			});
        }
        else
            console.log(error);
    })
}

exports.stateconfirmed = function(country, state, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/confirmed',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
			var check_state = state;
			var filteredRes = dt.find(function(item, i){
			if(item.provinceState === check_state){
				 callback(item.confirmed);
			}
			});
        }
        else
            console.log(error);
    })
}

exports.staterecovered = function(country, state, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/recovered',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
			var check_state = state;
			var filteredRes = dt.find(function(item, i){
			if(item.provinceState === check_state){
				 callback(item.recovered);
			}
			});
        }
        else
            console.log(error);
    })
}

exports.statedeaths = function(country, state, callback){
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url:'https://covid19.mathdro.id/api/countries/'+country+'/deaths',
        method: 'GET',
        headers: headers
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var dt=JSON.parse(body);
			var check_state = state;
			var filteredRes = dt.find(function(item, i){
			if(item.provinceState === check_state){
				 callback(item.deaths);
			}
			});
        }
        else
            console.log(error);
    })
}
