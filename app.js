require("dotenv").config();
// console.log(process.env);
const Pool = require("pg-pool"); //connection pool for node-postgres
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const pool = new Pool({
//   user : process.env.DB_USER,
//   host : process.env.DB_HOST,
//   database : process.env.DB_NAME,
//   password : process.env.DB_PASSWORD,
//   port : process.env.DB_PORT,
// });

app.get("/courses", async (req, res) => {
  try {
    // const result = await prisma.user.deleteMany();
    const tasks = await prisma.Task.findMany();
    // const result = await prisma.user.create({
    //   data: {
    //     email: "dualipa@gmamil.com",
    //     name: "Dua Lipa",
    //     role: "SDE",
    //     tasks: {
    //       create: {
    //         title: "Task 1",
    //         detail: "Task 1 detail",
    //         status: "pending",
    //       }
    //     },
    //     sessions: {
    //       create: {
    //         startAt: new Date(),
    //         endAt: new Date(),
    //         productive: true,
    //       }
    //     }
    //   }
    // });
    console.log(tasks);
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
