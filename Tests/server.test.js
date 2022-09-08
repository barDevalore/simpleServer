const axios = require('axios');
test('checks ping response', async () => {
  const ping = await axios.get('http://localhost:3000/ping');
  expect(ping.data).toBe('pong');
});