// ***Sigma
// ---Implement a function sigma(num) that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive). Ex.: sigma(3)
// = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num)
{
    var sum = 0;
    for(var i =1;i<=num;i++)
    {
        if(num>0)
        {
            sum+=i;
        }
    }
    return sum;
}
sigma(9);



// ***Factorial
// ---Write a function factorial(num) that, given a
// number, returns the product (multiplication) of all
// positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1 * 2 * 3);
function factorial(num)
{
    fact=1;
    for(i=1;i<=num;i++)
    {
        fact*=i;
    }
    return fact;
}
factorial(4);

// *** Threes and Fives
// --- Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function ThreesFives() 
{
    var sum =0;
    for(var i =100;i<=4000000;i++)
    {
        if((i%3 == 0) && (i% 5 ==0))
        {
            sum=sum;
        }
        else if(i%3 == 0)
        {
            sum+=i;
        }
        else if(i%5 == 0)
        {
            sum+=i;
        }
    }
    return sum;
}
ThreesFives();

// ***Second: 

---Change your function to make a BetterThreesFives(start,end)where start and end
// values are customizable. You can think of the above ThreesFives() function as
// BetterThreesFives(100,4000000).

function ThreesFives(start,end) 
{
    var sum =0;
    for(var i =start;i<=end;i++)
    {
        if((i%3 == 0) && (i% 5 ==0))
        {
            sum=sum;
        }
        else if(i%3 == 0)
        {
            sum+=i;
        }
        else if(i%5 == 0)
        {
            sum+=i;
        }
    }
    return sum;
}
ThreesFives(10,68);

// ***Generate Coin Change

// ---Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result


function generateCoinChange(cents)
{
    var coinsCurrency = 0;

    var coinsCents = 0
    
     coinsCents=  cents%100 ;
     coinsCurrency = Math.floor(cents/100);
    console.log("Its "+coinsCurrency+" Big coins and "+coinsCents+" cents."  )
}



// ***Statistics to Doubles

// ---Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.

function statisticsToDoubles()
{
    var rolls =0;
    var dice1=7
    var dice2=8; 
   while(dice1!=dice2)
   {
    dice1 =Math.ceil(Math.random()*6);
    dice2= Math.ceil(Math.random()*6);
    rolls++
    console.log("Result of Dices are :"+dice1+" and "+dice2+".");
    console.log("Numbers of rolls are :"+rolls+".");
    if(dice1>dice2)
    {
    console.log("Max is dice1 " +dice1)
    console.log("MIn is dice2 " +dice2)
    }
    else if ((dice1<dice2))
    {
        console.log("Max is dice2 " +dice2)
        console.log("MIn is dice1 " +dice1) 
    }
    else 
    {
        console.log("We got a pair");
    }
    average=(dice1+dice2)/2;
   console.log("average is equal to "+average+".");
   }
    
}
statisticsToDoubles();


// ***Sum To One Digit
// ---Implement a function sumToOne(num) that,
// given a number, sums that number’s digits
// repeatedly until the sum is only one digit. Return
// that final one digit result.

function sumToOne(num) {
    while (num >= 10) {
      var sum = 0;
  

      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
  
      num = sum; 
    }
  
    return num; 
  }
  
  console.log(sumToOne(78554)); 

// ***Fibonacci

// ---Implement the Fibonacci function, a famous mathematical equation that generates a numerical
// sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
// and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
// Fibonacci number.
// Examples: fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, etc.

function fibonacci(num) 
{
    if (num<= 0) {
      return 0;
    } 
    else if (num== 1)
     {
      return 1;
    } 
    else {
     var a = 0;
      var b = 1;
      var fib=0;
  
for(var i = 2;i<= num;i++) {
        fib = a + b;
        a = b;
        b = fib;
        
      }
  
      return fib;
    }
  }
  fibonacci(6);




// *** Last Digit of A to the B

// ---Modern computers can handle very large numbers, but this ability has limits. If a number is repeatedly
// multiplied by itself, it eventually exceeds the computer’s ability to accurately represent it. (Side note: the
// number of times it is multiplied by itself is called the exponent.) For an optional end-of-chapter
// challenge, determine the smallest (least significant) digit of a number that is potentially very, very large.
// You may find that you must do this without computing the actual (unimaginably large) number.
// Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
// b) should return the last digit of the first number (a) raised to an exponent of the second number (b).
// Examples: given (3, 4), you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5), return
// 2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).


function lastDigitAtoB(a, b) {
    if (b === 0) {
      return 1; // Any number raised to the power of 0 is 1
    }
  
    // Calculate the last digit using modular arithmetic
    let lastDigit = 1;
    let base = a % 10;
  
    while (b > 0) {
      if (b % 2 === 1) {
        lastDigit = (lastDigit * base) % 10;
      }
  
      base = (base * base) % 10;
      b = Math.floor(b / 2);
    }
  
    return lastDigit;
  }


// *** Clock Hand Angles

// --- Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
// and seconds.
// Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will
// print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
// degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.

  


function clockHandAngles(seconds) {
    var angleHours = 0;
    var angleMinutes = 0;
    var angleSeconds = 0;
  
    var hours = Math.floor(seconds / 3600) % 12;
    var minutes = Math.floor(seconds / 60) % 60;
    seconds = seconds % 60;
  
    angleHours = (hours * 30) + (minutes * 0.5) + (seconds * (1 / 120));
    angleMinutes = (minutes * 6) + (seconds * 0.1);
    angleSeconds = seconds * 6;
  
    console.log("Time Rotation (Angle Hours, Angle Minutes, Angle Seconds): " + [angleHours, angleMinutes, angleSeconds]);
  }
