$(function () {
  


    $("#n-bl").click(function () {
        $(".link-link").toggleClass("open");

        $("body").toggleClass("open")
    });


    $('a[href^="#"]').on('click', function (event) {

        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;


        $('html, body').animate({
            scrollTop: dn
        }, 100);


    });


    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        this.querySelectorAll('.layers').forEach(layer => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };


    document.addEventListener('mousemove', function (event) {
        let card_x = getTransformValue(event.clientX, window.innerWidth, 30);
        let card_y = getTransformValue(event.clientY, window.innerHeight, 30);
        let shadow_x = getTransformValue(event.clientX, window.innerWidth, 10);
        let shadow_y = getTransformValue(event.clientY, window.innerHeight, 0);

        $(".parallax img").css("transform", "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)");

        $(".svg").css("filter", "drop-shadow(" + -shadow_x + "px " + shadow_y / 1 + "px 4px rgba(0, 0, 0, .6))");

    });

    function getTransformValue(v1, v2, value) {
        return ((v1 / v2 * value - value / 2) * 1).toFixed(1);
    };


    const winload = {
        status: false,

        loadListener: function (val) {
            hideAmnim(val, animLoad.load)
        },

        set load(val) {
            this.status = val;

            this.loadListener(val);
        },

        get load() {
            return this.status;
        },

        registerListener: function (listener) {
            this.aListener = listener;
        }
    }

    const animLoad = {
        status: false,

        loadListener: function (val) {
            hideAmnim(val, winload.load)
        },

        set load(val) {
            this.status = val;

            this.loadListener(val);
        },

        get load() {
            return this.status;
        },

        registerListener: function (listener) {
            this.aListener = listener;
        }
    }

    function hideAmnim(load, load) {
        if (load && load) {
            $('body').removeClass('body-pending')

            setTimeout(() => {
                $(".preload").remove()
            }, 500)
        }
    }

    window.onload = function () {
        winload.load = true
    }

    setTimeout(function () {
        animLoad.load = true
    }, 1000);



    document.addEventListener('mousemove', function (event) {
        let card_x = getTransformValue(event.clientX, window.innerWidth, 20);
        let card_y = getTransformValue(event.clientY, window.innerHeight, 10);
        let shadow_x = getTransformValue(event.clientX, window.innerWidth, 30);
        let shadow_y = getTransformValue(event.clientY, window.innerHeight, 10);

        $(".partners-wrap-img").css("transform", "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)");

        $(".svg").css("filter", "drop-shadow(" + -shadow_x + "px " + shadow_y / 1 + "px 4px rgba(0, 0, 0, .6))");

    });



    document.addEventListener('mousemove', function (event) {
        let card_x = getTransformValuess(event.clientX, window.innerWidth, 40);
        let card_y = getTransformValue(event.clientY, window.innerHeight, 10);
        let shadow_x = getTransformValue(event.clientX, window.innerWidth, 30);
        let shadow_y = getTransformValue(event.clientY, window.innerHeight, 10);

        $(".company-logo").css("transform", "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)");

        $(".svg").css("filter", "drop-shadow(" + -shadow_x + "px " + shadow_y / 1 + "px 4px rgba(0, 0, 0, .6))");

    });

    function getTransformValuess(v1, v2, value) {
        return ((v1 / v2 * value - value / 2) * 1).toFixed(1);
    };



    if (window.innerWidth >= 640) {
      $('#scene').parallax()
     }

})
