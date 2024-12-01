import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "@/config/database";
export class Estate extends Model {}

Estate.init(
  {
    id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelize as unknown as Sequelize,
    modelName: "Estate",
  }
);
