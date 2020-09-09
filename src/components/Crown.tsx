import React from "react";
import "../sass/components/Crown.sass";

interface CrownProps {
  artistName: string;
  plays: number;
}

export const Crown = ({ artistName, plays }: CrownProps) => {
  return (
    <div className="Crown" key={artistName}>
      <p>
        {artistName} <span className="Crown-playcount">{plays} plays</span>
      </p>
    </div>
  );
};
