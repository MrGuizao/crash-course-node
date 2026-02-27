// src/models/counterModel.js
let value = 0;

export function increment() {
  value++;
}

export function decrement() {
  value--;
}

export function getValue() {
  return value;
}