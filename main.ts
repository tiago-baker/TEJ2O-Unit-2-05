/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago baker
 * Created on: Sep 2025
 * This program gets the current temperature, in k.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// gets temperature in kelvin
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature in kelvin
    temperatureKelvin = input.temperature() + 273

    // output temperature
    basic.clearScreen()
    basic.showString('The Temperature is: ' + temperatureKelvin.toString() + 'K.')
})

