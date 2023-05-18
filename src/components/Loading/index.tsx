import * as S from './styles'

interface LoadingProps {
  isLoading: boolean
}

const Loading = (props: LoadingProps) => {
  return (
      props.isLoading && <S.Wrapper>
        <S.Loading data-testid="loading"></S.Loading>
      </S.Wrapper>
  )
}

export default Loading