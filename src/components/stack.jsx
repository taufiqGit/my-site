import ItemStack from "./molecules/itemStack";

import jsIcon from "../images/js.png";
import tailwindIcon from "../images/tailwind.png";
import bstIcon from "../images/bst.png";
import reactIcon from "../images/react.png";
import nextIcon from "../images/next.png";
import reduxIcon from "../images/redux.png";
import tsIcon from "../images/ts.png";
import pyIcon from "../images/py.png";
import muiIcon from "../images/mui.png";
import expIcon from "../images/express.webp";
import flaskIcon from "../images/flask.png";
import adonisIcon from "../images/adonis.png";

export default function Stack() {
  return (
    <section className="row-start-1 row-span-3 w-full h-auto">
      <div className="bg-white w-full p-6 h-auto rounded-lg">
        <h2 className="mb-4 text-gray font-bold text-lg">Programming</h2>
        <ItemStack name="Python" icon={pyIcon} />
        <ItemStack name="Typescript" icon={tsIcon} />
        <ItemStack name="Javascript" icon={jsIcon} />
        <h2 className="mb-4 text-gray font-bold text-lg mt-4">Stack</h2>
        <ItemStack name="Material UI" icon={muiIcon} />
        <ItemStack name="Tailwind" icon={tailwindIcon} />
        <ItemStack name="Bootstrap" icon={bstIcon} />
        <ItemStack name="React JS" icon={reactIcon} />
        <ItemStack name="Redux" icon={reduxIcon} />
        <ItemStack name="Next JS" icon={nextIcon} />
        <ItemStack name="Express JS" icon={expIcon} />
        <ItemStack name="Flask" icon={flaskIcon} />
        <ItemStack name="Adonis" icon={adonisIcon} />
      </div>
    </section>
  );
}
