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
        final Airplane biplane = new Airplane();
        biplane.setSpeed(212);
        System.out.println(biplane.getSpeed());
        final Jet boeing = new Jet();
        boeing.setSpeed(422);
        System.out.println(boeing.getSpeed());
        int i = 0;
        while (i < 4) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > 5000) {
                biplane.setSpeed(biplane.getSpeed() * 2);
            } else {
                boeing.accelerate();
            }
            i++;
        }
        System.out.println(biplane.getSpeed());
    }
}
