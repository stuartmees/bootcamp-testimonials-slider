# Frontend Mentor Task - Coding Bootcamp Testimonials Slider

## My Focus For the Task:

1) To use semantic HTML
2) To implement a IIFE modular approach, using Vanilla JS and without using a module bundler.
3) Arrange CSS appropriately.
4) To produce app so it resembles the design as closely as possible.


## Issues:

1) In the testimonial component (component/testimonial.js) a fairly large string is returned which I feel now could be constructed using .createElement() methods. 

2) I have not managed to position the buttong appropriately: on changing the view port size it doesnt remain anchored to the bottom of the image.
  * This is due to the .buttons div not being part of the element that contains the image. If this was the case it would be easier to anchor the .buttons div the the bottom of the image.
  * However this solution meant that the .buttons div became part of the testimonial component, which I dont believe it should be as I dont believe the .buttons div should be re-rendered each time the testimonial component changed.
  * A simpler solution to this would be to not use the modular approach and just change the the attributes and innerHTML of elements in the DOM and this wuold enable me to anchor the button to the bottom of the image more simply. I chose not to do this as I wanted to try the modular approach. I will carry on trying! 
  * Any suggestions how this could be solved with CSS greatly appreciated! 

3) Only one break point so far and as the view port decreases to the break point it does not look good so I will be adding more break points in due course.