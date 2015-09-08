describe('findTriangle', function() {
  it("When all three sides are equal, the triangle is equilateral", function() {
    expect(findTriangle(4, 4, 4)).to.equal("equilateral");
  });

  it("When two sides are equal, the triangle is isosceles", function() {
  expect(findTriangle(4, 4, 3)).to.equal("isosceles");
  });

  it("When no sides are equal, the triangle is scalene", function() {
  expect(findTriangle(5, 4, 3)).to.equal("scalene");
  });

  it("When two sides summed are less than the remaining side it is not a triangle", function() {
  expect(findTriangle(5, 1, 2)).to.equal("not a triangle");
  });

});
