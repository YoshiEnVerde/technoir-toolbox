function rollDie () {
  var roll = 7
  while (roll > 6) {
    roll = Math.floor((Math.random() * 6) + 1)
  }
  return roll
}

function check (msg, diff, logger) {
  logger.info('Message is a dice roll')
  var tokenString = msg.slice(6)
  var tokens = tokenString.split(' ')
  var position = 0
  var baseRoll = tokens.shift()
  var pushRoll = 0
  var hurtRoll = 0
  var difficulty = diff
  logger.info('Default diff value is ' + difficulty)
  while (position < tokens.length) {
    if (tokens.length > 0) {
      if (tokens[position] === 'push' || tokens[position] === '+') {
        pushRoll = parseInt(tokens[position + 1])
        logger.info('Token ' + position + ' is a push param of ' + pushRoll)
      }
      if (tokens[position] === 'hurt' || tokens[position] === '-') {
        hurtRoll = parseInt(tokens[position + 1])
        logger.info('Token ' + position + ' is a hurt param of ' + hurtRoll)
      }
      if (tokens[position] === 'diff' || tokens[position] === '>') {
        difficulty = parseInt(tokens[position + 1])
        logger.info('Token ' + position + ' is a diff param of ' + difficulty)
      }
      position += 2
    }
  }
  var baseRolls = []
  var pushRolls = []
  var hurtRolls = []
  logger.debug('Collating base rolls')
  if (baseRoll > 0) {
    for (var i = 0; i < baseRoll; i++) {
      baseRolls.push(rollDie())
    }
  }
  var rolledMsg = '\n[Roll - ' + baseRolls.join(', ') + ']'

  logger.debug('Collating push rolls')
  var pushMsg = '\n[Push - '
  if (pushRoll > 0) {
    for (var j = 0; j < pushRoll; j++) {
      pushRolls.push(rollDie())
    }
    pushMsg += pushRolls.join(', ')
  }
  pushMsg += ']'

  logger.debug('Filtering base successes')
  var tentSuccesses = baseRolls.concat(pushRolls).filter(function (x) {
    return x > difficulty
  })

  logger.debug('Collating hurt rolls')
  var hurtMsg = '\n[Hurt - '
  if (hurtRoll > 0) {
    for (var k = 0; k < hurtRoll; k++) {
      hurtRolls.push(rollDie())
    }
    hurtMsg += hurtRolls.join(', ')
  }
  hurtMsg += ']'

  logger.debug('Filtering final successes')
  var finalSuccesses = tentSuccesses.filter(function (y) {
    if (hurtRolls.length > 0 && hurtRolls.includes(y)) {
      return false
    }
    return true
  })

  var succMsg = '\n[' + finalSuccesses.length + ' successes vs ' + difficulty
  if (finalSuccesses.length > 0) {
    succMsg += ' - ' + finalSuccesses.join(', ')
  }
  succMsg += ']'
  logger.info('Dice rolled: ' + rolledMsg + pushMsg + hurtMsg + succMsg)

  return '```ini\n' + rolledMsg + '\n```' + '```fix\n' + pushMsg + '\n```' + '```css\n' + hurtMsg + '\n```' + '```yaml\n' + succMsg + '\n```'
}

module.exports = {
  check: check,
  roll: rollDie
}
