import Hero from "./modules/Hero";
import ShopSection from "./modules/ShopSection";
import SlidingInfoCards from "./modules/SlidingInfoCards";

export default function RenderModules({ modules }) {
  return (
    <>
      {modules.map((module, i) => {
        return <Module module={module} key={i}></Module>;
      })}
    </>
  );
}

function Module({ module }) {
  switch (module._type) {
    case "module.hero":
      return <Hero module={module} />;
    case "module.slidingInfoCards":
      return <SlidingInfoCards module={module} />;
    case "module.shopSection":
      return <ShopSection module={module} />;
    default:
      return null;
  }
}
