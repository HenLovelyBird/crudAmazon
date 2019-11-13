const url = "https://striveschool.herokuapp.com/api/product";

const username = "user16";
const password = "c9WEUxMS294hN6fF";
window.onload = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  });
  console.log(response);
};

// const url = "https://strive-school-testing-apis.herokuapp.com/api/product/";

// getProducts = async () => {
//     const response = await fetch(url);
//     return await response.json();
// };

// getProduct = async id => {
//     const response = await fetch (url + id);
//     return await response.json();
// };

// saveProduct = async event => {
//     const response = await fetch (url, {
//         method: "POST", 
//         body:JSON.stringify(product),
//         headers: new Headers({
//             "Authorization": `Basic ${base64.encode(`${username}:${c9WEUxMS294hN6fF}`)}`
//             // "Content-Type": "application/json"
//         })
//     });
//     return response;
// };
