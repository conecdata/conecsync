export const CONFIG = {
  db: {
    // conexao: {
    //   host: 'DESKTOP-APL18I2',
    //   tabela: 'MDADOS',
    //   usuario: 'ADMINSQL',
    //   senha: '123',
    //   tipo: 'mssql', /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    // }
    conexao: {
      host: '127.0.0.1',
      tabela: 'zebu',
      usuario: 'conecdata',
      senha: 'masterkey',
      tipo: 'mysql', /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    }
  },
  fb: { // Firebird
    conexao: {
      host: '127.0.0.1',
      port: 3050,
      database: 'D:\\arquivo_firebird.FDB',
      user: 'SYSDBA',
      password: 'masterkey',
      lowercase_keys: false,
      role: null,
      pageSize: 4096
    }
  },
  csv: {
    path: ''
  },
  /* 
    TRUE = plataforma de testes
    FALSE = plataforma definitiva ( CUIDADO )
  */
  sandbox: true,
  /* 
    TRUE = Envia mensagens para terminal (se disponível)
    FALSE = Não envia mensagens, apenas grava no arquivo de log
  */
  verbose: true
}
