import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface SellersAttributes {
  id?: number;
  name: string;
  email: string;
  document: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SellersInstance
  extends Sequelize.Instance<SellersAttributes>,
    SellersAttributes {}

export interface SellersModel
  extends Sequelize.Model<SellersInstance, SellersAttributes> {}

export const SellersFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): SellersModel => {
  const attributes: SequelizeAttributes<SellersAttributes> = {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },

    document: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "created_at",
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "updated_at",
    },
  };

  const Sellers = sequelize.define<SellersInstance, SellersAttributes>(
    "Sellers",
    attributes,
    {
      tableName: "sellers",
      timestamps: true,
      paranoid: false,
    }
  ) as SellersModel;

  return Sellers;
};
