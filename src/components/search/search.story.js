'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Search from './index'

const stories = storiesOf('Search', module)

stories.add('Search component', () => (
  <Search
    handleSearch={() => {}}
    isDisabled={false} />
))

  .add('Search component disabled', () => (
    <Search
      handleSearch={() => {}}
      isDisabled={1} />
  ))
