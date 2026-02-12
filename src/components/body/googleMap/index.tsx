import { Dailybg } from 'assets';
import { ContentStyles, ImageStyles, MainBoxStyles, MainStyles, Mapstyles } from './styled';

export const GoogleMapsEmbed = () => {
  return (
    <>
      <MainBoxStyles>
        <ImageStyles src={Dailybg} />
      </MainBoxStyles>
      <MainStyles>
        <ContentStyles>Bạn muốn tìm địa chỉ của tasvinco</ContentStyles>
        <Mapstyles>
          <iframe
            title="Google Maps tasvinco"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15384.852038183459!2d108.6171189!3d15.4190505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169c79abb17e417%3A0x1291fa0e2f5a43c!2zQ8O0bmcgdHkgVE5ISCBDxqEga2jDrSBUYXN2aW5jbw!5e0!3m2!1svi!2s!4v1686502826257!5m2!1svi!2s"
            width="800"
            height="500"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <iframe
            title="trang FB tasvinco"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089789756701%26ref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </Mapstyles>
      </MainStyles>
    </>
  );
};
