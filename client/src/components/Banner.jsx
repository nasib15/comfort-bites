const Banner = () => {
  return (
    <div
      className="hero h-[70vh] relative mt-6 rounded-2xl"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1715317386~exp=1715320986~hmac=74193dce2ca831837b2b22ba04725d032be8a9136f94036eb0d4705d2065f0a2&w=1380)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-6xl font-bold tracking-tight animate-fade-in">
            Welcome to Our Platform
          </h1>
          <p className="text-lg leading-relaxed">
            Discover a world of possibilities with our innovative solutions.
            We're here to help you achieve your goals and transform your ideas
            into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-7 py-3 text-lg hover:cursor-pointer rounded-lg bg-[#ED4C67] hover:bg-[#ED4C67] text-white outline-none btn-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="px-7 py-3 text-lg hover:cursor-pointer rounded-lg border-white hover:bg-white hover:scale-105 hover:text-black border-2 outline-white transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
