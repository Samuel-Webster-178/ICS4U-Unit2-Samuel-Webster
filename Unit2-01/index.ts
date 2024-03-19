/*
 * This is a program that calculates the area of a circle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { SamStack } from './sam-stack.ts'

let fruits = new SamStack()
fruits.push("apple")
fruits.push("banana")
console.log("fruits: " + fruits.show())


let colours = new SamStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.show())

let animals = new SamStack()
animals.push("cat")
animals.push("dog")
animals.push("wolf")
animals.push("deer")
animals.push("rabbit")
console.log("animals: " + animals.show())

console.log("\nDone.")
