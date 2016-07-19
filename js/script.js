(function () {

    "use strict";

			[].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function (ev) {
                ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'menu__item--current')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                // set current
                classie.add(item, 'menu__item--current');
            };

				[].slice.call(menuItems).forEach(function (el) {
            el.addEventListener('click', setCurrent);
        });
    });

    var toggle = document.querySelector(".c-hamburger");
    var menu = document.querySelector(".menu");
    var nav = document.querySelector(".navigation");

    toggleHandler(toggle);

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.classList.contains("is-active") === true || menu.classList.contains("open") === true) {
                this.classList.remove("is-active");
                menu.classList.remove("open");
                nav.classList.remove("open");
            } else {
                this.classList.add("is-active");
                menu.classList.add("open");
                nav.classList.add("open");
            }
        });
    }

    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        $(".can").css({
            "transform": "translate(0px, -" + wScroll / 12 + "%)"
        });

        $(".self").css({

            "transform": "translate(0px, -" + wScroll / 12 + "%)"

        });

        $(".flower").css({

            "transform": "translate(0px, " + wScroll / 11 + "%)"

        });

    });

})(window);
