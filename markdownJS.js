var imgWidth = '200px';
var toolImgs = document.getElementsByClassName('toolImage_a');
for(var image in toolImgs){
    if(image && image.style) {
        //toolImg.style.height = '100px';
        image.style.width = imgWidth;
    }
}
    