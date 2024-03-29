import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { MEDIA_QUERY, SIZE } from '~/styles'
import { PostHeadInfoProps } from '~/types/post'

import PostHeadInfo from './PostHeadInfo'

type Props = PostHeadInfoProps & { thumbnail: IGatsbyImageData }
const PostHead = function ({ thumbnail, ...props }: Props) {
  return (
    <Wrapper>
      <BackgroundImage image={thumbnail} alt="포스트 썸네일" />
      <PostHeadInfo {...props} />
    </Wrapper>
  )
}

export default PostHead

const Wrapper = styled.div`
  position: relative;
  height: ${SIZE.headerHeight};

  ${MEDIA_QUERY.mobile} {
    height: ${SIZE.headerHeightMobile};
  }
`

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${SIZE.headerHeight};
  object-fit: cover;
  filter: brightness(0.25);

  ${MEDIA_QUERY.mobile} {
    height: ${SIZE.headerHeightMobile};
  }
`
