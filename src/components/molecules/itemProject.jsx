import Anchor from "../atoms/anchor";
import Tag from "../atoms/tag";

export default function ItemProject({
  title,
  desc,
  thumbnail,
  tags,
  link_demo,
  link_repo,
}) {
  return (
    <div className="w-full mt-5 rounded-lg bg-white h-auto sm:h-48 md:h-60 p-3 overflow-hidden flex flex-col sm:flex-row">
      <img
        className="w-full sm:w-48 md:w-72 h-48 sm:h-full rounded-lg object-cover"
        src={thumbnail}
        alt="hhha"
      />
      <div className="ml-4">
        <figcaption>
          <div>
            {tags.map((item, index) => (
              <Tag tagName={item} key={index} />
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl mt-1.5 sm:mt-3 text-black-ori">
            {title}
          </h2>
          {desc && (
            <p className="text-gray-3 mt-2 w-full text-sm lg:text-base max-w-lg">
              {desc}
            </p>
          )}
        </figcaption>
        <div className="w-64 mt-2.5 flex">
          <Anchor href={link_demo}>Demo</Anchor>
          {link_repo && (
            <Anchor href={link_repo} outline>
              Code
            </Anchor>
          )}
        </div>
      </div>
    </div>
  );
}
