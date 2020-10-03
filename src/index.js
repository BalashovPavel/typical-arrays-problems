
exports.min = function min (array) {
  let result = 0;
  if (array !== undefined) {
  	if (array.length !== 0) {
  		array.forEach(i => {
  			result = (i < result) ? i : result;
  		})
  	}
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (array !== undefined) {
  	if (array.length !== 0) {
  		array.forEach(i => {
  			result = (i > result) ? i : result;
  		})
  	}
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (array !== undefined){
  	if (array.length !== 0){
  		array.forEach(i => {
  			result += i;
  		})
  		result /= array.length;
  	}
  }
  return result;
}
