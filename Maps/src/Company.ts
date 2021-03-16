import faker from 'faker';
export class Company {
  comapnayName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.comapnayName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1> ${this.comapnayName}</h1>
             <h3>${this.catchPhrase}</h3>
             </div>`;
  }
}
