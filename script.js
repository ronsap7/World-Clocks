$(document).ready(function() {
  function updateClocks() {
    var newYorkTime = moment().tz("America/New_York").format('h:mm:ss A');
    $('#new-york .time').html(newYorkTime);

    var losAngelesTime = moment().tz("America/Los_Angeles").format('h:mm:ss A');
    $('#los-angeles .time').html(losAngelesTime);

    var londonTime = moment().tz("Europe/London").format('h:mm:ss A');
    $('#london .time').html(londonTime);

    var parisTime = moment().tz("Europe/Paris").format('h:mm:ss A');
    $('#paris .time').html(parisTime);

    var johannesburgTime = moment().tz("Africa/Johannesburg").format('h:mm:ss A');
    $('#johannesburg .time').html(johannesburgTime);

    var tokyoTime = moment().tz("Asia/Tokyo").format('h:mm:ss A');
    $('#tokyo .time').html(tokyoTime);

    var sydneyTime = moment().tz("Australia/Sydney").format('h:mm:ss A');
    $('#sydney .time').html(sydneyTime);

    var aucklandTime = moment().tz("Pacific/Auckland").format('h:mm:ss A');
    $('#auckland .time').html(aucklandTime);
  }

  updateClocks();
  setInterval(updateClocks, 1000);
});


const touristSpots = [
  {
    name: 'Eiffel Tower, Paris',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2022/12/Seine-River-Cruise-Paris-France.jpg',
  },
  {
    name: 'Great Wall of China',
    imageUrl: 'https://www.worldatlas.com/r/w960-q80/upload/77/78/41/shutterstock-439146580.jpg',
  },
  {
    name: 'Grand Canyon, USA',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg/1280px-Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg',
  },
  {
    name: 'Berlin Brandenburg Gate, Germany',
    imageUrl: 'https://www.planetware.com/photos-large/D/germany-brandenburg-gate.jpg',
  },
  {
    name: 'London, United Kingdom',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2017/03/2.-london-960x640.jpg',
  },
  {
    name: 'Great Barrier Reef, Australia',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/great-barrier-reef-australia.jpg',
  },
  {
    name: 'Rome, Italy',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/santangelo-bridge-rome.jpg',
  },
  {
    name: 'New York, New York, USA',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/new-york-new-york.jpg',
  },
  {
    name: 'Cape Town, South Africa',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/cape-town.jpg',
  },
  {
    name: ' Barcelona, Spain',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/barcelona-spain.jpg',
  },
  {
    name: ' Sydney, Australia',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/sydney-australia.jpg',
  },
  {
    name: ' Washington, D.C.',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2017/02/washington-dc.jpg',
  },
  {
    name: ' Bali, Indonesia',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2023/04/bali-indonesia.jpg',
  },
  {
    name: ' Hong Kong',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2017/03/11.-hongkong.jpg',
  },
  {
    name: '  Budapest, Hungary',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2022/12/Danube-River-Budapest-Hungary.jpg',
  },
  {
    name: 'San Francisco, California',
    imageUrl: 'https://viatravelers.com/wp-content/uploads/2017/03/13-san-francisco.jpg',
  },
  // Add more tourist spots here
];

function generateRandomTouristSpot() {
  const randomIndex = Math.floor(Math.random() * touristSpots.length);
  return touristSpots[randomIndex];
}

function displayRandomTouristSpots(numberOfSpots) {
  const destinationRow = document.querySelector('.destination-row');
  destinationRow.innerHTML = ''; // Clear the previous tourist spots

  for (let i = 0; i < numberOfSpots; i++) {
    const spot = generateRandomTouristSpot();
    const spotHtml = `
      <div class="col-md-4 col-sm-6">
        <div class="destination">
          <img src="${spot.imageUrl}" alt="${spot.name}">
          <h3>${spot.name}</h3>
        </div>
      </div>
    `;
    destinationRow.innerHTML += spotHtml;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', () => {
    displayRandomTouristSpots(3); // Change the number to display more or fewer spots
  });
});