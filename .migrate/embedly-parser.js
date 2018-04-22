function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

var parsedData = {};

data.forEach(item => {
  parsedData[item.category] = parsedData[item.category] || {
    slug: slugify(item.category),
    links: [],
  };

  var linkMeta = item.linkMeta;
  var authorMeta = item.authorMeta && JSON.parse(item.authorMeta);
  var collectedData = {
    url: item.link,
    title: item.title,
    image: linkMeta.images[0] && linkMeta.images[0].url,
  };

  if (item.author) {
    collectedData.author = {
      name: item.author,
    };

    if (authorMeta) {
      collectedData.author.avatar = authorMeta.images[0] && authorMeta.images[0].url;
    }
  }
  parsedData[item.category].links.push(collectedData);
});
