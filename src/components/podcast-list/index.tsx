import styled from "styled-components"
import { PodcastCard } from "../podcast-card";

const List = styled.section`
    display:flex;
    flex-wrap:wrap;
    gap: 4rem;
    justify-content: center;
`

export const PodcastList = ({podcastList}) => {

  return (
    <List>
        {podcastList.map((podcast) =>  {
          const id = podcast.id.attributes["im:id"]
          const image = podcast["im:image"][0]["label"]
          const name = podcast["im:name"]["label"]
          const author = podcast["im:artist"]["label"]
          return (
            <PodcastCard key={id} id={id} image={image} name={name} author={author} />
      )})}
    </List>)
}

   
