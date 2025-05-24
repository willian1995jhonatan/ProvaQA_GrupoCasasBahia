function gerarCPF() {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const mod = (dividend, divisor) => Math.round(dividend - (Math.floor(dividend / divisor) * divisor));

  let n = [];
  for (let i = 0; i < 9; i++) {
    n[i] = randomInt(0, 9);
  }

  n[9] = (n[0] * 10 + n[1] * 9 + n[2] * 8 + n[3] * 7 + n[4] * 6 + n[5] * 5 + n[6] * 4 + n[7] * 3 + n[8] * 2);
  n[9] = 11 - mod(n[9], 11);
  if (n[9] >= 10) n[9] = 0;

  n[10] = (n[0] * 11 + n[1] * 10 + n[2] * 9 + n[3] * 8 + n[4] * 7 + n[5] * 6 + n[6] * 5 + n[7] * 4 + n[8] * 3 + n[9] * 2);
  n[10] = 11 - mod(n[10], 11);
  if (n[10] >= 10) n[10] = 0;

  return n.join('');
}

module.exports = { gerarCPF };
