export default function CustomImage({ img, imgSrc, pt }) {
  const source = imgSrc || img; // support both props

  //  fallback image (used only if original is broken)
  const fallback = "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img
        src={source}
        alt="recipe"
        onError={(e) => {
          // Replace with fallback only if the original fails
          e.target.onerror = null; // Prevent loop
          e.target.src = fallback;
        }}
      />
    </div>
  );
}
