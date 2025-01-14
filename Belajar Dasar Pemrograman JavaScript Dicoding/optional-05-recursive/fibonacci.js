// fibonacci.js
function fibonacci(n, sequence = [0, 1]) {
    if (n === 0) {
      return [0];
    }
    if (n === 1) {
      return sequence.slice(0, 2);
    }
    if (sequence.length > n) {
      return sequence.slice(0, n + 1);
    }
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return fibonacci(n, [...sequence, nextValue]);
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;