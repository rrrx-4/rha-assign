import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import BlogList from './pages/blog-list'
import Blog from './pages/blog'
import Layout from './components/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient} >
    <Routes >
      <Route element={<Layout/>} >
      <Route path="/" element={<BlogList/>} />
      <Route path={`/blog/:blogId`} element={<Blog/>} />
      </Route>
    </Routes>
    </QueryClientProvider>
  )
}

export default App
