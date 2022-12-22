import { PokemonTypeColors } from "../../utils/pokemon-type-colors";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { PokemonStat, PokemonType } from "pokenode-ts";
import "./styles.scss";

export const Modal = (props: any) => {
  if (!props.showModal) return null;

  const closeModal = () => {
    props.handleCloseModal();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={closeModal}>
          &times;
        </span>
        <div>
          <div className="pokemon__sprites">
            <Tabs>
              <TabList>
                <Tab>Default</Tab>
                <Tab>Shiny</Tab>
              </TabList>
              <TabPanel>
                <img
                  src={props.data.pokemon.sprites.front_default}
                  className="pokemon__image"
                  alt={props.data.pokemon.name}
                />
              </TabPanel>
              <TabPanel>
                <img
                  src={props.data.pokemon.sprites.front_shiny}
                  className="pokemon__image"
                  alt={props.data.pokemon.name}
                />
              </TabPanel>
            </Tabs>
          </div>
          <div className="modal__header">
            <small className="pokemon__id">#{props.data.pokemon.id}</small>
            <h1 className="pokemon__name">{props.data.pokemon.name}</h1>
            <div className="pokemon__types">
              {props.data.pokemon.types.map((type: PokemonType) => (
                <div
                  key={type.type.name}
                  style={{ background: PokemonTypeColors[type.type.name] }}
                  className="pokemon__type"
                >
                  <span>{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal__body">
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Stats</Tab>
            </TabList>
            <TabPanel>
              <p className="pokemon__flavor-text">
                {
                  // creates a copy of the array and finds the last matching entry
                  props.data.species.flavor_text_entries
                    .slice()
                    .reverse()
                    .find((entry: any) => entry.language.name === "en")
                    .flavor_text
                }
              </p>
              <div className="pokemon__about">
                <div className="pokemon__group">
                  <span>Generation</span>
                  <span>
                    {
                      // gets only generation number
                      props.data.species.generation.name
                        .split("-")[1]
                        .toUpperCase()
                    }
                  </span>
                </div>
                <div className="pokemon__group">
                  <span>Species</span>
                  <span>
                    {
                      props.data.species.genera.find(
                        (species: any) => species.language.name === "en"
                      ).genus
                    }
                  </span>
                </div>
                <div className="pokemon__group">
                  <span>Height</span>
                  <span>
                    {
                      // converts from decimeters to centimeters
                      props.data.pokemon.height * 10
                    }{" "}
                    cm
                  </span>
                </div>
                <div className="pokemon__group">
                  <span>Weight</span>
                  <span>
                    {
                      // converts from hectograms to kilograms
                      props.data.pokemon.weight / 10
                    }{" "}
                    kg
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="pokemon__stats">
                {props.data.pokemon.stats.map((stat: PokemonStat) => (
                  <div key={stat.stat.name} className="pokemon__group">
                    <span>{stat.stat.name.replace("-", " ")}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
