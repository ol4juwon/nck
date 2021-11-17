"use strict";
const authService = require("./AuthService");

exports.register = async (req, res, next) => {
  console.log("Juwon ", req.body);

  const payload = req.body;
  const { error, data } = await authService.createUser(payload);

  if (error) return createErrorResponse(res, error, 400);

  return createSuccessResponse(res, data, 201);
};

exports.login = async (req, res, next) => {
  const payload = req.body;
  const { error, data } = await authService.login(payload);
  if (error) return createErrorResponse(res, error, 401);

  return createSuccessResponse(res, data, 202);
};
