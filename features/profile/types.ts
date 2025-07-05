export type UpdateProfileType = {
  phone: string;
  profesion: string;
  address: string;
  city: string;
  states: string;
  address2?: string;
};

export type UpdateProfileTypeResponse = {
  success: true;
  message: string;
  data: UpdateProfileType;
};
