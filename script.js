const divEle = document.querySelector(".card-container");

// Create XMLHttpRequest

function getDetails() {
  const req = new XMLHttpRequest();

  // open Request
  req.open("GET", `https://dummyjson.com/users/`);
  // Send Request
  req.send();
  // addEventListener on request
  // console.log(this.responseText)
  req.addEventListener("load", function () {
    // console.log(this.responseText);
    let data = JSON.parse(this.responseText);//converts string to object
    console.log(data.users);
    data.users.forEach((user) => { 
      // console.log(user);
      let divEl = `<div class="user-card">
  <img src=${user.image} alt="Profile Image" />
  <h3>${user.firstName}</h3>
  <h3>${user.lastName}</h3>
  <p class="email">${user.email}</p>
  <button class="btn">View Profile</button>
  </div>`;

      // divEle.innerHTML=divEl;
      divEle.insertAdjacentHTML("afterbegin", divEl);
    });
  });
  // email.innerHTML=data.email;
}

getDetails();
// getDetails(2);
// getDetails(15);
