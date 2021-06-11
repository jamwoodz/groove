//Initializes the canvas to A4 size and the default layout
function initCanvas() {
  setCanvasSize("A4");

  var canvas = document.getElementById("certificateCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setLayout("default");
}

//Changes the canvas size to a pre-defined set of values. NOTE: resets the context
function setCanvasSize(sizeId) {
  var canvas = document.getElementById("certificateCanvas");

  switch (sizeId.toLowerCase()) {
    case "a4":
      canvas.setAttribute("width", 1050);
      canvas.setAttribute("height", 1485);
      //TODO: make scaling more intuitive (CSS scaling distorts the canvas)
      break;
    //TODO: add other sizes
  }
}

//Loads the assets and arranges the canvas according to the pre-defined layout
function setLayout(layoutId) {
  var canvas = document.getElementById("certificateCanvas");
  var ctx = canvas.getContext("2d");
  switch (layoutId.toLowerCase()) {
    case "default":
      // ctx.drawImage(document.getElementById("canvasBackground"), 0, 0);
      // ctx.drawImage(document.getElementById("logo"), 0, 0);

      addSvg(0, 0, "./img/A4_Default/A4_alap_kep.png", canvas);
      addSvg(80, 50, "./img/Groove logo L.svg", canvas);
      addSvg(300, 50, "./img/Helka.svg", canvas);
      // addSvg(600, 50, "./img/Utvonal.svg", canvas);      
      addSvg(30, 1250, "./img/MAX Adat panel.svg", canvas);
      addSvg(50, 900, "./img/Gratulalunk.svg", canvas);
      // ctx.fillText("Hello World", 10, 50);
      break;
    //TODO: add other layout definitions
  }
}
function addSvg(inPosX, inPosY, imgPath, canvas, imageWidth , imageHeight) {
  //Set the serialized SVG as the source of the img element
  var img = new Image(imageWidth,imageHeight);
  img.src = imgPath;
  console.log(img.src);
  // var canvas = document.getElementById("certificateCanvas");
  var ctx = canvas.getContext("2d");

  //Draw the image onto the canvas
  ctx.drawImage(img, inPosX, inPosY);
}
function generatePdf() {
  var canvas = document.getElementById("certificateCanvas");
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jspdf.jsPDF();
  pdf.addImage(imgData, "JPEG", 0, 0);
  pdf.save("download.pdf");
}

//download picture as image
function downloadAsImage() {
  var canvas = document.getElementById("certificateCanvas");
  var dt = canvas.toDataURL("image/jpeg");
  this.href = dt;
}

download_img = function (el) {
  var canvas = document.getElementById("certificateCanvas");
  var ctx = canvas.getContext("2d");
  //   var ox = canvas.width / 2;
  //   var oy = canvas.height / 2;
  //   ctx.font = "42px serif";
  //   ctx.textAlign = "center";
  //   ctx.textBaseline = "middle";
  //   ctx.fillStyle = "#800";
  //   ctx.fillRect(ox / 2, oy / 2, ox, oy);
  // get image URI from canvas object
  var imageURI = canvas.toDataURL("image/jpg");
  el.href = imageURI;
};
