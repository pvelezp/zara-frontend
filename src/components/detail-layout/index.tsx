import styled from "styled-components"
import { PodcastDetailCard } from "../podcast-detail-card"

interface DetailLayoutProps {
    children: React.ReactNode
}

const DetailContainer = styled.section`
    display:flex;
    gap:4rem;
`
const LeftDetailBox = styled.article`
    min-width:200px;
    padding:1rem;
`
const RightDetailBox = styled.article`
    flex:1;
`
export const DetailLayout = ({children}:DetailLayoutProps) => {
    return (
        <DetailContainer>
             <LeftDetailBox>
                <PodcastDetailCard />
             </LeftDetailBox>
             <RightDetailBox>
                {children}
             </RightDetailBox>
        </DetailContainer>
    )
}
