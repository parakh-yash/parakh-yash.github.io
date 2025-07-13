import { Experience } from "@/data/personal-stats";
import { name, title } from "@/data/me";

export default function Home() {
  return (
    <div className="mx-auto my-auto overflow-hidden rounded-xl shadow-md ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-full w-48 object-cover md:h-full md:w-80 mx-auto"
            src="yash.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8 max-w-103 flex flex-col justify-center items-center md:items-start">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {name}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500 text-center md:text-start">
            I love building software that makes a difference. With a passion for
            innovation and a commitment to excellence, I strive to create
            solutions that enhance user experiences and drive business success.
            I have total{" "}
            <b>
              <Experience />
            </b>{" "}
            years of experience in software development.
          </p>
        </div>
      </div>
    </div>
  );
}
