import { Img } from 'components/common/Img/Img';

export const getImage = (isImage, contentUrl) => {
  if (isImage) {
    return <Img src={contentUrl} />;
  }
  return null;
};
