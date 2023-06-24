// ---The “Basic 13”
// ***The foundation “Basic 13” algorithm challenges.



// ---Print 1-255
// ***Print all the integers from 1 to 255.

function printInt()
{
    for(var i=1;i<256;i++)
    {
        console.log(i);
    }
}
// ---Print Sum 0-255
// ***Print integers from 0 to 255, and with each integer print the sum so far.
 function printSum()
 {
    var sum=0;
    for(var i=0;i<256;i++)
    {
console.log(i);
sum+=i;
console.log("The sum is "+sum);
    }
 }
 

// ---Find and Print Max
// ***Given an array, find and print its largest element.

function findMax(arr)
{
    var max=arr[0]; 
for(var i=0;i<arr.length-1;i++)
{
  
   if(max<arr[i])
   {
    max=arr[i];
   } 
}
return max;
}
findMax([5,8,9,7,125,24,-66,589,88]);


// ---Array with Odds
// ***Create an array with all the odd integers between 1 and 255 (inclusive).

function addArr()
{

    var arr=[];
   
for(var i=0;i<256;i++)
{
    if( i%2 == 1)
    {
        arr.push(i)
    }
}
return arr;
}
addArr();





// ---Greater Than Y
// ***Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr,Y)
{
    var count =0;
  for(var i =0;i<arr.length-1;i++)
  {
    if(arr[i]>Y)
    {
       count++;
    }
  }
return count;
}


// ---Max, Min, Average
// ***Given an array, print the max, min and average values for that array.
function PrintMaxMin(arr)
{
    var max=arr[0];
    var min=arr[0];
    var sum =0;
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]<min)
      {
        min=arr[i];
      }  
      if(arr[i]>max)
      {
        max=arr[i];
      }
      sum+=arr[i];
    }
    
   
average=sum/arr.length;
return[min ,max,average];
}

// ---Swap String For Array Negative Values
// ***Replace any negative array values with 'Dojo'.
function swap(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]="Dojo";
        }
    }
    return arr;
}
swap([12,5,-9,"pod","5",6,-9]);

// ---Print Odds 1-255
// ***Print all odd integers from 1 to 255.
 
function Odd()
{
    for(var i =0 ;i<256;i++)
    {
        if(i%2 ==1)
        {
            console.log(i);
        }
    }
}
Odd();
// ---Iterate and Print Array
// ***Iterate through a given array, printing each value.
function iterPrint(arr)
{
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
iterPrint([8,5,6,5,8]);
// ---Get and Print Average
// ***Analyze an array’s values and print the average.

function average(arr)
{
var average1 =0
    var sum = 0;
for(i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
average1=sum/arr.length;
console.log(arr);
return average1;
}
average([8,7,6,5,9]);
// ---Square the Values
// ***Square each value in a given array, returning that same array with changed values.
function square(arr)
{
    for(i=0;i<arr.length;i++)
    {
        arr[i]*=arr[i];
    }
    return arr;
}
square();


// ---Zero Out Negative Numbers
// ***Return the given array, after setting any negative values to zero.
function zero(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]=0;
        }
    }
    return arr;
}
zero([7,8,-9,-8,56,-789,0]);



// ----Shift Array Values


// ***Given an array, move all values forward by one index,dropping the first and leaving a '0' value at the
// end.

function moveArrayForward(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}
moveArrayForward([7,-8,9,-89]);