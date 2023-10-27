fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    stop_time = input.runningTime()
})
let stop_time = 0
let start_time = 0
start_time = 0
stop_time = 0
let revolutions = 0
let RPM = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        revolutions += 1
    }
    RPM = (stop_time - start_time) / 60000
    basic.showNumber(RPM)
})
