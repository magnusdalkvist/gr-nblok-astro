import RenderBlocks from "../RenderBlocks";

export default function NumberedInfoList({ module }) {
  return (
    <div className="w-full h-screen relative">
      {module?.infoList.map((info, i) => (
        <div key={i}>
          <RenderBlocks blocks={info.blocks} />
        </div>
      ))}
    </div>
  );
}
