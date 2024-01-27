import Sequelize from "sequelize";

// Configuração da conecção do banco de dados SQLite
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"  // Onde você deseja que o arquivo do banco de dados seja armazenado
});

// Testando a conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão bem sucedida com o banco de dados.");
    } catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error);
    }
})();

export default sequelize;