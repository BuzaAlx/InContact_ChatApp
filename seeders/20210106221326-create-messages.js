"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("messages", [
      {
        uuid: "7648485a-6657-48d7-87d6-6a98931d3598",
        content: "You make me feel like I'm not good enough.",
        from: "user",
        to: "elena",
        createdAt: "2020-07-01 07:00:00",
        updatedAt: "2020-07-01 07:00:00",
      },
      {
        uuid: "ae4df4f1-a428-400d-bb16-edd4237e0c47",
        content: "I knew you wouldn't be able to see it through.",
        from: "elena",
        to: "user",
        createdAt: "2020-07-01 08:00:00",
        updatedAt: "2020-07-01 08:00:00",
      },
      {
        uuid: "0a7c92ac-f69c-4799-8aad-9663a4afb47d",
        content: "Have you read the newspaper stories about my wife?",
        from: "user",
        to: "elena",
        createdAt: "2020-07-01 09:00:00",
        updatedAt: "2020-07-01 09:00:00",
      },
      {
        uuid: "240dd560-5825-4d5d-b089-12a67e8ec84c",
        content:
          "But this is the only thing that's made the last three years bearable.",
        from: "elena",
        to: "user",
        createdAt: "2020-07-01 10:00:00",
        updatedAt: "2020-07-01 10:00:00",
      },
      {
        uuid: "60909592-cfd7-4b16-a1ce-709091d5f6d7",
        content:
          "Thank you for agreeing to help. My son is in a difficult position.",
        from: "user",
        to: "elena",
        createdAt: "2020-07-01 11:00:00",
        updatedAt: "2020-07-01 11:00:00",
      },
      {
        uuid: "a10ad37d-c70b-4093-ae33-e5d0ab9498e1",
        content: "Really? how come?",
        from: "elena",
        to: "user",
        createdAt: "2020-07-01 12:00:00",
        updatedAt: "2020-07-01 12:00:00",
      },
      {
        uuid: "be49ab98-5271-4eb9-a630-dd6d37e420ed",
        content:
          "Thank you for agreeing to help. My son is in a difficult position.",
        from: "user",
        to: "elena",
        createdAt: "2020-07-01 13:00:00",
        updatedAt: "2020-07-01 13:00:00",
      },
      {
        uuid: "a10ad37d-c70b-4093-ae33-e5d0ab9429e4",
        content:
          "Somehow we need to persuade him to part with a million dollars.",
        from: "elena",
        to: "user",
        createdAt: "2020-07-01 14:00:00",
        updatedAt: "2020-07-01 14:00:00",
      },
      {
        uuid: "be49ab98-5271-4eb9-a630-dd6d37e623j7",
        content: "What's in that bag and why are you hiding it here?",
        from: "user",
        to: "elena",
        createdAt: "2020-07-01 15:00:00",
        updatedAt: "2020-07-01 15:00:00",
      },
      {
        uuid: "fd4cee68-5caf-4b1b-80a9-5b9add7fd863",
        content: "You've only heard his point of view. You never asked mine.",
        from: "viktor",
        to: "user",
        createdAt: "2020-07-01 11:00:00",
        updatedAt: "2020-07-01 11:00:00",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
