import Image from "../assets/image.jpg";
export default function AddImage() {
  var img = document.createElement("img");
  img.alt = "image";
  img.width = 300;
  img.src = Image;

  document.getElementById("app").appendChild(img);
}
