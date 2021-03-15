"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("123456", 6);
    const createdAt = new Date();
    const updatedAt = createdAt;

    await queryInterface.bulkInsert("users", [
      {
        username: "User",
        email: "user@email.com",
        password: password,
        imageUrl:
          "https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-18.jpg",
        createdAt,
        updatedAt,
      },
      {
        username: "Elena",
        email: "elena@email.com",
        password: password,
        imageUrl: "https://essayslimmer.com/assets/avatars/stevie.jpg",
        createdAt,
        updatedAt,
      },
      {
        username: "Viktor",
        email: "viktor@email.com",
        password: password,
        imageUrl:
          "https://lh3.googleusercontent.com/proxy/zrVrWKKNo74Df6iH3qJGMrJBFlicGJMJHQjjBdM-olWfB8vx3ly_BjL_kn5eOZyWZDxWz9Z8oIwm7vx_vpLntHoG8vd_ilKxsNQsqzGc",
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
