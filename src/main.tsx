import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { podcastApi } from './services/podcast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EpisodeDetail, Home, PodcastDetail } from './pages'
import { MainLayout } from './components';
import './index.css'

const withLayout = (component:React.ReactNode) => <MainLayout>{component}</MainLayout> 

const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(<Home />),
  },
  {
    path: "podcast/:podcastId",
    element: withLayout(<PodcastDetail />),
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: withLayout(<EpisodeDetail />),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApiProvider api={podcastApi}>
    <Suspense fallback={<div>Loading... </div>}>
    <RouterProvider router={router} />
    </Suspense>
  </ApiProvider>
,
)
