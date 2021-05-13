import { Button } from "../components/Button";

import "../styles/content.scss";
interface GenreResponseProps {
  genres: {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }[];
}

export function Content(props: any) {
  const { genres }: GenreResponseProps = props;
  const { handleClickButton } = props;
  const { selectedGenreId } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
