window.addEventListener('DOMContentLoaded', function(){
    let i = 0;
    const testimonials = app.getTestimonials();

    const prevTestButton = document.getElementsByClassName('prev-testimonial')[0];
    const nextTestButton = document.getElementsByClassName('next-testimonial')[0];
    const testimonial = document.getElementsByClassName('testimonial')[0];

    function popuplateTestimonial() {
        const innerHTML = app.getInnerHTML(testimonials, i);
        
        testimonial.innerHTML = innerHTML;
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