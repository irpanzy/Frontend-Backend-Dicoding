import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test cases for the sum function
test('sum adds two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum adds a positive number and zero', () => {
  assert.strictEqual(sum(4, 0), 4);
});

test('sum adds two negative numbers', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('sum adds a positive and a negative number', () => {
  assert.strictEqual(sum(5, -3), 2);
});
