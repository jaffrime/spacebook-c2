var posts = [];
var idCounter = 0;

var addPosts = function() {
  $('.posts').empty();
  for (i=0; i<posts.length; i++){
    $('.posts').append("<p class='post' data-id=" + posts[i].id + ">" + posts[i].text + "</p>");
  }
};

var newPost = function(text) {
  idCounter++;
  var newPostObj = {
    "text": text,
    "id": idCounter
  };
  posts.push(newPostObj);
  //console.log(posts);
  addPosts();
};

$('.add-post').on('click', function(){
  newPost($('#post-name').val());
});
