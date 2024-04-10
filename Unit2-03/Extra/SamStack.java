/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import java.util.ArrayList;
import java.util.List;

/**
* This is my stack.
*/
public class SamStack {
    /** The internal variable that stores stack. */
    private List<String> strstack = new ArrayList<String>();

    /**
    * Push a string to end of stack.
    *
    * @param input user input string
    */
    public void push(String input) {
        strstack.add(input);
    }

    /**
    * Get if stack is empty.
    *
    * @return get if stack is empty
    */
    public boolean isEmpty() {
        return strstack.size() == 0;
    }

    /**
    * Get stack size.
    *
    * @return get length
    */
    public int size() {
        return strstack.size();
    }


    /**
    * Show all items on stack.
    *
    * @return the full stack
    */
    public String show() {
        String values = "";
        for (int counter = 0; counter < strstack.size(); counter++) {
            values = values + strstack.get(counter) + ", ";
        }
        if (strstack.size() > 0) {
            values = values.substring(0, values.length() - 2);
        }
        return values;
    }

    /**
    * Pop last item from stack.
    *
    * @return the popped item
    */
    public String pop() {
        String removed = "";
        if (strstack.size() > 0) {
            removed = strstack.get(strstack.size() - 1);
            strstack.remove(strstack.size() - 1);
        } else {
            removed = "nothing to remove";
        }
        return removed;
    }
}
