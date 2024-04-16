/*
 * Class that defines truck.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { Vehicle } from "./Vehicle"

export class Truck extends Vehicle {
  private licencePlate: string

  // variables
  constructor(color: string, maxSpeed: number, licencePlate: string) {
    super(color, maxSpeed)
    this.licencePlate = licencePlate
    this.numberOfTires = 6
  }

  // get current speed
  public get licencePlate() {
    return this.licencePlate
  }

  // give status
  public status() {
    super.status()
    console.log(" -> Licence Plate: " + this.licencePlate)
  }

  // change speed via accelerating formula
  public brake (breakPower: number, breakTime: number, airPressure: number) {
    this._speed = this._speed - (breakPower * breakTime) - (airPressure * breakTime)
  }
}
