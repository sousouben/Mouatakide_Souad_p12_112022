import PropTypes from "prop-types";
/**
 * [AverageSessionsData Represents data for a user's average session length.]
 *
 * @class
 * @property {number} id - The user's ID.
 * @property {object} sessions - An object containing the user's session data, including the number of days and the average session length.
 * @property {number} day - The number of days of activity for the user.
 * @property {number} session - The average session length for the user.
 */
class AverageSessionsData {
  /**
   * Creates a new AverageSessionsData object.
   *
   * @constructor
   * @param {object} data - An object containing the user's average session data.
   * @param {number} data.userId - The user's ID.
   * @param {object} data.sessions - An object containing the user's session data, including the number of days and the average session length.
   */
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.day = data.sessions.day;
    this.session = data.sessions.sessionLength;
  }
}

AverageSessionsData.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export { AverageSessionsData };
