import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/purple_smoke.svg"
      alt="Imagem de um uma fumaça e Purple Smoke escrito em baixo"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
