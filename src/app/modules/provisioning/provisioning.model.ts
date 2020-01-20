export interface IProvisioning {
  id: string;
  domain_uuid: string;
  mac_address: string;
  device_label: string;
  description: string;
  vendor: string;
  model: string;
  firmware: string;
  username: string;
  password: string;
  template: string;
  lines: IDeviceLine[];
  keys: IDeviceKey[];
  settings: IDeviceSetting[];
  profiles: string[];
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
}

export enum TransportTypeEnum {
  UDP = 0,
  TCP = 1,
  TLS = 2
}
export interface IDeviceKey {
  category: string;
  key: number;
  type: string;
  line: number;
  value: string;
  extension: string;
  label: string;
}
export interface IDeviceLine {
  line: number;
  server: string;
  proxy: string;
  display_name: string;
  user_id: string;
  password: string;
  port: number;
  transport: TransportTypeEnum,
  enabled: boolean
}
export interface IDeviceSetting {
  name: string,
  value: string,
  category: string,
  description: string
}
