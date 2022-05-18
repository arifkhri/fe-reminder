import React from "react";
import axios from "axios";

//GET Request
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Employee() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);  //data yang diminta dari properti
    });
  }, []);

  if (!post) return null;
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// //POST Request
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function Employee() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }


// //PUT Request
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function Employee() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updatePost() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={updatePost}>Update Post</button>
//     </div>
//   );
// }

// // DELETE Request
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     axios
//       .delete(`${baseURL}/1`)
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// //MENANGANI KESALAHAN
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     // invalid url will trigger an 404 error
//     axios.get(`${baseURL}/asdf`).then((response) => {
//       setPost(response.data);
//     }).catch(error => {
//       setError(error);
//     });
//   }, []); 
  
//   if (error) return `Error: ${error.message}`;
//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// // MEMBUAT INSTANCE AXIOS
// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     client.get("/1").then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     client
//       .delete("/1")
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }

//   function updatePost() {
//     client
//       .put(`/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }  

//   function createPost() {
//     client
//       .post(`/`, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }  

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//       <button onClick={updatePost}>Update Post</button>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// //ASYNC-AWAIT
// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     async function getPost() {
//       const response = await client.get("/1");
//       setPost(response.data);
//     }
//     getPost();
//   }, []);

//   async function deletePost() {
//     await client.delete("/1");
//     alert("Post deleted!");
//     setPost(null);
//   }

//   async function updatePost() {
//     const response = await client.put("/1", {
//         title: "Hello World!",
//         body: "This is an updated post."
//        });       
//       setPost(response.data);
//   }

//   async function createPost() {
//     const response = await client.post("/", {
//         title: "Hello World!",
//         body: "This is a new post."
//        });       
//       setPost(response.data);
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//       <button onClick={updatePost}>Update Post</button>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }