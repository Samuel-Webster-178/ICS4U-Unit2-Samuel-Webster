/*
 * Class that defines string stack.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class Vehicle {
  public color: string
  private licencePlate: string
  private numberOfDoors: number
  private maxSpeed: number
  private _speed: number

  // variables
  constructor(color: string, licencePlate: string, numberOfDoors: number, maxSpeed: number) {
    self.color = color
    self.licencePlate = licencePlate
    self.numberOfDoors = numberOfDoors
    self.maxSpeed = maxSpeed
    self._speed = 0
  }

  // checks if stack is empty
  public get status() {
    console.log(" -> Speed: " + self.speed)
    console.log(" -> Max Speed: " + self.maxSpeed)
    console.log(" -> Number Of Doors: " + self.numberOfDoors)
    console.log(" -> Licence Plate: " + self.licencePlate)
    console.log(" -> Color: " + self.color)
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
