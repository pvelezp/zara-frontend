import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    align-items:center;
    height: 50px;
    padding: 0.3rem 1.5rem;
    justify-content: space-between;
    position:fixed;
    top:0;
    background-color:#fafafa;
    width:100%;
    box-shadow: rgba(149, 157, 165, 0.23) 0px 8px 24px;
`
const LogoName = styled.h4`
    color: blue;
`
export const Header = () => {
    return (
        <HeaderContainer>
            <LogoName>Podcaster</LogoName>
          {/*   Loader    */}
        </HeaderContainer>
    )
}
