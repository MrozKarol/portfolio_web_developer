const imageConteiner = document.getElementById('image-conteiner');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = 'zSWifBmyYf4RbycUaVS_z6jq7Hw1cwofs0Rvo6jL_xo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements For Links & Photos, and add to DOM

function displayPhotos() {
  // Run finction for each object in photosArray
  photosArray.forEach((photo) => {
    //   Create <a> to link to Unsplah
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Put <img> inside <a>, then put both inside imageConteiner Element
    item.appendChild(img);
    imageConteiner.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    // console.log(photosArray);
    displayPhotos();
  } catch (error) {
    //  Catch Error Here
  }
}

// On Load
getPhotos();
