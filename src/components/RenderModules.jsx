import Hero from "./modules/Hero";

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
    default:
      return null;
  }
}
