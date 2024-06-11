import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "GET") {
    const todo = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });
    res.status(200).json(todo);
  } else if (req.method === "PUT") {
    const { title, completed } = req.body;
    const todo = await prisma.todo.update({
      where: { id: Number(id) },
      data: { title, completed },
    });
    res.status(200).json(todo);
  } else if (req.method === "DELETE") {
    await prisma.todo.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
