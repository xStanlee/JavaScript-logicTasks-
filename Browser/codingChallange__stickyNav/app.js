document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const stickyPoint = navbar.offsetTop;
    let prevPossition = 0;
    let sticked = false;


    document.addEventListener('scroll', () => {
        stickAnNavbar(stickyPoint, window.scrollY);
        sticked === true ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
        /* if(!moveUpTo(prevPossition, window.scrollY)){ navbar.classList.remove('sticky') }; */
        console.log(moveUpTo(prevPossition, window.scrollY));
    });

    function stickAnNavbar(point, scrollY) {
        if (point <= scrollY) {
            sticked = true;
        }else {
            sticked = false;
        }
    }

    function moveUpTo(prevPoss, currPoss) {
        if(prevPoss > currPoss) {
            prevPossition = currPoss;
            navbar.classList.remove('sticky');
            return false;
        }else{
            prevPossition = currPoss;
            return true;
        }
    }
});

