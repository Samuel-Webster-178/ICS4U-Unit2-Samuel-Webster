/*
 * Class that defines truck.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { Vehicle } from "./Vehicle"

export default class Truck extends Vehicle {
  private licencePlate: string

  // variables
  constructor(color: string, maxSpeed: number, licencePlate: string) {
    super(colour, maxSpeed)
    this.licencePlate = licencePlate
  }

  //get current speed
  public get licencePlate() {
    return this.licencePlate
  }

  // checks if stack is empty
  public status() {
    super()
    console.log(" -> Licence Plate: " + this.licencePlate)
  }

  // change speed via accelerating formula
  public Provide_Air(airPressure: number) {
    this.speed = this.speed - airPressure / 2
  }
}
