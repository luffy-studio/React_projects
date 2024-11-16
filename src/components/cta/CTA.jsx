const CTA = () => {
  return (
    <div className="gpt3__cta bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col md:flex-row justify-between items-center p-8 my-16 rounded-xl">
      <div className="gpt3__cta-content text-left text-white flex flex-col">
        <p className="font-custom text-sm leading-8 font-medium">
          Start your journey today
        </p>
        <h3 className="font-custom text-2xl leading-tight font-extrabold mt-4">
          Unlock the potential of your ideas
        </h3>
      </div>
      <div className="gpt3__cta-btn flex justify-center items-center mt-8 md:mt-0 md:ml-8">
        <button className="bg-black text-white font-custom font-bold text-lg leading-[1.875rem] px-4 py-2 rounded-full min-w-[150px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
