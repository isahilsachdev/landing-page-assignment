const fieldCheck = (e) => {
    if(e.value != "") {
        e.parentElement.querySelector("label").classList.add("active");
        if(e.parentElement.classList.contains("error")) {
            e.parentElement.classList.remove("error");
        }
    }
    else {
        e.parentElement.querySelector("label").classList.remove("active");
    }
}


var splide = new Splide( '.testiminal__slider', {
    gap    : '1rem',
    breakpoints: {
        991: {
          arrows: false,
        },
    }
});
splide.mount();

const formSubmit = () => {
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let businessEmail = document.querySelector("#business-email");
    let company = document.querySelector("#company");
    let country = document.querySelector("#country");

    if(firstName.value.trim() == "") {
        firstName.parentElement.classList.remove("error");
        lastName.parentElement.classList.remove("error");
        businessEmail.parentElement.classList.remove("error");
        company.parentElement.classList.remove("error");
        country.parentElement.classList.remove("error");

        firstName.parentElement.classList.add("error");
        firstName.focus()
    }
    else if(lastName.value.trim() == "") {
        firstName.parentElement.classList.remove("error");
        lastName.parentElement.classList.remove("error");
        businessEmail.parentElement.classList.remove("error");
        company.parentElement.classList.remove("error");
        country.parentElement.classList.remove("error");

        lastName.parentElement.classList.add("error");
        lastName.focus()
    }
    else if(businessEmail.value.trim() == "") {
        firstName.parentElement.classList.remove("error");
        lastName.parentElement.classList.remove("error");
        businessEmail.parentElement.classList.remove("error");
        company.parentElement.classList.remove("error");
        country.parentElement.classList.remove("error");

        businessEmail.parentElement.classList.add("error");
        businessEmail.focus()
    }
    else if(company.value.trim() == "") {
        firstName.parentElement.classList.remove("error");
        lastName.parentElement.classList.remove("error");
        businessEmail.parentElement.classList.remove("error");
        company.parentElement.classList.remove("error");
        country.parentElement.classList.remove("error");

        company.parentElement.classList.add("error");
        company.focus()
    }
    else if(country.value.trim() == "") {
        firstName.parentElement.classList.remove("error");
        lastName.parentElement.classList.remove("error");
        businessEmail.parentElement.classList.remove("error");
        company.parentElement.classList.remove("error");
        country.parentElement.classList.remove("error");

        country.parentElement.classList.add("error");
        country.focus()
    }
    else {
        firstName.value = "";
        lastName.value = "";
        businessEmail.value = "";
        company.value = "";
        country.value = "";
        window.location.href = "thanks.html"
    }
}

const videoPopupToggle = () => {
    let body = document.querySelector("body");
    let videoPopupShadow = document.querySelector(".video__popup__shadow");
    let videoPopup = document.querySelector(".video__popup");
    let video = videoPopup.querySelector("video");
    if(videoPopup.classList.contains("video__popup__hide")) {
        videoPopup.classList.remove("video__popup__hide");
        videoPopupShadow.classList.remove("video__popup__shadow__hide");
        // body.style.overflowY = "hidden";
        video.currentTime = 0;
        video.play();

    }
    else {
        videoPopup.classList.add("video__popup__hide");
        videoPopupShadow.classList.add("video__popup__shadow__hide");
        // body.style.overflowY = "auto";
        video.pause();
    }
}

const navbarToggle = () => {
    let mainMenu = document.querySelector(".menu__wrap");
    if(mainMenu.classList.contains("main__menu__active")) {
        mainMenu.classList.remove("main__menu__active");
    }
    else{
        mainMenu.classList.add("main__menu__active");
    }
}