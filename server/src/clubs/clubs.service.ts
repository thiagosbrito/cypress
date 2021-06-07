import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubsService {
  public clubs = [
    {
      name: 'Fortaleza Esporte Club',
      code: 'FEC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Club Athletico Paranaense',
      code: 'CAP',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Coritiba Foot Ball Club',
      code: 'CFBC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Sport Club Internacional',
      code: 'SCI',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Sport Club Recife',
      code: 'SCR',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Ceára Sport Club',
      code: 'CSC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Clube de Regatas Flamengo',
      code: 'CRF',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Clube Atlético Mineiro',
      code: 'CAM',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Santos Futebol Clube',
      code: 'SFC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Red Bull Bragantino',
      code: 'RBB',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Sociedade Esportiva Palmeiras',
      code: 'SEP',
      country: 'Brazil',
      symbol:
        'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2020/06/22121713/escudo-palmeiras-atual.png',
      stadium: {
        name: 'Allianz Parque',
        capacity: 55000,
        address:
          'Av. Francisco Matarazzo, 1705 - Água Branca, São Paulo - SP, 05001-200, Brasil',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/95/Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg',
      }
    },
    {
      name: 'Clube de Regatas Vasco da Gama',
      code: 'CRVG',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Grêmio Foot-Ball Porto Alegrense',
      code: 'GFBPA',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Fluminense Football Club',
      code: 'FFC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Botafogo Futebol e Regatas',
      code: 'BFR',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Sport Club Corinthians Paulista',
      code: 'SCCP',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Goiás Esporte Club',
      code: 'GEC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Esporte Club Bahia',
      code: 'ECB',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'Atlético Clube Goianiense',
      code: 'ACG',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
    {
      name: 'São Paulo Futebol Clube',
      code: 'SPFC',
      country: 'Brazil',
      symbol: '',
      stadium: {
        name: '',
        capacity: 0,
        address: '',
        image: '',
      },
    },
  ];

  public getClubByName(code: string): any {
    console.info(`Service has received ${code} as request param`);
    return this.clubs.filter((club) => club.code === code);
  }
}
