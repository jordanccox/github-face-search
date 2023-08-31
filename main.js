const getInput = () => {
  const shaHash = document.querySelector("#search").value;

  fetchUserData(shaHash);

  document.querySelector("#search").value = "";
};

const fetchUserData = async (shaHash) => {
  const url = `https://api.github.com/repos/facebook/react/commits/${shaHash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    addData(data);
  } catch (error) {
    console.log(error);
  }
};

const addData = (data) => {
  const user = {
    login: data.author.login,
    avatar: data.author.avatar_url,
    url: data.author.html_url
  };

  renderData(user);
};

const renderData = (user) => {
  const template = `
  <div class="col-center">
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="${user.avatar}" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-center">Login: ${user.login}</h5>
        <div class="text-center"><a href="${user.url}" class="btn btn-primary" target="_blank">View GitHub Profile</a></div>
      </div>
    </div>
  </div>
  `;

  document.querySelector(".results").replaceChildren();
  document.querySelector(".results").insertAdjacentHTML("beforeend", template);
};

// Event listeners for "Enter" and Search btn
const input = document.querySelector("#search");
const submit = document.querySelector("#submit");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#submit").click();
  }
});

submit.addEventListener("click", getInput);
