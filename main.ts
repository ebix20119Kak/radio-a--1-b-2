input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("ello wariacie")
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
    radio.sendString("ello mordo")
})
basic.forever(function () {
	
})
