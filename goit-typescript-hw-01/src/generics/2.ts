type AllType = {
  name: string;

  position: number;

  color: string;

  weight: number;
};

const fullInfo: AllType = {
  name: "Bob",
  position: 1290,
  color: "green",
  weight: 20,
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
