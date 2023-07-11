import avatar from "../images/me-2.jpg";
import mailIcon from "../images/mail.svg";
import callIcon from "../images/call.svg";
import githubIcon from "../images/github.png";

import ItemContact from "../components/molecules/itemContact";

export default function Profile() {
  return (
    <figure className="flex flex-col items-center lg:flex-row bg-white p-6 rounded-lg">
      <img
        className="w-64 h-64 rounded-full object-cover"
        src={avatar}
        alt="avatar"
      />
      <div className="ml-4 mt-8 lg:mt-0 w-full flex flex-col justify-between lg:flex-row">
        <figcaption className="flex flex-col ">
          <div>
            <h2 className="text-2xl font-semibold text-gray">Taufiq Hidayah</h2>
            <span className="text-lg mt-3 text-gray-3">
              Front-end developer
            </span>
          </div>
          <blockquote className="mt-5 max-w-lg">
            <p className="text-lg font-light leading-6 text-gray-3">
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications, and the build size is tiny.
            </p>
          </blockquote>
        </figcaption>
        <div className="flex flex-col lg:mt-0 mt-4">
          <ItemContact
            icon={mailIcon}
            mt={false}
            info="taufiqhidayah1199@gmail.com"
            alt="mail"
          />
          <ItemContact
            icon={callIcon}
            mt={true}
            info="(+62) 896 440 948 93"
            alt="call"
          />
          <ItemContact
            icon={githubIcon}
            mt={true}
            info="github.com/taufiqGit"
            alt="github"
          />
        </div>
      </div>
    </figure>
  );
}
