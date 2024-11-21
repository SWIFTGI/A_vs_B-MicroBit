enum RadioMessage {
    message1 = 49434,
    addToA = 45477,
    addToB = 38561,
    newPlayer = 19885
}
radio.onReceivedMessage(RadioMessage.addToA, function () {
    A += 1
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.addToA)
    A += 1
})
radio.onReceivedMessage(RadioMessage.addToB, function () {
    B += 1
})
input.onButtonPressed(Button.AB, function () {
    if (A > B) {
        basic.showString(" A ")
    } else if (B > A) {
        basic.showString(" B ")
    } else {
        basic.showString(" ? ")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.addToB)
    B += 1
})
let B = 0
let A = 0
radio.setGroup(128)
A = 0
B = 0
basic.forever(function () {
    basic.showString(" A = " + A)
    basic.showString(" B = " + B)
})
