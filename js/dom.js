window.addEventListener('DOMContentLoaded', function(){
    let i = 0;
    const testimonials = app.getTestimonials();

    const prevTestButton = document.getElementsByClassName('button-prev')[0];
    const nextTestButton = document.getElementsByClassName('button-next')[0];
    const photo = document.getElementsByClassName('photo')[0]
    const quote = document.getElementsByClassName('quote')[0]
    const name = document.getElementsByClassName('name')[0]
    const role = document.getElementsByClassName('role')[0]

    function popuplateTestimonial() {
        photo.src = testimonials[i].image;
        quote.innerHTML = '" ' + testimonials[i].quote + ' "';
        name.innerHTML = testimonials[i].name;
        role.innerHTML = testimonials[i].role;
    };
    
    const prevTest = () => {
        if (i>0) {
            i--
            popuplateTestimonial()
        };
    };
    
    const nextTest = () => {
        if (i<testimonials.length-1) {
            i++
            popuplateTestimonial()
        };
    };
    
    window.addEventListener('keydown', function(event){
        const x = event.which || event.keyCode;
        switch(x){
            case 39:
                nextTest();
                break;
            case 37:
                prevTest();
                break;
        }
    });

    
    prevTestButton.onclick = prevTest;
    
    nextTestButton.onclick = nextTest;
    
    popuplateTestimonial();
});