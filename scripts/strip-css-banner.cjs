const fs = require('fs');

const file = 'styles.css';
const startToken = '/' + '*!';
const endToken = '*' + '/';
const css = fs.readFileSync(file, 'utf8');
const start = css.indexOf(startToken);
const end = css.indexOf(endToken, start);

if (start >= 0 && end >= 0) {
  fs.writeFileSync(file, css.slice(0, start) + css.slice(end + endToken.length));
}
