import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  episode: number;
  director: string;
};

const FilmCard = ({ id, title, episode, director }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <p>Episode #{episode}</p>
      <p>Director: {director}</p>
      <Link to={`/${id}/characters`}>See characters</Link>
    </>
  );
};

export default FilmCard;
