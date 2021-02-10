function findTriangleArea(num1,num2,num3) {
    var perimeter = (num1 + num2 + num3)/2;
    var area = Math.sqrt(perimeter*((perimeter-num1)*(perimeter-num2)*(perimeter-num3))); //formula of a triangle wiht 3 knonwn sides.
    return area;
    }
    
    console.log(findTriangleArea(13,20,31)); 
    
    // Task 0.6
    function numbers() {
        for (var i = 0; i < arguments.length; i++) {
          console.log(arguments[i]);
        }
      }