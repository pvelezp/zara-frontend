import styled from "styled-components"
import { Header } from "../header"

interface DetailLayoutProps {
    children: React.ReactNode
}

const DetailContainer = styled.section``

const Content = styled.section`
    padding: 1.5rem;
    margin-top:50px;
`

export const DetailLayout = ({children}:DetailLayoutProps) => {
    return (
        <DetailContainer>
            <Header />
            <Content>
                {children}
            </Content>
        </DetailContainer>
    )
}
