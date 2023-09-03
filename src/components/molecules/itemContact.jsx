export default function ItemContact({ icon, info, alt, mt }) {
  return (
    <span className={`text-lg text-gray flex ${mt ? "mt-2" : "mt-0"}`}>
      <img className="inline-block w-7 mr-2" src={icon} alt={alt} />
      <span className="text-sm sm:text-base">{info}</span>
    </span>
  );
}
