import { FeaturedVideoData } from 'components/page/featured-video/constant';
import { FeaturedVideoStyles } from 'components/page/featured-video';
import { ContentStyles, MainVideo, VideoStyles } from './styled';

export const FeaturedVideoComponent = () => {
  return (
    <MainVideo>
      <ContentStyles>video nổi bật</ContentStyles>
      <VideoStyles>
        {FeaturedVideoData.length &&
          FeaturedVideoData.map((data) => <FeaturedVideoStyles path={data.path} key={data.id} />)}
      </VideoStyles>
    </MainVideo>
  );
};
