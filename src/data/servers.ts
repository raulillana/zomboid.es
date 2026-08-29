export interface Server {
  name: string;
  ip: string;
  port: number;
  description: string;
  slots?: number;
  website?: string;
}

export const servers: Server[] = [
  {
    name: '[ESP/CAT] FireWolf Network Survival',
    ip: '79.112.77.120',
    port: 16261,
    description: 'Project Zomboid v42.20.4',
  },
];
