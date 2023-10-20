import React from 'react';
import styled, { css } from "styled-components"

const StyledCard = styled.div`
    position: relative;
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    width: calc(100% - 36px);
    transform: translate(-50%, 50%);  
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;

`;
const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CartTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;
const CartAmount = styled.span`
    font-size: ${props => props.fontSize || "18px"  };;
    font-weight: bold;
   
    ${props => 
        props.secondary && 
        css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff );
    `};
    ${props => 
        !props.secondary && 
        css`
             background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;
const CardMeta = styled.div`
    display: flex; // cung hang
    align-items: center; // de giua
    column-gap: 12px; // khoang cach
`;
const Card = (props) => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg 
                src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768"
                alt=""
                />
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar 
                            src='https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768'
                            alt=""
                        />
                        <UserName>@zndrson</UserName>
                    </CardUser>
                    <CardMeta>
                        <img src ="/icon-heart.svg" alt = "heart" />
                        <span>256</span>
                    </CardMeta>
                </CardTop>
                <CardFooter>
                    <CartTitle>Cosmic Perspective</CartTitle>
                    <CartAmount secondary = {props.secondary} fontSize = "22px">12,000 PSL</CartAmount>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};

export default Card;