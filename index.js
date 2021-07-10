
$('document').ready(function(){
    $('#user').animate({
        'margin-top': 0,
        'opacity': 1,
    }, 1000)
    $('.password').animate({
        'margin-top': 0,
        'opacity': 1,
    }, 1500)
    $('.check').animate({
        'margin-top': 0,
        'opacity': 1,
    }, 1800)
    $('.selection').animate({
        'margin-top': 0,
        'opacity': 1,
    }, 2000)
    $('.button').animate({
        'margin-top': 0,
        'opacity': 1,
    }, 2000)
})


$('#icon').click(function () {
    $('#icon').css('display', 'none');
    $('#icon2').css('display', 'inline');
    $('input[name=password]').attr('type', 'text')
})
$('#icon2').click(function () {
    $('#icon').css('display', 'inline');
    $('#icon2').css('display', 'none');
    $('input[name=password]').attr('type', 'password')
})
$('input[type=password]').focusin(function () {
    $('.password').css('borderColor', 'white');
})
$('input[type=password]').focusout(function () {
    $('.password').css('borderColor', '#5FA7F0');
})


$('#form').submit(function () {   
   if($('#password').val() != 'admin'){
       $('.password').css('borderColor','rgb(213, 0, 75)').css('marginBottom', '0');
       $('#icon, #icon1').css('color','rgb(213, 0, 75)');
       $('small').css('display','inline');
   }else{
    $('.password').css('borderColor','#5FA7F0').css('marginBottom', '25px');
    $('#icon, #icon1').css('color','#5FA7F0');
    $('small').css('display','none');
   }
    return false;
})

$('#forgotPass').click(function(){
    $('#form').css('display','none');
    $('#forgot').css('display','flex');
})
$('#next').click(function(){
    $('#forgot').css('display','none');
    $('#forgot1').css('display','flex');
    return false;
})
$('#send').click(function(){
    $('#forgot1').css('display','none');
    $('#smsSent').css('display','flex');
    return false;
})
