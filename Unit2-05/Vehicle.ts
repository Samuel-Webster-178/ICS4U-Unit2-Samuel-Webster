/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export default class Vehicle {
  private color: string
  private licencePlate: string
  readonly numberOfDoors: number
  readonly maxSpeed: number
  readonly _speed: number

  // variables
  constructor(color: string, licencePlate: string, numberOfDoors: number, maxSpeed: number) {
    this.color = color
    this.licencePlate = licencePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
    this._speed = 0
  }

  //get colour
  public get color() {
    return this.color
  }

  //get current speed
  public get licencePlate() {
    return this.licencePlate
  }

  // get current speed
  public get speed() {
    return this._speed
  }

  //set colour
  public set color(color: string) {
    this.color = color
  }

  //set current speed
  public set licencePlate(licencePlate: string) {
    this.licencePlate = licencePlate
  }

  // checks if stack is empty
  public status() {
    console.log(" -> Speed: " + this._speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Number Of Doors: " + this.numberOfDoors)
    console.log(" -> Licence Plate: " + this.licencePlate)
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
  public break (breakPower: number, breakTime: number) {
    this._speed = this._speed - (breakPower * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
