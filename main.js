const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;
navBtn.addEventListener('click', function (event)
{
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('close');
})
window.addEventListener('scroll', function ()
{
    if (mobileNav.classList.contains('mobile-nav-active')) {
        mobileNav.classList.toggle('mobile-nav-active');
        navBtn.classList.toggle('close');
    };
    
})
window.addEventListener('click', function ()
{
    if (mobileNav.classList.contains('mobile-nav-active')) {
        navBtn.classList.toggle('close');
        mobileNav.classList.toggle('mobile-nav-active');
    }
})
mobileNav.addEventListener('click', function (event)
{
    event.stopPropagation();
})


$(function ()
{
    let header = $("#headerJs");
    let intro = $("#introJs");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function ()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
        // introH 
       
    })
    
});

// scroll
$("[data-scroll]").on("click", function (event)
{
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset - 100
    }, 800)
})