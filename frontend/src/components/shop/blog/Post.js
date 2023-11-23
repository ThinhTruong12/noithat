import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import { leveningStr } from './helper';

export default ({post, handleBookmark, handleRemoveBookmark}) => {
  const { id, title, image, body, bookmark } = post;
  return (
    <div className="post">
      <h3><Link to={`/post/${id}`}>{title}</Link></h3>
      {/* eslint-disable-next-line */}
      <img src = {image} />
      <p>{renderHTML(leveningStr(body, 250))}</p>
      <ul>
        <li><Link to={`/post/${id}`} className="btn btn-more">Đọc thêm...</Link></li>
        <li>{bookmark ? <button className="btn btn-remove-bookmarks" onClick={() => handleRemoveBookmark(post)} >Đã đánh dấu</button> : <button className="btn btn-bookmarks" onClick={() => handleBookmark(post)} >Thêm vào đánh dấu</button>}</li>
      </ul>
    </div>
  )
}
