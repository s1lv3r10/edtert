import * as SQLite from 'expo-sqlite';

async function Conexao() {
 try{
    const db = await SQLite.openDatabaseAsync('PAM2');
    console.log("Banco Criado");
 } catch(error){
    console.log('erro ao criar o banco'+ error)
 } 
}
async function createTable(db:SQLite.SQLiteDatabase){
    try{
    await db.execAsync(
    `PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS USUARIO(
        ID_US INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME_US VARCHAR(100),
        EMAIL_US VARCHAR(100)
    )`
    );
    console.log('Tabela criada');
    }catch(erro){
        console.log('Erro ao criar tabela');
    }
}
async function inserirUsuario(db:SQLite.SQLiteDatabase, name:string, email:string) {
    try {
        await db.runAsync(
            `INSERT INTO USUARIO(NOME_US, EMAIL_US) VALUES(?,?)`, name, email
        );
        console.log('Inserido com Sucesso');
    } catch (error) {
        console.log("Erro ao inserir usuário" + error)
    }
}

async function selectUsuario(db:SQLite.SQLiteDatabase) {
    try {
        const result = await db.getAllAsync('Select * from USUARIO');
        console.log("Usuarios encontrados");
        return result;
    } catch (error) {
        console.log("Erro ao selecionar usuário");
    }
}

async function selectUsuarioID(db:SQLite.SQLiteDatabase) {
    try {
        const result = await db.getAllAsync('Select * from USUARIO');
        console.log("Usuarios encontrados");
        return result;
    } catch (error) {
        console.log("Erro ao selecionar usuário");
    }
}
export{Conexao, createTable, inserirUsuario, selectUsuario, selectUsuarioID};