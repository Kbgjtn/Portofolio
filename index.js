const aboutTop = document.getElementById("about").offsetTop;
const expertiseTop = document.getElementById("expertise").offsetTop;
const projectsTop = document.getElementById("projects").offsetTop;
const commentsTop = document.getElementById("comments").offsetTop;

const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
const navExpertise = document.getElementById("nav-expertise");
const navProjects = document.getElementById("nav-projects");
const navContacts = document.getElementById("nav-contacts");

window.addEventListener("scroll", scrollHandler);

if (window.pageYOffset === 0) {
    navHome.classList.add("active");
    removeClass("home");
}

function scrollHandler() {
    let scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
        navHome.classList.add("active");
        removeClass("home");
    }
    if (scrollTop > aboutTop && scrollTop < expertiseTop) {
        navAbout.classList.add("active");
        removeClass("about");
    }
    if (scrollTop > expertiseTop && scrollTop < projectsTop) {
        navExpertise.classList.add("active");
        removeClass("expertise");
    }
    if (scrollTop > projectsTop && scrollTop < commentsTop) {
        navProjects.classList.add("active");
        removeClass("projects");
    }
    if (scrollTop > commentsTop) {
        navContacts.classList.add("active");
        removeClass("contacts");
    }
}

function removeClass(cond) {
    switch (cond) {
        case "home":
            navAbout.classList.remove("active");
            navExpertise.classList.remove("active");
            navProjects.classList.remove("active");
            navContacts.classList.remove("active");
            break;
        case "about":
            navHome.classList.remove("active");
            navExpertise.classList.remove("active");
            navProjects.classList.remove("active");
            navContacts.classList.remove("active");
            break;
        case "expertise":
            navHome.classList.remove("active");
            navAbout.classList.remove("active");
            navProjects.classList.remove("active");
            navContacts.classList.remove("active");
            break;
        case "projects":
            navHome.classList.remove("active");
            navAbout.classList.remove("active");
            navExpertise.classList.remove("active");
            navContacts.classList.remove("active");
            break;
        case "contacts":
            navHome.classList.remove("active");
            navAbout.classList.remove("active");
            navExpertise.classList.remove("active");
            navProjects.classList.remove("active");
            break;
        default:
            break;
    }
}

$(document).ready(function () {
    function _slider(id) {
        var slidewidth = $(".slider ul li").width();
        var slideheight = $(".slider ul li").outerHeight();

        $(".slider").css({ height: slideheight, width: slidewidth });
        $(".slider ul li:not(.active)").css({ left: slidewidth });
        if ($(".slider ul li:nth-child(1)").hasClass("active")) {
            $(".slider ul li:last-child")
                .css({ left: -slidewidth }, -200)
                .prependTo(".slider ul");
        }
        function moveright() {
            var slideheight = $(".slider ul li.active").next().height();
            var slidewidth = $(".slider ul li.active").next().width();
            $(".slider").animate(
                { height: slideheight, width: slidewidth },
                200
            );

            if ($(".slider ul li:nth-last-child(2)").hasClass("active")) {
                $(".slider ul li:first-child")
                    .css({ left: slidewidth }, -200)
                    .appendTo(".slider ul");
                $(".slider ul li.active")
                    .css({ left: -slidewidth }, -200)
                    .removeClass("active")
                    .next()
                    .addClass("active")
                    .css({ left: 0 }, -200);
            } else {
                $(".slider ul li.active")
                    .css({ left: -slidewidth }, -200)
                    .removeClass("active")
                    .next()
                    .addClass("active")
                    .css({ left: 0 }, -200);
            }
        }
        function moveleft() {
            var slideheight = $(".slider ul li.active").prev().height();
            var slidewidth = $(".slider ul li.active").prev().width();
            $(".slider").animate(
                { height: slideheight, width: slidewidth },
                200
            );

            if ($(".slider ul li:nth-child(2)").hasClass("active")) {
                $(".slider ul li:last-child")
                    .css({ left: -slidewidth }, -200)
                    .prependTo(".slider ul");
                $(".slider ul li.active")
                    .removeClass("active")
                    .css({ left: slidewidth }, -200)
                    .prev()
                    .addClass("active")
                    .css({ left: 0 }, -200);
            } else {
                $(".slider ul li.active")
                    .removeClass("active")
                    .css({ left: slidewidth }, -200)
                    .prev()
                    .addClass("active")
                    .css({ left: 0 }, -200);
            }
        }

        $(".control_next").on("click", function () {
            moveright();
        });
        $(".control_prev").on("click", function () {
            moveleft();
        });
    }
    _slider("slider_");
});

const myFormComment = document.querySelector(".form-input #firstName");
// alert(myFormComment.value);
