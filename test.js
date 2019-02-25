var assert = require('assert')

function uselessTest (x, y) {
  return x + y
}

function testEmptyForTravis () {
  var x = 5
  var y = 1
  var sum1 = x + y
  var sum2 = uselessTest(x, y)

  console.log('addTwoNumbers() should return the sum of its two parameters.')
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.')

  try {
    assert.equal(sum1, sum2)

    console.log('Passed.')
  } catch (error) {
    console.error('Failed.')
  }
}

test.skip('skip', () => {})
