// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var newObj = "";
  function typeCheck(thing){
  	if( typeof thing === "boolean"){
  		  return thing.toString();
  	} else if(typeof thing === 'string'){
  		  return '"' + thing + '"';
  	} else if(typeof thing === 'number'){
  		  return thing.toString();
  	} else if(Array.isArray(thing)){
      if(thing[0]){
        return stringifyJSON(thing);
      } else {
  		  return '[' + thing.toString() + ']';
      }
  	} else if(typeof thing === 'object' && thing !== null){
  		  return thing.toString(); //COME BACK TO 
    } else if(thing === null & Array.isArray(thing)){
        return '[]';
    } else if(thing === null){
        return 'null';
    };
  };
    
  if(Array.isArray(obj)){
      for(var i = 0, j = obj.length; i < j; i++){
          newObj = newObj + typeCheck(obj[i]) + (i < j - 1 ? ",": "") ;
      }
     
      newObj = '[' + newObj + ']';
      
  } else if(typeof obj === 'object' && obj !== null){
        for(var key in obj){
            newObj = newObj + typeCheck(obj[key]);
        }
  } else {
            newObj = newObj + typeCheck(obj);
    }
    return newObj;
};

