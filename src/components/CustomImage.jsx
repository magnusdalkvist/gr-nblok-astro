export default function CustomImage({ src, quality = 80, className = "" }) {
  const sizes = [
    { width: 375, size: "375w" },
    { width: 768, size: "768w" },
    { width: 1024, size: "1024w" },
    { width: 1440, size: "1440w" },
    { width: 1920, size: "1920w" },
    { width: 2560, size: "2560w" },
  ];

  // Append `?q=80&auto=format` to the CDN URL
  const formattedSrc = src && `${src}?q=${quality}&auto=format`;

  // Generate the `srcset` string based on the defined sizes and widths
  const srcset =
    src && sizes.map((size) => `${formattedSrc}&w=${size.width} ${size.size}`).join(", ");

  return (
    <img
      src={formattedSrc}
      srcSet={srcset}
      //   Sizes can be added later if needed
      //   sizes="(max-width: 768px) 100vw, 50vw"
      alt="Custom Image"
      className={className}
    />
  );
}
