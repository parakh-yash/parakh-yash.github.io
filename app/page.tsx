import { Experience } from "@/data/personal-stats";
import {
  name,
  title,
  desc_before_experience,
  desc_after_experience,
  linkedIn,
  github,
  resumne_gdrive_link,
} from "@/data/me";
import { LinkedIn, Github, Download } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
      flex flex-col sm:pt-0 sm:ps-8 sm:h-full sm:justify-center items-center"
      >
        <h1 className="text-5xl font-bold ">{name}</h1>
        <h2 className="text-3xl text-foreground/64">{title}</h2>
        <p className="mt-4 max-w-100 text-foreground/64 text-lg text-justify">
          {desc_before_experience}
          <b>
            <Experience />
          </b>
          {desc_after_experience}
        </p>
        <div className="flex flex-row gap-4 mt-6 justify-center items-center">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <LinkedIn className="text-foreground w-6 h-6 hover:text-foreground/70 transition duration-400" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="text-foreground w-8 h-8 hover:text-foreground/70 transition duration-400" />
          </a>
          <a href={resumne_gdrive_link}>
            <Button variant={"outline"} className="inline-flex">
              <Download /> Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
