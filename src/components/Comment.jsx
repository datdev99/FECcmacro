// CommentComponent.jsx
import React, { useState } from 'react';

const CommentComponent = ({ comments, onReply, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (parentCommentId) => {
    if (parentCommentId !== null) {
      onReply(newComment, parentCommentId);
    } else {
      onAddComment(newComment);
    }
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <div className="comment-header">
              <img
                className="avatar"
                src="https://via.placeholder.com/30"
                alt="User Avatar"
              />
              <div>
                <strong>{comment.author}</strong>
                <span className="comment-time">{comment.time}</span>
              </div>
            </div>
            <div className="comment-body">{comment.text}</div>
            <button
              className="reply-button"
              onClick={() => onReply('', comment.id)}
            >
              Reply
            </button>
            {comment.children && (
              <CommentComponent
                comments={comment.children}
                onReply={onReply}
                onAddComment={onAddComment}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="new-comment">
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={() => handleCommentSubmit(null)}>Comment</button>
      </div>
    </div>
  );
};

export default CommentComponent;
