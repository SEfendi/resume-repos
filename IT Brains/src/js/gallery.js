let imgs = document.querySelectorAll(".gallery-image img");



let modalCarousel = document.getElementById("modal-product-images");

//**************      change main img    ***************





//***************    Media 700px function    ***************/
function myFunction(x) {
    if (x.matches) {
        modalCarousel.remove()
    }
    else {
        let closeModalCarousel = document.getElementById("close-modal-product-images");
        let carouselImgs = document.querySelectorAll(".bg-img");
        let carouselItems = document.querySelectorAll(".carousel-item");
        $('.carousel.myModal').carousel({
            interval: false,
            touch: false
        })


        imgs.forEach((element) => {
            element.addEventListener("click", function () {
                console.log("ds")
                modalCarousel.style.opacity = 1
                modalCarousel.style.display = "block"
                carouselItems.forEach((e) => {
                    if (e.classList.contains("active")) {
                        e.classList.remove("active")
                    }
                    if (element.src === e.children[0].children[0].src) {
                        e.classList.add("active")
                    }
                });
            })
        });



        //****************    close Modal    ******************
        closeModalCarousel.addEventListener("click", function () {
            modalCarousel.style.opacity = 0
            modalCarousel.style.display = "none"
        })


        // ****************    Helper Function    *****************


    }
}

var x = window.matchMedia("(max-width: 340px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)





