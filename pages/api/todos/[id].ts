import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../prisma/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "GET") {
    const todo = await db.todo.findUnique({
      where: { id: Number(id) },
    });
    res.status(200).json(todo);
  } else if (req.method === "PUT") {
    const { title, completed } = req.body;
    const todo = await db.todo.update({
      where: { id: Number(id) },
      data: { title, completed },
    });
    res.status(200).json(todo);
  } else if (req.method === "DELETE") {
    await db.todo.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
