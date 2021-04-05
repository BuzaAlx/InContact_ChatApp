"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("123456", 6);
    const createdAt = new Date();
    const updatedAt = createdAt;

    await queryInterface.bulkInsert("users", [
      {
        username: "user",
        email: "user@email.com",
        password: password,
        imageUrl:
          "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
        createdAt,
        updatedAt,
      },
      {
        username: "elena",
        email: "elena@email.com",
        password: password,
        imageUrl: "https://semantic-ui.com/images/avatar2/large/kristy.png",
        createdAt,
        updatedAt,
      },
      {
        username: "viktor",
        email: "viktor@email.com",
        password: password,
        imageUrl: "https://semantic-ui.com/images/avatar2/large/elyse.png",
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
