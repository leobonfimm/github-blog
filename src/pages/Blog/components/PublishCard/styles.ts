import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PublishCardContainer = styled(NavLink)`
  padding: 2rem;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-decoration: none;
  background-color: ${(props) => props.theme['base-post']};
  max-height: 16.25rem;
  border-radius: 10px;

  p {
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Heading = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }

  time {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
    margin-top: 0.3125rem;
    white-space: nowrap;
  }
`
