import React, { useState, useEffect } from 'react';
import './connect.css';
import user1 from './user1.png';
import like from './like.jpg';
import share from './share.png';
import user from './user.png';

function CommentForm() {
  const [userName, setUserName] = useState('Anonymous');
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch existing comments when the component mounts
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/comments');
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Failed to fetch comments from the server');
      }
    } catch (error) {
      console.error('Error while fetching comments:', error);
    }
  };

  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePublish = async () => {
    if (!userComment) return;

    const newComment = {
      name: userName,
      message: userComment,
      date: new Date().toLocaleString(),
    };

    try {
      // Make a POST request to save the comment on the server
      const response = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        // If the comment is successfully saved on the server, update the local state
        setComments([...comments, newComment]);
        setUserComment('');
      } else {
        console.error('Failed to save comment on the server');
      }
    } catch (error) {
      console.error('Error while making the POST request:', error);
    }
  };

  return (
    <div className="container">
      <div className="head">
        <h1>Post a comment</h1>
      </div>
      <div>
        <span id="comment">{comments.length}</span> comments
      </div>
      <div className="text">
        <p>We are happy to hear from you</p>
      </div>
      <div className="comment">
        <div className="commentbox">
          <img src={user1} alt="profile" />
          <div className="content">
            <h2>Comment as:</h2>
            <input
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              className="user"
            />
            <div className="commentinput">
              <input
                type="text"
                placeholder="Enter the Comment"
                value={userComment}
                onChange={handleCommentChange}
                className="usercomment"
              />
              <div className="buttons">
                <button
                  type="submit"
                  disabled={!userComment}
                  onClick={handlePublish}
                >
                  Publish
                </button>
                <div className="notify">
                  <input type="checkbox" className="notifyinput" />
                  <span>Notify me</span>
                </div>
              </div>
            </div>
            <p className="policy">
              This is protected by reCAPTCHA and the Google{' '}
              <a href="">privacy policy </a>and <a href="">Terms of service</a>{' '}
              apply.
            </p>
          </div>
        </div>
      </div>
      {/* Render existing comments here */}
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="parents">
            <img src={user} alt="profile" />
            <div>
              <h1>{comment.name}</h1>
              <p>{comment.message}</p>
              <div className="engagements">
                <img src={like} alt="like" />
                <img src={share} alt="share" />
              </div>
              <span className="date">{comment.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentForm;
