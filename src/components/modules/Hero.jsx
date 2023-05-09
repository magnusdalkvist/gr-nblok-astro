import CustomImage from "../CustomImage";
import RenderBlocks from "../RenderBlocks";

export default function Hero({ module }) {
  return (
    <div className="w-full h-screen relative">
      <CustomImage
        src={module?.backgroundImage?.url}
        alt=""
        className="object-cover inset-0 absolute h-full w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center  gap-4 p-4">
        <RenderBlocks blocks={module.blocks} />
      </div>
    </div>
  );
}
