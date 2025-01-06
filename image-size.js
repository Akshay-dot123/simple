const sizeOf = require("image-size")
const dimensions = sizeOf("images/Nature.jpg")  // sync
console.log(dimensions.width, dimensions.height)

sizeOf("images/Nature.jpg", function (err, dimensions) {  // async
  console.log(dimensions.width, dimensions.height)
})

// Get image size from online
const https = require("https");
// Direct link to an image file
const imgUrl = "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg"; // Replace with a valid direct image URL
const options = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
  }
};

https.get(imgUrl, options, function (response) {
  const chunks = [];

  // Check if response status is OK
  if (response.statusCode !== 200) {
    console.error(`Failed to get image. Status code: ${response.statusCode}`);
    return;
  }

  response
    .on("data", function (chunk) {
      chunks.push(chunk);
    })
    .on("end", function () {
      const buffer = Buffer.concat(chunks);
      // Attempt to get dimensions of the image buffer
      try {
        const dimensions = sizeOf(buffer);
        console.log(`Width: ${dimensions.width}, Height: ${dimensions.height}`);
      } catch (error) {
        console.error('Error getting image dimensions:', error);
      }
    });
}).on("error", function (err) {
  console.error('Error fetching the image:', err);
});