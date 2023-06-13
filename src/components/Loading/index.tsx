import Icon from '@components/Icon'
import * as S from './styles'
interface LoadingProps {
  isLoading: boolean
}

const Loading = (props: LoadingProps) => {
  return (
    props.isLoading && (
      <S.Wrapper>
        <S.LoadingCircle>
          <Icon icon={'AnimationCircle'}></Icon>
        </S.LoadingCircle>
        <S.LoadingPercentage>
          <Icon icon={'AnimationPercentage'}></Icon>
        </S.LoadingPercentage>
        <S.LoadingRotate>
          <Icon icon={'AnimationRotate'}></Icon>
        </S.LoadingRotate>
      </S.Wrapper>
    )
  )
}

export default Loading
