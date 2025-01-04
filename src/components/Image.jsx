import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, width, height, className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_END_POINT_IMAGE_KIT}
      path={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
