const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        className="w-full h-[40vh] object-cover"
        src="https://admissions.ucr.edu/sites/default/files/styles/header_with_video_xlarge/public/2019-10/48382849117_8c308e3874_o.jpg?h=1d5811be&itok=vfsSr2a4"
      />
      <img
        className="h-36 w-36 object-cover rounded-full border-4 border-white -translate-y-1/2"
        src="/profile.png"
      />
    </div>
  );
};

export default Home;
