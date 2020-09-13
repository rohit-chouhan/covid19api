# covid19api
Open Source node.js Framework for live covid19 cases by worldwide, county &amp; states

All the functions in this framework are created in pure node.js, and the API running in its backend is used by [@mathdroid/covid-19-api](https://github.com/mathdroid/covid-19-api), whatever coronavirus cases are used in this framework are returned by the rest API. Are there. Data in the framework is accessed via the [@mathdroid/covid-19-api](https://github.com/mathdroid/covid-19-api) API.

 __Note__: _You have to install and import [request package ](https://www.npmjs.com/package/request) also in your project_.

### Install (try any one)
```sh
$ npm i covid19api
```
```sh
$ npm i covid19
```

#### 🌎 By Worldwide Cases
Method | Use | parameters
---|---|---
worldconfirmed() | returns worldwide confirmed cases | no
worldrecovered() | returns worldwide recovered cases | no
worlddeaths() | returns worldwide deaths cases | no

Example:-
```nodejs
const covid19 = require('covid19api');
covid19.worldconfirmed(function(result){
	console.log("Worldwide Confirmed Cases: "+ result);
});
```
#### 🌎 By Countries Cases
Read this wikipedia page to get all countries ISO Code 👉 [CLICK ME](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

Method | Use | parameters
---|---|---
confirmed() | returns country's confirmed cases | `country ISO Code`
recovered() | returns country's recovered cases | `country ISO Code`
deaths() | returns country's deaths cases | `country ISO Code`

Example:-
```nodejs
const covid19 = require('covid19api');
//INDIA ISO CODE (IN)
covid19.confirmed('IN',function(result){
	console.log("India's Confirmed Cases: "+ result);
});
```
#### 🌎 By Country's State Cases

Method | Use | parameters
---|---|---
stateconfirmed() | returns country's state confirmed cases | `country ISO Code`, `State name`
staterecovered() | returns country's state recovered cases | `country ISO Code`, `State name`
statedeaths() | returns country's state deaths cases | `country ISO Code`, `State name`
stateactive() | returns country's state active cases | `country ISO Code`, `State name`

Example:-
```nodejs
const covid19 = require('covid19api');
//INDIA ISO CODE (IN), State Name
covid19.stateconfirmed('IN','Rajasthan',function(result){
	console.log("Rajasthan, India's Confirmed Cases: "+ result);
});
```

#### 🌎 By Country's State City Cases
_Right now our team is working on it, but we will publish this feature soon._.

### Developers
![Rohit](http://graph.facebook.com/100004453384015/picture?type=square)\
Developed by [Rohit Chouhan](https://rohitchouhan.com),  MIT License, Contact me for any implementation or inquiry.

[![GithHub](https://img.shields.io/badge/Developed%20By-%40github%2Frohit--chouhan-green)](https://github.com/rohit-chouhan)
[![Facebook](https://img.shields.io/badge/Facebook-%40itsrohitofficialprofile-blue)](https://facebook.com/itsrohitofficialprofile)
[![Twitter](https://img.shields.io/badge/Twitter-%40itsrealrohit-blue)](https://twitter.com/itsrealrohit)
[![Instagram](https://img.shields.io/badge/Instagram-%40rohitchauhanofficial-orange)](https://instagram.com/rohitchauhanofficial)
[![Website](https://img.shields.io/badge/Website-rohitchouhan.com-yellow)](https://rohitchouhan.com)
