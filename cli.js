#!/usr/bin/env node
'use strict';
var meow = require('meow');
var generatorFusion = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ generator-fusion [input]',
		'',
		'Examples',
		'  $ generator-fusion',
		'  unicorns & rainbows',
		'',
		'  $ generator-fusion ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(generatorFusion(cli.input[0] || 'unicorns'));
