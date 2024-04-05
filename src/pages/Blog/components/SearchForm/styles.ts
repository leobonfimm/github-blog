import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 0.75rem;

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
