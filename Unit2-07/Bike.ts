/*
 * Class that defines bike.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { Vehicle } from "./Vehicle"

export class Bike extends Vehicle {
  private cadense: number

  // variables
  constructor(color: string, maxSpeed: number, cadense: string) {
    super(color, maxSpeed)
    this.cadense = cadense
  }

  //set current speed
  public set cadense(cadense: number) {
    this.cadense = cadense
  }

  //get current speed
  public get cadense() {
    return this.cadense
  }

  // checks if stack is empty
  public status() {
    super.status()
    console.log(" -> Cadense: " + this.cadense)
  }

  // change speed via bike accelerating formula
  public accelerate (appliedPower: number) {
    this.cadense = this.cadense + appliedPower
    this.speed = this.cadense * 2
  }

  public Ring_Bell() {
    console.log("Ding ding!\n")
  }
}
