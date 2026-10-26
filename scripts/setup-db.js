const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

async function run() {
  const sqlPath = path.join(__dirname, "..", "supabase", "schema.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");

  // Connection options:
  // Using direct connection or pooler connection
  const client = new Client({
    user: "postgres.jfopczwvojfapensfwmb",
    host: "aws-0-us-east-1.pooler.supabase.com",
    database: "postgres",
    password: "FARAZ_20034@",
    port: 6543,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log("Connecting to Supabase PostgreSQL database...");
    await client.connect();
    console.log("✓ Connected successfully!");

    console.log("Executing schema.sql...");
    await client.query(sql);
    console.log("✓ Schema executed successfully!");

    const res = await client.query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'bookings'
      ORDER BY ordinal_position;
    `);

    console.log("✓ Bookings table verified with columns:");
    res.rows.forEach((col) => {
      console.log(`  - ${col.column_name} (${col.data_type})`);
    });

    await client.end();
    console.log("All done!");
    process.exit(0);
  } catch (err) {
    console.error("Error setting up database:", err);
    try {
      await client.end();
    } catch (_) {}
    process.exit(1);
  }
}

run();
