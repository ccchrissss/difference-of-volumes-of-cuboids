function findDifference(a, b) {
  
  return Math.abs( a.reduce( (p, c) => p * c ) - b.reduce( (p, c) => p * c) )

}

console.log(findDifference([2, 2, 1], [3, 3, 3]))

// params: a, b   // arrays of 3 positive integers
// return: #    // absolute value of the difference of volume of a - volume of b
// e.g. findDifference([2, 2, 1], [3, 3, 3]    // 4, 27
// results in 23

// return absolute value of a.reduce - b.reduce
// where reduce method muliplies the previous number by the current number
