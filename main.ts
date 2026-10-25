enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
    export const Ghost = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fish,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fish,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        . . . c c d 4 4 4 4 c c . . . . 
        c c . c 1 4 4 4 4 4 d 4 c . . . 
        c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
        f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
        f f f f d 4 f 4 c 1 4 4 4 4 f . 
        . . c f c 4 f f 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d 4 4 4 4 c . . . . . 
        . . . c 1 4 4 4 4 4 d c . . . . 
        . . c 1 4 4 4 4 4 1 4 4 c . . . 
        c c c 1 4 4 4 4 1 4 4 4 4 c . . 
        c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
        f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
        f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
        f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
        f f c b c 4 4 4 4 1 4 4 4 4 f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        c c . c c d 4 4 4 4 c c . . . . 
        c 4 c c 1 4 4 4 4 4 d 4 c . . . 
        f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
        f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
        f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
        . . f f d 4 4 c c 1 4 4 4 4 f . 
        . . . f c 4 4 4 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . c d d d d c c . . . . . . . 
        . . c d d c c c c c c . . . . . 
        c c c c c d 4 4 4 4 c c c . . . 
        f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
        f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
        f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
        . . f d 4 4 f 4 4 1 4 4 4 4 f . 
        . . . f d 4 4 c c 4 1 4 4 f . . 
        . . . f c 4 4 4 4 4 4 d f . . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onScore(75, function () {
    game.gameOver(true)
})
let Obstacle: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let SeaweedBottom: Image = null
let PillarTop: Image = null
let Gap_Between = 0
let Fish: Sprite = null
scene.setBackgroundColor(9)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c . . 
    . . . . . . . c c c c c 6 3 c . 
    . . . . . . c 6 6 3 3 3 6 6 c . 
    . . . . . c 6 6 6 3 3 3 3 3 3 c 
    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
    . . c c c 6 6 6 6 6 3 3 3 3 3 c 
    . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
    c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
    c 6 c c c c 3 c 6 6 6 6 6 6 c c 
    c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
    . c 6 c c c c 6 c 6 3 3 3 3 6 c 
    . . c 6 c c c c c 6 3 3 3 6 c . 
    . . . c c c c c c c c c c c . . 
    `)
game.setDialogFrame(img`
    ..ccccc....333.....333...ccccc...
    .c33b33c..39993...39993.c33b33c..
    c3b33bb3c39999933399999c3bb33b3c.
    c33b33b3c99111999991119c3b33b33c.
    cb33b33bc91999199919991cb33b33bc.
    c3b33bbbcb999991119999bcbbb33b3c.
    c3bb3bbd1b111119991111b1dbb3bb3c.
    .c33bbd1b11111111111111b1dbb33c..
    ..cccc1b1111111111111111b1cccc...
    .3991bb111111111111111111bb993...
    3991991111111111111111111191993..
    39919911111111111111111111991993.
    39919911111111111111111111991993.
    .3991911111111111111111111991993.
    ..39919111111111111111111191993..
    ..3991911111111111111111191993...
    ..3991911111111111111111191993...
    .39919111111111111111111191993...
    3991991111111111111111111191993..
    39919911111111111111111111991993.
    39919911111111111111111111991993.
    .3991911111111111111111111991993.
    ..699bb111111111111111111bb1993..
    ..cccc1b1111111111111111b1cccc...
    .c33bbd1b11111111111111b1dbb33c..
    c3bb3bbd1b111199911111b1dbb3bb3c.
    c3b33bbbcb999911199999bcbbb33b3c.
    cb33b33bc19991999199919cb33b33bc.
    c33b33b3c91119999911199c3b33b33c.
    c3b33bb3c99999333999993c3bb33b3c.
    .c33b33c.39993...39993..c33b33c..
    ..ccccc...333.....333....ccccc...
    .................................
    `)
game.showLongText("Yo! Welcome to Pikaboom's Swimming Fish Game!", DialogLayout.Bottom)
game.showLongText("Avoid the obstacles along the way,", DialogLayout.Bottom)
game.showLongText("And try to stay below the Monumental Colonnade to earn points!", DialogLayout.Bottom)
effects.bubbles.startScreenEffect()
Fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Fish)
Fish.setStayInScreen(true)
animation.runImageAnimation(
Fish,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c d d d d d c . . . . . . 
    . . . c d c c c c c . . . . . . 
    . . . c c d 4 4 4 4 c . . . . . 
    . . . c 1 4 4 4 4 4 d c . . . . 
    . . c 1 4 4 4 4 4 1 4 4 c . . . 
    c c c 1 4 4 4 4 1 4 4 4 4 c . . 
    c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
    f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
    f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
    f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
    f f c b c 4 4 4 4 1 4 4 4 4 f . 
    . . c d d c 4 4 4 4 d f f f . . 
    . . . c c c f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    c c . c c d 4 4 4 4 c c . . . . 
    c 4 c c 1 4 4 4 4 4 d 4 c . . . 
    f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
    f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
    f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
    . . f f d 4 4 c c 1 4 4 4 4 f . 
    . . . f c 4 4 4 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . c c c c . . . . . . . . . 
    . . c d d d d c c . . . . . . . 
    . . c d d c c c c c c . . . . . 
    c c c c c d 4 4 4 4 c c c . . . 
    f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
    f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
    f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
    f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
    . . f d 4 4 f 4 4 1 4 4 4 4 f . 
    . . . f d 4 4 c c 4 1 4 4 f . . 
    . . . f c 4 4 4 4 4 4 d f . . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `],
200,
true
)
let NextFish_Ghost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . c c c c c . . . . . . . . 
    . . c 5 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b 1 1 c . . . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    c c . c 1 1 1 b 1 1 1 1 c . . . 
    c 5 b b 1 1 1 b 1 1 1 d c . . . 
    c 5 5 5 1 b 1 b 1 c 1 d c c . . 
    c 5 b b 1 b 1 1 1 1 1 d d c c . 
    c c . f 1 b b 1 1 1 1 1 d d d f 
    . . . f b b b 1 1 1 1 1 1 f f f 
    . . f 5 5 b b b 1 1 1 f f . . . 
    . . f 5 5 5 5 5 f f f . . . . . 
    . . f f f f f f . . . . . . . . 
    `, SpriteKind.Ghost)
NextFish_Ghost.setPosition(180, 6)
NextFish_Ghost.setFlag(SpriteFlag.Ghost, true)
let Crab_Ghost = sprites.create(img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, SpriteKind.Ghost)
Crab_Ghost.setPosition(180, 112)
Crab_Ghost.setFlag(SpriteFlag.Ghost, true)
info.setScore(0)
game.onUpdateInterval(15000, function () {
    Crab_Ghost.setPosition(-10, 112)
    Crab_Ghost.vx = 15
    animation.runImageAnimation(
    Crab_Ghost,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    200,
    true
    )
})
game.onUpdateInterval(1500, function () {
    Gap_Between = randint(0, 3)
    if (Gap_Between == 0) {
        PillarTop = assets.image`PillarTop_1`
        SeaweedBottom = assets.image`SeaweedBottom_1`
    } else if (Gap_Between == 1) {
        PillarTop = assets.image`PillarTop_2`
        SeaweedBottom = assets.image`SeaweedBottom_2`
    } else if (Gap_Between == 2) {
        PillarTop = assets.image`PillarTop_3`
        SeaweedBottom = assets.image`SeaweedBottom_3`
    } else {
        PillarTop = assets.image`PillarTop_4`
        SeaweedBottom = assets.image`SeaweedBottom_4`
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(9)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    Obstacle = sprites.createProjectileFromSide(PillarTop, -45, 0)
    Obstacle.top = 0
    Obstacle = sprites.createProjectileFromSide(SeaweedBottom, -45, 0)
    Obstacle.bottom = scene.screenHeight()
})
game.onUpdateInterval(30000, function () {
    NextFish_Ghost.setPosition(-5, randint(15, 95))
    NextFish_Ghost.vx = 30
    animation.runImageAnimation(
    NextFish_Ghost,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b b b c . . . . 
        . . . c 1 1 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b 1 1 1 1 c . . . 
        c c b b 1 1 1 b 1 1 1 1 c . . . 
        c 5 5 5 1 b 1 b 1 1 1 d c c . . 
        c 5 b b 1 b 1 1 1 c 1 d c c . . 
        c 5 b f 1 b 1 1 1 1 1 d d c c . 
        c c . f b b b 1 1 1 1 1 d d d f 
        . . f 5 5 5 b b 1 1 1 f f f f f 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . c c c c c . . . . . . . . . 
        . c c 5 5 5 5 c c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c c . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b c 1 1 1 b 1 1 1 d c . . . 
        c 5 b b 1 1 1 b 1 c 1 d c c . . 
        c 5 5 5 1 b 1 b 1 1 1 d d c c c 
        c c b b 1 b 1 1 1 1 1 1 d d d f 
        . . . f 1 b b 1 1 1 1 1 1 f f . 
        . . . f b b b 1 1 1 1 1 f . . . 
        . . . f 5 5 b b 1 1 f f . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
