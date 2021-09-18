import { F1 } from "./data-source"

export class SeasonsData extends F1 {
  constructor() {
    super()
  }

  public async getSeasons() {
    return await this.get(`${this.baseURL}/seasons.json?limit=80`, {
      cacheOptions: {
        ttl: 60, // 60 min
      },
    })
  }
}
