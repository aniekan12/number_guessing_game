const numberGuessingGame = (range) => {
   const generatedNumber = Math.floor(Math.random() * range) + 1;
   var pointsAwarded = 0;
  
   var name = prompt("please enter a beautiful username: ");
   console.log("hi! " + name)


   var guessedNumber = prompt(`Guess a number between 1 and ${range}: `);
   console.log("You guessed number " + guessedNumber)


  if(guessedNumber == generatedNumber){
    doThis(pointsAwarded, name, range)
    
  }else{
    pointsAwarded = 0;
    console.log('Wrong guess. game over with 0 points!');
  }
}

const doThis = (pointsAwarded, name, range) => {
   console.log('You guessed right')
    console.log('')
    pointsAwarded++;
    console.log(`You have been awarded ${pointsAwarded} point(s)`)
    console.log('')
    console.log(`${name} a new stage is here !`)
    numberGuessingGame(range + 1);
}

numberGuessingGame(2)