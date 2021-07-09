import {
  energySources,
  airCompressor,
  production,
  resources,
  silo,
  weather,
  ambientConditions,
  machine,
} from "../../../charts/test";

export default function handler({ query: { id } }, res) {
  console.log("id**************************-------+++++ :", id);
  //   const filtered = systems.filter(
  //     (system) => system.type.name.match(/\w/g).join(" ") === id.toLowerCase());

  switch (id) {
    case "energy-sources":
      res.status(200).json(energySources);
      break;
    case "ambient-conditions":
      res.status(200).json(ambientConditions);

      break;
    case "compressed-air":
            res.status(200).json(airCompressor);


      break;
    case "ambient-conditions":
      res.status(200).json(ambientConditions);

      break;
    case "production":
      res.status(200).json(production);

      break;
    case "area-production":
      res.status(200).json(production);

      break;
    case "resources":
      res.status(200).json(resources);

      break;
    case "silo":
      res.status(200).json(silo);

      break;
    case "weather":
      res.status(200).json(weather);

      break;
    case "other":
      res.status(200).json(machine);

      break;

    default:
      res
        .status(404)
        .json({ message: `Article with the id of ${id} is not found` });
      break;
  }

  // if (id === "energy-sources") {
  //   res.status(200).json(energySources);
  // } else if (id === "ambient-conditions") {
  //   res.status(200).json(ambientConditions);
  // } else if (id === "compressed-air") {
  //   res.status(200).json(airCompressor);
  // } else if (id === "area-production") {
  //   res.status(200).json(production);
  // } else if (id === "production") {
  //   res.status(200).json(production);
  // } else if (id === "resources") {
  //   res.status(200).json(resources);
  // } else if (id === "silo") {
  //   res.status(200).json(silo);
  // } else if (id === "weather") {
  //   res.status(200).json(weather);
  // } else if (id === "other") {
  //   res.status(200).json(machine);
  // } else {
  //   res
  //     .status(404)
  //     .json({ message: `Article with the id of ${id} is not found` });
  // }
}
