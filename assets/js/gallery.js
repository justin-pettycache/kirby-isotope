function getHashFilter() {
  var matches = location.hash.match(/filter=([^&]+)/i);
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent(hashFilter);
}

$().ready(function() {
  var $container = $('.gallery');
  var $buttonGroup = $('.gallery-filters');

  $buttonGroup.on('click', 'button', function() {
    var filterAttr = $(this).attr('data-filter');
    location.hash = 'filter=' + encodeURIComponent(filterAttr);
  });

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if(!hashFilter && isIsotopeInit) {
      return;
    }
    isIsotopeInit = true;
    $container.isotope({
      itemSelector: '.gallery-item',
      filter: hashFilter
    });
    if(hashFilter) {
      $buttonGroup.find('.active').removeClass('active');
      $buttonGroup.find('[data-filter="' + hashFilter + '"]').addClass('active');
    }
  }

  $(window).on('hashchange', onHashchange);
  onHashchange();
});