import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tweets: [],
  loading: false,
  error: null,
  selectedTweet: null
}

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.tweets = action.payload
    },
    addTweet: (state, action) => {
      state.tweets.unshift(action.payload)
      // LocalStorage'a kaydet
      localStorage.setItem('tweets', JSON.stringify([action.payload, ...state.tweets]))
    },
    updateTweet: (state, action) => {
      const index = state.tweets.findIndex(tweet => tweet.id === action.payload.id)
      if (index !== -1) {
        state.tweets[index] = action.payload
        // LocalStorage'ı güncelle
        localStorage.setItem('tweets', JSON.stringify(state.tweets))
      }
    },
    deleteTweet: (state, action) => {
      state.tweets = state.tweets.filter(tweet => tweet.id !== action.payload)
      // LocalStorage'ı güncelle
      localStorage.setItem('tweets', JSON.stringify(state.tweets))
    },
    setSelectedTweet: (state, action) => {
      state.selectedTweet = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    loadTweetsFromStorage: (state) => {
      const savedTweets = localStorage.getItem('tweets')
      if (savedTweets) {
        state.tweets = JSON.parse(savedTweets)
      }
    }
  }
})

export const {
  setTweets,
  addTweet,
  updateTweet,
  deleteTweet,
  setSelectedTweet,
  setLoading,
  setError,
  loadTweetsFromStorage
} = tweetSlice.actions

export default tweetSlice.reducer 