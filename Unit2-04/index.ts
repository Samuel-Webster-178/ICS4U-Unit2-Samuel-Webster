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
console.log("cleared stack")
fruits.clear()
console.log("popped: " + fruits.pop())
console.log("fruits: " + fruits.show)
console.log("length: " + fruits.size)
console.log("is empty: " + fruits.isEmpty)
console.log()

let colours = new SamStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("length: " + colours.size)
console.log("popped: " + colours.pop())
console.log("colours: " + colours.show)
console.log("is empty: " + colours.isEmpty)
console.log()

let animals = new SamStack()
animals.push("cat")
animals.push("dog")
animals.push("wolf")
animals.push("deer")
animals.push("rabbit")
console.log("popped: " + animals.pop())
console.log("popped: " + animals.pop())
console.log("popped: " + animals.pop())
console.log("peak last item: " + animals.peek)
console.log("animals: " + animals.show)
console.log("length: " + animals.size)

console.log("\nDone.")
