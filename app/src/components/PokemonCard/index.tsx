import "./style.css";

const PokemonCard = () => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-grid">
        <div className="image-container">
          <img src="#" alt="" className="pokemon-sprite" />
          <span className="sprite-label">hoge</span>
        </div>
      </div>
      <div className="pokemon-info">
        <h2>Pokemon Name</h2>
        <p className="pokemon-id">#555</p>
        <div className="pokemon-types">
          <span className="type-badge">Flying</span>
        </div>
        <div className="pokemon-details">
          <div className="detail-item">
            <span className="detail-label">Height:</span>
            <span>m</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Weight:</span>
            <span>kg</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Abilities:</span>
            <span>foo, bar, baz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
