import React, { useState } from 'react'

export default function PostForm(params) {
 const [title,setTitle] = useState('');
 const [body,setBody] = useState('');

 const onchangeTitle= (e) => {
  setTitle(e.target.value);
 }
 const onChangeBody = (e) => {
  setBody(e.target.value);
 }
 console.log(title,body);
 return (
  <>
    <h1>Add Post</h1>
    <form>
     <div>
      <label>title: </label>
      <br/>
      <input onChange={onchangeTitle} name='title' type='text' placeholder='title' />
     </div>
     <div>
      <label>Body: </label>
      <br/>
      <textarea onChange={onChangeBody} name='body' type='text' placeholder='body' />
     </div>
     <br/>
     <button type='submit' >post</button>
    </form>
  </>
 )
}