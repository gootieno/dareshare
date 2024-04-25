const { db } = require("../../index");
const { mildQuestions } = require("./questionSeeds");
const { categories } = require("./categorySeeds");
const { users } = require("./userSeeds");

// user seeder
async function seedUsers() {
  const usersCollection = db.collection("Users");
  const batch = db.batch();

  users.forEach((user) => {
    const userRef = usersCollection.doc(); // Auto-generate document ID
    batch.set(userRef, user);
  });

  await batch.commit();
  console.log("Seeded Users collection.");
}

// game seeder
async function seedNewGame(gameData) {
  const gamesCollection = db.collection("Games");

  // Check if the game already exists
  const snapshot = await gamesCollection
    .where("name", "==", gameData.name)
    .get();
  if (snapshot.empty) {
    // If the game does not exist, add it
    const newGameRef = gamesCollection.doc(); // Auto-generate document ID
    await newGameRef.set(gameData);
    console.log(`Seeded new game: ${gameData.name}`);
  } else {
    console.log(`Game already exists: ${gameData.name}`);
  }
}

// category seeder
async function seedCategories() {
  const categoriesCollection = db.collection("Categories");
  const batch = db.batch();

  categories.forEach((category) => {
    const categoryRef = categoriesCollection.doc(); // Auto-generate document ID
    batch.set(categoryRef, category);
  });

  await batch.commit();
  console.log("Seeded Categories collection.");
}

// question seeder
const seedQuestions = async () => {
  const questionsCollection = db.collection("Questions");

  const batch = db.batch();

  mildQuestions.forEach((questionText) => {
    const questionRef = questionsCollection.doc(); // Let Firestore auto-generate the ID
    batch.set(questionRef, {
      text: questionText,
      category: "Mild", // Assuming 'Mild' is the category you have in your Categories collection
    });
  });

  await batch.commit();
  console.log("Seeded Would You Rather Questions.");
};

// Optional seeding based on command line arguments
const args = process.argv.slice(2);
const gameData = {
  name: "Trivia Crack",
  description:
    "A trivia game that challenges your knowledge across various topics.",
};

async function runSeeders() {
  if (args.includes("users")) await seedUsers();
  if (args.includes("games")) await seedNewGame(gameData);
  if (args.includes("categories")) await seedCategories();
  if (args.includes("questions")) await seedQuestions();

  console.log("Selected seed operations completed.");
}

runSeeders().catch(console.error);

module.exports = { seedQuestions, seedUsers, seedNewGame, seedCategories };
