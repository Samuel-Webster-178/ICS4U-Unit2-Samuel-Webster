/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class SamStack {
  // strstack: string[]

  // variables
  constructor() {
    self.strstack = []
  }

  // push item to end of list
  push(input) {
    self.strstack.push(input)
  }

  // show full stack seperated by commas
  show() {
    let values = ""
    for (let counter = 0; counter < self.strstack.length; counter++) {
      values = values + self.strstack[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }
}

