import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/PageHeader';
const Blogposts = dynamic(() => import("@/shared/data/Pages/blogposts"), {ssr: false,});


const BlogPost = () => {

  return (
  <div >
    <PageHeader titles="Blog Post" active="Blog Post" items={['Pages']} />
    <Blogposts/>
    
  </div>
)
};
BlogPost.layout = "Contentlayout"
export default BlogPost;
