//Adds an SVG image to the canvas with the pre-defined size and location
function addSvg(inPosX, inPosY, imgPath){
    //Set the serialized SVG as the source of the img element
    var img = new Image();
    img.src = imgPath;
    console.log(img.src)
    var canvas = document.getElementById("certificateCanvas");
    var ctx = canvas.getContext("2d");
    
    //Draw the image onto the canvas
    ctx.drawImage(img, inPosX, inPosY);
}