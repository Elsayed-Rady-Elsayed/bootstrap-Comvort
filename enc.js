console.log("d");
document.getElementById("menu").onclick = () => {
  if (document.getElementById("sm-menu").style.display == "none") {
    document.getElementById("sm-menu").style.display = "block";

    console.log("gg");
  } else {
    document.getElementById("sm-menu").style.display = "none";
  }
};
