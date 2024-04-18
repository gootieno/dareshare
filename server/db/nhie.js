const addDocument = require("./index");

// never have I ever seeds
// Seed Users
const users = [
  { username: "alice", email: "alice@example.com" },
  { username: "bob", email: "bob@example.com" },
];

// Seed Games
const games = [
  {
    name: "Never Have I Ever",
    description: "Uncover wild stories and hidden truths! Dare to say never?",
  },
];

// Seed Categories
const categories = [{ name: "Adventure" }, { name: "Family Friendly" }];

// Function to seed Users collection
const seedUsers = async () => {
  for (const user of users) {
    await addDocument("Users", user);
  }
  console.log("Users collection seeded");
};

// Function to seed Games collection
const seedGames = async () => {
  for (const game of games) {
    await addDocument("Games", game);
  }
  console.log("Games collection seeded");
};

// Function to seed Categories collection
const seedCategories = async () => {
  for (const category of categories) {
    await addDocument("Categories", category);
  }
  console.log("Categories collection seeded");
};

// Seed all collections
const seedAll = async () => {
  await seedUsers();
  await seedGames();
  await seedCategories();
};

module.exports = seedAll;
