import { IResolvers } from "graphql-tools"
import { getWikiMobileUrl } from "../lib/utils"

export const type: IResolvers = {
  Season: {
    year: (parent) => parent.season,
    urlMobile: (parent) => getWikiMobileUrl(parent.url),
  },

  Race: {
    name: (parent) => parent.raceName,
    circuit: (parent) => parent.Circuit, // Enlazar un campo a otro schema
    urlMobile: (parent) => getWikiMobileUrl(parent.url),
  },

  Circuit: {
    id: (parent) => parent.circuitId,
    name: (parent) => parent.circuitName,
    location: (parent) => parent.Location, // Enlazar un campo a otro schema
    urlMobile: (parent) => getWikiMobileUrl(parent.url),
  },

  Location: {
    lng: (parent) => parent.long,
  },

  Driver: {
    id: (parent) => parent.driverId,
    urlMobile: (parent) => getWikiMobileUrl(parent.url),
    name: (parent) => `${parent.givenName} ${parent.familyName}`,
  },

  Constructor: {
    id: (parent) => parent.constructorId,
  },
}
