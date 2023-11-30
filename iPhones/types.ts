export interface DetailType {
  camera: string;
  RAM: string;
  storage: string;
  battery: string;
  processor: string;
  otherDetails?: string[] | string;
}

export interface iPhoneModelType {
  id: number;
  name: string;
  image: string;
  details: DetailType;
  cons: string[];
}