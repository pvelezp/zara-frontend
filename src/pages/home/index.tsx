import { useMemo, useState } from "react";
import { PodcastList, SearchBox } from "../../components"
import { podcastApi } from "../../services/podcast";
import styled from "styled-components"

const SearchContainer = styled.section`
    display:flex;
    gap:0.5rem;
    justify-content:flex-end;
    margin-bottom:4rem; 
`
const NumberBadge = styled.span`
    background-color:blue;
    color:white;
    display:grid;
    font-weight:bold;
    place-items: center;
    border-radius:10px;
    padding:0 0.3rem;
`

const Home = () => {
  const { data, isLoading, error } = podcastApi.useGetPodcastsQuery();
  const [searchText, setSearchText] = useState('')

  const filterByText = (field:string) => field.toLowerCase().includes(searchText.toLowerCase())
  const podcastList = data && JSON.parse(data.contents).feed.entry;

  const filteredItems = useMemo(() => {
		if(searchText.length === 0) return podcastList
		return podcastList.filter((podcast) => {
      const name = podcast["im:name"]["label"]
      const author = podcast["im:artist"]["label"]
      return filterByText(name) || filterByText(author)
    }
		)
	}, [podcastList, searchText]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return(
     <>
       <SearchContainer>
      <NumberBadge>
        {filteredItems.length}
      </NumberBadge>
       <SearchBox onChange={setSearchText} />
       </SearchContainer>
      <PodcastList podcastList={filteredItems} />
    </>) 
}

export default Home
