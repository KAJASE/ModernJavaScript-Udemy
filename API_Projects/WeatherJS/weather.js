class Weather {
  constructor(city, state) {
    this.apiKey = 'PTBU6Qvi3OpYi0NysIzHoromExQphhfl';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
     const response = await fetch(`https://data.climacell.co/v4/locations?apikey=API_KEY`);
  }
}