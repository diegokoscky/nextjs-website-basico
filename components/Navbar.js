import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0 2rem;
`;

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLink>NXT</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/sobre" passHref>
                    <StyledLink>Sobre</StyledLink>
                </Link>
                <Link href="/contato" passHref>
                    <StyledLink>Contato</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
