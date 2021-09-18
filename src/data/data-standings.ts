import { F1 } from "./data-source"
import { checkYear } from "../lib/utils"

export class StandingsData extends F1 {
  constructor() {
    super()
  }

  async getStandingsByYear(year: string) {
    year = checkYear(year)

    return await this.get(`/${year}/driverStandings.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }
}
