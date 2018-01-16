$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    
    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});