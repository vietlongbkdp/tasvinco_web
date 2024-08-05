import { StylesMain } from './styled';

export const FeaturedVideoStyles = ({ path }) => {
  return (
    <StylesMain>
      <iframe
        width="560"
        height="315"
        src={path}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </StylesMain>
  );
};
