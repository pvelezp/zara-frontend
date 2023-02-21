import { podcastApi } from "../../services/podcast";
import styled from "styled-components"

const List = styled.section`
    display:flex;
    flex-wrap:wrap;
    gap: 10;
`

export const PodcastList = () => {
  const { data, isLoading, error } = podcastApi.useGetPodcastsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
    
  const podcastList = JSON.parse(data.contents).feed.entry

  return (
    <List>
        {podcastList.map((podcast) =>  (
        <div key={podcast.id.attributes["im:id"]}>
          <img src={podcast["im:image"][0]["label"]} alt={podcast["im:name"]["label"]} />
          <h3>{podcast["im:name"]["label"]}</h3>
          <p>Author: {podcast["im:artist"]["label"]}</p>
        </div>
      ))}
    </List>)
}

   
