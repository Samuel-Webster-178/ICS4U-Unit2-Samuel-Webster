/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export default class Vehicle {
  public color: string
  private licencePlate: string
  private numberOfDoors: number
  private maxSpeed: number
  private _speed: number

  // variables
  constructor(color: string, licencePlate: string, numberOfDoors: number, maxSpeed: number) {
    this.color = color
    this.licencePlate = licencePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
    this._speed = 0
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
  }

  // change speed via braking formula
  public break (breakPower: number, breakTime: number) {
    this._speed = this._speed - (breakPower * breakTime)
  }
}
