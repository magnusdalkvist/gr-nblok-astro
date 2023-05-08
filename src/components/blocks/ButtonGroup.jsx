import Button from "../Button";

export default function ButtonGroup({ block }) {
  return (
    <div className="flex gap-4">
      {block?.buttons?.map((button) => {
        return (
          <Button type="shadow" href={button?.link}>
            {button?.text}
          </Button>
        );
      })}
    </div>
  );
}
