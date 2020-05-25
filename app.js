
// let testimonials = [
//     {
//         image: 'assets/images/image-john.jpg',
//         text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
//         name: 'John Tarkpor',
//         role: 'Junior Front-end Developer'
//     },
//     {
//         image: 'assets/images/image-tanya.jpg',
//         text: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
//         name: 'Tanya Sinclair',
//         role: 'UX Engineer'
//     }
// ];

let app = {

} 

// window.addEventListener('DOMContentLoaded', function(){
    
//     let i = 0;
//     const testimonials = app.getTestimonials();

//     const prevTestButton = document.getElementsByClassName('prev-testimonial')[0];
//     const nextTestButton = document.getElementsByClassName('next-testimonial')[0];
//     const testimonial = document.getElementsByClassName('testimonial')[0];

//     function popuplateTestimonial() {

//         const innerHTML =     
//             `<figure class="fade-in">
//                 <img class="image" src=${testimonials[i].image} width='400' heigh='200'>
//                 <figcaption>
//                     <p class="text">" ${testimonials[i].text} "</p>
//                     <div>
//                         <span class="name">${testimonials[i].name}</span>
//                         <span class="role">${testimonials[i].role}</span>
//                     <div>
//                 </figcaption>
//             </figure>`
        
//         testimonial.innerHTML = innerHTML;

//     };
    
    
//     const prevTest = () => {

//         if (i>0) {
//             i--
//             popuplateTestimonial()
//         };
//     };
    
//     const nextTest = () => {

//         if (i<testimonials.length-1) {
//             i++
//             popuplateTestimonial()
//         };

//     };
    
//     popuplateTestimonial();

//     prevTestButton.onclick = prevTest;
    
//     nextTestButton.onclick = nextTest;

//     window.addEventListener('keydown', function(event){
//         const x = event.which || event.keyCode;
//         switch(x){
//             case 39:
//                 nextTest();
//                 break;
//             case 37:
//                 prevTest();
//                 break;
//         }
//     });
// });



console.log(window)
