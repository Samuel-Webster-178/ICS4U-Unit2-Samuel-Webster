/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import java.util.ArrayList;
import java.util.List;

/**
* The Vehicle class.
*/
public class Vehicle {
    /**
     * The color of the vehicle.
     */
    private String color;

    /**
     * The license plate of the vehicle.
     */
    private String licencePlate;

    /**
     * The number of doors of the vehicle.
     */
    private final int numberOfDoors;

    /**
     * The maximum speed of the vehicle.
     */
    private final int maxSpeed;

    /**
     * The current speed of the vehicle.
     */
    private int speed;

    /**
     * Constructor.
     *
     * @param color         The color.
     * @param licencePlate  The license plate.
     * @param numberOfDoors The number of doors.
     * @param maxSpeed      The maximum speed.
     */
    public Vehicle(String color, String licencePlate,
        int numberOfDoors, int maxSpeed) {
        this.color = color;
        this.licencePlate = licencePlate;
        this.numberOfDoors = numberOfDoors;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }

    /**
     * Get color.
     *
     * @return The color of vehicle.
     */
    public String getColor() {
        return color;
    }

    /**
     * Get license plate.
     *
     * @return license plate.
     */
    public String getLicencePlate() {
        return licencePlate;
    }

    /**
     * Get speed.
     *
     * @return The speed.
     */
    public int getSpeed() {
        return speed;
    }

    /**
     * Set color.
     *
     * @param color The color to set for the vehicle.
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * Set license plate.
     *
     * @param licencePlate license plate.
     */
    public void setLicencePlate(String licencePlate) {
        this.licencePlate = licencePlate;
    }

    /**
     * Get status.
     */
    public void status() {
        System.out.println(" -> Speed: " + speed);
        System.out.println(" -> Max Speed: " + maxSpeed);
        System.out.println(" -> Number Of Doors: " + numberOfDoors);
        System.out.println(" -> Licence Plate: " + licencePlate);
        System.out.println(" -> Color: " + color);
    }

    /**
     * Accelerate.
     *
     * @param accelerationPower The power of acceleration.
     * @param accelerationTime  The time duration for acceleration.
     */
    public void accelerate(int accelerationPower, int accelerationTime) {
        speed = (accelerationPower * accelerationTime) + speed;
        // Check if speed exceeds max speed
        if (speed > maxSpeed) {
            speed = maxSpeed;
        }
    }

    /**
     * Apply brakes.
     *
     * @param breakPower power of brake.
     * @param breakTime  time for braking
     */
    public void brake(int breakPower, int breakTime) {
        speed = speed - (breakPower * breakTime);
        if (speed < 0) {
            speed = 0;
        }
    }
}
