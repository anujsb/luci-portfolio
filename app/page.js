import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { FullscreenCarousel } from "@/components/Portfolio";
import FullscreenCarousel from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full ">
      <Navbar />
      <div className="bg-hero ">
        <div className="h-screen flex flex-col justify-end padding">
          <h1 className="bold text-lg tracking-widest	font-extralight	bg-[#ECECEC] bg-opacity-20 max-w-fit p-1 uppercase">
            HI! EVERYONE
          </h1>
          <h1 className="text-8xl mt-4">
            Mahesh Kinnake
            <br /> 3D Artist
          </h1>
        </div>
        <div className="padding">
          <p className="mt-4 text-xl">
            I’m a 3D artist specializing in modeling and rigging with Blender
            and Maya. With experience in Adobe Illustrator, After Effects, and
            Unity, I create detailed, high-quality digital art. Explore my
            portfolio to see my work and feel free to reach out for
            collaboration..
          </p>
          <button className="mt-4 border py-3 px-6 bold text-lg tracking-widest	font-extralight max-w-fit uppercase">
            GET IN TOUCH
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 mt-20">
          <div className="flex flex-col items-center justify-center">
            <div className="relative text-center py-8">
              <h1 className="text-8xl uppercase font-light">about</h1>
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
                <span className="bg-white text-black px-4 py-1 text-sm uppercase tracking-wider text-center">
                  Who I’M I
                </span>
              </div>
            </div>
            <button className="mt-4 py-3 px-6 bold text-lg tracking-widest	font-extralight max-w-fit uppercase bg-[#181818]">
              about me
            </button>
          </div>
          <div>
            <Image
              src="/skills.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="relative text-center py-8 mt-28">
            <h1 className="text-8xl uppercase font-light">portfolio</h1>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
              <span className="bg-white text-black px-4 py-1 text-sm uppercase tracking-wider text-center">
                My work flow{" "}
              </span>
            </div>
          </div>
          <FullscreenCarousel />

          <button className="mt-10 py-3 px-6 bold text-lg tracking-widest	font-extralight max-w-fit uppercase bg-[#181818]">
            view all portfolio
          </button>
        </div>
        <div className="padding mt-20">
          <div className="justify-start">
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-8xl uppercase font-light">quote of the day</h1>
            <p>______________</p>
            <p className="text-center mt-4">
              “Success is not final; failure is not fatal: it is the
              <br /> courage to continue that counts.”
            </p>
            <p className="text-center mt-4 text-neutral-400">
              -Winston Churchill
            </p>
          </div>
          <div className="rotate-180">
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className=""
            />
          </div>
        </div>
        <div className="padding mt-20 bg-test py-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-8xl uppercase font-light">testimonials</h1>
            <p>______________</p>
            <p className="text-center mt-4">
              “Lorem ipsum dolor sit amet, elit consectetur adipiscing.
              <br /> Odio tincidunt et, massa, turpis nec dolor posuere tempus.
              <br /> Nulla congue et dolor sit amet, elit consectetur
              adipiscing.”
            </p>
            <div className="mt-4">
              <Image
                src="/testimonial.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="rounded-full "
              />
            </div>
            <p className="text-center mt-4 text-neutral-400">
              Lucas wolfer <br />
              -ceo - raisins{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
