import jsIcon from "../images/js.png";
import tailwindIcon from "../images/tailwind.png";
import bstIcon from "../images/bst.png";
import reactIcon from "../images/react.png";
import nextIcon from "../images/next.png";
import reduxIcon from "../images/redux.png";
import tsIcon from "../images/ts.png";

import ItemStack from "./molecules/itemStack";

export default function Stack() {
  return (
    <section className="row-start-1 row-span-3 w-full h-auto">
      <div className="bg-white w-full p-6 h-auto rounded-lg">
        <h2 className="mb-4 text-gray font-bold text-lg">Front End</h2>
        <ItemStack name="Javascript" icon={jsIcon} />
        <ItemStack name="Tailwind" icon={tailwindIcon} />
        <ItemStack name="Bootstrap" icon={bstIcon} />
        <ItemStack name="React JS" icon={reactIcon} />
        <ItemStack name="Redux" icon={reduxIcon} />
        <ItemStack name="Next JS" icon={nextIcon} />
        <ItemStack name="Typescript" icon={tsIcon} />
      </div>
    </section>
  );
}
