export default function ShopSection({ module }) {
  console.log(module);
  return (
    <div className="w-full h-screen relative">
      <img src={module?.backgroundImage.url} alt="" />
      <h2>{module?.title}</h2>
      <div className="flex absolute inset-0 p-20">
        {module?.imageButtons.map((imageButton, i) => (
          <div key={i} className="">
            <a href={imageButton.link}>
              <img src={imageButton.image.url} alt="" className="rounded-sm" />
            </a>
            <h3>{imageButton.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
