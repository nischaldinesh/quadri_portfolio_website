import Image from "next/image";
import { newsItems } from "../data/news";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-56 h-56 md:w-80 md:h-80 relative">
              <Image
                src="/quadri.jpg"
                alt="Portrait of Dr. John Quadri"
                fill
                sizes="(min-width: 768px) 20rem, 14rem"
                className="rounded-lg object-cover border-4 border-blue-200"
                priority
              />
            </div>

            <div className="mt-4 text-center md:text-left">
              <a
                href="https://divlab.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Div Lab @ OU
              </a>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-1">
                School of Computer Science
                <br />
                Gallogly College of Engineering
                <br />
                University of Oklahoma
                <br />
                Norman, OK 73019
              </p>
              <p className="font-bold mt-1">Email: quadri@ou.edu</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/johnquadri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-blue-600 hover:text-blue-800"
                title="X (Twitter)"
              >
                <FaXTwitter size={28} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=example"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="text-blue-600 hover:text-blue-800"
                title="Google Scholar"
              >
                <SiGooglescholar size={28} />
              </a>
              <a
                href="https://linkedin.com/in/johnquadri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-600 hover:text-blue-800"
                title="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              I am an Assistant Professor in the School of Computer Science at
              the Gallogly College of Engineering, University of Oklahoma, where
              I direct the DIV-Lab. Previously, I was a Postdoctoral Research
              Fellow and CRA/CCC/NSF Computing Innovation Fellow, working with
              Dr. Danielle Albers Szafir at the University of North
              Carolina–Chapel Hill. I received my Ph.D. in Computer Science &
              Engineering in 2021, advised by Dr. Paul Rosen at the University
              of South Florida. I also hold an M.S. in Computer Science from the
              University of South Florida and a Bachelor in Computer Engineering
              from the University of Mumbai.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              My research lies at the intersection of Information Visualization,
              Human-Computer Interaction, Machine Learning Models, and
              perception & cognition. My primary goal is to create a perceptual
              and human-centered framework to optimize visualization design,
              improving decision-making quality and confidence while providing
              objective guidance for designers. I borrow approaches from InfoVis
              and perception & cognitive science, applying human-centered
              evaluation to measure, model, and theorize human perception of
              data and visual design.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              My dissertation research received the IEEE VGTC Best Dissertation
              Award for contributing new ways to measure, model, and construct
              task-optimized visualizations. My postdoctoral research is
              supported by the NSF-CRA Computing Innovation 2021 Fellowship. My
              research collaborations span various applications, including
              design-oriented perceptual research projects to create robust
              design choices, perceptual variability, design optimization, and
              information accessibility. Recent work on perceptual variability
              received a Best Paper Honorable Mention Award for CLAMS at IEEE
              VIS 2023. Along with my collaborators, I have received awards
              including an honorable mention for the VAST Challenge at IEEE VIS
              2017, Best Short Paper at EuroVis 2024, and an honorable mention
              for a poster at IEEE VIS 2024.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            News and Updates
          </h2>
          <hr className="border-t-2 border-gray-200 mb-6" />
          <ul className="space-y-4">
            {newsItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:items-baseline"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base min-w-[130px] sm:min-w-[150px]">
                  {item.monthYear}
                </span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
