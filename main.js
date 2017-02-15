var posts = [];
var idCounter = 0;

var addPosts = function() {
  $('.posts').empty();
  for (i=0; i<posts.length; i++){
    $('.posts').append("<p class='post' data-id=" + posts[i].id + "><a href='#' class='remove'>remove</a> " + posts[i].text + "</p>");
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

$('.posts').on('click', '.remove', function(){
  // // remove html
  // $(this).closest('p').remove();
  // // remove array item
  // var arrayId = $(this).closest('p').data().id;
  // //console.log(arrayId); // verifying data-id
  // for (i=0; i<posts.length; i++) {
  //   if (posts[i].id === arrayId) {
  //     posts.splice(i,1);
  //   }
  // }
  // //console.log(posts); // checking array

  // using variable to capture element
  var locLine = $(this).closest('p');
  locLine.remove();
  for (i=0; i<posts.length; i++) {
    if (posts[i].id === locLine.data().id) {
      posts.splice(i,1);
    }
  }
});
