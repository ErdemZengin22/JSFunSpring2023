(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
  const button = document.querySelector("button");
const image = document.getElementById("image");
let scale = 1;
let increment = 0.00005;

const getRandomImage = async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    if (response.data.status === "success") {
      const imageUrl = response.data.message;
      const img = new Image();
      img.src = imageUrl;
      img.onload = function() {
        image.style.width = `${img.width}px`;
        image.style.height = `${img.height}px`;
        image.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        scale = 1;
        animateImage(img.width, img.height);
      };
    } else {
      console.error("Failed to get a random dog image.");
    }
  } catch (error) {
    console.error("Error getting random dog image:", error);
  }
};

const animateImage = (width, height) => {
  scale += increment;
  const increasedWidth = scale * width;
  const increasedHeight = scale * height;
  image.style.backgroundSize = `${increasedWidth}px ${increasedHeight}px`;
  requestAnimationFrame(() => animateImage(width, height));
};

button.addEventListener("click", getRandomImage);
})();
