import React from 'react'
import styled from 'styled-components'

const StyledListCard = styled.div`

    border: 1px solid #c4c4c4;

    & > h4 {
        font-size: 18px;
        margin: 0;
        padding: 12px;
    }
`

const List = styled.ul`

    list-style-type: none;
    padding: 0 0 12px;
    margin: 0;
    li {
        color: ${({ theme }) => theme.color};
        font-size: 12px;
    }
`

export default function ListCard({ title, items }) {

    return <StyledListCard>
        <h4>{title}</h4>
        <List>
            {
                items.map((item, i) => <li key={i}>{item.name}</li>)
            }
        </List>
    </StyledListCard>
}