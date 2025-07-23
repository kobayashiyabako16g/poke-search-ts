import type { Pokemon } from "../../types/pokemon";
import { typeColors } from "../../utils/typeColors";
import "./style.css";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-grid">
        <div className="image-container">
          <img
            src={pokemon.sprites.front_default}
            alt="Front Default"
            className="pokemon-sprite"
          />
          <span className="sprite-label">Front Default</span>
        </div>
        <div className="image-container">
          <img
            src={pokemon.sprites.back_default}
            alt="Back Default"
            className="pokemon-sprite"
          />
          <span className="sprite-label">Back Default</span>
        </div>
        <div className="image-container">
          <img
            src={pokemon.sprites.front_shiny}
            alt="Front Shiny"
            className="pokemon-sprite"
          />
          <span className="sprite-label">Front Shiny</span>
        </div>
        <div className="image-container">
          <img
            src={pokemon.sprites.back_shiny}
            alt="Back Shiny"
            className="pokemon-sprite"
          />
          <span className="sprite-label">Back Shiny</span>
        </div>
      </div>
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p className="pokemon-id">#{pokemon.id}</p>
        <div className="pokemon-types">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className="type-badge"
              style={{
                backgroundColor: typeColors[typeInfo.type.name] || "#68A090",
              }}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
        <div className="pokemon-details">
          <div className="detail-item">
            <span className="detail-label">Height:</span>
            <span>{(pokemon.height / 10).toFixed(1)}m</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Weight:</span>
            <span>{(pokemon.weight / 10).toFixed(1)}kg</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Abilities:</span>
            <span>
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
