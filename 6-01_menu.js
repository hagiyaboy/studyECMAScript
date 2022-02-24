"use strict";

// まずは「$ (document).ready(function() {});」を書く
$ (document).ready(function() {
    $ (".submenu h3").on("click", function(){
        $ (this).next().toggleClass("hidden");
    });
});