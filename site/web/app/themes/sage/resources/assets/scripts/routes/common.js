export default {
  init() {
    // JavaScript to be fired on all pages
    $(function() {
      $('#brand').mouseenter(function(){
        $('.about-button').animate({
          opacity: '1',
          marginLeft: '1rem',
          zIndex: '1',
        });
      });
      $('.banner').mouseleave(function(){
        $('.about-button').animate({
          opacity: '0',
          marginLeft: '-6rem',
          zIndex: '-1',
        });
      });
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
