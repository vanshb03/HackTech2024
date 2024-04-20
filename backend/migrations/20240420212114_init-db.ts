import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("waterConsumption", (table) => {
        table.integer("id").primary();
        table.string("householdId").notNullable();
        table.dateTime("date").notNullable();
        table.float("consumption").notNullable();
        table.timestamp("createdAt").defaultTo(knex.fn.now());
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
        // table.foreign("householdId").references("id").inTable("households");
    });
    
    // await knex.schema.createTable("households", (table) => {
    //     table.integer("id").primary();
    //     table.string("householdId").notNullable();
    //     table.dateTime("date").notNullable();
    //     table.float("consumption").notNullable();
    //     table.timestamp("createdAt").defaultTo(knex.fn.now());
    //     table.timestamp("updatedAt").defaultTo(knex.fn.now());
    //     table.foreign("householdId").references("id").inTable("households");
    // }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("waterConsumption");
}

