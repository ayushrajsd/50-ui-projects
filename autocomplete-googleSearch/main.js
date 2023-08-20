import getCachedCountries from "./fetchData.js";

// getCountries("india").then(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");
const getCountries = getCachedCountries(10000);

const handleSearch = async (keyword) => {
  const ans = await getCountries(keyword);
  return ans.map((country) => country.name.common);

  //   console.log(countries);
  //   populateSuggestionBox(ans);
};

const populateSuggestionBox = (countries) => {
  if (countries.length) {
    suggestionBox.classList.add("visible");
  } else {
    suggestionBox.classList.remove("visible");
  }
  suggestionBox.innerHTML = "";
  const fragment = document.createDocumentFragment();
  countries.forEach((country) => {
    const li = document.createElement("li");
    li.classList.add("list");
    li.innerText = country;
    fragment.append(li);
  });

  suggestionBox.appendChild(fragment);
};

const handleInput = async (e) => {
  const key = e.target.value;
  const countries = await handleSearch(key);
  populateSuggestionBox(countries);

  //   console.log(e.target.value);
};

inputBox.addEventListener("input", handleInput);

function debounce(fn, delay = 500) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    const ctx = this;
    timeout = setTimeout(() => {
      fn.call(ctx, ...args);
    }, delay);
  };
}
