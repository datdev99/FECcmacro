"use client"

import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

const page = () => {
    const [tags, setTags] = useState([])
    const handleChange = (tags:any) => {
        setTags(tags)
      }
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <TagsInput value={tags} onChange={handleChange} />
      </div>
      <div>
        <textarea name="" id=""></textarea>
      </div>
    </div>
  )
}

export default page
