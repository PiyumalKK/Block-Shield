/* eslint-disable react/prop-types */
// PostCard.js

//import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className=" hover: group relative w-full h-[400px] overflow-hidden rounded-lg sm:w-[300px] transition-all">
      <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
        <img 
          src={post.image} 
          alt="post cover" 
          className="h-[260px] w-full object-cover transition-all duration-300 z-20 rounded-t-lg"
        />
      </a>
      <div className="p-4 flex flex-col justify-between bg-teal-500 dark:bg-gray-800 rounded-b-lg">
        <div>
          <p className="text-xl font-semibold line-clamp-2 text-center mb-4 text-white dark:text-white">{post.title}</p>
        </div>
        
        
        <div className="  absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:text-white transition-all duration-300 text-center py-1 rounded-md !rounded-tl-none m-2 opacity-0 group-hover:opacity-100">
          <a href='https://github.com/' target="_blank" rel="noopener noreferrer" className="block py-2 px-4">
            Go To Report
          </a>
        </div>
      </div>
    </div>
  );
}
