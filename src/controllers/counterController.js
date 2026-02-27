// src/controllers/counterController.js
import * as counterModel from "../models/counterModel.js";

export function getCounter(req, res) {
  res.json({ value: counterModel.getValue() });
}

export function incrementCounter(req, res) {
  counterModel.increment();
  res.json({ value: counterModel.getValue() });
}

export function decrementCounter(req, res) {
  counterModel.decrement();
  res.json({ value: counterModel.getValue() });
}