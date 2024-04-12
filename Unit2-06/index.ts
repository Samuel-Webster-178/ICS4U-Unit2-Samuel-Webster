/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import { Airplane } from "./Airplane"
import { Jet } from "./Jet"

/**
* This is the flytest class.
*/
class FlyTest {
    // Constructor.
    private FlyTest() {
    }

    // Set jet speed.
    public static main() {
        let biplane = new Airplane()
        biplane.setSpeed(212)
        console.log(biplane.getSpeed())
        let boeing = new Jet()
        boeing.setSpeed(422)
        console.log(boeing.getSpeed())
        for (i = 0; i < 4; i++) {
            boeing.accelerate()
            console.log(boeing.getSpeed())
            if (boeing.getSpeed() > 5000) {
                biplane.setSpeed(biplane.getSpeed() * 2)
            } else {
                boeing.accelerate()
            }
        }
        console.log(biplane.getSpeed())
    }
}

FlyTest.main()
