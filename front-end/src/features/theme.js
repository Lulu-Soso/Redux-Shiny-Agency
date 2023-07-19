import { createAction, createReducer } from '@reduxjs/toolkit'

// action creators

export const toggleTheme = createAction('theme/toggle')

export const setTheme = createAction('theme/set')

// setTheme('light');

export default createReducer('light', (builder) => {
  return builder
    .addCase(toggleTheme, (state) => {
      return state === 'light' ? 'dark' : 'light'
    })
    .addCase(setTheme, (state, action) => {
      return action.payload
    })
})

