import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface DeliveriesAttributes {
  id?: number;
  productName: string;
  origin: string;
  destiny: string;
  idSeller: number;
  idClient: number;
  idProduct: number;
  clientName: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DeliveriesInstance
  extends Sequelize.Instance<DeliveriesAttributes>,
    DeliveriesAttributes {}

export interface DeliveriesModel
  extends Sequelize.Model<DeliveriesInstance, DeliveriesAttributes> {}

export const DeliveriesFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): DeliveriesModel => {
  const attributes: SequelizeAttributes<DeliveriesAttributes> = {
    productName: {
      type: DataTypes.STRING,
      field: "product_name",
    },

    origin: {
      type: DataTypes.STRING,
    },

    destiny: {
      type: DataTypes.STRING,
    },

    idSeller: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_seller",
    },

    idClient: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_client",
    },

    idProduct: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_product",
    },

    clientName: {
      type: DataTypes.STRING,
      field: "client_name",
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

  const Deliveries = sequelize.define<DeliveriesInstance, DeliveriesAttributes>(
    "Deliveries",
    attributes,
    {
      tableName: "deliveries",
      timestamps: true,
      paranoid: false,
    }
  ) as DeliveriesModel;

  return Deliveries;
};
