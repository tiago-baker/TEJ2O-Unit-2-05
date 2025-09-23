/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago baker
 * Created on: Sep 2025
 * This program gets the current temperature, in k.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// comment
let TemperatureKelvin: number
let TemperatureValue: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature value
    TemperatureKelvin = input.temperature()
    TemperatureValue = (TemperatureKelvin / 273) + 21
    TemperatureValue = Math.round(TemperatureValue)

    // output temperature
    basic.clearScreen()
    basic.showString('The Temperature is: ' + TemperatureValue.toString() + 'K.')
})