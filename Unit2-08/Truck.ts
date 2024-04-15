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
  constructor(color: string, maxSpeed: number, numberOfTires: int, licencePlate: string) {
    super(color, maxSpeed, numberOfTires)
    this.licencePlate = licencePlate
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
  public applyAir(airPressure: number) {
    this._speed = this._speed - airPressure / 2
  }
}