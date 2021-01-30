export const CONFIG = {
  db: {
    conexao: {
      host: '127.0.0.1',
      tabela: 'hypico',
      usuario: 'conecdata',
      senha: 'masterkey',
      tipo: 'mysql', /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    }
  },
  fb: { // Firebird
    conexao: {
      host: '127.0.0.1',
      port: 3050,
      database: 'D:\\TGA_varejao.FDB', // 'D:\\TGA_varejao.FDB' 'D:\\CONECSYNC.FDB'
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
    FALSE = Não envia mensagens, apenas grava em arquivos de log
  */
  verbose: true
}
