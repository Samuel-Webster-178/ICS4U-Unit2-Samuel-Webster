/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

/**
* This is the flytest class.
*/
public final class FlyTest {
    /**
    * Constructor.
    */
    private FlyTest() {
    }

    /**
    * Set jet speed.
    *
    * @param args no arguments
    */
    public static void main(String[] args) {
        final int speed1 = 212;
        final int speed2 = 422;
        final int iterations = 4;
        final int fivethousand = 5000;

        final Airplane biplane = new Airplane();
        biplane.setSpeed(speed1);
        System.out.println(biplane.getSpeed());
        final Jet boeing = new Jet();
        boeing.setSpeed(speed2);
        System.out.println(boeing.getSpeed());
        // iterator name matches pattern '^(id)|([a-z][a-z0-9][a-zA-Z0-9]+)$'
        int a = 0;
        while (a < iterations) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > fivethousand) {
                biplane.setSpeed(biplane.getSpeed() * 2);
            } else {
                boeing.accelerate();
            }
            a++;
        }
        System.out.println(biplane.getSpeed());
    }
}
