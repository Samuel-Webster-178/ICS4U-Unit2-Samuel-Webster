/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class Vehicle {
  private color: string
  readonly maxSpeed: number
  readonly numberOfTires: int
  readonly _speed: number

  // variables
  constructor(color: string, maxSpeed: number, numberOfTires: int) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.numberOfTires = numberOfTires
    this._speed = 0
  }

  //get colour
  public get color() {
    return this.color
  }

  // get current speed
  public get speed() {
    return this._speed
  }

  //set colour
  public set color(color: string) {
    this.color = color
  }

  // checks if stack is empty
  public status() { 
    console.log(" -> Speed: " + this.speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Number of tires: " + this.numberOfTires)
    console.log(" -> Color: " + this.color)
  }

  // change speed via accelerating formula
  public accelerate (accelerationPower: number, accelerationTime: number) {
    this._speed = (accelerationPower * accelerationTime) + this._speed
    if (this._speed > this.maxSpeed) {
      this._speed = this.maxSpeed
    }
  }

  // change speed via braking formula
  public brake (breakPower: number, breakTime: number) {
    this._speed = this._speed - (breakPower * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
