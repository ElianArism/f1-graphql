export const getWikiMobileUrl = (url: string) => {
  return url ? url.replace("wikipedia", "m.wikipedia") : ""
}

export const checkYear = (year: string) => {
  let currentYear = new Date().getFullYear()

  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear)
  }

  return year
}

export const checkRound = (round: number) => {
  if (round >= 100) {
    return 1
  }
  return round
}
