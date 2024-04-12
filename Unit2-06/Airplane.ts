/*
* This program is the standard airplane class.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/


// This is the airplane class.
export class Airplane {
    /** The internal variable that stores speed. */
    private speed: number

    // Constructor.
    public Airplane() {
    }

    // Set an airplane speed.
    public setSpeed(speed: number) {
        this.speed = speed
    }

    // Get speed.
    public getSpeed(): number {
        return this.speed
    }
}
