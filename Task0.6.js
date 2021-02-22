function maximumNumber() {
  let maximumNumber = arguments[0];

  for (var i = 0; i < arguments.length; i++) {
    if(arguments[i] > (maximumNumber)) {
        maximumNumber = arguments[i];
    }
  }

  console.log(maximumNumber);
}

maximumNumber(1,4,9,4,5,70,7);