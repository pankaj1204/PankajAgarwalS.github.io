<html>
  <head>
    <title>Picture Puzzle</title>
    <style>
      /* CSS for styling the puzzle pieces and game board */
      .puzzle-piece {
        width: 100px;
        height: 100px;
        float: left;
        background-size: cover;
        cursor: pointer;
      }
      .puzzle-board {
        width: 500px;
        height: 500px;
        border: 1px solid black;
        position: relative;
      }
    </style>
  </head>
    <body>
    <h1>Picture Puzzle</h1>
    <div class="puzzle-board">
      <img src="image1.jpg" class="puzzle-piece" id="piece1" onclick="swapPieces(this)">
      <img src="image2.jpg" class="puzzle-piece" id="piece2" onclick="swapPieces(this)">
      <img src="image3.jpg" class="puzzle-piece" id="piece3" onclick="swapPieces(this)">
      <img src="image4.jpg" class="puzzle-piece" id="piece4" onclick="swapPieces(this)">
      <img src="image5.jpg" class="puzzle-piece" id="piece5" onclick="swapPieces(this)">
      <img src="image6.jpg" class="puzzle-piece" id="piece6" onclick="swapPieces(this)">
      <img src="image7.jpg" class="puzzle-piece" id="piece7" onclick="swapPieces(this)">
      <img src="image8.jpg" class="puzzle-piece" id="piece8" onclick="swapPieces(this)">
    </div>
  </body>
</html>
