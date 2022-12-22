/**
 * [ActivityData Represents data for a user's activity.]
 *
 * @class
 * @property {number} id - The user's ID.
 * @property {object} sessions - An object containing the user's session data, including the number of days, kilograms lost, and calories burned.
 * @property {number} day - The number of days of activity for the user.
 * @property {number} kilo - The number of kilograms lost by the user.
 * @property {number} calorie - The number of calories burned by the user. *
 */
class ActivityData {
  /**
   * Creates a new ActivityData object.
   *
   * @constructor
   * @param {object} data - An object containing the user's activity data.
   * @param {number} data.userId - The user's ID.
   * @param {object} data.sessions - An object containing the user's session data, including the number of days, kilograms lost, and calories burned.
   */
  constructor(data) {
    this.id = data.userId; //identifiant de l'utilisateur
    this.sessions = data.sessions; //un objet qui contient les données de session de l'utilisateur, comme le nombre de jours, les kilogrammes perdus et les calories brûlées
    this.day = data.sessions.day; //le nombre de jours d'activité de l'utilisateur
    this.kilo = data.sessions.kilogram; //le nombre de kilogrammes perdus par l'utilisateur
    this.calorie = data.sessions.calories; //le nombre de calories brûlées par l'utilisateur
  }
}

export { ActivityData };
