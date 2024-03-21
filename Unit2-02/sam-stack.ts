/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class SamStack {
  private strstack: string[]

  // variables
  constructor() {
    self.strstack = []
  }

  // show full stack seperated by commas
  public get show() {
    let values = ""
    for (let counter = 0; counter < self.strstack.length; counter++) {
      values = values + self.strstack[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }

  // push item to end of list
  public push(input) {
    self.strstack.push(input)
  }

  // pop item from end of list and return value
  public pop() {
    let removed = ""
    if (self.strstack[0]) {
      removed = self.strstack[self.strstack.length - 1]
    } else {
      removed = "nothing to remove"
    }
    self.strstack.splice(-1)
    return removed
  }
}
