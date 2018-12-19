'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

const stories = storiesOf('UserInfo', module)

stories.add('User Info component', () => (
  <UserInfo
    userinfo={{
      username: 'teste',
      photo: 'https://avatars2.githubusercontent.com/u/16857732?s=400&u=423347eb3d5a593fc9e7d9480a2671ecaf185144&v=4',
      login: 'vinivelasco',
      repos: [],
      followers: 10,
      following: 11
    }}
  />
))
