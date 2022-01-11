// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)
console.log(otherRandomCar)
// Output Prediction: "Tesla", then "Mercedes" and "Honda"
// Actual Output: "Tesla", then just "Mercedes", because that was the next one in line and it didn't reference more than one with a "..."


// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
console.log(otherName);
// Output Prediction: "Elon", then the full dictionary
// Actual Output: There was an error, because we had not defined the type of "name" on line 20 (and presumably the same error on line 21)


// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password);
console.log(hashedPassword);
// Output Prediction: "12345", then I'm unsure
// Actual Output: "12345", then undefined because we hadn't defined hashedPassword outside of anything else


//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second);
console.log(first == third);
// Output Prediction: 5, then 2
// Actual Output: false, then true, because 2 does not == 5, but 2 == 2


// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// Output Prediction: I think there will be an error, but I'm not sure where. Definitely in line 64 if nowhere else?
// Actual Output: value, which was the correct pair; the entirety of secondKey, which was the correct pair; the index of 0 for the secondKey array, then 5, which was the value after the first one comma

