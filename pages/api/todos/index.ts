import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../prisma/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await db.todo.findMany();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { title } = req.body;
    const todo = await db.todo.create({
      data: {
        title,
      },
    });
    res.status(201).json(todo);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
