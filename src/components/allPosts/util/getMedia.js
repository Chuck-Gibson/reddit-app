export const getMedia = (media) => {
  if (media) {
    return (
      <video
        controls
        muted
        style={{
          borderRadius: 2,
        }}
      >
        <source src={media.contentUrl} />
      </video>
    );
  }
  return null;
};
