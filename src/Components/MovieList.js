import { MovieCard } from "./MovieCard";


export const MovieList = ({ data ,search, searchRate}) => {
 
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
     

      {data
        .filter((el) => 
          el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
                el.rating >=searchRate
        )
        .map((el) => (
          <MovieCard key={el.id} data={el} />
        ))}
    </div>
  );
};
