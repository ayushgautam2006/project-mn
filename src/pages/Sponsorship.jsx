import React from "react";

const sponsors = [
  {
    name: "Coal India",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/49/Coal_India_Logo.svg",
  },
  {
    name: "UCIL",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/UCIL.svg/300px-UCIL.svg.png",
  },
  {
    name: "JSW",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Sail India",
    logo: "data:image/png;base64,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",
  },
  {
    name:"Vedanta",
    logo:"https://d1rbiogke1jwo5.cloudfront.net/wp-content/uploads/2021/12/Vedanta-Logo-PNG.png"
  },
  {
    name:"Relaince",
    logo:"https://upload.wikimedia.org/wikipedia/en/0/0e/Reliance_Industries.svg"
  }
];

const Sponsorship = () => {
  const navStyle = {
    // Replace this URL with the one you have
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`, 
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  };
  return (
    <div className="p-8 space-y-10  mx-auto pt-40" style={navStyle}>
      <h1 className="text-3xl font-bold text-gray-100 mb-3 ml-5">
        Why Sponsor Minare?
      </h1>

      <div className="bg-transparent p-5 rounded-2xl shadow-lg">
        <p className="text-gray-200 leading-relaxed">
          MINARE provides a unique platform to the young minds studying mining engineering and allied courses in leading technical institutes of the country to showcase their talent and skills.
          Your sponsorship of MINARE 2024 will ensure widespread publicity across a variety of platforms, including banners, posters, flyers, event kits, Monday Morning - The NITRKL Newsletter, and social media platforms.
          As a proud sponsor, your brand will create awareness, along with increasing visibility and credibility.
          Necessary publicity material provided by you will be circulated among the participants and participating institutes.
          The campus ambassadors, integral to the organization of Minare, shall spread your ideas.
          The souvenir will also be published, highlighting the details of the events.
        </p>
      </div>

      <div className="bg-transparent p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Why Sponsor?</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>Widespread publicity across multiple platforms</li>
          <li>Brand awareness & increased credibility</li>
          <li>Exposure among leading technical institutes</li>
          <li>Promote your organization to talented students</li>
        </ul>
      </div>

      {/* Sponsors Grid */}
      <div className="bg-transparent' p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-200 text-center">Our Proud Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-transparent p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Bank Details</h2>
        <p className="text-gray-200"><strong>A/c. Name:</strong> MS MINING ENGG SOCIETY</p>
        <p className="text-gray-200"><strong>A/c. Number:</strong> 10138951149</p>
        <p className="text-gray-200"><strong>IFSC Code:</strong> SBIN0002109</p>
      </div>

      <div className="bg-transparent p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Contact Details</h2>
        <p className="text-gray-200">
          <strong>Satyabrata Biswal</strong><br />
          Secretary<br />
          📧 minare@nitrkl.ac.in<br />
          📞 +91 87632 20285
        </p>

        <p className="mt-4 text-gray-200">
          <strong>Prof. H.B.Sahu</strong><br />
          Advisor<br />
          📧 hbsahu@nitrkl.ac.in<br />
          📞 +91 94372 45625
        </p>
      </div>
    </div>
  );
};

export default Sponsorship;
