import { IResolvers } from "graphql-tools"

const query: IResolvers = {
  Query: {
    async seasonsList(
      _: void, // parent info
      __: any, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.seasons
        .getSeasons()
        .then((data: any) => data.MRData.SeasonTable.Seasons)
        .catch(console.log)
    },

    async racesByYear(
      _: void, // parent info
      { year }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.races
        .getRacesByYear(year)
        .then((data: any) => data.MRData.RaceTable.Races)
        .catch(console.log)
    },

    async racesByYearAndRound(
      _: void, // parent info
      { year, round }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.races
        .getRacesByYearAndRound(year, round)
        .then((data: any) => data.MRData.RaceTable.Races[0])
        .catch(console.log)
    },

    async historyDrivers(
      _: void, // parent info
      { page, elementsPerPage }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.drivers
        .getDrivers(page, elementsPerPage)
        .then((data: any) => data.MRData.DriverTable.Drivers)
        .catch(console.log)
    },

    async historyDriversByYear(
      _: void, // parent info
      { year }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.drivers
        .getDriversByYear(year)
        .then((data: any) => data.MRData.DriverTable.Drivers)
        .catch(console.log)
    },

    async historyDriversByYearAndRound(
      _: void, // parent info
      { year, round }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.drivers
        .getDriversByYear(year, round)
        .then((data: any) => data.MRData.DriverTable.Drivers)
        .catch(console.log)
    },

    async driverById(
      _: void, // parent info
      { id }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.drivers
        .getDriversByYear(id)
        .then((data: any) => data.MRData.DriverTable.Drivers[0])
        .catch(console.log)
    },

    async getStandingsByYear(
      _: void, // parent info
      { year }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.standings
        .getStandingsByYear(year)
        .then((data: any) => data.MRData.StandingsTable.StandingsLists)
        .catch(console.log)
    },

    async circuits(
      _: void, // parent info
      { page, elementsPerPage }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.circuits
        .getCircuits(page, elementsPerPage)
        .then((data: any) => data.MRData.CircuitTable.Circuits)
        .catch(console.log)
    },

    async circuitById(
      _: void, // parent info
      { id }, // Arg
      { dataSources } // data-source
    ) {
      return await dataSources.circuits
        .getCircuitById(id)
        .then((data: any) => data.MRData.CircuitTable.Circuits[0])
        .catch(console.log)
    },
  },
}

export default query
