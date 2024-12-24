
export interface IFormSelect {
  label: string;
  name: string;
  control: Control<>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  options: IOptionsSelect[];
}

interface IOptionsSelect {
  label: string;
  value: string;
}