import React , {useState} from 'react';
import {X} from 'lucide-react'
import Post from './Post';

function CreatePost(prop) {
  
   const [tit,settitle] = useState('')
  const [cont,setcontent] = useState('')
  const [dat,setdate] = useState(new Date().toISOString().split('T')[0])
  const [image,setimage] = useState('')

  function handleSubmit(e){
     e.preventDefault();
    prop.onSubmitPost({ tit, cont, dat, image });
    prop.showform(false);
  }
   

  return (
    <div className='  fixed inset-0 z-50 self-center bg-purple-700 max-h-[90vh] h-fit overflow-y-auto hide-scrollbar w-fit m-2 rounded-lg justify-self-center flex justify-center items-start p-3 rounded'>
      <div className='bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-lg'>
         <div className="relative">
      <button
        className="absolute top-[-10px] right-[-5px] w-8 h-8 rounded-full bg-gray-100 text-purple-700 flex items-center justify-center hover:bg-gray-200"
        onClick={() => prop.showform(false)}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title Field */}
          <div>
            <label htmlFor="title" className='block font-semibold mb-1'>
              Enter the Title:
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              value={tit}
              onChange={(e) => settitle(e.target.value)}
              required
              className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Content Field */}
          <div>
            <label htmlFor="content" className='block font-semibold mb-1'>
              Enter the Content:
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              value={cont}
               onChange={(e) => setcontent(e.target.value)}
              required
              className='w-full border border-gray-300 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="img" className='block font-semibold mb-1'>
              Upload Image (optional):
            </label>
            <input
              id="img"
              type="file"
              name="img"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                 reader.readAsDataURL(file);
                 reader.onloadend = () => {
                           setimage(reader.result); // base64 string
                  };
                }
                }}
              className='w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gradient-to-r file:from-purple-700 file:to-purple-900 file:text-white hover:file:bg-purple-800'
            />
          </div>

          {/* Date Field */}
          <div>
            <label htmlFor="date" className="block font-semibold mb-1">
              Date (optional):
            </label>
            <input
              id="date"
              name="date"
              type="date"
               value={dat}
              onChange={(e) => setdate(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-700 to-purple-900 text-white mx-auto block px-6 py-2 font-semibold rounded hover:bg-purple-800 transition"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
