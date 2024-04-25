const {
  seedGames,
  seedUsers,
  seedCategories,
  seedMildQuestions,
} = require("./wouldYouRather/index");

const seedDataBase = async () => {
  await seedUsers();
  await seedGames();
  await seedCategories();
  await seedMildQuestions();
};

seedDataBase().catch((err) => console.error(err));
