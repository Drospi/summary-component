import React from 'react';
import Image from 'next/image';

type QualifyProps = {
  category: string;
  score: number;
  icon: string;
  color: string;
  textColor: string;
};

const Qualify = ({ category, score, icon, color, textColor }: QualifyProps) => {
  return (
    <div className={`flex justify-between items-center p-4 ${color} rounded-xl`}>
      <div className="flex items-center gap-3">
        
        {/* Usamos la etiqueta img apuntando a la dirección que viene en la prop "icon" */}
        <Image className={`${textColor} font-bold`} src={icon} alt={`Icono de ${category}`} width={20} height={20} />

        <span className={`${textColor} font-bold`}>{category}</span>
      </div>
      
      <div className="font-bold text-dark-gray-blue">
        {score} <span className="text-gray-400 opacity-80">/ 100</span>
      </div>
    </div>
  );
};

export default Qualify;