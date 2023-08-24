const loadImageOne = document.getElementById("load-one");
const loadImageTwo = document.getElementById("load-two");

const getImage = (naturePhotos) => {
  const photos = naturePhotos.photos;
  const containerPhotos = document.getElementById("book");
  containerPhotos.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    containerPhotos.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
         <img src="${photos[i].src.large}" style="object-fit: cover" height="200px">
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `;
  }
};
loadImageOne.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=nature", {
    headers: {
      Authorization: "lbZxEUsGiESDpuXjg1igT1lnnokBw31urgWZleGRlZsa5tXsNDUteewa",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((naturePhotos) => {
      getImage(naturePhotos);
    })
    .catch((error) => console.log(error));
});

loadImageTwo.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=Tigers", {
    headers: {
      Authorization: "lbZxEUsGiESDpuXjg1igT1lnnokBw31urgWZleGRlZsa5tXsNDUteewa",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((naturePhotos) => {
      getImage(naturePhotos);
    })
    .catch((error) => console.log(error));
});
