import { F1 } from "./data-source"

export class CircuitsData extends F1 {
  constructor() {
    super()
  }

  public async getCircuits(page: number = 1, elementsPerPage: number) {
    let offset: number, limit: number
    let path: string

    if (elementsPerPage) {
      offset = (page - 1) * elementsPerPage
      limit = elementsPerPage
      path = `limit=${limit}&offset=${offset}`
    } else {
      path = `limit=10000`
    }

    return await this.get(`${this.baseURL}/circuits.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }

  public async getCircuitById(id: string) {
    return await this.get(`${this.baseURL}/circuits/${id}.json`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }
}
