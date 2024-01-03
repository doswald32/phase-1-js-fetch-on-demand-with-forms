const init = () => {
  const inputForm = document.querySelector("form");
  
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    fetch(`http://127.0.0.1:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        const title = document.querySelector("h4");
        const summary = document.querySelector("p");

        title.textContent = data.title;
        summary.textContent = data.summary;
    });
  });
};

document.addEventListener('DOMContentLoaded', init);