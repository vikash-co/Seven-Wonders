const wonders = [
    {
      title: "Great Wall of China",
      image: "images/WallChina.jpg",
      description: "The Great Wall of China is a massive fortification made of stone, brick, tamped earth, wood, and other materials. It was built to protect China from invasions and is the longest wall in the world, stretching over 13,000 miles."
    },
    {
      title: "Petra",
      image: "images/Petra.jpg",
      description: "Petra is an ancient city carved into the red sandstone cliffs in Jordan. It was the capital of the Nabataean Kingdom and is famous for its intricate rock-cut architecture, including the iconic Treasury building."
    },
    {
      title: "Colosseum",
      image: "images/Colosseum.jpg",
      description: "The Colosseum is an amphitheater located in Rome, Italy. It was the largest amphitheater ever built and could hold up to 50,000 spectators. The Colosseum was used for gladiatorial contests, animal hunts, and other public spectacles."
    },
    {
      title: "Chichen Itza",
      image: "images/ChichenItza.jpg",
      description: "Chichen Itza is a Mayan archaeological site in Mexico. It was one of the largest and most important Mayan cities and is known for its pyramid-shaped El Castillo, also known as the Temple of Kukulcan."
    },
    {
      title: "Machu Picchu",
      image: "images/MachuPicchu.jpg",
      description: "Machu Picchu is an ancient Incan city located in the Andes Mountains of Peru. It was built in the 15th century and abandoned a century later. Machu Picchu is renowned for its stunning mountainous landscape and well-preserved ruins."
    },
    {
      title: "Taj Mahal",
      image: "images/TajMahal.jpg",
      description: "The Taj Mahal is a white marble mausoleum situated in Agra, India. It was built by the Mughal emperor Shah Jahan as a memorial for his wife. The Taj Mahal is considered one of the most beautiful buildings in the world."
    },
    {
      title: "Christ the Redeemer",
      image: "images/Christ1.jpg",
      description: "Christ the Redeemer is a statue of Jesus Christ located in Rio de Janeiro, Brazil. It stands atop the Corcovado mountain and has become an iconic symbol of Rio and Brazil. The statue is one of the New Seven Wonders of the World."
    }
  ];
  
  
  function showDetails(index) {
    const modal = document.getElementById("details-modal");
    const titleElement = document.getElementById("wonder-title");
    const imageElement = document.getElementById("wonder-image");
    const descriptionElement = document.getElementById("wonder-description");
  
    titleElement.textContent = wonders[index].title;
    imageElement.src = wonders[index].image;
    descriptionElement.textContent = wonders[index].description;
  
    modal.style.display = "block";
  }
  
  function hideDetails() {
    const modal = document.getElementById("details-modal");
    modal.style.display = "none";
  }
  