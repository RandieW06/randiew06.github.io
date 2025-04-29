var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        // TODO 1: Declare our variables
        var circle;
        var circles = []; 
        // TODO 2 : Create a function that draws a circle 
        function exampleFunction() { circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);  // Random circle in area
            physikz.addRandomVelocity(circle, canvas, 5, 5);  // Random velocity
            view.addChild(circle);  // Add circle to the view
            circles.push(circle);  // Push circle to the circles array
        }


        }

        // TODO 3 / 7 : Call the drawCircle() function 
        circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
        physikz.addRandomVelocity(circle, canvas, 5, 5);
        view.addChild(circle);
        circles.push(circle);  

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            circles[0]
            physikz.updatePosition(/* bracket notation to access a circle from the circles array */);
            physikz.updatePosition(/* bracket notation to access the first circle */);
            physikz.updatePosition(/* bracket notation to access the second circle */);
            physikz.updatePosition(/* bracket notation to access the third circle */);
            physikz.updatePosition(/* bracket notation to access the fourth circle */);
            physikz.updatePosition(/* bracket notation to access the fifth circle */);
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            game.checkCirclePosition(/* bracket notation to access the first circle */);
            game.checkCirclePosition(/* bracket notation to access the second circle */);
            game.checkCirclePosition(/* bracket notation to access the third circle */);
            game.checkCirclePosition(/* bracket notation to access the fourth circle */);
            game.checkCirclePosition(/* bracket notation to access the fifth circle */);

            // TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // Left Boundary
            if (circle.x < 0) {
                circle.x = canvas.width;  // Move to the right side
            }

            // Top Boundary
            if (circle.y < 0) {
                circle.y = canvas.height;  // Move to the bottom side
            }

            // Bottom Boundary
            if (circle.y > canvas.height) {
                circle.y = 0;  // Move to the top side
            }
        }



            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
