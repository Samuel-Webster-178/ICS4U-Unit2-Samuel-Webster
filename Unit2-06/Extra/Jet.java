/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

/**
* This is the jet class.
*/
public class Jet extends Airplane {
    /** Jet speed change multiplier. */
    private static final int MULTIPLIER = 2;

    /**
    * Constructor.
    *
    * @param args no arguments
    */
    public Jet(String[] args){
        super();
    }

    /**
    * Set jet speed.
    *
    * @param speed set speed
    */
    public void setSpeed(int speed) {
        super.setSpeed(speed * MULTIPLIER);
    }

    /**
    * Double speed.
    *
    * @param args no arguments
    */
    public void accelerate(String[] args) {
        super.setSpeed(super.getSpeed() * 2);
    }
}