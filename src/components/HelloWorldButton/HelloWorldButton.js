import "./helloWorldButton.css";

export default class HelloWorldClass {
  btnClassName = "txt";

  render() {
    const btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.onclick = () => {
      const p = document.createElement("p");
      p.innerText = "Hello from webpack";
      p.classList.add(this.btnClassName);
      document.getElementById("app").appendChild(p);
    };

    document.getElementById("app").appendChild(btn);
  }
}
