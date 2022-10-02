import { Img } from 'components/common/Img/Img';

export const getImage = (url) => {
  if (url.isImage) {
    return <Img src={url.contentUrl} />;
  }
  return null;
};
