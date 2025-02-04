import React, { useState } from "react";
import IntroImage from "../../assets/Capture.PNG"; // Correct path to the image
import ResumePDF from "../../assets/batircarrera.pdf"; // Correct path to the PDF

const AboutMod = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    // <div className="bg-white-100 md:justify-start h-[80vh] px-6">
<div className="bg-white-100 min-h-[80vh] flex flex-col"> {/* Reduced height */}

      {/* Top Section */}
      <div className="flex-grow"> {/* Ensures this section grows dynamically */}

      <section className="batir-intro bg-white-100 flex flex-col justify-center px-6 pt-20 pb-0">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Innovative and results-driven Project Architect with extensive
              experience in residential, commercial, and high-rise luxury
              developments. Adept at blending cutting-edge design principles
              with technical expertise to craft spaces that resonate with people
              and stand the test of time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Skilled in computer-aided design (CAD) software, Adobe Suite,
              Microsoft Office, and construction methodologies, bringing both
              precision and creativity to every project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Key achievements include delivering iconic developments such as
              the Midtown Tropic Residences, showcasing a dedication to
              excellence and meticulous attention to detail. Proficient in
              design coordination, permitting, and ensuring seamless integration
              of form and function in all architectural solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Committed to fostering collaboration among multidisciplinary
              teams. Passionate about staying ahead of industry trends,
              exploring innovative design concepts, and creating spaces that
              connect with people on a deeper level. Every blueprint tells a
              story, and the goal is to make each one unforgettable.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0 order-1 md:order-2">
            <img
              src={IntroImage}
              alt="Batir Carrera"
              className="rounded-lg shadow-lg object-cover w-80 md:w-[450px] h-auto"
            />
            {/* Resume Button Below Image */}
            <div className="mt-6">
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-transform transform hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Containers */}
      <div className="max-w-6xl mx-auto pt-8">
        {[
          {
            title: "EXPERIENCE",
            content: (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Architectural Designer</h3>
                  <p className="text-sm">Alta Development | May 2023 - Present</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Collaborated on luxury projects from concept to completion.</li>
                    <li>Coordinated with clients and contractors for seamless execution.</li>
                    <li>Developed construction documents and managed material resources.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Architectural Drafter</h3>
                  <p className="text-sm">Custom Marine Construction | Jun 2021 - Nov 2022</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Drafted and prepared architectural layouts and drawings.</li>
                    <li>Used CAD software to create designs for high-end interiors.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Architectural Drafter</h3>
                  <p className="text-sm">Britto Charette LLC | April 2021 - Oct 2022</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Generated and prepared plans using computer-aided design and drafting (CAD)</li>
                    <li>Coordinated with the project leader, project supervisor and project engineers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Architectural Drafter</h3>
                  <p className="text-sm">Custom Marine Construction | Jun 2021 - Nov 2022</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Drafted and prepared architectural layouts and drawings.</li>
                    <li>Used CAD software to create designs for high-end interiors.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Architectural Drafter</h3>
                  <p className="text-sm">Britto Charette LLC | April 2021 - Oct 2022</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Generated and prepared plans using computer-aided design and drafting (CAD)</li>
                    <li>Coordinated with the project leader, project supervisor and project engineers</li>
                  </ul>
                </div>
              </div>
              
            ),
          },
          {
            title: "EDUCATION",
            content: (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Architecture Candidate</h3>
                  <p className="text-sm">
                    Florida International University | Aug 2023 - Present
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Associate in Arts Degree - Pathway in Architecture
                  </h3>
                  <p className="text-sm">Miami Dade College | Aug 2019 - May 2023</p>
                </div>
                <div>
                  <h3 className="font-semibold">Architecture Magnet</h3>
                  <p className="text-sm">
                    Design and Architecture Senior High School | Aug 2015 - Jun
                    2019
                  </p>
                </div>
              </div>
            ),
          },
          {
            title: "SKILLS",
            content: (
              <div className="space-y-2">
                <p className="text-sm">AutoCAD, Rhino, Revit, SketchUp</p>
                <p className="text-sm">Adobe Suite, InDesign, Photoshop</p>
                <p className="text-sm">Construction Documentation, 3D Renders</p>
                <p className="text-sm">Microsoft Office Suite</p>
              </div>
            ),
          },
          {
            title: "AWARDS",
            content: (
              <div className="space-y-2">
                <p className="text-sm">
                  United Daughters of Confederacy Scholarship Recipient
                </p>
                <p className="text-sm">De La Cruz Foundation Scholarship</p>
                <p className="text-sm">Dean's List Recipient (2019-2020)</p>
              </div>
            ),
          },
          {
            title: "INTEREST",
            content: (
              <ul className="list-disc pl-4 space-y-2">
                <li>Enhancing architectural skills through competitions.</li>
                <li>Researching green building methodologies and technologies.</li>
                <li>Exploring high-rise luxury residential and commercial design.</li>
              </ul>
            ),
          },
          {
            title: "CERTIFICATES", // New Section
            content: (
              <ul className="list-disc pl-4 space-y-2">
                <li>LEED Green Associate Certification</li>
                <li>Autodesk Certified Professional: AutoCAD</li>
                <li>Certified Professional in Building Design</li>
                <li>Certificate of Completion in Revit Architecture Essentials</li>
              </ul>
            ),
          },
        ].map((section, index) => (
          <div key={index}>
            <button
              className="w-full flex justify-between items-center font-bold text-lg py-3 border-b-2 border-gray-300 hover:bg-gray-100"
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
              {/* Downward Triangle Icon */}
              <span
                className={`transition-transform duration-300 ${
                  openSection === section.title ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openSection === section.title && (
              <div className="pl-4 pt-2">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AboutMod;
