// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

const PostContent = styled.div`
  text-align: justify;
  word-spacing: 1px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  hyphens: auto;
  word-break: break-word;
  padding: 3rem;
  max-width: 2xl;
  margin: 0 auto;
  width: 100%;
`;

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setPost(data.posts[0]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link to={`/search?category=${post && post.category}`} className="self-center mt-5">
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img src={post && post.image} alt={post && post.title} className="mt-10 p-3 max-h-[600] w-[600] object-cover" />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">{post && (post.content.length / 1000).toFixed(0)} mins read</span>
      </div>
      <PostContent dangerouslySetInnerHTML={{ __html: post && post.content }} />
      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent Articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
        </div>
      </div>
    </main>
  );
}
