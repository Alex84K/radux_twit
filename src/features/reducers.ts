import { combineReducers } from "@reduxjs/toolkit"

export function followersSlice1(state = 0, action: any) {
    switch (action.type) {
      case 'FS_INCREMENT':
        return state + 1
      case 'FS_DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  export function followingSlice1(state = 0, action: any) {
    switch (action.type) {
      case 'FG_INCREMENT':
        return state + 1
      case 'FG_DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  export  default combineReducers({
    followersSlice1,
    followingSlice1,
  })