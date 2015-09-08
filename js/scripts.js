function findTriangle(side1, side2, side3) {
  var triangleArray = [side1, side2, side3];
  triangleArray.sort();
  var sum = triangleArray[0] + triangleArray[1];
  if (sum < triangleArray[2]) {
    return "not a triangle";
    }
    else {
      if ((side1 == side2) && (side2 == side3)) {
        return "equilateral";
      }
      else if ((side1 == side2) || (side2 == side3)) {
        return "isosceles";
      }
      else {
        return "scalene";
    }
  }
};
