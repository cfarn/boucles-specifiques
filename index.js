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

// let longNames = 
// [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]
// log(Object.values(longNames))

// let shortNames = longNames.map((longName) => {
//     return {
//         name: Object.values(longName)
        
//     }
// })
// log(shortNames)

// 03 - Filter Numbers

// let array = [1, "toto", 34, "javascript", 8]
// log(array)

// let numbers = array.filter(number => typeof number === "number") 
// log(numbers)

// 04 - Filter Even

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let even = numbers.filter((number) => {
//     if(number % 2 === 0) {
//         return true
//     }
// })
// log(even)

// 05 - Cakes

let cakes = 
[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let chocoCakes = cakes.filter((cake) => {
    if(cake.flavor === "chocolate") {
        return true
    }
})
log(chocoCakes)

let chocoCakesStatus = chocoCakes.map((chocoCake) => {
    // return {
    //     status: "sold out !"
    // }
    // if(chocoCake.status === "available") {
    //     return "sold out !"
    // }
})
log(chocoCakesStatus)

// chocoCakes = chocoCakesStatus.map((chocoCake) => {
//     return {
//         Object.entries(a)
        
//     }
// })
// log(chocoCakes)

// 06 - Cake v2

let pie = cakes.find((cake) => {
    return cake.name === "pie"
})
log(pie)