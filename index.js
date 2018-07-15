// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map( function(name){
    name.toLowerCase
  });
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}


function nameToAttributes(array){
    return array.map(function(name){
      const First=name.split( ' ')[0];
      const Last = name.split(' ')[1];
      
      return {firstName: First, lastName: Last}
    })
}