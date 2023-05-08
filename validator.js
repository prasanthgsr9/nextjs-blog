const express = require('express');
const next = require('next');
const { validateHTML } = require('html-validator');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', async (req, res) => {
    const response = await app.renderToHTML(req, res, req.path, req.query);

    if (dev) {
      const validationResult = await validateHTML({ data: response });
      console.log(validationResult);
    }

    res.send(response);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
