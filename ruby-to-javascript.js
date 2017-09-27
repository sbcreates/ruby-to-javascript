// -----********-----
// apples = 14
// puts apples
//
// puts "I have #{apples} apples."

var apples = 14;
console.log("apples");
console.log(`I have ${apples} apples.`);


// -----********-----
// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }

var materials = ['wood', 'metal', 'stone']
var words = {
  elephant: "The world's largest land animal",
  school: "A place of learning.",
  iceCream: "A delicious milk-based dessert."
}


// -----********-----
// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end

var num = 16;
function checkNumValue(num) {
  if (num > 10) {
    console.log(`${num} is greater than 10.`);
  } else if (num === 10) {
    console.log(`${num} is exactly 10`);
  } else {
    console.log(`${num} must be less than 10.`);
  }
}
checkNumValue(num)


// -----********-----
// 10.times do
//   puts "Doing the same thing over and over."
// end

for (var i = 10; i > 0; i--) {
  console.log("Doing the same thing over and over.");
}


// -----********-----
// base = 5
// 20.times do |num|
//   puts num + base
// end
// **num starts at 0 and adds 1 each times it iterates through the loop
var base = 5;
function loopBaseTwentyTimes() {
  for (var i = 20; i > 0; i--) {
    console.log(`${base}`);
    base++;
  }
}
loopBaseTwentyTimes()


// -----********-----
// total = 0
// 100.times do |num|
//   total += num
// end
// puts total
var total = 0;
function loopBaseHundredTimes() {
  number = 0;
  for (var i = 100; i > 0; i--) {
    total += number;
    number++;
  }
  console.log(total);
}
loopBaseHundredTimes()


// -----********-----
// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end
var heightRange = [];
for (var i = 3; i <= 15; i++) {
  heightRange.push(i)
}

heightRange.forEach(function(height){
  if (height > 9){
    console.log("You can get on the rollercoaster.");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
})


// -----********-----
// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end




// -----********-----
// def hello_world
//   puts "Hello world!"
// end
//
// hello_world


// -----********-----
// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount
