'use client'

import { styled } from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${props => props.theme.palette.blue};
    color: ${props => props.theme.palette.green};
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 2rem;
    transition: 1s;
`

export const Topic = styled.li<{active?: boolean }>`
    display: flex;
    flex-direction: column;
    transition: 1s;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.active ? 1 : 0};
    div {
    transition: 1s;
        opacity: 0.5;
        height: 400px;
        margin-bottom: 20px;
        border-left: 2px solid ${props => props.theme.palette.green};
    }
`