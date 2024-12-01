import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import { settings } from "./config";

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: settings.db.database,
  user: settings.db.user,
  password: settings.db.password,
  host: settings.db.host,
  port: parseInt(settings.db.port || "5432"),
  ssl: true,
  clientMinMessages: "notice",
});
