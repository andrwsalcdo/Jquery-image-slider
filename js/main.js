$(document).ready(function() {
    $('.prev').on('click', function() {

        var currentImg = $('.active');
        var prevImg = currentImg.prev('.slider-inner img'); //prev is jquery fn()

        //if there aren't any images, then it reverts
        //back to the last image in the slider
        if(prevImg.length == 0) {
          prevImg = $('.slider-inner img:last');
        }

        currentImg.removeClass('active'); //remove current image
        prevImg.addClass('active'); //display previous image
    });
    $('.next').on('click', function() {

        var currentImg = $('.active');
        var nextImg = currentImg.next('.slider-inner img'); //next is jquery fn()

        //if there aren't any more images, then it reverts
        //back to the first image in the slider
        if(nextImg.length == 0) {
          nextImg = $('.slider-inner img:first');
        }

        currentImg.removeClass('active'); //remove image
        nextImg.addClass('active'); //display next image
    })
});
