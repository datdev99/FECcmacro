// CommentComponent.jsx
import { API_URL, URL_SERVER } from '@/lib/api-request';
import { PostComment, handleMoment } from '@/lib/func';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import avata from '@/assets/images/user.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const CommentComponent = ({ comments, onReply, onAddComment, postId, index }) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const handleCommentSubmit = (parentCommentId) => {
    if (parentCommentId !== null) {
      console.log("keke",newComment, parentCommentId);
      PostComment(
        {
          "content": "Tao dùng api để thêm nè, ghê chưa",
          "slug": "string",
          "published": true,
          "authorId": "ecb3e2e2-f138-4392-8c91-33f47720ca43",
          "postId": 3,
          "parentCommentId": 12
        }
      )
      onReply(newComment, parentCommentId);
    } else {
      onAddComment(newComment);
    }
    setNewComment('');
    setReplyingTo(null);
  };

  return (
    <div className="comment-section">
      <p className='total-comment'>{index == 0 ? comments.length + " Bình luận" : ""} </p>
      <ul>
        {comments.map((comment) => (
          <>
            <li key={comment.commentId} className="comment">
              <div>
                <div className="avata align-item-center mr-1">
                  <Image src={comment.avatar != null ? 
                    `${URL_SERVER}${comment.avatar}` : 
                    avata} alt='' width={45} height={45} quality={80} unoptimized 
                  />
                  <div className="comment-header">
                    <strong>
                      {
                      comment.authorName != null ? comment.authorName : "Người dùng ẩn danh"
                      }
                      </strong>
                  </div>
                  <span className="comment-time mr-1">{handleMoment(comment.dateUpdated)}</span>
                </div>
                <div className='comment-body'>
                  <div className="comment-title">{comment.content}</div>
                  <div className='d-flex align-item-center'>
                    <p
                      className="reply-button"
                      onClick={() => setReplyingTo(comment.commentId)}
                    >
                      <FontAwesomeIcon icon={faReply} />Phản hồi
                    </p>
                  </div>
                  {comment.commentId === replyingTo && (
                    <div className="new-comment">
                      <textarea
                        placeholder="Add a reply..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <button onClick={() => handleCommentSubmit(comment.commentId)}>
                        Gửi phản hồi
                      </button>
                    </div>
                  )}
                  </div>
              </div>
              
             {/* {comment.children && (
              <div className="reply-title">
                <button
                  className="reply-button"
                  onClick={() => setReplyingTo(comment.id)}
                >
                  Reply
                </button>
              </div>
            )} */}
            {comment.children && (
              <CommentComponent
                comments={comment.children}
                onReply={onReply}
                onAddComment={onAddComment}
                index={1}
              />
            )}
            </li>
          </>
        ))}
      </ul>
      {
        index == 0 
        ?
          <>
            <div className="new-comment">
              <textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={() => handleCommentSubmit(null)}>Gửi bình luận</button>
            </div>
            
          </>
        :
        ""
      }
    </div>
  );
};

export default CommentComponent;
