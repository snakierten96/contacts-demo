export interface Address {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: {
    lat: String;
    lng: String;
  };
}
