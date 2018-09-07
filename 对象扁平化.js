/**
 * 对象扁平化
 * 输入：input对象
 * 返回：
    // {
    //   "a": 1,
    //   "b[0]": 1,
    //   "b[1]": 2,
    //   "b[2].c": true,
    //   "b[3][0]": 3,
    //   "d.e": 2,
    //   "d.f": 3,
    //   "g": null,  
    // };
 */
const input = {
  a: 1,
  b: [ 1, 2, { c: true }, [ 3 ] ],
  d: { e: 2, f: 3 },
  g: null, 
}

function flatten(input) {
  var result = {}
  function recurse(val, prop) {
    if (!(val instanceof Object)) {
      result[prop] = val;
    } else if (Array.isArray(val)) {
      for (var i = 0; i<val.length; i++) {
        recurse(val[i], prop + "[" + i + "]");
      }      
      if (val.length === 0) {
        result[prop] = [];
      }
    } else {
      let isEmpty = true;
      for (let key in val) {
        isEmpty = false;
        recurse(val[key], prop ? prop + "." + key : key);
      }
      if (isEmpty && prop) {
        result[prop] = {};
      }      
    }
  }
  recurse(input, "");
  return result;
}

flatten(input);

