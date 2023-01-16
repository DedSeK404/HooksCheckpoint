import { MovieCard } from "./MovieCard";
import { useState } from "react";

export const MovieList = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
      <input
        style={{width:"100%"}}
        name="name"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search By Name/Rating"
      />

      {data
        .filter((el) => {
          return search.toLocaleLowerCase() === ""
            ? el
            : el.name.toLocaleLowerCase().includes(search) ||
                el.rating.includes(search);
        })
        .map((el) => (
          <MovieCard key={el.id} data={el} />
        ))}
    </div>
  );
};
