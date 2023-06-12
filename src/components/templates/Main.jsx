import './Main.css'
import React from 'react'
import Post from './Post'

export default props => 
    <div className="content mt-1">
        <Post title='Teste' subtitle='teste' date='19/05/2002' name='Ivo Castro'>{props.children}</Post>
        <Post title='Teste' subtitle='teste' date='19/05/2002' name='Ivo Castro'>{props.children}</Post>
    </div>