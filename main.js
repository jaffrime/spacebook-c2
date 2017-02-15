var posts = [];
var idCounter = 0;

/* old addPosts (empty field)
var addPosts = function() {
  $('.posts').empty();
  // good code...
  // for (i=0; i<posts.length; i++){
  //   $('.posts').append("<p class='post' data-id=" + posts[i].id + "><a href='#' class='remove'>remove</a> " + posts[i].text + "</p>");
  // }

  for (i=0; i<posts.length; i++){
    $('.posts').append("<p class='post' data-id=" + posts[i].id + "><a href='#' class='remove'>remove</a> " + posts[i].text + " <a href='#' class='comment'>comment</a></p>");
  }
};*/

//new addPosts (no emptying)
var addPosts = function() {
  $('.posts').append("<p class='post' data-id=" + posts[posts.length-1].id + "><a href='#' class='remove'>remove</a> " + posts[posts.length-1].text + " <a href='#' class='comment'>comment</a></p>");
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

$('.posts').on('click', '.comment', function(){
  $(this).closest('p').append("<p><input id='commentName' placeholder='username' /><input id='commentText' placeholder='your comment' /><button type='button' id='commentButton'>Post</button></p>");
});

$('.posts').on('click', '#commentButton', function(){
  //alert($(this).closest('p').find('#commentName').val());
  var workingP = $(this).closest('p');
  //console.log(workingP);
  var userComment = workingP.find('#commentName').val() + ": " + workingP.find('#commentText').val();
  //console.log(userComment);
  workingP.empty();
  workingP.append(userComment);
});
