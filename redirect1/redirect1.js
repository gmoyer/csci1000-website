const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.index; // "some_value"

setTimeout(() => {
    window.location.href = "../redirect2/redirect2.html?index=" + (parseInt(value)+1);
}, 10);