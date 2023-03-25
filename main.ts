input.onButtonPressed(Button.A, function () {
    Nevim.move(1)
})
input.onPinPressed(TouchPin.P2, function () {
    Nevim.turn(Direction.Right, randint(0, 360))
})
input.onButtonPressed(Button.B, function () {
    Nevim.turn(Direction.Left, randint(0, 360))
})
let Nevim: game.LedSprite = null
let Opak = 0
let Čas = 62
Nevim = game.createSprite(randint(0, 4), randint(0, 4))
Nevim.turn(Direction.Left, randint(0, 360))
basic.forever(function () {
    while (Opak == 0) {
        basic.pause(1000)
        Čas += -1
    }
    if (Nevim.get(LedSpriteProperty.X) == 2 && Nevim.get(LedSpriteProperty.Y) == 2) {
        game.setScore(100)
        Opak += 1
        Nevim.delete()
        game.gameOver()
    } else {
        if (Čas <= 0) {
            Opak += 1
            game.gameOver()
        }
    }
})
