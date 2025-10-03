import React from "react";

const profileImage =
  "https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg";

const coreTeam = [
  { name: "Prof. K. Umamaheshwar Rao", role: "Director, Patron" },
  { name: "Prof. A. K. Gorai", role: "Head of the Department, President" },
  { name: "Prof. H. B. Sahu", role: "Adviser" },
  { name: "Prof. C. K. Ala", role: "Treasurer" },
  { name: "Aryaman Biswal", role: "Vice-President" },
  { name: "Satyabrata Biswal", role: "Secretary" },
  { name: "Baishakhi Biswal", role: "Cultural Secretary" },
  { name: "Piyush Kumar", role: "Literary Secretary" },
  { name: "Anurag Roy", role: "Games and Sports Secretary" },
  { name: "Kanha Kalingo", role: "Joint Secretary" },
  { name: "Tavishi Agarwal", role: "Joint Secretary" },
];

const eventManagement = [
  { name: "Abhijeet Kumar Nayak", role: "Minare Event Management", phone: "+91 7657017701" },
  { name: "Pranay Kishore Ray Choudhury", role: "Minare Event Management", phone: "+91 9668457855" },
];

const technicalTeam = [
  { name: "Biswajeet Behera", role: "Technical and Database", phone: "+91 7655042927" },
  { name: "Rahul Manglani", role: "Technical and Database", phone: "+91 7071660165" },
];

const publicityTeam = [
  { name: "Ashish Kumar Barah", role: "Publicity", phone: "+91 7848061103" },
  { name: "Aniket Sharma", role: "Publicity", phone: "+91 8280179870" },
];

const hospitalityTeam = [
  { name: "Amit Kumar Sahu", role: "Accommodation and Hospitality", phone: "+91 8457014106" },
  { name: "Smruti Ranjan Sethy", role: "Accommodation and Hospitality", phone: "+91 7894487946" },
];

const creativeTeam = [
  { name: "Rahul Ranjan Dash", role: "Creative", phone: "+919625158514" },
  { name: "Ayush Aryaman Puhan", role: "Creative", phone: "+91 9109186333" },
];

const contentTeam = [
  { name: "Anish Das", role: "Content", phone: "+91 7008728552" },
  { name: "Aniket Bansal", role: "Content", phone: "+91 7978649718" },
];

const sponsorshipTeam = [
  { name: "Badrish Ray", role: "Sponsorship", phone: "+91 8917228649" },
];

const Team = () => {
  const renderTeamGroup = (groupName, members) => (
    <div>
      <h2 className="text-2xl font-bold text-gray-100 mb-6">{groupName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {members.map((member, idx) => (
          <div key={idx} className="bg-transparent/15 rounded-xl shadow-lg p-4 text-center">
            <img
              src={profileImage}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-200">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            {member.phone && <p className="text-gray-500 mt-1">📞 {member.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );
  const navStyle = {
    // Replace this URL with the one you have
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`, 
  };

  return (
    <div className="p-6 pt-40 space-y-12 mx-auto" style={navStyle}>
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-10">Meet Our Team</h1>

      {renderTeamGroup("Core Team", coreTeam)}
      {renderTeamGroup("Event Management", eventManagement)}
      {renderTeamGroup("Technical & Database", technicalTeam)}
      {renderTeamGroup("Publicity", publicityTeam)}
      {renderTeamGroup("Accommodation & Hospitality", hospitalityTeam)}
      {renderTeamGroup("Creative Team", creativeTeam)}
      {renderTeamGroup("Content Team", contentTeam)}
      {renderTeamGroup("Sponsorship Team", sponsorshipTeam)}
    </div>
  );
};

export default Team;
