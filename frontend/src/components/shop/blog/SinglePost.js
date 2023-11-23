import React from 'react';
import renderHTML from 'react-render-html';

export default ({match: {params: {id}}, history, posts, handleBookmark, handleRemoveBookmark, handleRemove}) => {
  let post = posts.filter(post => post.id === id);
  post = post[0];
  
  return (
    <div className="single-post">
      <h1 className="header">{post.title}</h1>
      {/* eslint-disable-next-line */}
      <img src = {post.image} />
      {renderHTML(post.body)}
      <ul className="post-foot">
        <li>{post.bookmark ? <button className="btn btn-remove-bookmarks" onClick={() => handleRemoveBookmark(post)} >Xóa khỏi đánh dấu</button> : <button className="btn btn-bookmarks" onClick={() => handleBookmark(post)} > Thêm vào đánh dấu </button>}</li>
        <li><button className="btn btn-remove" onClick={()=>handleRemove(post, history)}>Xóa</button></li>
      </ul>
    </div>
  )
}
