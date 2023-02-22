import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Card = styled.section`
    height:140px;
    width:200px;
    box-shadow: rgba(149, 157, 165, 0.23) 0px 8px 24px;
    position:relative;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding:0.8rem;
  transition: transform 0.25s ease-in-out;
  &:hover{
    transform:scale(1.035);
  }
  cursor:pointer;
    >img{
      border-radius:50%;
      position:absolute;
      top:-2.5rem;
      left:25%;
      height:100px;
      width:100px;
    }
    >h3{
      margin-bottom:0;
      line-height:1;
      display:-webkit-box;
      overflow:hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-trasform:capitalize;
    }
    >p{
      margin-bottom:0;
      line-height:1.27;
      display:-webkit-box;
      overflow:hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;   
    }
`
interface PodcastCardProps {
        id :string;
        image :string;
        name :string;
        author :string;
        onClick:()=>void;
}
export const PodcastCard = ({id,name,image,author, onClick}:PodcastCardProps) => {
  const navigate = useNavigate()

    return (
        <Card
        onClick={()=> {
          onClick()
          navigate(`/podcast/${id}`)}}
        key={id}
        >
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>Author: {author}</p>
        </Card>
    )
}
