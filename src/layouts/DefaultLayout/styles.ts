import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem; // 1120px
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1150px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
