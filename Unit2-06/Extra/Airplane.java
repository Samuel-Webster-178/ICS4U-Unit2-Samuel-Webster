/*
* This program is the standard airplane class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

/**
* This is the airplane class.
*/
public class Airplane {
    /** The internal variable that stores speed. */
    private int speed;

    /**
    * Constructor.
    *
    * @param args no arguments
    */
    public Airplane(String[] args){
    }

    /**
    * Set an airplane speed.
    *
    * @param speed set speed
    */
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    /**
    * Get speed.
    *
    * @param args no arguments
    */
    public int getSpeed(String[] args) {
        return speed;
    }
}