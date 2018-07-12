export default {
  init() {
    // JavaScript to be fired on the home page
    var categories = [];

    var showDesign = true;
    var showDevelopment = true;
    var showNonsense = true;

    $(function() {
      $('.sort-button').click(function() {
        if($(this).hasClass('sort-design')) {
          showDesign = !showDesign;
          $(this).toggleClass('disabled');
          showPostsOfType();
        }
        if($(this).hasClass('sort-development')) {
          showDevelopment = !showDevelopment;
          $(this).toggleClass('disabled');
          showPostsOfType();
        }
        if($(this).hasClass('sort-nonsense')) {
          showNonsense = !showNonsense;
          $(this).toggleClass('disabled');
          showPostsOfType();
        }
      })
    });

    function showPostsOfType() {
      var count = $('.post-count').html();
      for (var i = 0; i < count; i++) {
        var postID = $('.post-id-' + i).html();
        var postParent = $('.post-' + postID);
        var postType = $('.cat-' + i).html();
        categories[i] = postType;
        if(postType === "Design" && !showDesign) {
          postParent.hide();
        }
        else if(postType === "Design" && showDesign) {
          postParent.show();
        }
        if(postType === "Development" && !showDevelopment) {
          postParent.hide();
        }
        else if(postType === "Development" && showDevelopment) {
          postParent.show();
        }
        if(postType === "Nonsense" && !showNonsense) {
          postParent.hide();
        }
        else if(postType === "Nonsense" && showNonsense) {
          postParent.show();
        }
      }
      if(!showDesign && !showDevelopment && !showNonsense) {
        $('.empty-posts').show();
      }
      else {
        $('.empty-posts').hide();
      }
    }
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
