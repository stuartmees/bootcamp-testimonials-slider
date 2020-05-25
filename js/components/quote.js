(function() {

    const innerHTMLQuote = (testimonials, i) => {
        return(
            `<p class="text fade-in">" ${testimonials[i].text} "</p>
            <div>
                <span class="name fade-in">${testimonials[i].name}</span>
                <span class="role fade-in">${testimonials[i].role}</span>
            <div>`
        )
    }            


    function getInnerHTMLQuote(testimonials, i) {
        return innerHTMLQuote(testimonials, i);
    }

    app.getInnerHTMLQuote = getInnerHTMLQuote;

})();