document.getElementById("menu").onclick = () => {
  if (document.getElementById("sm-menu").style.display == "none") {
    document.getElementById("sm-menu").style.cssText =
      "display:block !important;";
  } else {
    document.getElementById("sm-menu").style.cssText =
      "display:none !important";
  }
};
