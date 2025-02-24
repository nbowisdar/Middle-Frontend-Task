import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const MarksTable = sqliteTable("marks", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  x: int().notNull(),
  y: int().notNull(),
  comment: text(),
});
