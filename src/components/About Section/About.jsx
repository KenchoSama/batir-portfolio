import React, { useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <Link to={"/"} className="sticky top-4  gap-4  flex mt-3 ">
          <FaArrowTurnUp className="-rotate-90 " />
          <h1 className=" h-10 mb-6 text-sm font-normal text-gray-800">Home</h1>
        </Link>
        <div className="max-w-2xl mx-auto p-8 flex flex-col items-center">
      {/* Image Container */}
      <div className="w-full max-w-md mb-8">
        <img 
          src="/images/dp.png"
          alt="Profile in doorway"
          className="w-full h-auto grayscale object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl mb-8 font-light tracking-wide">
        about me .
      </h2>

      {/* Description */}
      <div className="space-y-4 text-sm leading-relaxed text-center max-w-xl">
        <p>
          Innovative and results-driven Project Architect with extensive experience
          in residential and commercial design projects. Highly skilled at
          blending cutting-edge design principles with technical expertise to craft
          spaces that resonate with people and stand the test of time.
        </p>

        <p>
          Skilled in computer-aided design (CAD) software, adobe suite,
          microsoft office, and construction methodologies. Bringing both precision
          and creativity to every project.
        </p>

        <p>
          Key achievements include delivering iconic developments such as the
          Midtown Tower, Residence showrooms, a dedication to excellence, and
          meticulous attention to detail. Proficient in design optimization,
          permitting, and ensuring seamless integration of form and function in all
          architectural works.
        </p>

        <p>
          Committed to fostering collaboration among multidisciplinary teams.
          Passionate about staying ahead of industry trends, exploring innovative
          design concepts, and creating spaces that connect with people on a
          deeper level. Every footprint tells a story, and the goal is to make each
          one memorable.
        </p>
      </div>
    </div>
        <div className="max-w-3xl mx-auto p-8 pb-20 bg-white">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-1">BATIR CARRERA</h1>
            <p className="text-sm text-gray-600 mb-4">
              Project Manager | Architectural Professional
            </p>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Innovative and detail-oriented Architectural Designer with
              experience in residential and commercial design. Expert at
              leveraging my expertise in computer-aided design (CAD) software to
              produce precise architectural layouts, drawings, and designs.
              Strong proficiency in project coordination, and construction
              methodologies. Demonstrated experience working with
              multidisciplinary teams and clients to achieve project goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📞</span>
                <span className="text-sm">305-902-9773</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">✉️</span>
                <span className="text-sm">batir.carrera00@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">📍</span>
                <span className="text-sm">
                  8888 SW 142nd Ave, Miami, FL 33186
                </span>
              </div>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <section className="mb-8">
                <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-4">
                  EXPERIENCE
                </h2>

                {/* Experience Items */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Architectural Designer</h3>
                      <span className="text-sm text-gray-600">
                        May 2023 - Present
                      </span>
                    </div>
                    <p className="text-sm mb-1">Alta Development | Miami, FL</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>
                        Collaborated with team members on high-end luxury
                        projects from concept to completion
                      </li>
                      <li>
                        Coordinate with clients, consultants, and contractors to
                        ensure project alignments
                      </li>
                      <li>
                        Developed construction documents and managed material
                        resources
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Architectural Drafter</h3>
                      <span className="text-sm text-gray-600">
                        Jun 2021 - Nov 2022
                      </span>
                    </div>
                    <p className="text-sm mb-1">
                      Britto Charette LLC | Miami, FL
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>
                        Drafted and prepared architectural layout drawings and
                        diagrams
                      </li>
                      <li>
                        Integrated various styles of drawings using several CAD
                        programs
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Architectural Drafter</h3>
                      <span className="text-sm text-gray-600">
                        Apr 2021 - Oct 2022
                      </span>
                    </div>
                    <p className="text-sm mb-1">
                      Custom Marine Construction | Miami, FL
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>
                        Generated and prepared plans using computer-aided design
                        and drafting (CAD)
                      </li>
                      <li>
                        Coordinated with the project leader, project supervisor
                        and project engineers
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Architectural Drafter</h3>
                      <span className="text-sm text-gray-600">
                        Feb 2020 - Jul 2021
                      </span>
                    </div>
                    <p className="text-sm mb-1">
                      Steven Feller P.E. & Cordova Architect & Assoc. | Miami,
                      FL
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>
                        Produced construction details and diagrams with clear
                        dimensions
                      </li>
                      <li>
                        Generated the work for interior finishes analysis and
                        renovation planning
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-4">
                  AWARDS
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm">
                      United Daughters of Confederacy Scholarship Recipient
                    </h3>
                    <p className="text-sm text-gray-600">
                      Awarded to students who demonstrate excellence and
                      dedication.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      De La Cruz Foundation Scholarship
                    </h3>
                    <p className="text-sm text-gray-600">
                      Awarded to Design and Architecture Senior High graduates
                      with a GPA of 3.5 or higher.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Dean's List Recipient
                    </h3>
                    <p className="text-sm text-gray-600">
                      Fall 2019, Spring 2020, Fall 2020, Summer 2020
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div>
              <section className="mb-8">
                <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-4">
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      Master of Architecture Candidate
                    </h3>
                    <p className="text-sm">
                      Florida International University | Miami, FL
                    </p>
                    <p className="text-sm text-gray-600">Aug 2023 - Present</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Associate in Arts Degree - Pathway in Architecture
                    </h3>
                    <p className="text-sm">Miami Dade College | Miami, FL</p>
                    <p className="text-sm text-gray-600">Aug 2019 - May 2023</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Architecture Magnet</h3>
                    <p className="text-sm">
                      Design and Architecture Senior High School | Miami, FL
                    </p>
                    <p className="text-sm text-gray-600">Aug 2015 - Jun 2019</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-4">
                  SKILLS
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">CADD Software:</h3>
                    <p className="text-sm">AutoCAD, Rhino, Revit, SketchUp</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Design Tools:</h3>
                    <p className="text-sm">Adobe Suite, InDesign, Photoshop</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Technical Proficiencies:
                    </h3>
                    <p className="text-sm">
                      Construction Documentation, 3D Render, Laser Cutting
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Software:</h3>
                    <p className="text-sm">Microsoft Office Suite</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-4">
                  INTEREST
                </h2>
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    Enhancing architectural skills through continuing education
                    and design competitions
                  </li>
                  <li>
                    Developing expertise in high-rise luxury residential and
                    commercial design
                  </li>
                  <li>
                    Research and development of integrated technologies and
                    green building methodologies
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
