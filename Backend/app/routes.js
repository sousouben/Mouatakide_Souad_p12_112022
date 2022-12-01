const express = require("express");
const idx = require("idx");

const router = express.Router();

const {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
} = require("./models");

const { handleNoUserData } = require("./middleware");

//Cette route me donne des informations générales sur l’utilisateur.
router.get("/user/:id", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserById(Number(userId));

  return handleNoUserData(res, userData);
});

//Cette route donne des informations sur le poids et les calories brûlées.
//informations sur les calories, protéines, glucides et lipides de la journée.
router.get("/user/:id/activity", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserActivityById(Number(userId));

  return handleNoUserData(res, userData);
});

//Cette route donne des informations sur la durée moyenne des sessions.
router.get("/user/:id/average-sessions", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserAverageSession(Number(userId));

  return handleNoUserData(res, userData);
});

//Cette route me donne des informations pour le radar chart.
router.get("/user/:id/performance", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserPerformance(Number(userId));

  return handleNoUserData(res, userData);
});

module.exports = router;
