import { Experience } from "@/data/personal-stats";
import {
  name,
  title,
  desc_before_experience,
  desc_after_experience,
} from "@/data/me";
import { LinkedIn, Github } from "@/components/icons";

export default function Home() {
  return (
    <div className="sm:flex sm:flex-row h-full p-4 lg:p-8 overflow-y-auto">
      <img
        src="yash.jpg"
        alt="Yash Parakh"
        className=" w-full h-[40vh] min-h-80 rounded-lg
        object-cover object-top overflow-hidden 
        sm:h-full sm:flex-10
        lg:flex-7 "
      />

      <div
        className="flex-10 pt-8 
      flex flex-col sm:pt-0 sm:ps-8 h-full sm:justify-center items-center"
      >
        <h1 className="text-5xl font-bold ">{name}</h1>
        <h2 className="text-3xl text-gray-700">{title}</h2>
        <p className="mt-4 max-w-100 text-gray-600 text-lg text-justify">
          {desc_before_experience}
          <b>
            <Experience />
          </b>
          {desc_after_experience}
        </p>
        <div className="flex flex-row gap-4 mt-6 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/jainyash23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="text-foreground w-6 h-6 hover:text-foreground/70 transition duration-400" />
          </a>
          <a
            href="https://github.com/yash-parakh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-foreground w-8 h-8 hover:text-foreground/70 transition duration-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
