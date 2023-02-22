import { useSelector } from "react-redux"
import styled from "styled-components"

const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding: 1.4rem 1rem;
    box-shadow: rgba(149, 157, 165, 0.23) 0px 8px 24px;
    max-width:280px;
    min-width:200px;
`
const ImgContainer = styled.div`
    text-align:center;
    padding-bottom:1rem;
    border-bottom:1px solid lightgray;
    >img{
        border-radius:8px;
        height:180px;
        width:180px;
    }
`
const PodcastInfo = styled.div`
    padding-top:1rem;
    padding-bottom:1rem;
    border-bottom:1px solid lightgray;
    >h3{
        font-size:1rem;
    }
    >p{
        font-size:0.85rem;
    }
`
const PodcastDescription = styled.div`
    padding-top:1rem;
    >strong{
        font-size:1rem;
        margin-bottom:1rem;
    }
    >p{
        font-size:0.9rem;
        line-height:1.4;
    }
`

export const PodcastDetailCard = () => {
    const {currentPodcast:podcast} = useSelector(state => state.podcast)

    const image = podcast["im:image"][2]["label"]
    const name = podcast["im:name"]["label"]
    const author = podcast["im:artist"]["label"]
    const description = podcast["summary"]["label"]

    return (
        <DetailContainer>
          <ImgContainer>
          <img src={image} alt={name} />
          </ImgContainer>
        <PodcastInfo>
        <h3>{name}</h3>
          <p>by {author}</p> 
        </PodcastInfo>
          <PodcastDescription>
          <strong>Description:</strong>
          <p>{description}</p> 
          </PodcastDescription>
        </DetailContainer>
    )
}
