import './App.css';
import { useEffect, useState } from 'react';

import User from './componets/User';
import Post from './componets/Post';
import Comment from './componets/Comment';

function App() {

  const [USERS, SETUSERS] = useState(null)
  const [POSTS, SETPOSTS] = useState(null)
  const [SHUSERS, SETSHUSERS] = useState(true)
  const [SHPOSTS, SETSHPOSTS] = useState(true)
  const [ERROR, SETERROR] = useState('')
  const [COMMENTS, SETCOMMENTS] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        SETUSERS(data)
      })
      .catch((err) => {
        SETERROR(err.message)
      })
  }, [])

  const VIEWPOST = (USER_ID) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${USER_ID}`
    fetch(URL)
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data => {
        SETSHUSERS(false)
        SETPOSTS(data)
      })
      .catch(error => {
        SETERROR(error.message)
      })
  }

  const BACK = () => {
    SETPOSTS(null)
    SETSHUSERS(true)
  }

  const VIEWCOMMENTS = (POST_ID) => {
    const URL = `https://jsonplaceholder.typicode.com/comments?postId=${POST_ID}`
    fetch(URL)
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data => {
        SETSHPOSTS(false)
        SETCOMMENTS(data)
      })
      .catch(error => {
        SETERROR(error.message)
      })
  }

  const BACK2 = () => {
      SETCOMMENTS(null)
      SETSHPOSTS(true)
  }

  return (
    <div className='w3-content w3-panel'>

      <h1 className='w3-center w3-opacity'><b>CLIENTS</b></h1>
      {
        SHUSERS && USERS &&
        USERS.map((USER) => <User key={USER['id']} id={USER['id']} username={USER['username']} name={USER['name']} email={USER['email']} website={USER['website']} VIEWPOST={VIEWPOST} />)
      }

      {

        SHPOSTS && POSTS &&
        <>
          <div className='w3-center w3-padding'>
            <button className='w3-button w3-red' onClick={BACK}>BACK</button>
          </div>
          {
            POSTS.map((POST) => <Post key={POST['id']} id={POST['id']} title={POST['title']} body={POST['body']} VIEWCOMMENTS={VIEWCOMMENTS} />)
          }
        </>

      }

      {

        COMMENTS &&
        <>
          <div className='w3-center w3-padding'>
            <button className='w3-button w3-red' onClick={BACK2}>BACK</button>
          </div>
          {
            COMMENTS.map((COMMENT) => <Comment key={COMMENT['id']}  name={COMMENT['name']} email={COMMENT['email']} body={COMMENT['body']} />)
          }
        </>

      }

    </div>
  );
}

export default App;
