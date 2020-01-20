export interface IReseller {
  id: string;
  distributor_uuid: string;
  company_name: string;
  contact_name: string;
  domain_name: string;
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  address_city: string;
  address_county: string;
  address_country: string;
  address_postcode: string;
  default_billing_model: string;
  created_at: Date;
  updated_at: Date;
  version: number;

  company_phone_number: string;
  contact_email: string;
}
