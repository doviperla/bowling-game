# Bowling Game
## Installation and Run
1. Clone the repository
2. Install nodejs from https://nodejs.org/en/ if is not exist
3. Open cli and change directory to local repo
4. Run 'npm i' to install packages
5. Run 'npm test' to run tests

test spec locate in spec/bowling-game.spec.js.

the code locate in bowling-game.js

# Bowling Rules:
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

# Test cases:
1. roll all to 0
2. roll all to 1
3. check spare first frame is 5/5 second is 1/0 and all others 0
4. check strike first frame is 10 second is 1/1 and all others 0
6. check requirements demo : 1/4 4/5 6/4(spare) 5/5(spare) 10(strike) 0/1 7/3(spare) 6/4(spare) 10(strike) 2/8/6 (spare in tenth frame)
7. check requirements demo and repalce strike in frame 5 to spare : 1/4 4/5 6/4(spare) 5/5(spare) 5/5(spare) 0/1 7/3(spare) 6/4(spare) 10(strike) 2/8/6 (spare in tenth frame)
8. 10x12 = 300 (all strikes)
