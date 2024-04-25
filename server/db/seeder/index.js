const {
  seedGames,
  seedUsers,
  seedCategories,
  seedQuestions,
} = require("./wouldYouRather/index");

const seedDataBase = async () => {
  await seedUsers();
  await seedGames();
  await seedCategories();
  await seedQuestions();
};

seedDataBase().catch((err) => console.error(err));
