const http = new easyHTTP;

// Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// Get single post 
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// Create data 
const data = {
    title: 'Custom post', 
    body: 'This is a custom post',
    userId: 2
};

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// Delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});