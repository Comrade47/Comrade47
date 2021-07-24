// login page
$('.login-page').hide();
$('#user-icon').click(function(){
    $('.login-page').slideDown(300);
    return false
})
$('#cross').click(function(){
    $('.login-page').slideUp(300);
})
// sign up
$('.login-page-2').hide();
$('#signup-icon').click(function(){
    $('.login-page-2').slideDown(200);
    return false
})
$('#cross-2').click(function(){
    $('.login-page-2').slideUp(200);
})

// categories 
$('.item-menu').hide();
$('#cat-icon').click(function(){
    $('.item-menu').fadeIn(300);
    return false
})
$('#cross-3').click(function(){
    $('.item-menu').fadeOut(200);
})






