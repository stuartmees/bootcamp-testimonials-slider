(function() {

    var testimonials = [
        {
            image: 'assets/images/image-john.jpg',
            text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
            name: 'John Tarkpor',
            role: 'Junior Front-end Developer'
        },
        {
            image: 'assets/images/image-tanya.jpg',
            text: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
            name: 'Tanya Sinclair',
            role: 'UX Engineer'
        }
    ];

    function getTestimonials() {
        return testimonials;
    }; 

    app.getTestimonials = getTestimonials;

})();
