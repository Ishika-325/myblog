import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import CreatePost from './CreatePost';
import Post from './Post';

function Content() {
  const [form, showform] = useState(false);
  const [posts, setPosts] = useState([]);
  const [eindex, setEindex] = useState(null);

  function handlePost(data) {
    if(eindex!=null){
      setPosts(prev => {
        const updated = [...prev];
        updated[eindex]=data;
        return updated;
      });
      setEindex(null)
    }else{
    setPosts(prev => [data, ...prev]);
     }
    showform(false);
  }

  function deletePost(index){
    setPosts(prev => prev.filter((_ , i) => i != index))
  }

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    if (savedPosts.length > 0) {
      setPosts(savedPosts);
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div>
      <div>
        {form && (
          <CreatePost
            className=""
            showform={showform}
            onSubmitPost={handlePost}
            setEindex={setEindex}
            inData={eindex !== null ? posts[eindex] : null}
          />
        )}
      </div>

      <div className="flex flex-wrap">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.tit}
            content={post.cont}
            date={post.dat}
            img={post.image}
            handledelete={() => {deletePost(index)}}
            updatepost={() => {
              setEindex(index);
              showform(true)
            }}
          />
        ))}
      </div>

      {!form && (
        <button
          onClick={() => showform(true)}
          className="bg-gradient-to-r from-purple-700 to-purple-900 text-white fixed bottom-7 right-7 flex p-2 items-center justify-center rounded font-semibold"
        >
          <Plus />
        </button>
      )}
    </div>
  );
}

export default Content;
