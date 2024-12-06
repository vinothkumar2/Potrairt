// script.js

// Song details stored in a JSON-like object
const songDetails = {
  "Rasaali": {
    year: 2016,
    language: "Tamil",
    album: "Achcham Yenbadhu Madamaiyada",
  },
  "Vaan": {
    year: 2018,
    language: "Tamil",
    album: "Kaatrin Mozhi",
  },
  "Ninnukori": {
    year: 2017,
    language: "Telugu",
    album: "Ninnu Kori",
  },
  "Khonok Aandam": {
    year: 2024,
    language: "Farsi",
    album: "Single",
  },
  // Add more songs here
};

// Add interactivity to all map areas
document.querySelectorAll("area").forEach((area) => {
  // Display song details on hover
  area.addEventListener("mouseover", function () {
    const songInfo = document.getElementById("song-info");
    const songData = songDetails[this.dataset.song];
    if (songData) {
      songInfo.innerHTML = `
        <strong>${this.dataset.song}</strong><br>
        Language: ${songData.language}<br>
        Year: ${songData.year}<br>
        Album: ${songData.album}
      `;
      songInfo.style.visibility = "visible";
      songInfo.style.opacity = "1";
    }
  });

  // Hide song details when the mouse leaves the area
  area.addEventListener("mouseout", function () {
    const songInfo = document.getElementById("song-info");
    songInfo.style.visibility = "hidden";
    songInfo.style.opacity = "0";
  });
});
const songs = document.querySelectorAll('.song-overlay');

songs.forEach((song) => {
    song.addEventListener('mouseover', () => {
        song.style.display = 'block';
    });

    song.addEventListener('mouseout', () => {
        song.style.display = 'none';
    });
});
