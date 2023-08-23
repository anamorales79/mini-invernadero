input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
basic.forever(function () {
    radio.sendString("texto")
})
basic.forever(function () {
    serial.writeLine("" + (pins.digitalReadPin(DigitalPin.P0)))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
})
