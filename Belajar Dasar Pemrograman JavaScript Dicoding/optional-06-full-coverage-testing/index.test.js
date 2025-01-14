import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test case: Adding two positive numbers
test('sum of two positive numbers', () => {
  assert.strictEqual(sum(5, 10), 15);
});

// Test case: Adding a positive number and zero
test('sum of a positive number and zero', () => {
  assert.strictEqual(sum(7, 0), 7);
});

// Test case: Adding two zeros
test('sum of two zeros', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test case: Adding two negative numbers (should return 0)
test('sum of two negative numbers', () => {
  assert.strictEqual(sum(-5, -10), 0);
});

// Test case: Adding a positive number and a negative number (should return 0)
test('sum of a positive number and a negative number', () => {
  assert.strictEqual(sum(5, -10), 0);
});

// Test case: Adding non-numeric inputs (should return 0)
test('sum with non-numeric inputs', () => {
  assert.strictEqual(sum('5', 10), 0);
  assert.strictEqual(sum(5, '10'), 0);
  assert.strictEqual(sum('5', '10'), 0);
  assert.strictEqual(sum(null, 10), 0);
  assert.strictEqual(sum(undefined, 10), 0);
});
