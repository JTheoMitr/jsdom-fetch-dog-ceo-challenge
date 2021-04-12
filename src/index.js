console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreeds();



function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
        json.message.forEach(image => addImage(image))
      });
  }

  function addImage(picUrl) {
    const container = document.getElementById("dog-image-container");
    const newImage = document.createElement('img');
    newImage.src = picUrl;
    container.appendChild(newImage);
  }

  function loadBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(results => {
        const breeds = Object.keys(results.message);
        addBreeds(breeds);
      });
  }

  function paintBlack(li) {
    if (li.style.color == "blue") {
        li.style.color = ""
    }
  }


  function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener("click", function(event) {
        ul.querySelectorAll("li").forEach(paintBlack);
        event.target.style.color = "blue";
      });
    });
  }

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener('change', filterBreeds)

  function filterBreeds(event) {
      const userSelection = event.target.value
      const breedList = document.getElementsByTagName("li")

      for (const breed of breedList) {
          if (breed.innerText.startsWith(userSelection)) {
              breed.style.display = ""
          } else {
            breed.style.display = "none"
            }
        }


    }

  })
