const log = (console.log)

// 01 - Map Double

// let array = [1, 2, 3, 4, 5]
// let double = array.map(() => {
//     return array
// })
// log(double)

// let numbers = [1, 2, 3, 4, 5]
// let double = numbers.map((number) => {
//     return number
// })
// log(double)



// 02 - Map Names

let longNames = 
[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
// log(Object.values(longNames))

let shortNames = longNames.map((longName) => {
    return {
        name: Object.values(longName)
        
    }
})
log(shortNames)

// 03 - Filter Numbers

// let array = [1, "toto", 34, "javascript", 8]
// log(array)
// log(Object.keys(array))

// let numbers = array.filter(number => typeof number ==="number") 
// log(numbers)

// 04 - Filter Even

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let even = numbers.filter((number) => {
    if(number % 2 === 0) {
        return true
    }
})
log(even)