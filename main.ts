sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Rocky.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let Rocky: Sprite = null
let randomSprite: Sprite = null
randomSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 1 1 3 3 1 1 3 3 . . . 
. . . 3 3 1 f 3 3 f 1 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 f d 3 3 d f 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
randomSprite.setPosition(24, 27)
Rocky = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . b b b b b b b b b . . . 
. . b b b . . . . . . . b . . . 
. b b . . . . . . . . . b b . . 
. b . . . . . . . . . . . b . . 
. b b . . . . . . . . . . b . . 
. . b b . . . . . . . . . b . . 
. . . b b . . . . . . . . b . . 
. . . . b . . . . . . . . b b . 
. . . . b . . . . . . . . . b . 
. . . . b . . . . . . . . b b . 
. . . . b b . . . . . . . b . . 
. . . . . b b b b b . . . b . . 
. . . . . . . . . b . . . b . . 
. . . . . . . . . b b b b b . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.splash("This is my rocky game")
