import jewelleries from "./data-base/jewelleries.json"
import createList from "./templaties/jewelleries.hbs";

const body = document.querySelector("body")
console.log(createList(jewelleries));

body.innerHTML = createList(jewelleries);