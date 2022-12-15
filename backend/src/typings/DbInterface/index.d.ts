import * as Sequelize from "sequelize";
import { DeliveriesModel } from "@models/Delivery/DeliveriesModel";
import { ClientsModel } from "@models/Clients/ClientsModel";
import { ProductsModel } from "@models/Products/ProductsModel";
import { SellersModel } from "@models/Sellers/SellersModel";

export interface DatabaseInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Deliveries: DeliveriesModel;
  Clients: ClientsModel;
  Products: ProductsModel;
  Sellers: SellersModel;
}
