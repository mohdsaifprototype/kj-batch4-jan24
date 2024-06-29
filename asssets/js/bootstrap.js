let link = document.createElement("link");
link.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
);
link.setAttribute("rel", "stylesheet");
link.setAttribute(
  "integrity",
  "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
);
link.setAttribute("crossorigin", "anonymous");

let script = document.createElement("script");

script.setAttribute(
  "src",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
);
script.setAttribute(
  "integrity",
  "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
);
script.setAttribute("crossorigin", "anonymous");
// script.setAttribute("defer", "true");
let documentTitle = document.querySelector("title");
documentTitle.after(link);

document.body.append(script);
