import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeList } from '@/components'

import BannerImage from '@/assets/coffer-banner.png'

import {
  BannerContainer,
  BannerContent,
  BannerImageContainer,
  BoxAditionalInfo,
  BoxAditionalInfoItem,
  BoxAditionalInfoRow,
  CoffeeListContainer,
  HomeContainer,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BoxAditionalInfo>
            <BoxAditionalInfoRow>
              <BoxAditionalInfoItem backgroundColor="darkYellow">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </BoxAditionalInfoItem>
              <BoxAditionalInfoItem backgroundColor="brown">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </BoxAditionalInfoItem>
            </BoxAditionalInfoRow>
            <BoxAditionalInfoRow>
              <BoxAditionalInfoItem backgroundColor="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </BoxAditionalInfoItem>
              <BoxAditionalInfoItem backgroundColor="purple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                <p>O café chega fresquinho até você.</p>
              </BoxAditionalInfoItem>
            </BoxAditionalInfoRow>
          </BoxAditionalInfo>
        </BannerContent>
        <BannerImageContainer>
          <img src={BannerImage} alt="Café" />
        </BannerImageContainer>
      </BannerContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList />
      </CoffeeListContainer>
    </HomeContainer>
  )
}
