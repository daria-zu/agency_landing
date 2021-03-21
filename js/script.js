$(document).ready(function() {

    // Так не надо) Все ссылки перестанут работать)
    // $('a').on('click',function(event){
    //     event.preventDefault();
    // })

    $('.play').click(function() {
        $('.promo_video').get(0).play();
        $(this).hide();
        $('.promo_video').attr('controls',true);
    });

    $('.filter_link').on('click', function(event){
        event.preventDefault();
        $('.active').removeClass('active');
        $(this).addClass('active');
        let $type = $(this).data('type');
        let $productCard = $('.products_visual');
        if(!$type){
            $productCard.show();
            return;
        }
        $productCard.each(function(){
            let $dataProduct = $(this).data('product');
            if($type === $dataProduct){
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })

    $('.team_link').on('click', function(event){
        event.preventDefault();
        let index = $(this).index('.team_link');

        $('.pic_person_visible').removeClass('pic_person_visible');
        $('.pic_person').eq(index).addClass('pic_person_visible');
        
        $('.team_person_visible').removeClass('team_person_visible');
        $('.team_person').eq(index).addClass('team_person_visible');
    })  
    
    $('.nav_button_mobile').on('click',function(event){
        $('.nav').slideToggle();
        // $('header').css({'background-color': '#333'});
    })

    $('.team_slider').slick({
        slidesToShow: 1,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1280,
              settings: "unslick"
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    //  $('.fancybox').fancybox({
	// 	openEffect	: 'none',
	// 	closeEffect	: 'none'
	// });
}) 