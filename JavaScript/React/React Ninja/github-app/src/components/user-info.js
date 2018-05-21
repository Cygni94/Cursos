'use strict'

import React from 'react';

const UserInfo = () => (
    <div className='user-info'>
      <img src='https://avatars0.githubusercontent.com/u/21344357?v=4'/>
      <h1 className='username'>
        <a href='https://github.com/Cygni94'>Cristiano Coelho</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: 5</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>
    </div>
)

export default UserInfo