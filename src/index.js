import HelloWorld from "./HelloWorld";
import HelloWorldButton from "./components/HelloWorldButton/HelloWorldButton";
import Header from "./components/Header/Header";

HelloWorld();

const header = new Header();
header.render();

const btn = new HelloWorldButton();
btn.render();
