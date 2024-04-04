/*
 * Class that defines airplane speed.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class Airplane {
    private speed: number
  
    // variables
    constructor() {
      self.speed = 0
    }
  
    // set speed
    public set setSpeed(newSpeed: number) {
        self.speed = newSpeed
    }

    // get speed
    public get getSpeed(): number {
      return self.speed
    }
}