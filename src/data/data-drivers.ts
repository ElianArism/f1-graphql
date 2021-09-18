import { F1 } from "./data-source"
import { checkYear, checkRound } from "../lib/utils"

export class DriversData extends F1 {
  constructor() {
    super()
  }

  public async getDrivers(page: number = 1, elementsPerPage: number) {
    let offset: number, limit: number
    let path: string

    if (elementsPerPage) {
      offset = (page - 1) * elementsPerPage
      limit = elementsPerPage
      path = `limit=${limit}&offset=${offset}`
    } else {
      path = `limit=10000`
    }

    return await this.get(`/drivers.json?${path}`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }

  public async getDriversByYear(year: string) {
    year = checkYear(year)

    return await this.get(`/${year}/drivers.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }

  public async getDriversByYearAndRound(year: string, round: number) {
    year = checkYear(year)
    round = checkRound(round)

    return await this.get(`/${year}/${round}/drivers.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }

  public async driverById(id: string) {
    return await this.get(`/drivers/${id}.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }
}
