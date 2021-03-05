class GitHub {
  constructor() {
    this.client_id = 'e9b105a7d7d465d71df7';
    this.client_secret = 'bcb7cbf188beb18e715765c53d8f1acd59ab7829';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}