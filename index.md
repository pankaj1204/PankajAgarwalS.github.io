<!DOCTYPE html>
<html>
  <head>
    <title>Photo Gallery</title>
    <style>
        /* CSS for styling the gallery */
        .photo-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .photo-grid img {
            width: 300px;
            height: 200px;
            margin: 10px;
            object-fit: cover;
        }
        .photo-caption {
            width: 300px;
            text-align: center;
            font-size: 14px;
            font-style: italic;
            margin-top: 5px;
        }
    </style>
  </head>
  <body>
    <h1>Photo Gallery</h1>
    <div class="photo-grid">
        <div class="photo">
            <img src="image1.jpg" alt="Image 1">
            <div class="photo-caption">Caption for Image 1</div>
        </div>
        <div class="photo">
            <img src="image2.jpg" alt="Image 2">
            <div class="photo-caption">Caption for Image 2</div>
        </div>
        <div class="photo">
            <img src="image3.jpg" alt="Image 3">
            <div class="photo-caption">Caption for Image 3</div>
        </div>
        <div class="photo">
            <img src="image4.jpg" alt="Image 4">
            <div class="photo-caption">Caption for Image 4</div>
        </div>
        <div class="photo">
            <img src="image5.jpg" alt="Image 5">
            <div class="photo-caption">Caption for Image 5</div>
        </div>
        <div class="photo">
            <img src="image6.jpg" alt="Image 6">
            <div class="photo-caption">Caption for Image 6</div>
        </div>
    </div>
  </body>
</html>
