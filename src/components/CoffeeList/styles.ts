import styled from 'styled-components'

export const CoffeeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0 3rem;
`

export const CoffeeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  width: 100%;
  gap: 0.5rem;
  width: 15rem;
  padding: 1rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.baseCard};
  margin-top: 4.5rem;
  padding: 1.3rem; // 20px

  &:last-of-type {
    align-self: flex-start;
  }

  img {
    margin-top: -3rem;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.baseLabel};
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    text-align: center;
    width: 100%;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
`

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  color: ${({ theme }) => theme.colors.yellowDark};
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  text-align: center;
  width: 100%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  text-transform: uppercase;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 70px;
`

export const PurchaseContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;

  > p {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    color: ${({ theme }) => theme.colors.baseText};
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    text-align: left;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.baseButton};
  border-radius: 6px;
  padding: 8px 10px;

  > button {
    background: transparent;
    cursor: pointer;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const CartButton = styled.button`
  background: transparent;
  background-color: ${({ theme }) => theme.colors.purpleDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
`
