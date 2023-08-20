// fetch(`https://restcountries.com/v3.1/name/in`)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   })
//   .catch(console.log);
let currentFetch = null;
async function getCountries(keyword) {
  console.log("calling again");
  if (currentFetch !== null) currentFetch.abort();
  currentFetch = new AbortController();
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${keyword}`,
    { signal: currentFetch.signal }
  );
  const res = response.json();
  currentFetch = null;
  if (res.status === 404) {
    console.log("Page not found");
  } else {
    console.log(res);
  }
  return res;
}

function getCachedCountries(timer) {
  const cache = {};
  const expireTime = timer;
  return async function (keyword) {
    if (currentFetch !== null) currentFetch.abort();
    const currentTime = new Date().getTime();
    currentFetch = new AbortController();
    if (cache[keyword]) {
      if (!(cache[keyword].time - currentTime) < expireTime) {
        console.log("returning from cache ", cache[keyword]);
        return cache[keyword].data;
      }
    }
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`,
      { signal: currentFetch.signal }
    );
    const res = response.json();
    cache[keyword] = {
      data: res,
      time: currentTime,
    };
    // console.log("",cache[keyword])
    return res;
  };
}

export default getCachedCountries;
// getCountries("india").then(console.log);
