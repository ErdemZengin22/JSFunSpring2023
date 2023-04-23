(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here
  const mysteryInput = document.querySelector("#mysteryInput");
  const mysteryPrint = document.querySelector("#mysteryPrint");
  const handleMystery = () => {
    mysteryPrint.innerHTML = mysteryInput.value;
  };
  mysteryInput.addEventListener("input", handleMystery);
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
  const searchForm = document.querySelector("#searchForm");
  const searchResult = document.querySelector("#searchResult");
  const searchInput = document.querySelector('#searchInput');
  const resultMessage = (event) => {
    event.preventDefault();
    searchResult.innerHTML = `No results for "${searchInput.value}" found`;
  }
  searchForm.addEventListener("submit", resultMessage);
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
  const termsCheck = document.querySelector("#termCheck");
  const continueButton = document.querySelector("#continueButton");
  const errorMessage = document.querySelector("#errorMessage");
  const thanksMessage = document.querySelector("#thanksMessage");

  const termsHandler = (event) => {
    event.preventDefault();
    if (!termsCheck.checked){
      errorMessage.classList.remove("hidden");
      termsCheck.classList.add("is-invalid");
      thanksMessage.classList.add("hidden");
    }else {
      errorMessage.classList.add("hidden");
      termsCheck.classList.remove("is-invalid");
      thanksMessage.classList.remove("hidden");
    }
  };

  continueButton.addEventListener("click", termsHandler);

})();
