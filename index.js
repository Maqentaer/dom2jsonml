/*
 index.js
 Convert DOM to JSONML

 Created: 2014-02-06

 Copyright (c)2014 Roman Glebsky <maqentaer@gmail.com>
 Distributed under The MIT License: http://github.com/Maqentaer/dom2jsonml/raw/master/LICENSE
 */

var JsonML = require('./lib/jsonml-dom.js');

/**
 * @param {Node} elem
 * @param {function} filter (optional)
 * @param {function} callback (optional)
 * @return {array} JsonML
 */
module.exports = function(elem, filter, callback)
{
	if(2 === arguments.length)
	{
		callback = filter;
		filter = null;
	}
	var jsonMl = JsonML.fromHTML(elem, filter);
	if(callback)
	{
		if(null === jsonMl)
			callback(new Error("Invalid JSONML"));
		else
			callback(null, jsonMl)
	}
	return jsonMl;
}