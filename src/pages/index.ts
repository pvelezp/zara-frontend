import { lazy } from "react";

const Home = lazy(() => import("./home"));
const EpisodeDetail = lazy(() => import("./episode-detail"));
const PodcastDetail = lazy(() => import("./podcast-detail"));

export {
    Home,
    EpisodeDetail,
    PodcastDetail
}