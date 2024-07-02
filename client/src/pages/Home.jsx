/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
//import ParticlesComponent from '../components/particles';


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getposts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    
    <div className="relative w-full h-full min-h-screen">
      
      {/* Main content */}
      <div className=" relative z-10 flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center" >
      
      <h1 className="text-3xl font-bold lg:text-6xl flex flex-col lg:flex-row justify-center items-center">
  Welcome to
  <span className="px-2 mt-2 lg:ml-4 lg:mt-0 py-1 flex justify-center items-center">
    <img className="mt-6 h-24 w-auto lg:h-36" src="https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logo%20B.svg?alt=media&token=2c6c3803-8227-493b-9bd7-ff228e881bd3" alt="Logo" />
  </span>
</h1>



        <p className="text-gray-500 text-1xl sm:text-2xl mt-4 dark:text-white">
           Sri Lanka's First Blockchain Security Company
        </p>
        <Link
          to="/search"
          className="inline-block mt-1 text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          Browse Our Projects
        </Link>
      </div>

      {/* Call to Action section */}
      <div className="ml-10 mr-10">
        <CallToAction />
      </div>

      {/* Recent Projects section */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 relative z-10">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Articles</h2>
            <div className="flex flex-wrap gap-10 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link to={'/search'} className="text-lg text-teal-500 hover:underline text-center">
              View all
            </Link>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Home;
