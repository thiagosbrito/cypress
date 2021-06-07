export interface Club {
  name: string;
  code: string;
  country: string;
  symbol: string;
  stadium: Stadium
}

interface Stadium {
  name: string;
  capacity: number;
  address: string;
  image: string;
}
