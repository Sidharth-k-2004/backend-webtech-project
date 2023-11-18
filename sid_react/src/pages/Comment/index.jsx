import React, { useState, useEffect } from 'react';
import styles from "./comment.module.css"
// import user1 from './user1.png';
// import like from './like.jpg';
// import share from './share.png';
// import user from './user.png';

function CommentForm() {
  const [userName, setUserName] = useState('Anonymous');
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch existing comments when the component mounts
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch('http://localhost:5050/api/comments').then(async (res)=>{
        const d=await res.json();
        setComments(d.data);
        console.log(d.data);
      }).catch((e)=>{
        console.log(e);
      })
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
      const response = await fetch('http://localhost:5050/api/comments', {
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
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Post a comment</h1>
      </div>
      <div>
        <span id={styles.comment}>{comments.length}</span> comments
      </div>
      <div className={styles.text}>
        <p>We are happy to hear from you</p>
      </div>
      <div className={styles.comment}>
        <div className={styles.commentBox}>
          <img src={'/assests/user1.png'} alt="profile" />
          <div className={styles.content}>
            <h2>Comment as:</h2>
            <input
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              className={styles.user}
            />
            <div className={styles.commentinput}>
              <input
                type="text"
                placeholder="Enter the Comment"
                value={userComment}
                onChange={handleCommentChange}
                className={styles.username}
              />
              <div className={styles.buttons}>
                <button
                  type="submit"
                  disabled={!userComment}
                  onClick={handlePublish}
                >
                  Publish
                </button>
                <div className={styles.notify}>
                  <input type="checkbox" className={styles.notifyinput} />
                  <span>Notify me</span>
                </div>
              </div>
            </div>
            <p className={styles.policy}>
              This is protected by reCAPTCHA and the Google{' '}
              <a href="#">privacy policy </a>and <a href="#">Terms of service</a>{' '}
              apply.
            </p>
          </div>
        </div>
      </div>
      {/* Render existing comments here */}
      <div className={styles.comments}>
        {comments?.map((comment, index) => (
          <div key={index} className={styles.parents}>
            <img src={'/assests/user.png'} alt="profile" />
            <div>
              <h1>{comment.name}</h1>
              <p>{comment.message}</p>
              <div className={styles.engagements}>
                <img src={'/assests/like.jpg'} alt="like" />
                <img src={'/assests/share.png'} alt="share" />
              </div>
              <span className={styles.date}>{comment.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentForm;
