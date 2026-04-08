const Score = () => {
  return (
    <div className="bg-linear-to-b from-light-slate-blue to-light-royal-blue rounded-b-4xl p-8 flex flex-col items-center align-middle text-center sm:w-1/2">
      <h3 className="text-light-lavender text-lg font-bold mb-6">
        Your Result
      </h3>

      <div className="w-40 h-40 rounded-full bg-linear-to-b from-violet-blue to-persian-blue flex flex-col justify-center items-center mb-6">
        <span className="text-white text-6xl font-extrabold mb-1">76</span>
        <span className="text-light-lavender text-sm font-bold opacity-70">
          of 100
        </span>
      </div>

      <h2 className="text-white text-[28px] font-bold mb-3">Great</h2>
      <p className="text-light-lavender text-[15px] font-medium leading-tight px-4 sm:px-2">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Score;
