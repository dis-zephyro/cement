$('.certificate-slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.prev').click(function(){
    $('.certificate-slide').slick('slickPrev');
});

$('.next').click(function(){
    $('.certificate-slide').slick('slickNext');
});


$(".certificate-link").fancybox({
    "padding" : 0
});


// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap1 = new ymaps.Map('map1', {
        center: [44.9993,41.9362], // г. Ставрополь, 2-й Юго-западный проезд, 9
        zoom: 16,
        controls: ['zoomControl']
    });

    myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [31, 48],
        iconImageOffset: [-16, -49]
    });

    myMap1.behaviors.disable('scrollZoom');
    myMap1.geoObjects.add(myPlacemark1);


    var myMap2 = new ymaps.Map('map2', {
        center: [45.0471,42.0275], // Ставрополь, ул. Объездная, 29Ж
        zoom: 16,
        controls: ['zoomControl']
    });

    myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [31, 48],
        iconImageOffset: [-16, -49]
    });

    myMap2.behaviors.disable('scrollZoom');
    myMap2.geoObjects.add(myPlacemark2);

}