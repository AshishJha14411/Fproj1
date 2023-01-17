import React from "react";

const Card = (movieData) => {
  return (
    <div>
    
      {Object.values(movieData).map((item) => {
        return (
          <div key={movieData.imdbID} className="card">
            <div>
              <img src={item.Poster} alt="" />
            </div>
            <div className="rightSec">
              <h2 className="title">{item.Title}</h2>
              <h4>Released in : {item.Released}</h4>
              <p>
                <span>Director: </span> {item.Director}
              </p>
              <p>
                <span>Actors: </span>
                {item.Actors}
              </p>
              <p>
                <span>Genre: </span>
                {item.Genre}
              </p>
              <p>
                <span>Writers: </span>
                {item.Writer}
              </p>
              <p>
                <span>imdbId: </span> {item.imdbID}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
