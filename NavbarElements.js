
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background:green;
    height: 90px;
    display: flex;
    justify-content : center;
    font-weight: 700;
`;

export const Navlink = styled(Link)`
    color: azure;
    font-size: large;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width:400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`