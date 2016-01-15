$(document).ready(function() {
  var $container = $('.gallery').isotope({
    itemSelector: '.gallery-item'
  });

  $('.gallery-filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({filter: filterValue});
  });
  
  $('.gallery-filters').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
  
});
