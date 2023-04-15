function findMatching(drivers, searched) {
    return drivers.filter(
      (driver) => driver.toLowerCase() === searched.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, searched) {
    return drivers.filter(
        (driver) => Array.from(driver.toLowerCase())[0] === Array.from(searched.toLowerCase())[0]
    )

  }

  function matchName(drivers, searched) {
    return drivers.filter((driver) => driver.name === searched)
  }