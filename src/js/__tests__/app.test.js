import Character from '../app.js';

test('Ранили', () => {
  const character = new Character('Alex', 'Swordsman');
  character.damage(10);
  const received = character.health;
  expect(received).toBe(94);
});

test('Убили', () => {
  const character = new Character('Alex', 'Swordsman');
  character.damage(200);
  const received = character.health;
  expect(received).toBe(0);
});

test('Без урона', () => {
  const character = new Character('Alex', 'Swordsman');
  character.damage(0);
  const received = character.health;
  expect(received).toBe(100);
});
