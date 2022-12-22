import { PokemonType } from "pokenode-ts";
import { PokemonTypeColors } from "../../utils/pokemon-type-colors";
import "./styles.scss";

export const Card = (props: any) => {

  return (
    <>
      <div className="card">
        <img
          src={props.data.pokemon.sprites.front_default!}
          className="card__image"
          alt={props.data.pokemon.name}
        />
        <div className="card__infos">
          <span className="card__id">#{props.data.pokemon.id}</span>
          <span className="card__name">{props.data.pokemon.name}</span>
          <div className="card__types">
            {props.data.pokemon.types.map((type: PokemonType) => (
              <div
                key={type.type.name}
                style={{ background: PokemonTypeColors[type.type.name] }}
                className="card__type"
              >
                <span>{type.type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
