import React from "react";
import Button from "./Button";
import Qualify from "./Qualify";
import data from "./data.json";

const Summary = () => {
  return (
    <div className="p-8 sm:w-1/2 flex flex-col justify-between">
      <h3 className="text-dark-gray-blue text-xl font-extrabold mb-6">
        Summary
      </h3>

      <div className="flex flex-col gap-4 mb-8">
        
        {   /* Map through the data and render a Qualify component for each item */}
        {data.map((item, index) => (
          <Qualify
            key={index}
            category={item.category}
            score={item.score}
            icon={item.icon}
            color={item.color}
            textColor={item.textcolor}
          />
        ))}
      </div>

      <Button />
    </div>
  );
};

export default Summary;
