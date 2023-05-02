import styled from 'styled-components'

export const HomeContainer = styled.main`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.titleXL};
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.baseTitle};
    align-self: stretch;
  }
`

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6rem 0; // 96px

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const BannerContent = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.baseSubtitle};
    line-height: 1.3;
    font-stretch: 100;
  }
`

export const BoxAditionalInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-direction: column;
`

export const BoxAditionalInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem; // 40px
  margin-top: 1rem;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 0;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`

export type backgroudColorsVariant =
  | 'yellow'
  | 'darkYellow'
  | 'purple'
  | 'brown'

interface BoxAditionalInfoItemProps {
  backgroundColor: backgroudColorsVariant
  theme: any
}

const backgroundColors = {
  yellow: '#DBAC2C',
  darkYellow: '#C47F17',
  purple: '#8047F8',
  brown: '#574F4D',
}

export const BoxAditionalInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 42%;

  &:nth-of-type(even) {
    width: 52%;
  }

  span {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ backgroundColor }: BoxAditionalInfoItemProps) =>
      backgroundColors[backgroundColor]};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    > p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      flex: 1;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 0;
    &:nth-of-type(even) {
      width: 100%;
    }
  }
`

export const BannerImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 475px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CoffeeListContainer = styled.section`
  width: 100%;
  padding: 6rem 0; // 96px
`
