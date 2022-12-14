import Sequelize from "sequelize";

export default class Qna extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

        qnaText: { type: Sequelize.STRING(500), allowNull: true },
        qnaAnswer: { type: Sequelize.STRING(500), allowNull: true },
        qnaState: { type: Sequelize.BOOLEAN, allowNull: true },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Qna",
        tableName: "qna",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Qna.belongsTo(db.Products, {
      foreignKey: "products_id",
      targetKey: "id",
    });
    db.Qna.belongsTo(db.Users, {
      foreignKey: "users_id",
      targetKey: "id",
    });
  }
}

// 지금 상황에서 qna는 Products랑 Users를 가지고 있는거니까

// a belongsTo b - a가 b에 속해있다.
// 가지고있다 속해있다.

// a hasMany b - a가 b를 가지고 있다.
//
