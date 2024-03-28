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

  // checks if stack is empty
  public get isEmpty() {
    return self.strstack.length == 0
  }

  // returns stack size
  public get size() {
    return self.strstack.length
  }

  // show full stack seperated by commas
  public get show() {
    let values = ""
    if (self.strstack[0]) {
      for (let counter = 0; counter < self.strstack.length; counter++) {
        values = values + self.strstack[counter] + ", "
      }
      values = values.substring(0, values.length-2)
    } else {
      values = "stack is empty"
    }
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

  // return top item of stack
  public get peek():string {
    return self.strstack[self.strstack.length - 1]
  }

  // clear all items off stack
  public clear() {
    self.strstack = []
  }
}

