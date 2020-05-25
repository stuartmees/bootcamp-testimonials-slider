(function() {

    const innerHTML = (testimonials, i) => {
        return(
            `<article class="fade-in">
                <section class="photo">
                    <img class="image" src=${testimonials[i].image}>
                </section>

                <section class="quote">
                    <p class="text">" ${testimonials[i].text} "</p>
                    <div>
                        <span class="name">${testimonials[i].name}</span>
                        <span class="role">${testimonials[i].role}</span>
                    <div>
                </section>
            </article>`
        )
    }            


    function getInnerHTML(testimonials, i) {
        return innerHTML(testimonials, i);
    }

    app.getInnerHTML = getInnerHTML;

})();