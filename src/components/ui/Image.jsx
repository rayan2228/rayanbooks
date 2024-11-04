const Image = ({ src, alt = "book-cover", loading = "lazy", ...attr }) => {
  return <img src={src} alt={alt} loading={loading} {...attr} />;
};

export default Image;
