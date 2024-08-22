import imageUrlBuilder from "@sanity/image-url";

import client from "@src/sanityClient.js";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ImageContent = ({ index, asset, alt, caption }) => {
  const image_url = urlFor(asset?._ref).url();
  return (
    <div key={index} className="__story_image">
      <img src={image_url} alt={alt || "Story image"} />
      {caption && <p className="__image_caption">{caption}</p>}
    </div>
  );
};

export default ImageContent;
