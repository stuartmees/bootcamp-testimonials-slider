let i = 0;

let testimonials = [
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

window.addEventListener('DOMContentLoaded', function(){
    const prevTest = document.getElementsByClassName('prev-testimonial')[0];
    const nextTest = document.getElementsByClassName('next-testimonial')[0];
    const image = document.getElementsByClassName('image')[0];
    const text = document.getElementsByClassName('text')[0];
    const name = document.getElementsByClassName('name')[0];
    const role = document.getElementsByClassName('role')[0];
    const testimonial = document.getElementsByClassName('testimonial')[0];

    function popuplateTestimonial() {
        const innerHTML =     
            `<figure class="fade-in">
                <figcaption>
                    <p class="text">" ${testimonials[i].text} "</p>
                        <div>
                            <span class="name">${testimonials[i].name}</span>
                            <span class="role">${testimonials[i].role}</span>
                        <div>
                </figcaption>
                <img class="image" src=${testimonials[i].image} width='400' heigh='200'>
            </figure>`

        testimonial.innerHTML = innerHTML;
    };

    prevTest.onclick = () => {
        console.log(i)
        if (i>0) {
            i--
            popuplateTestimonial()
        };
    };

    nextTest.onclick = () => {
        console.log(i)
        if (i<testimonials.length-1) {
            i++
            popuplateTestimonial()
        };
    };

    popuplateTestimonial();
})



