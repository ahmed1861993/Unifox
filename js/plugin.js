$(document).ready(function(){
   
    
    
    //show navbar icon when minimize screen
    $('i.icon').click(function(){
        $('header nav .nav-list').slideToggle(800);
    });
    
    
   
    
    
   
    
    
    
    $(window).scroll(function(){
        
        var sc = $(this).scrollTop();
        if(sc > 100){
         
              $('header.sticky').css("display","block");
             
   
        }else{
            $('header.sticky').css("display","none");
        }
        
          if(sc > 1000)  {
               $('.timer').countTo();
              $(window).off('scroll');
          }; 
       
          if(sc > 500){
               $('.top').fadeIn();
          }
        
        else{
               $('.top').fadeOut();
          }
        
       
      
        
        
       
    
    });
    
    
 
    
    
    //portfolio button change bg
    
    $('.buttons button').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        var filters = $(this).attr('id');
        if( filters === 'all'){
            $('.images .row > div').fadeIn();
        }else{
              $('.images .row > div').fadeOut();
              $('.images .row').contents().filter( '.' + filters ).fadeIn();
        }
    });
    
    
    //section team 
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
               items:1 
           },
            
         600:{
               items:3 
           },
            1000:{
               items:4 
           }
        }
    });
 
 
   
    //section choose c-panel 
    $('.c-panel li').click(function(){
      var p =  $(this).data('role');
        $('.content > div').hide();
       $('.content').contents().filter('#' + p).fadeIn();
         $(this).addClass('active-btn').siblings().removeClass('active-btn');
    });
    
    
    //choose pop
    
    $('.pop').magnificPopup({
        type:'iframe'
    });
    
    //scroll to top
    
        $('.top').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },1000)
    });
             
      
    
    
 
    
    //slick libray
    
    $('.slick').slick();
    
    
  //smooth scroll
    
    
    $('.list a').click(function(){
        $(this).addClass('active-link').parent().siblings().children().removeClass('active-link');
        $('body,html').animate({
            scrollTop:$($(this).attr('href')).offset().top - 80
        },1000);
        
    
        
    
    });
   
   
 }); 
    
