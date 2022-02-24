"use strict";

// 配列をつくる
const images = ["book-js/5-05_images/image1.jpg",
"book-js/5-05_images/image2.jpg",
"book-js/5-05_images/image3.jpg",
"book-js/5-05_images/image4.jpg",
"book-js/5-05_images/image5.jpg"];
images.forEach(function(item,index){
    preloadImages(item);
});
let current = 0;

function changeImage(num){
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById("main-image").src = images[current];
        pageNum();
    }
};

function pageNum() {
    document.getElementById("page").textContent = `${current+1}/${images.length}`;
};

function preloadImages(path){
    let imgTag = document.createElement("img");
    imgTag.src = path;
}

pageNum();

document.getElementById("prev").onclick = function(){
    changeImage(-1);
};

document.getElementById("next").onclick = function(){
    changeImage(1);
}