import React from "react";
import Block from "./Block";

export default function RenderBlock({ block }) {
  console.log(block);
  switch (block._type) {
    case "image":
      return <img src={block.asset.url} alt={block.alt} className="w-full h-auto" />;
    case "block":
      return (
        <Block as={block.style == "normal" ? "p" : block.style}>{block.children[0].text}</Block>
      );
    default:
      return null;
  }
}
