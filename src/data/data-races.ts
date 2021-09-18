import { F1 } from "./data-source"
import { checkYear, checkRound } from "../lib/utils"

export class RacesData extends F1 {
  constructor() {
    super()
  }

  public async getRacesByYear(year: string) {
    year = checkYear(year)
    return await this.get(`${this.baseURL}/${year}.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }

  public async getRacesByYearAndRound(year: string, round: number) {
    year = checkYear(year)
    round = checkRound(round)
    return await this.get(`${this.baseURL}/${year}/${round}.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }
}
