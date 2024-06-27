//import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard from '../components/Report';
import '../styles/Projects.css'; // Custom CSS for the hover effect

const projects = [
  {
    slug: 'project-1',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/A.jpg?alt=media&token=6d0859a8-c640-4251-b7db-740c1fcc6c48',
    title: 'Project 1',
    category: 'Category 1',
    content: '<p>Content for project 1</p>'
  },
  {
    slug: 'project-2',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/A.jpg?alt=media&token=6d0859a8-c640-4251-b7db-740c1fcc6c48',
    title: 'Project 2',
    category: 'Category 2',
    content: '<p>Content for project 2</p>'
  },
  {
    slug: 'project-3',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/A.jpg?alt=media&token=6d0859a8-c640-4251-b7db-740c1fcc6c48',
    title: 'Project 3',
    category: 'Category 3',
    content: '<p>Content for project 3</p>'
  },
  {
    slug: 'project-4',
    image: '../src/assets/A.jpg',
    title: 'Project 4',
    category: 'Category 4',
    content: '<p>Content for project 4</p>'
  },
  {
    slug: 'project-5',
    image: '../src/assets/A.jpg',
    title: 'Project 5',
    category: 'Category 5',
    content: '<p>Content for project 5</p>'
  },
  // Add more project objects as needed
];

function Projects() {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul style={{ margin: "0px", color: "teal" }}> {dots} </ul>
    ),
    // eslint-disable-next-line no-unused-vars
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "teal"
        }}
      ></div>
    ),
    nextArrow: <div style={{ fontSize: "20px", color: "teal" }}>→</div>,
    prevArrow: <div style={{ fontSize: "20px", color: "teal" }}>←</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          centerPadding: '10px',
        }
      }
    ]
  };

  return (
    <div className="projects-container p-6" style={{ marginBottom: '40px' }}>
      
      <div className=" bg-white dark:bg-gray-900  text-center p-6">
        <h1 className="text-4xl font-bold  text-teal-700 dark:text-white mb-2">
        Security Audit Reports
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        Listed are some of the Blockchain and DeFi audit reports we published
        </p>
      </div>
      <Slider {...settings} className='mt-1'>
        {projects.map((project, index) => (
          <div key={index} className="px-2 project-card-container">
            <div className="project-card">
              <PostCard post={project} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
