function bottleSong(num) {
  // Write your code here!
  if(num==1){
    console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    bottleSong(0);
  }
  if(num==0){
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
  }
  else{
    console.log(num+" bottles of beer on the wall, "+num+" bottles of beer. Take one down and pass it around, "+num-1+" bottles of beer on the wall.")
    bottleSong(num-1);
  }
 
};

bottleSong(99);
