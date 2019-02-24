import Sequelize from 'sequelize';
import { sequelize } from '..';

const User = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sourceId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userSource: {
      type: Sequelize.STRING,
    },
    profilePicture: {
      type: Sequelize.STRING,
    },
    accessToken: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    refreshToken: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['email', 'id'],
      },
    ],
  },
);

// User.sync({ force: true });

export default User;
