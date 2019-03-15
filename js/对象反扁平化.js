function unflatten(obj) {
	if (Object(obj) !== obj || Array.isArray(obj)) {
		return obj;
	}
	var result = {};
	var r = /\.?([^\.\[\]]+)|\[(\d+)\]/g;    
	for (var prop in obj) {
		var matchs;
		var cur = result;
		var p = "";
		while(matchs = r.exec(prop)) {
			cur = cur[p] || (cur[p] = matchs[2] ? []: {});
			p = matchs[2] || matchs[1];
		}
		cur[p] = obj[prop];
	}
	return result[""] || result;
}

let obj = {
    "a": 1,
    "b[0]": 1,
    "b[1]": 2,
    "b[2].c": true,
    "b[3][0]": 3,
    "d.e": 2,
    "d.f": 3,
    "g": null,  
}

console.log(unflatten(obj))
