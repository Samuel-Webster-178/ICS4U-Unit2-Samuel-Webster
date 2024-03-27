/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

/**
* This is my stack.
*/
public class SamStack {
  String[] strstack;

  // variables
  public SamStack() {
    self.strstack = [];
  }

  // push item to end of list
  public push(input) {
    self.strstack.push(input)
  }

  // show full stack seperated by commas
  public show() {
    String values = "";
    for (int counter = 0; counter < self.strstack.length; counter++) {
      values = values + self.strstack[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }
}
