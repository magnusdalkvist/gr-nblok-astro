import { PortableText } from "@portabletext/react";
import CustomImage from "./CustomImage";

export default function RenderPortableText({ content }) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <CustomImage src={value.asset.url} />,
    },

    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={content} components={myPortableTextComponents} />;
}
