import { Experience } from "@/data/personal-stats";
import {
  name,
  title,
  desc_before_experience,
  desc_after_experience,
  linkedIn,
  github
} from "@/data/me";
import { LinkedIn, Github } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row  h-full ps-4 pe-4 overflow-auto  sm:justify-center items-center gap-6 md:gap-12 lg:gap-16">
      <img
        src="yash.jpg"
        alt="Yash Parakh"
        className=" w-80 h-80 rounded-full
         md:w-90 md:h-90 lg:w-100 lg:h-100
        object-cover object-top"
      /> 

      <div
        className=" 
      flex flex-col items-center"
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
          {/* <a href={resumne_gdrive_link}>
            <Button variant={"outline"} className="inline-flex">
              <Download /> Resume
            </Button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
