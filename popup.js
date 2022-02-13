getLicense(function (license, error) {
  console.log("got license: ");
  if (!error && license && license.result && license.accessLevel === "FULL") {
    unlock();
  }
});

var append = function (text) {
  data.appendChild(document.createTextNode(text));
};
const search = ({
  data
}) => {
  var jsn = JSON.parse(data);
  var res = "[";
  for (var element of jsn) {
    var keys = Object.keys(element);

    // leave out all elements without the following keys
    if (keys.indexOf('lastVisitTime') == -1 || keys.indexOf('url') == -1 || keys.indexOf('title') == -1)
      continue;

    var comma = ", ";
    res = res.concat(comma.concat(JSON.stringify(element)));
  }
  res = res.concat(']').replace(/^\[,\s*/, "["); // remove first comma
  data2.appendChild(document.createTextNode(res));
};

var download = function (format) {
  document.getElementById("content").innerText = "preparing file...";

  chrome.history.search({
      text: "",
      maxResults: 1000000
    },
    function (res) {
      var text;

      append("[");
      for (var i = 0; i < res.length; i++) {
        text = JSON.stringify(res[i]);
        if (i !== res.length - 1) text = text + ",";
        append(text);
      }
      append("]");

      search({
        data: data.innerText
      });
    }
  );
};

document.addEventListener("DOMContentLoaded", function () {
  window.data = document.getElementById("data");
  window.jsonButton = document.getElementById("json");
  window.rejectButton = document.getElementById("reject");

  jsonButton.onclick = function () {
    download("json");
  };

  rejectButton.onclick = function () {
    window.alert("We can not process your data without your consent");
  };
});