/*
* This program is the standard jet class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import { Airplane } from "./Airplane"

/**
* This is the jet class.
*/
export class Jet extends Airplane {
    /** Jet speed change multiplier. */
    private MULTIPLIER: number = 2

    // Constructor.
    public Jet() {
        // super()
    }

    // Set jet speed.
    public setSpeed(speed: number) {
        super.setSpeed(speed * MULTIPLIER)
    }

    // Double speed.
    public accelerate() {
        super.setSpeed(super.getSpeed() * 2)
    }
}
