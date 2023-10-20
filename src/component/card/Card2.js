import React from 'react';
import styled, { css } from "styled-components"

const StyledCard = styled.div`
    position: relative;
    .card-image{
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    }
    }
    .card-content{
        position: absolute;
        left: 50%;
        width: calc(100% - 36px);
        transform: translate(-50%, 50%);  
        bottom: 0;
        background-color: white;
        z-index: 10;
        border-radius: 20px;
        padding: 20px;
        .card-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .card-user{
            display: flex;
            align-items: center;
            column-gap: 12px;
        }
        img{
            width: 30px;
            height: 30px;
            border-radius: 100rem;
            object-fit: cover;
            flex-shrink: 0;
        }
        .card-username{
            font-weight: 300;
            font-size: 16px;
            color: #333;
        }
        .card-meta{
            display: flex; // cung hang
            align-items: center; // de giua
            column-gap: 12px; // khoang cach
        }
    }
    .card-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-title{
            font-size: 18px;
            font-weight: 500;
            color: ${(props) => props.theme.colors.blue};
        }
        .card-amount{
            font-size: ${props => props.fontSize || "18px"  };
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
        }
    }
    
`;
const Card2 = (props) => {
    return (
        <StyledCard secondary = {props.secondary}>
            <div className='card-image'>
                <img 
                src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768"
                alt=""
                />
            </div>
            <div className='card-content'>
                <div className='card-top'>
                    <div className='card-user'>
                        <img 
                            src='https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768'
                            alt=""
                        />
                        <div class='card-username'>@zndrson</div>
                    </div>
                    <div className='card-meta'>
                        <img src ="/icon-heart.svg" alt = "heart" />
                        <span>256</span>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='card-title'>Cosmic Perspective</div>
                    <span className='card-amount'>12,000 PSL</span>
                </div>
            </div>
        </StyledCard>
    );
};

export default Card2;