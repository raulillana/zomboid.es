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
    name: 'Servidor Ejemplo 1',
    ip: '192.168.1.1',
    port: 16261,
    description: 'Servidor PvE con mods de calidad de vida',
    slots: 32,
  },
  {
    name: 'Servidor Ejemplo 2',
    ip: '192.168.1.2',
    port: 16261,
    description: 'Servidor PvP hardcore con eventos semanales',
    slots: 64,
    website: 'https://ejemplo.com',
  },
  {
    name: 'Servidor Ejemplo 3',
    ip: '192.168.1.3',
    port: 16261,
    description: 'Servidor roleplay con whitelist',
    slots: 24,
  },
];
