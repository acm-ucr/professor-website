import home from "@/data/home";
const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-8">
      <img
        className="w-full h-[40vh] object-cover"
        src="https://admissions.ucr.edu/sites/default/files/styles/header_with_video_xlarge/public/2019-10/48382849117_8c308e3874_o.jpg?h=1d5811be&itok=vfsSr2a4"
      />
      <img
        className="h-36 w-36 object-cover rounded-full border-8 border-white -mt-20"
        src="/profile.png"
      />
      <p className="w-9/12 text-center text-lg text-professor-blue font-bold md:text-3xl p-0 m-0">
        {home.name}
      </p>
      <p className="w-9/12 text-center text-xs text-professor-gray md:text-xl p-0 m-0">
        {home.title}
      </p>
      <p className="w-9/12 text-center text-xs text-professor-gray md:text-xl p-0 border-b-4 border-professor-yellow pb-2 mb-2">
        {home.position}
      </p>
      <p className="w-9/12 text-center text-sm text-professor-gray md:text-lg p-0 m-0">
        {home.major}
      </p>

      <p className="w-9/12 text-center text-sm text-professor-blue font-bold md:text-base p-0 m-0">
        {home.email} | {home.phone}
      </p>
      <p className="w-9/12 text-center text-sm text-professor-blue font-bold md:text-base p-0 mb-8">
        {home.office}
      </p>
      {home.descriptions.map((description, index) => (
        <p key={index} className="text-black text-sm md:text-lg p-0 m-4 w-9/12">
          {description}
        </p>
      ))}
    </div>
  );
};

export default Home;
