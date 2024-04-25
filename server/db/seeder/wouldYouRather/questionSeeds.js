const mildQuestions = [
  {
    text: "Would you rather be able to fly or be invisible?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather never have to work again or never have to sleep again?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather swim with sharks or go skydiving?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather always have a full phone battery or a full gas tank?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have free Wi-Fi wherever you go or be able to drink unlimited free coffee at any coffee shop?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a private island or a private jet?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather go into the past and meet your ancestors or go into the future to meet your descendants?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather lose all of your money or all of your pictures?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have more time or more money?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be the funniest person in the room or the most intelligent?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be able to speak all languages or be able to speak to animals?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather read minds or accurately predict the future?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be famous or the best friend of someone famous?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live on the beach or in a cabin in the woods?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather lose your vision or your hearing?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have unlimited sushi for life or unlimited tacos for life?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be able to breathe underwater or have the agility of a cat?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather always get stuck in traffic or always have a really slow internet connection?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend the night in a luxury hotel room or camping surrounded by beautiful scenery?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather explore a new planet or the deepest parts of the ocean?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather win an Olympic medal or an Academy Award?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a personal library or a personal gym?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live without music or without television?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a guaranteed great evening every Friday or have every Monday off work?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather travel with a circus or go on tour with a rock band?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in a house shaped like a circle or a house shaped like a triangle?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be a master at painting or an amazing dancer?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have the ability to see new colors nobody has seen before or have the ability to hear things that are typically silent?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have hands that kept growing as you got older or feet that kept growing as you got older?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in a home with no electricity or in a home with no running water?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a clown only you can see that follows you everywhere and just stands silently in a corner watching you without doing or saying anything or have a real-life stalker who dresses like the Easter Bunny that everyone can see?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather every shirt you ever wear be kind of itchy or only be able to use 1-ply toilet paper?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have edible spaghetti hair that regrows every night or sweat (not stinky) maple syrup?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have to read aloud every word you read or sing everything you say out loud?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather wear a wedding dress/tuxedo every single day or wear a bathing suit every single day?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be unable to move your body every time it rains or not be able to stop moving while the sun is out?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have all dogs try to attack you when they see you or all birds try to attack you when they see you?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be compelled to high five everyone you meet or be compelled to give them a hug?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a permanently clogged nose or a piece of green food always stuck in your teeth?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a 10-hour dinner with a headstrong politician from an opposing party, or attend a 10-hour concert for a music group you detest?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live without heat and AC or live without social media?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be a famous director or a famous actor?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather never be able to wear pants or never be able to wear shorts?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have free unlimited gas for 25 years or have your groceries be free for the next 15 years?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be a master of every musical instrument or be fluent in every language?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in the world of Star Wars or the world of Harry Potter?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend the rest of your life on a sailboat as your home or in an RV as your home?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a fast forward button or a rewind button on your life?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather only be able to use a fork (no spoon) or only be able to use a spoon (no fork)?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have an unlimited international first-class ticket or never have to pay for food at restaurants?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather see what was behind every closed door or be able to guess the combination of every safe on the first try?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be an average person in the present or a king of a large country 2500 years ago?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be able to dodge anything no matter how fast it's moving or be able to ask any three questions and have them answered accurately?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be forced to dance every time you heard music or be forced to sing along to any song you heard?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have all your clothes fit perfectly or have the most comfortable pillow, blankets, and sheets in existence?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be in history books for something terrible or be forgotten completely after you die?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather never get angry or never be envious?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have free Wi-Fi wherever you go or be able to drink unlimited free coffee at any coffee shop?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be compelled to high-five everyone you meet or be compelled to give them a playful punch on the arm?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in a cave or live in a tree house?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather swim in a pool filled with Nutella or a pool filled with maple syrup?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have everything you draw become real but be permanently terrible at drawing, or be able to fly but only as fast as you can walk?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather everyone be required to wear identical silver jumpsuits or any time two people meet and are wearing an identical article of clothing they must fight to the death?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have one nipple or two belly buttons?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather every shirt you ever wear be kind of itchy or only be able to use 1-ply toilet paper?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have edible spaghetti hair that regrows every night or sweat (not stinky) maple syrup?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have to read aloud every word you read or sing everything you say out loud?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather wear a wedding dress/tuxedo every single day or wear a bathing suit every single day?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be unable to move your body every time it rains or not be able to stop moving while the sun is out?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have all dogs try to attack you when they see you or all birds try to attack you when they see you?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend a day in the mountains or by the sea?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be an expert at one thing or decent at many things?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be famous when you are alive and forgotten when you die or unknown now but famous after you die?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather never use social media sites/apps again or never watch another movie or TV show?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather travel the world for free for a year or have $50,000 to spend however you please?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a pause or a rewind button in your life?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather always be 10 minutes late or always be 20 minutes early?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have an unlimited gift certificate to a restaurant or a clothing store?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be an Olympic gold medalist or a Nobel Peace Prize winner?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a desk job or an outdoor job?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live at the top of a tall NYC apartment building or at the top of a mountain?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a horrible short-term memory or a horrible long-term memory?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be the star player on a losing basketball team or ride the bench on a winning one?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend the next year exempt from all taxes or have a one-month paid vacation?",
    categoryId: "Mild",
  },
  { text: "Would you rather have invisibility or flight?", categoryId: "Mild" },
  {
    text: "Would you rather live where it only snows or the temperature never falls below 100 degrees?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a completely automated home or a self-driving car?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather work more hours per day, but fewer days or work fewer hours per day, but more days?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather become a best-selling novelist or a famous film director?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather give up your smartphone for a year or give up dessert for a year?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have the ability to change the past or see into the future?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend the day at an amusement park or a music festival?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a personal chef or a personal secretary?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be able to speak fluently every language in the world or be the best in the world in one area of your choosing?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in a world where all food is nutritious or in a world where exercise is unnecessary?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a flying carpet that goes only 10 mph or a car that can go 300 mph?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend a year at sea with a crew of your choice or spend a year at the space station with a crew of your choice?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a home theater or a full home gym?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be an expert in quantum physics or a master of any musical instrument?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a lifetime subscription to Netflix or an unlimited gift card to Starbucks?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live in a home with a view of the ocean or a view of the mountains?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather travel the world but live modestly or stay in your hometown but live luxuriously?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have a garden or a swimming pool in your backyard?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be able to talk to water animals or fly with birds?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather spend a week in the forest or a night in a real haunted house?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather have dinner with your favorite historical figure or your favorite fictional character?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather live without modern heating and cooling systems or live without modern telecommunications devices?",
    categoryId: "Mild",
  },
  {
    text: "Would you rather be a famous inventor or a famous writer?",
    categoryId: "Mild",
  },
];

module.exports = { mildQuestions };
