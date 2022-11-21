const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = parseInt(params.index); // "some_value"


if (value > 100 && value < 110) {
  console.log("success!");
  window.location.href = "../griffinsite/index.html";
} else if (value > 1100 && value < 1110) {
  console.log("harri");
  //insert link for harrison website
} else {
  setTimeout(() => {
    location.assign("https://harri665.github.io/CS1000PAGE/index.html?index=" + (parseInt(value)+1));
  }, 2);
}
