import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 360px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }
`

export const Logo = styled.img``

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
`

export const Location = styled(MenuItem)`
  background-color: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.purpleDark};

  & > svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const Cart = styled(MenuItem)`
  background-color: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
  position: relative;

  & > span {
    background-color: ${({ theme }) => theme.colors.yellowDark};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    font-weight: 700;
    position: absolute;
    top: -5px;
    right: -5px;
  }
`
