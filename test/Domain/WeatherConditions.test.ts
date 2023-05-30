import { WeatherConditions } from "../../src/Domain/WeatherConditions";

describe('Testing WeatherConditions Entity', () => {
  it('Should be of proper class', () => {
    const sut = new WeatherConditions();
    expect(sut).toBeInstanceOf(WeatherConditions);
  })
})
