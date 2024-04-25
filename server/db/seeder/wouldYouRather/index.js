const { db } = require("../../index");
const { mildQuestions } = require("./questionSeeds");
const { categories } = require("./categorySeeds");
const { users } = require("./userSeeds");
const { games } = require("./gameSeeds");

// user seeder
async function seedUsers() {
  const usersCollection = db.collection("Users");

  for (const user of users) {
    const userSnapshot = await usersCollection
      .where("email", "==", user.email)
      .get();
    if (userSnapshot.empty) {
      const userRef = usersCollection.doc(); // Auto-generate document ID
      await userRef.set(user);
      console.log(`Seeded new user: ${user.email}`);
    } else {
      console.log(`User already exists: ${user.email}`);
    }
  }
}

// game seeder
async function seedGames() {
  const gamesCollection = db.collection("Games");

  for (const game of games) {
    const snapshot = await gamesCollection.where("name", "==", game.name).get();
    if (snapshot.empty) {
      // If the game does not exist, add it
      const newGameRef = gamesCollection.doc(); // Auto-generate document ID
      await newGameRef.set(game);
      console.log(`Seeded new game: ${game.name}`);
    } else {
      console.log(`Game already exists: ${game.name}`);
    }
  }
}

// category seeder
async function seedCategories() {
  const categoriesCollection = db.collection("Categories");

  for (const category of categories) {
    const categorySnapshot = await categoriesCollection
      .where("name", "==", category.name)
      .get();
    if (categorySnapshot.empty) {
      const categoryRef = categoriesCollection.doc(); // Auto-generate document ID
      await categoryRef.set(category);
      console.log(`Seeded new category: ${category.name}`);
    } else {
      console.log(`Category already exists: ${category.name}`);
    }
  }
}

// question seeder
const seedMildQuestions = async () => {
  const questionsCollection = db.collection("Questions");

  for (const question of mildQuestions) {
    const questionSnapshot = await questionsCollection
      .where("text", "==", question.text)
      .get();
    if (questionSnapshot.empty) {
      const questionRef = questionsCollection.doc(); // Auto-generate document ID
      await questionRef.set({
        text: question.text,
        category: "Mild", // Adjust as necessary for your category ID
      });
      console.log(`Seeded new question: ${question.text}`);
    } else {
      console.log(`Question already exists: ${question.text}`);
    }
  }
};

// Optional seeding based on command line arguments
// const args = process.argv.slice(2);

// async function runSeeders() {
//   if (args.includes("users")) await seedUsers();
//   if (args.includes("games")) await seedGames();
//   if (args.includes("categories")) await seedCategories();
//   if (args.includes("questions")) await seedMildQuestions();

//   console.log("Selected seed operations completed.");
// }

module.exports = { seedMildQuestions, seedUsers, seedGames, seedCategories };
