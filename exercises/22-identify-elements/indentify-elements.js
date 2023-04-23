(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
const selectButtons = document.querySelectorAll(".button");
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");

selectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const planName = button.id;
    notificationMessage.innerText = `Thank you for purchasing the ${planName} plan!`;
    notification.style.display = "block";
  });
});
const deleteButton = notification.querySelector(".delete");
deleteButton.addEventListener("click", () => {
  notification.style.display = "none";
});

})();
