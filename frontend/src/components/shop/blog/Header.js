import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// import logo from '../image/logo.PNG';

export default ({match: {url}}) => {
  return (
    <header>
      <div className="navbar">
        <ul>
          <li>{url === '/' ? <Link to="/new" className="btn btn-new">Câu chuyện mới</Link> : <Link to="/" className="btn btn-new">Blog</Link>}</li>
          <li> The Dream Team </li>
          <li><Link to="/bookmark" className="btn btn-bookmarks">Danh sách dấu trang</Link></li>
        </ul>
      </div>
    </header>
  )
}
