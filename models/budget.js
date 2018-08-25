// Model for budgets - dependent on User
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define("Budget", {
    total_balance: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    },
    rent: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    },
    utilities: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    },
    groceries: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    },
    entertainment: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    },
    medical: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: true
    }
  });

  Budget.associate = (models) => {
    // We're saying that a Budget should belong to an User
    // A Budget can't be created without a User due to the foreign key constraint
    Budget.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Budget;
};
