(function() {

    const innerHTMLPhoto = (testimonials, i) => {
        return(
            `<img class="image" src=${testimonials[i].image}>`
        )
    }            


    function getInnerHTMLPhoto(testimonials, i) {
        return innerHTMLPhoto(testimonials, i);
    }

    app.getInnerHTMLPhoto = getInnerHTMLPhoto;

})();