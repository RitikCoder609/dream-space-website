import React from "react";
export default function OurTeam() {
  const Team = [
    {
      id: 1,
      avatar: "/team/team5.jpeg",
      name: "S.K Maurya",
      title: "Founder & CEO",
    },
     {
      id: 2,
      avatar: "/team/team2.jpeg",
      name: "John Sharma",
      title: "Sales Head",
    },
    {
      id: 3,
      avatar: "/team/team3.jpeg",
      name: "Er. Satya Prakash",
      title: "Director",
    },
   
    {
      id: 4,
      avatar: "/team/team4.jpeg",
      title: "Property Advisor",
      name: "Rahul Dev",
    },
  ];
  return (
    <section className="w-full bg-[#faf9f6] px-5 py-20 md:px-10 lg:px-20">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Heading */}{" "}
        <div className="mb-14 text-center">
          {" "}
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08a45]">
            {" "}
            Meet Our People{" "}
          </p>{" "} */}
          <h2 className="text-3xl font-semibold tracking-tight text-[#1c1c1c] md:text-5xl">
            {" "}
            Our Team{" "}
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
            {" "}
            Meet the professionals behind Dream Space Infra Developers,
            committed to making your property journey simple and
            transparent.{" "}
          </p>{" "}
        </div>{" "}
        {/* Team */}{" "}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          {" "}
          {Team.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col items-center text-center"
            >
              {" "}
              {/* Circle Image */}{" "}
              <div className="relative mb-6">
                {" "}
                <div className="absolute -inset-2 rounded-full border border-[#b08a45]/30 transition-all duration-500 group-hover:rotate-6 group-hover:border-[#b08a45]" />{" "}
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-40 md:w-40">
                  {" "}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/* Name */}{" "}
              <h3 className="text-base font-semibold text-[#1c1c1c] md:text-lg">
                {" "}
                {member.name}{" "}
              </h3>{" "}
              {/* Position */}{" "}
              <p className="mt-1 text-sm font-medium text-[#b08a45]">
                {" "}
                {member.title}{" "}
              </p>{" "}
              {/* Small Line */}{" "}
              <div className="mt-4 h-[2px] w-8 rounded-full bg-[#b08a45] transition-all duration-300 group-hover:w-14" />{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
