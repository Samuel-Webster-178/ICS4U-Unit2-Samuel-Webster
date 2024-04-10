/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

public class FlyTest {
    public static void main(String[] args) {
        Airplane biplane = new Airplane();
        biplane.setSpeed(212);
        System.out.println(biplane.getSpeed());
        Jet boeing = new Jet(422);
        boeing.setSpeed(boeing.getSpeed());
        System.out.println(boeing.getSpeed());
        int x = 0;
        while(x < 4) {
            if(being.getSpeed() > 5000) {
                boeing.setSpeed(boeing.getSpeed * 2)
            } else {
                boeing.accelerate();
            }
            System.out.println(boeing.getSpeed());
            x++;
        }
        System.out.println(biplane.getSpeed());
    }
}