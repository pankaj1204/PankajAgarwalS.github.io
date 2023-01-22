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
    </style>
  </head>
  <body>
    <h1>Photo Gallery</h1>
    <div class="photo-grid">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
        <img src="image4.jpg" alt="Image 4">
        <img src="image5.jpg" alt="Image 5">
        <img src="image6.jpg" alt="Image 6">
    </div>
  </body>
</html>
