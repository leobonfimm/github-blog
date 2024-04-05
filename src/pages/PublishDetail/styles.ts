import styled from 'styled-components'

export const PublishDetailContainer = styled.div``

export const PublishSummary = styled.header`
  margin: 0 auto;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }
`

export const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

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

export const InfosContainer = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-label']};

    span {
      line-height: 1.6;
    }
  }
`

export const IssueBodyContainer = styled.article`
  padding: 2.5rem 2rem;

  .line-break {
    white-space: pre-wrap;
  }
`
