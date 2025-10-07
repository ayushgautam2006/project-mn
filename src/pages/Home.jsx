import React from "react";

const events = [
  {
    title: "GeoBotics",
    description:
      "Utilize bots for work, leveraging science and technology. The objective is to design BOTS for challenging terrains and environments.",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710153368/minare/Instagram_post_-_6_td56bu.jpg",
  },
  {
    title: "Ore-Acle Quiz",
    description:
      "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150951/minare/c_vpqkn6.png",
  },
  {
    title: "Rock-On-Pap",
    description:
      "Showcase your groundbreaking research, network with industry leaders, and contribute to technological advancement.",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150977/minare/e_k5smpe.png",
  },
  {
    title: "Mining Case Study",
    description:
      "In-depth analysis of real mining industry problems. Present innovative solutions in a competitive environment.",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150925/minare/a_jgc1tb.png",
  },
  {
    title: "Technical Workshops",
    description:
      "Hands-on experience on mining technologies and software to learn practical implementation.",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710151101/minare/g_b9m8ol.png",
  },
  {
    title: "Treasure Hunt",
    description:
      "A fun-filled event to engage minds, involving puzzles related to geology and mining concepts.",
    image:
      "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150962/minare/d_dayinh.png",
  },
];

const Home = () => {
  const navStyle = {

    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`, 
  };
  return (
    <div className="p-6 pt-40 space-y-12 min-h-screen" style={navStyle}>
      {/* About Minare */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-700/50">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">About Minare</h2>
        <p className="text-gray-200 leading-relaxed">
          The Mining Engineering Society (MES), an association of students,
          faculty and alumni of the Department was established in 1984 by the
          1st batch alumni of the Department, with a mission to promote mining
          engineering education as well as to function as a link between
          students and industry by offering platforms for students to learn
          about real-world difficulties. The National Level Annual Geo-Mining
          festival started in 2014 has grown every year, attracting students
          from IIT-KGP, IIT (ISM) Dhanbad, NIT Raipur, and many more.The Mining
          Engineering Society (MES), an association of students, faculty and
          alumni of the Department was established in 1984 by the 1st batch
          alumni of the Department, with a mission to promote mining engineering
          education as well as to function as a link between students and
          industry by offering platforms for students to learn about real-world
          difficulties. The Mining Engineering Society (MES), an association of
          students, faculty and alumni of the Department was established in 1984
          by the 1st batch alumni of the Department, with a mission to promote
          mining engineering education as well as to function as a link between
          students and industry by offering platforms for students to learn
          about real-world difficulties. With the aim of providing a platform to
          the young minds to showcase their talent and promote networking with
          industry and academia; the National Level Annual Geo-Mining festival
          was started in 2014. It has grown with each passing year as seen by
          the rise in the number of institutions and students taking part in the
          festival. Participants in MINARE include students from IIT-KGP, IIT
          (ISM) Dhanbad, NIT Raipur, Anna University, BIT Sindri, GCE Keonjhar,
          AKs University Satna etc. The eighth edition of MINARE is expected to
          achieve more milestones with a host of technical events including
          mining robotics, case studies, workshops, guest lectures, and treasure
          hunt etc.
        </p>
      </div>

      {/* About Department */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-700/50 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">
            About Department
          </h2>
          <p className="text-gray-200 leading-relaxed">
            The Department of Mining Engineering at NIT Rourkela was established
            in 1979, specializing in Mining Technology, Mine Surveying,
            Geomechanics, GIS applications, and more. It offers cutting-edge
            equipment and software with expert faculty contributing to research,
            industry, and policy development.The Department of Mining Engineering at NIT Rourkela was established in 1979, specializing in Mining Technology, Mine Surveying, Geomechanics, GIS applications, and more. It offers cutting-edge equipment and software with expert faculty contributing to research, industry, and policy development.The Department of Mining Engineering at NIT Rourkela was established in 1979 in the midst of coal and mineral belt with a vision to become a global leader of higher learning in the field of eco-friendly exploitation and utilization of mineral resources for the welfare of the society and to be a preferred destination for undergraduate and graduate studies.The Department of Mining Engineering at NIT Rourkela was established in 1979 in the midst of coal and mineral belt with a vision to become a global leader of higher learning in the field of eco-friendly exploitation and utilization of mineral resources for the welfare of the society and to be a preferred destination for undergraduate and graduate studies. 
          The Department specializes in Mining Technology, Geomechanics and Strata Control, Mine Environment and Safety Engineering, Clean Coal Technology, Application of GIS and Remote Sensing in Mining, Computer Application in Mining, Mine Planning, Mine Surveying etc. 
          It boasts modern and sophisticated equipment for physical as well as the latest computing facilities with state-of-the-art mining software. 
          The faculty members are part of the different Expert and Technical Committees constituted for policy formulation and technical evaluation for mining industry. 
          The Department frequently conducts continuing education programmes for the benefit of the professionals from industry and other academic, research and government regulatory organisations representing both national and international level. 
          All-round development of students is practiced with exposure to mines through study tours to nearby mines, technical talks by outside experts, industry oriented projects and a host of other technical activities.
          </p>
        </div>

        {/* Department Image */}
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/dtxoiglst/image/upload/v1710261393/minare/t1mapgsdjq2eyc4ch1fb.jpg"
            alt="Department of Mining Engineering"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-700/50">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          Vision & Mission
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Our vision is to inspire innovation in mining engineering and promote
          safe, sustainable, and eco-friendly practices. The mission is to
          nurture young engineers, prepare them for industry challenges, and
          create meaningful collaborations with academia and industry.
        </p>
      </div>

      {/* Events */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-700/50">
        <h2 className="text-3xl font-bold mb-8 text-gray-100 text-center">
          Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
