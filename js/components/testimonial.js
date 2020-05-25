(function() {

    const innerHTML = (testimonials, i) => {
        return(
            `<figure class="fade-in">
                <img class="image" src=${testimonials[i].image} width='400' heigh='200'>
                <figcaption>
                    <p class="text">" ${testimonials[i].text} "</p>
                    <div>
                        <span class="name">${testimonials[i].name}</span>
                        <span class="role">${testimonials[i].role}</span>
                    <div>
                </figcaption>
            </figure>`
        )
    }            


    function getInnerHTML(testimonials, i) {
        return innerHTML(testimonials, i);
    }

    app.getInnerHTML = getInnerHTML;

})();