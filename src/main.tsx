import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { podcastApi } from './services/podcast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EpisodeDetail, Home, PodcastDetail } from './pages'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "podcast/:podcastId",
    element: <PodcastDetail />,
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: <EpisodeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApiProvider api={podcastApi}>
    <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
  </ApiProvider>
,
)
