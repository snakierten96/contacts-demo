import { Address } from './address.model';
import { Company } from './company.model';

export interface User {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: Address;
  phone: String;
  website: String;
  company: Company;
}
