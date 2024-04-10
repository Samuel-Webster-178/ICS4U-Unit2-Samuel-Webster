/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/


public class Jet extends Airplane {
    private static final int MULTIPLIER = 2;

    public Jet(){
        super();
    }

    public void setSpeed(int speed) {
        super.setSpeed(speed * MULTIPLIER);
    }

    public void accelerate() {
        super.setSpeed(super.getSpeed() * 2);
    }
}