(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  const getQuoteButton = document.querySelector('button');
  const blockArea = document.querySelector('blockquote');

  const getRandomQuote = async () => {
    try {
      const response = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      blockArea.textContent = response.data[0];
  }catch (error) {
    console.log(error);
  }
};
getQuoteButton.addEventListener('click', getRandomQuote);
})();
