(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */
  const dropdown = document.getElementById('dropdown');
  const img = document.getElementById('get-schwifty');
  
  
  axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      const characters = response.data.results;

      characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id;
        option.text = character.name;
        dropdown.appendChild(option);
      });

      dropdown.addEventListener('change', (event) => {
        const characterId = event.target.value;

        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then(response => {
            const character = response.data;

            img.src = character.image;
            document.getElementById('photo-caption').textContent = character.name;
          })
          .catch(error => console.error(error));
      });
    })
    .catch(error => console.error(error));
})();
