import React, { useState } from 'react';
import { X } from 'lucide-react';

function Post({ title, content, img, date }) {
  const [open, setOpen] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div>
      {/* Fullscreen Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="relative p-6 max-w-3xl mx-auto min-h-screen">
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-purple-700 flex items-center justify-center hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>
            <h1 className="text-center font-semibold text-2xl text-purple-700 mt-10 mb-2">{title}</h1>
            <p className="text-center text-sm text-gray-500 mb-6">{formattedDate}</p>
            
              {img && (
              
                  <img
                    src={img}
                    alt="Uploaded"
                    className="float-left w-60 h-60 mr-4 mb-2 rounded-lg object-cover"
                  />
               
              )}
              <div className={`text-sm text-gray-800 `}>
                {content}
              </div>

          
          </div>
        </div>
      )}

      {/* Preview Card */}
      <div className="flex justify-center">
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer overflow-hidden border-2 border-purple-700 m-4 p-4 rounded-2xl max-w-sm h-60 w-full bg-white shadow-md hover:shadow-lg transition"
        >
          <h1 className="text-center font-semibold text-xl text-purple-700 mb-2">{title}</h1>
          <p className="text-center text-sm text-gray-500 mb-4">{formattedDate}</p>
          <div className="flex gap-4">
            {img && (
              <div className="w-4/9 min-w-[80px] h-30">
                <img
                  src={img}
                  alt="Uploaded"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            )}
            <div className={`text-sm text-gray-800 overflow-hidden ${img ? 'w-5/9' : 'w-full'}`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
