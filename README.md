# Redux Status Manager

## Installation
Import reducer and combine with the rest of your reducers.

```js
import { combineReducers } from 'redux'

const reducers = {
  statuses: require('redux-status-manager').reducer,
  ...yourOtherReducers
}

export default combineReducers(reducers)
```

## Usage

### dispatching statuses

this example uses redux-saga.

```js
import axios from 'axios'
import { put } from 'redux-saga/effects'
import { pending, success, failure } from 'redux-status-manager'
import { MY_EXAMPLE } from '../actionTypes'
import { set } from '../actions'

export default function * ({ payload }) {
  try {
    yield put(pending(MY_EXAMPLE))

    // ...perform some asynchronous action

    yield put(success(MY_EXAMPLE))
  } catch (err) {
    yield put(failure(MY_EXAMPLE, err))
  }
}
```

### in a component

a common use case might be displaying a progress indicator or an error message based on the status of a given asynchronous action.

```js
import React from 'react'
import { connect } from 'react-redux'
import { Loading, TryAgain, Content } from 'src/components'
import { MY_EXAMPLE } from 'src/store/components/example/actionTypes'

const enhance = connect(state => ({ status: state.statuses[MY_EXAMPLE] }))

export default ({ status }) =>
  <div>
    {status === 'pending' && <Loading />}
    {status === 'success' && <Content />}
    {status === 'failure' && <TryAgain />}
  </div>
```

## Tip Jars
```
BTC: 33dgdBhV1Yf5ERKLLKS7ztEAEEx3zTvSkw
ETH: 0xa6938ead6d6820377fed78b657e4eb6c5c44d1b3
```
