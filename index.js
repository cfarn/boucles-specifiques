const log = (console.log)

// 01 - Map Double

// let array = [1, 2, 3, 4, 5]
// let double = array.map(db => db * 2)
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
// let even = numbers.filter(number => number % 2 === 0)
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

const chocoCakes = cakes.filter((cake) => {
    // if(cake.flavor === "chocolate") {
    //     return true
    // }
	return cake.flavor === "chocolate"
})
log(chocoCakes)

let chocoCakesStatus = chocoCakes.map((chocoCake) => {
	chocoCake.status = "sold out !"
    return {
		chocoCake
        // status: "sold out !"
    }
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

// const pie = cakes.find(cake => cake.name === "pie")
// log(pie)

// 07 - Factorielle forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num = 1
// numbers.forEach(number => num *= number)
// log(num)

// 08 - Chess board

const length = [0, 1, 2, 3, 4, 5, 6, 7]

// length.forEach((line, i) => {
// 	let stringLine = `Ligne: ${i} | `

// 	length.forEach((square, j) => {
// 		stringLine = stringLine + `[${j}]`
// 	})
// 	log(stringLine)
// })

// length.forEach((line, i) => {
// 	let stringLine = ""

// 	length.forEach((square, j) => {
// 		if((i+j)%2===0) {
// 			stringLine = stringLine + `[ ]`
// 		}else {
// 			stringLine = stringLine + `[x]`
// 		}
// 	})
// 	log(stringLine)
// })

length.forEach((line, i) => {
	let stringLine = ""

	length.forEach((square, j) => {
		if(i%2===0) {
			if(j%2===0){
				stringLine = stringLine + `[ ]`
			}
		}else {
			stringLine = stringLine + `[x]`
		}
	}else {
		// j%2!==0
	}
	)
	log(stringLine)
})


// 09 - Exercice 3 bis

// const array = [12, 55, "hello", true, { isStudent: false }, 3]

// const filterNums = array => {
// 	 const numbers = array.filter(number => typeof number === "number")
// 	 return filterNums
// }

//  let numbers = array.filter(number => typeof number === "number") 
// log(array)