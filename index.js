console.log('slider up and running')

let i = 0;

let testimonials = [
    {
        image: 'assets/images/image-tanya.jpg',
        text: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
        name: 'Tanya Sinclair',
        role: 'UX Engineer'
    },
    {
        image: 'assets/images/image-john.jpg',
        text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer'
    },
];

window.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementsByClassName('change-testimonial')[0];
    const image = document.getElementsByClassName('image')[0];
    const text = document.getElementsByClassName('text')[0];
    const name = document.getElementsByClassName('name')[0];
    const role = document.getElementsByClassName('role')[0];


    function popuplateTestimonial() {
        image.src = testimonials[i].image;
        text.innerHTML = testimonials[i].text;
        name.innerHTML = testimonials[i].name;
        role.innerHTML = testimonials[i].role;
    };

    popuplateTestimonial();

    button.onclick = () => {
        if ( i === 0) {
            i = 1
        } else {
            i = 0
        };
    
        popuplateTestimonial()
    }
})



