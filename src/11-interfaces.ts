export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}
// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 5432
// };
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
    //code
  }
}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
    //code
  }
}
class MysqlDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
    //code
  }
}
