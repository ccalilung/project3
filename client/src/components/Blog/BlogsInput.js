import React from 'react';
import '../Blog/Blog.css'

const BlogsInput = (props) => (
<div className="form-group">
    
        Post Text: <br/>
       <textarea type="text" {...props}></textarea>
        <br />
</div>

);

    export default BlogsInput;