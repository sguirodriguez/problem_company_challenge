import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface ClientsAttributes {
  id?: number;
  name: string;
  email: string;
  document: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientsInstance
  extends Sequelize.Instance<ClientsAttributes>,
    ClientsAttributes {}

export interface ClientsModel
  extends Sequelize.Model<ClientsInstance, ClientsAttributes> {}

export const ClientsFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): ClientsModel => {
  const attributes: SequelizeAttributes<ClientsAttributes> = {
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

  const Clients = sequelize.define<ClientsInstance, ClientsAttributes>(
    "Clients",
    attributes,
    {
      tableName: "clients",
      timestamps: true,
      paranoid: false,
    }
  ) as ClientsModel;

  return Clients;
};
