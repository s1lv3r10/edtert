import * as SQLite from 'expo-sqlite';

async function Conexao() {
 try{
    const db = await SQLite.openDatabaseAsync('PAM2');
    console.log("Banco Criato");
 } catch(error){
    console.log('erro ao criar o banco'+ error)
 } 
}
async function createTable(db:SQLite.SQLiteDatabase){
    try{
    await db.execAsync(
    `PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS USUARIO(
        ID_US INTEREGER PRIMARY KEY AUTOINCREMENT,
        NOME_US VARCHAR(100),
        EMAIL_US VARCHAR(100)
    )`
    );
    console.log('Tabela criada');
    }catch(erro){
        console.log('Erro ao criar tabela');
    }
}
async function inserirUsuario(db:SQLite.SQLiteDatabase) {
    
}
export{Conexao, createTable};