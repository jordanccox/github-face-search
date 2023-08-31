const getInput = () => {
  const shaHash = document.querySelector("#search").value;

  fetchUserData(shaHash);

  document.querySelector("#search").value = "";
};

const fetchTest = async () => {
  const response = await fetch('https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1');
  const data = await response.json();
  console.log(data.sha);
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

  console.log(user);
};

const renderData = () => {

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

// fetchTest();