import "./header.css";

export default class Header {
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = "Webpack Heading";
    document.getElementById("app").appendChild(h1);
  }
}
