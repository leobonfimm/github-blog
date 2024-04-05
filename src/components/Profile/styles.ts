import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin: 0 auto;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5.5rem;

  display: flex;
  align-items: flex-end;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    font-size: 0.75rem;
    line-height: 1.6;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }
  }
`

export const ProfileDescriptionContainer = styled.div`
  p {
    line-height: 1.6;
  }
`

export const InfosContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['base-label']};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      line-height: 1.6;
    }
  }
`
