export interface iWeatherData {
    location: iLocation
    current_observation: iCurrentObservation
    forecasts: iForecast[]
}

export interface iLocation {
    city: string
    region: string
    woeid: number
    country: string
    lat: number
    long: number
    timezone_id: string
}

export interface iCurrentObservation {
    wind: iWind
    atmosphere: iAtmosphere
    astronomy: iAstronomy
    condition: iCondition
    pubDate: number
}

export interface iWind {
    chill: number
    direction: number
    speed: number
}

export interface iAtmosphere {
    humidity: number
    visibility: number
    pressure: number
    rising: number
}

export interface iAstronomy {
    sunrise: string
    sunset: string
}

export interface iCondition {
    code: number
    text: string
    temperature: number
}

export interface iForecast {
    day: string
    date: number
    low: number
    high: number
    text: string
    code: number
}
