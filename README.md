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

### with redux-saga

```js
import axios from 'axios'
import { put } from 'redux-saga/effects'
import { pending, success, failure } from 'redux-status-manager'
import { AUTHENTICATE } from '../actionTypes'
import { set } from '../actions'

export default function * ({ payload }) {
  try {
    yield put(pending(AUTHENTICATE))

    // ...perform some asynchronous action

    yield put(success(AUTHENTICATE))
  } catch (err) {
    yield put(failure(AUTHENTICATE, err))
  }
}
```

## Tip Jars
```
BTC: 33dgdBhV1Yf5ERKLLKS7ztEAEEx3zTvSkw
ETH: 0xa6938ead6d6820377fed78b657e4eb6c5c44d1b3
```
