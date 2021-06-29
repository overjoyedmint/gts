window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".navbar");
navbar.addEventListener('click', ()=>{
    console.log('click')
})

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}














    document.addEventListener('DOMContentLoaded', function () {
        new Splide(".splide", {
          perPage: 3,

          breakpoints: {
            1000: {
              perPage: 2,
              width: "550px",
              gap: 30,
            },
            720: {
              perPage: 2,
              width: "450px",
              gap: 35,
            },

            600: {
              perPage: 1,
              width: "350px",
              gap: 30,
              
            },
          },

          rewind: true,
          pagination: false,
          width: "1050px",
          arrowPath:
            "M1.72949 15.52V7.47266L7.16382 11.5564L12.5981 15.52L7.16382 19.4836L1.72949 23.5673V15.52Z",
          gap: 26,
          padding: 35,
        }).mount();
    });













window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 3.5,
    draggable: true,
    dragVelocity: 0.8,

    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 300,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "1.5",
          slidesToScroll: "auto",
          itemwidth: 150,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 767,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2.8",
          slidesToScroll: "auto",
          itemwidth: 280,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 1200,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "3.5",
          slidesToScroll: "auto",
          itemwidth: 150,
        },
      },
    ],
  });
})(
)




  