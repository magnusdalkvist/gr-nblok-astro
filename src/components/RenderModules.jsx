import Hero from "./modules/Hero";
import NumberedInfoList from "./modules/NumberedInfoList";

export default function RenderModules({ modules }) {
  return (
    <>
      {modules.map((module) => {
        return <Module module={module}></Module>;
      })}
    </>
  );
}

function Module({ module }) {
  switch (module._type) {
    case "module.hero":
      return <Hero module={module} />;
    case "module.numberedInfoList":
      return <NumberedInfoList module={module} />;
    default:
      return null;
  }
}
