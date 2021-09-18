# Query Using Fragments
{
  round1_2010: historyDriversByYearAndRound(year: "2010", round: 1) {
    ...DriverInfo
  }
  round2_2010: historyDriversByYearAndRound(year: "2010", round: 2) {
    ...DriverInfo
  }
  round3_2010: historyDriversByYearAndRound(year: "2010", round: 3) {
    ...DriverInfo
  }
  round4_2010: historyDriversByYearAndRound(year: "2010", round: 4) {
    ...DriverInfo
  }
}

fragment DriverInfo on Driver {
  id
  url
  urlMobile
  name
  dateOfBirth
  code
  nationality
  permanentNumber
}

