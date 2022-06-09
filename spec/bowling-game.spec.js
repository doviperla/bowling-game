/*
Requirements:
    Create Scoring Bowling Game

Bowling Rules:
    The game consists of 10 frames as shown above.
    In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total
    number of pins knocked down, plus bonuses for strikes and spares.

    A spare is when the player knocks down all 10 pins in two tries. The bonus for
    that frame is the number of pins knocked down by the next roll. So in frame 3
    above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
    number of pins knocked down on the next roll.)

    A strike is when the player knocks down all 10 pins on his first try. The bonus
    for that frame is the value of the next two balls rolled.
    In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
    balls to complete the frame. However no more than three balls can be rolled in
    tenth frame.

    test cases:
    1. roll all to 0
    2. roll all to 1
    3. check spare first frame is 5/5 second is 1/0 and all others 0
    4. check strike first frame is 10 second is 1/1 and all others 0
    6. check requirements demo : 1/4 4/5 6/4(spare) 5/5(spare) 10(strike) 0/1 7/3(spare) 6/4(spare) 10(strike) 2/8/6 (spare in tenth frame)
    7. check requirements demo and repalce strike in frame 5 to spare : 1/4 4/5 6/4(spare) 5/5(spare) 5/5(spare) 0/1 7/3(spare) 6/4(spare) 10(strike) 2/8/6 (spare in tenth frame)
    5. 10x12 = 300 (all strikes)
*/


const BowlingGame = require("../bowling-game");
let game;

function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) { //for number of rolls specified
        game.roll(pins); //roll the number of pins specified
    }
}

beforeEach(() => {
    game = new BowlingGame(); //create new game
});

it('should return 0 for a game of all zeros', () => {
    for (let i = 0; i < 20; i++) { //for 20 rolls
        game.roll(0); //roll a 0
    }
    expect(game.score).toEqual(0); //check that the score = 0
})

it('should return 20 for game of all ones', () => {
    rollMany(20, 1); //roll 20 1's
    expect(game.score).toEqual(20); //check if the score = 20
})

it('handles a spare with correct bonus', () => {
    //roll a spare
    game.roll(5);
    game.roll(5);
    game.roll(1); //roll a 1
    game.roll(1); //roll a 1
    rollMany(16, 0); //roll 17 0's
    expect(game.score).toEqual(13); //check that the score = 12
})

it('handles a strike with correct bonus', () => {
    game.roll(10); //roll a strike
    game.roll(1); //roll a 1
    game.roll(1); //roll a 1
    rollMany(17, 0); //roll 17 0's
    expect(game.score).toEqual(14); //check that the score = 14
})

it('handles a strike with correct bonus', () => {
    //frame 1
    game.roll(1); //roll a 1
    game.roll(4); //roll a 4
    //frame 2
    game.roll(4); //roll a 4
    game.roll(5); //roll a 5
    //frame 3
    game.roll(6); //roll a 6
    game.roll(4); //roll a bouns
    //frame 4
    game.roll(5); //roll a 5
    game.roll(5); //roll a bouns
    //frame 5
    game.roll(10); //roll a strike
    //frame 6
    game.roll(0); //roll a 0
    game.roll(1); //roll a 1
    //frame 7
    game.roll(7); //roll a 7
    game.roll(3); //roll a bouns
    //frame 8
    game.roll(6); //roll a 6
    game.roll(4); //roll a bouns
    // //frame 9
    game.roll(10); //roll a strike
    // //fram 10
    game.roll(2); //roll a 2
    game.roll(8); //roll a bouns
    game.roll(6); //roll a 6
    expect(game.score).toEqual(133); //check that the score = 133
})

it('handles a strike with correct bonus', () => {
    //frame 1
    game.roll(1); //roll a 1
    game.roll(4); //roll a 4
    //frame 2
    game.roll(4); //roll a 4
    game.roll(5); //roll a 5
    //frame 3
    game.roll(6); //roll a 6
    game.roll(4); //roll a bouns
    //frame 4
    game.roll(5); //roll a 5
    game.roll(5); //roll a bouns
    //frame 5
    game.roll(5); //roll a 5
    game.roll(5); //roll a bouns
    //frame 6
    game.roll(0); //roll a 0
    game.roll(1); //roll a 1
    //frame 7
    game.roll(7); //roll a 7
    game.roll(3); //roll a bouns
    //frame 8
    game.roll(6); //roll a 6
    game.roll(4); //roll a bouns
    // //frame 9
    game.roll(10); //roll a strike
    // //fram 10
    game.roll(2); //roll a 2
    game.roll(8); //roll a bouns
    game.roll(6); //roll a 6
    expect(game.score).toEqual(127); //check that the score = 127
})

it('max score is 300', () => {
    rollMany(1000000, 10);
    expect(game.score).toEqual(300);
})

