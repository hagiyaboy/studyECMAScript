"use strict";

const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(function(item, index){
    item.onclick = function(){
        // console.log(this.dataset.image);
        document.getElementById("bigImg").src = this.dataset.image;
    }
});