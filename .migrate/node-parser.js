const fs = require('fs');
const path = require('path');
const queue = require('queue');
const request = require('request-promise');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, './tk-links.json'), 'utf-8'));
const formatted = [];

const q = queue({ concurrency: 1 });

const fetch = url => {
  return request({
    url: 'https://api.embedly.com/1/extract',
    method: 'GET',
    qs: {
      key: process.env.EMBEDLY_API_KEY,
      url,
    },
  });
};

let counter = 0;
const log = title => {
  counter = counter + 1;
  console.log(`FETCHING #${counter}`, title);
};

const schedule = () => {
  data.forEach(section => {
    const { category, links } = section;

    links.forEach(l => {
      q.push(cb => {
        log(l.title + ' ' + l.link);

        fetch(l.link).then(meta => {
          const fullObj = {
            category,
            linkMeta: JSON.parse(meta),
            title: l.title,
            link: l.link,
          };

          if (l.authorUrl) {
            log(l.author + ' ' + l.authorUrl);
            fetch(l.authorUrl).then(m => {
              fullObj.author = l.author;
              fullObj.authorUrl = l.authorUrl;
              fullObj.authorMeta = m;

              formatted.push(fullObj);
              cb();
            });
          } else {
            formatted.push(fullObj);
            cb();
          }
        });
      });
    });
  });
};

q.on('success', () => {
  fs.writeFileSync(path.join(__dirname, './embeded-data.json'), JSON.stringify(formatted));
});

schedule();
q.start();
