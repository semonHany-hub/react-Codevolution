import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchData() {
    const [posts, setPosts]= useState([]);
    const [post, setPost]= useState({});
    const [id, setId]= useState(null);
    const [errorMessage, setErrMessage]= useState('');

    const getPostById= (e)=>{
        if(id!=='')
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log("getPostById response-> ", res);
                setPost(res.data);
            })
            .catch(err=>{
                setErrMessage("can't get post with id "+ id +` (${err})`);
            })
        else{
            setPost({});
            getPosts();
        }
    }

    const getPosts= ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(err=>{
            console.log(err);
            setErrMessage("error fetching posts-> "+ err);
        })
    }

    useEffect(()=>{
        getPosts();
    }, []);

  return (
    <div>
        <div>
            <label>find by id</label>
            <input type="text" value={id?id:''} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={getPostById}>fetch post</button>
        </div>

        {
        Object.keys(post).length>0?
        (<>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>):

        (posts.length)?
        posts.map(p=>(<div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
        </div>)):
        
        errorMessage?
        errorMessage:

        "loading..."
    }
    </div>
  )
}

export default FetchData
