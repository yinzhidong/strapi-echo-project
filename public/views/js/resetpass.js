(function () {
  String.prototype.isBlank = function () {
    return String(this).trim() === "";
  };
})();

const getLocationSearch = () => {
  let search = window.location.search;
  return search.length > 0 ? search.substr(1) : null;
};

const parseURLQueryObject = () => {
  var queryString = getLocationSearch();
  if (!queryString) {
    return null;
  }

  var params = {},
    queries,
    temp,
    i,
    l;

  // Split into key/value pairs
  queries = queryString.split("&");

  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++) {
    temp = queries[i].split("=");
    params[temp[0]] = temp[1];
  }

  return params;
};

const fetchJSON = async (url, body = {}) => {
  let response = await fetch(`${url}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
};

const initCodeEle = (ele) => {
  var urlobj = parseURLQueryObject();
  urlobj && urlobj.code && ele && (ele.value = urlobj.code);
};

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("reset-password");
  const submitBtn = document.getElementById("submitBtn");
  const codeEle = document.getElementById("code");

  initCodeEle(codeEle);


  // 重置按钮
  submitBtn.addEventListener("click", async (e) => {
    // formdata to json
    const data = new FormData(form);
    const payLoad = Object.fromEntries(data.entries());

    if (
      payLoad.password.isBlank() ||
      payLoad.passwordConfirmation.isBlank() ||
      payLoad.code.isBlank()
    ) {
      alert("请输入password或者passwordConfirmation！！");
      return;
    }
    // console.log(payLoad);

    let response = await fetchJSON(
      "http://localhost:1337/api/auth/reset-password",
      payLoad
    );
    console.log(response);
    
  });
});

// console.log("load....");
