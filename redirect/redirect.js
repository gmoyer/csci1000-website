const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.index; // "some_value"


if (parseInt(value) > 100) {
  console.log("success!");
  window.location.href = "../griffinsite/index.html";
} else {
  setTimeout(() => {
    location.assign("https://harri665.github.io/redirect1/index.html?index=" + (parseInt(value)+1));
  }, 10);
}
