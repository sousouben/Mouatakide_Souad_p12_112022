/**
 * [PerformanceData Represents data for a user's performance.]
 * @class
 * @property {object} data - An object containing the user's performance data.
 * @property {string} kind - The type of performance data being represented.
 */
class PerformanceData {
  /**
   * Creates a new PerformanceData object.
   *
   * @constructor
   * @param {object} data - An object containing the user's performance data.
   * @param {object} data.data - An object containing the user's performance data.
   * @param {string} data.kind - The type of performance data being represented.
   */
  constructor(data) {
    this.data = data.data;
    this.kind = data.kind;
  }
}

export { PerformanceData };
