import PropTypes from "prop-types";

/**
 * [MainData Represents data for a user's main data.]
 *
 * @class
 * @property {number} id - The user's ID.
 * @property {string} firstName - The user's first name.
 * @property {string} lastName - The user's last name.
 * @property {number} age - The user's age.
 * @property {number} todayScore - The user's score for today.
 * @property {number} calorie - The user's calorie count.
 * @property {number} proteine - The user's protein count.
 * @property {number} glucide - The user's carbohydrate count.
 * @property {number} lipide - The user's lipid count.
 */
class MainData {
  /**
   * Creates a new MainData object.
   *
   * @constructor
   * @param {object} data - An object containing the user's main data.
   * @param {number} data.id - The user's ID.
   * @param {object} data.userInfos - An object containing the user's personal information, including the first name, last name, and age.
   * @param {number} data.todayScore - The user's score for today.
   * @param {object} data.keyData - An object containing the user's key data, including the calorie count, protein count, carbohydrate count, and lipid count.
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore || data.score;
    this.calorie = data.keyData.calorieCount;
    this.proteine = data.keyData.proteinCount;
    this.glucide = data.keyData.carbohydrateCount;
    this.lipide = data.keyData.lipidCount;
  }
}

MainData.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired,
    todayScore: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export { MainData };
