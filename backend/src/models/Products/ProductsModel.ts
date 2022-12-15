import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface ProductsAttributes {
  id?: number;
  name: string;
  value: number;
  idSeller: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductsInstance
  extends Sequelize.Instance<ProductsAttributes>,
    ProductsAttributes {}

export interface ProductsModel
  extends Sequelize.Model<ProductsInstance, ProductsAttributes> {}

export const ProductsFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): ProductsModel => {
  const attributes: SequelizeAttributes<ProductsAttributes> = {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    value: {
      allowNull: false,
      type: DataTypes.NUMERIC,
    },

    idSeller: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_seller",
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

  const Products = sequelize.define<ProductsInstance, ProductsAttributes>(
    "Products",
    attributes,
    {
      tableName: "products",
      timestamps: true,
      paranoid: false,
    }
  ) as ProductsModel;

  return Products;
};
