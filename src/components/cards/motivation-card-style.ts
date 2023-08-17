'use client'

import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: #fff;
    min-width: 100px;
    max-width: 250px;
`

export const CardTitle = styled.p`
    font-weight: bold;
    font-size: 2rem;
    color: ${props => props.theme.palette.green};
`
export const CardDescription = styled.p`
    font-size: 12px;
    text-align: center;
`