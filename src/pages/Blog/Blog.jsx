
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import datas from '../../data/blog';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './blog.css';
import UpIcon from '../../components/Up/UpIcon';

const Blog = () => {
  const [tags, setTags] = useState([]);
  const [searchByNames, setSearchByNames] = useState(datas);
  const [inp, setInp] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [active, setActive] = useState(false)
  useEffect(() => {
    const allTags = datas.reduce((accumulator, currentBlog) => {
      currentBlog.tags.forEach(tag => {
        if (!accumulator.includes(tag)) {
          accumulator.push(tag);
        }
      });
      return accumulator;
    }, []);

    setTags(allTags);
  }, []);

  const handleInputChange = (e) => {
    setInp(e.target.value.trim().toLowerCase());
    filterBlogs(selectedTag, e.target.value.trim().toLowerCase());
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    filterBlogs(tag, inp);
    setActive(true)
  };

  const filterBlogs = (tag, input) => {
    let filteredBlogs = datas.filter(blog => {
      const hasTag = tag ? blog.tags.includes(tag) : true;
      const matchesInput = blog.title.toLowerCase().includes(input);
      return hasTag && matchesInput;
    });

    setSearchByNames(filteredBlogs);
  };

  return (
    <div className='container blog-all-page'>
      <div className='blog-cards-all d-flex'>
        <div className='d-flex col-lg-8 ' style={{ justifyContent: 'space-between', flexWrap: 'wrap', width: '74%' }}>
          {searchByNames.length > 0 ? (
            searchByNames.map((blog, index) => (
              <Card className='mx-2 my-2 b-0 card-1' style={{ width: 270 }} key={index}>
                <div className='blog-img-div'>
                  <Card.Img className='b-0' variant="top" src={blog.mainImg} />

                </div>
                <Card.Body>
                  <Card.Title className='blog-card-title'>{blog.date} | {blog.author}</Card.Title>
                  <Card.Text>{blog.title.length <= 25 ? blog.title : `${blog.title.substring(0, 25)}...`}</Card.Text>
                  <Link className='detail-blog' to={`/singleblog/${blog.id}`}> Read More ...</Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div className='error-blog'>
              <div>{alert('Blog Not Found')}</div>
              {
                datas.map((blog, index) => (
                  <Card className='mx-2 my-2 b-0 card-1' style={{ width: 270 }} key={index}>
                    <Card.Img className='b-0' variant="top" src={blog.mainImg} />
                    <Card.Body>
                      <Card.Title className='blog-card-title'>{blog.date} | {blog.author}</Card.Title>
                      <Card.Text>{blog.title}</Card.Text>
                      <Link className='detail-blog' to={`/singleblog/${blog.id}`}> Read More ...</Link>
                    </Card.Body>
                  </Card>
                ))
              }
            </div>
          )}
        </div>
        <div className='filter '>
          <input type="text" className='w-100 ms-4 my-4 px-2 py-2' placeholder='Search Blog...' onChange={handleInputChange} value={inp} />
          <div>
            <h3 className='ms-4 my-4'>Tags</h3>
            <ul>
              {tags.map((tag, i) => (
                <li
                  className='li-tag nav-item'
                  key={i}
                  onClick={() => handleTagClick(tag)}
                  style={{ color: 'rgb(92, 163, 163) !important', listStyleType: 'none', marginTop: '-20' }}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <UpIcon />

    </div>
  );
}

export default Blog;