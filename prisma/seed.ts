import { db } from "./db";

async function main() {
  await db.todo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Bajsa",
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
