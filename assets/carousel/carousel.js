const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove("gallery-item-1");
            el.classList.remove("gallery-item-2");
            el.classList.remove("gallery-item-3");
        });
        this.carouselArray.slice(0, 3).forEach((el,i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }
    setCurrentState(direction) {
        if (direction.className == "gallery-contros-previous") {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls() {
        this.carouselControls.forEach((control) => {
            galleryControlsContainer.appendChild(
                document.createElement("button")
            ).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerHTML = `<img src='./assets/images/${control}-arrow.png'></img>`;
        });
    }
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCaruosel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls
);

exampleCaruosel.setControls();
exampleCaruosel.useControls();
