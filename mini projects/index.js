const observer= new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
          else{
              entry.target.classList.remove('show');
          }
});
});
const hiddenElements = document.querySelectorAll(".hiddenn");
hiddenElements.forEach((el) => observer.observe(el));

// articles trans

// window.onscroll = function() {
//   myFunction();
// };

// function myFunction() {
//   // Get the first element with the class 'articles'
//   var articlesElement = document.querySelector('.nikku');

//   if (document.documentElement.scrollTop >2000) {
//       // Update the position property of the element
//       articlesElement.style.position = 'absolute';
//   } else {
//       // Reset the position property if scroll position is less than 500
//       articlesElement.style.position = 'sticky';
//   }
// }
