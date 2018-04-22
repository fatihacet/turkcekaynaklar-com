console.clear();

links = `
- [Frontend İstanbul](https://frontend-istanbul.slack.com) ([Davetiye Al](https://goo.gl/forms/IZe06LgNk6Vsega83))
- [Python İstanbul](https://pyistanbul.slack.com) ([Davetiye Al](https://pyistanbul.herokuapp.com/))
- [Ruby Türkiye](https://rubytr.slack.com) ([Davetiye Al](http://rubytr.herokuapp.com/))
- [İzmir Geliştirici & Tasarımcı Topluluğu](https://www.facebook.com/izmirdev/) ([Davetiye Al](https://docs.google.com/forms/d/e/1FAIpQLSdeuvyiBvhP46os0xhPJE4mnTgtHfWpfCp-595VwbES9Qpdfg/viewform))
- [Az Mesai - Biraz Dev, biraz Ops](http://azmesai.net) ([Davetiye](https://leventyalcin.typeform.com/to/rSbcXD))
- [açık kaynak](http://acikkaynak.info) ([Davetiye](https://publicslack.com/slacks/acikkaynak/invites/new))
- [Laravel İstanbul](http://laravel.istanbul/) ([Kayıt Ol/Giriş Yap](https://join.slack.com/t/laravelistanbul/shared_invite/enQtMjkzMjI0MDQxODE0LTcyOTE3YTVjMGIzZDJjYzBiYTRmOGNmODFiYWU4MDU3Zjc5ZGFiNjRmY2M0OWM2NTU1NmUzNWJmMTE2MTBiMWQ))
- [NSIstanbul- An iOS and Mac Development Community](http://www.nsistanbul.com/) ([Kayıt Ol/Giriş Yap](http://slack.nsistanbul.com))
`;

regex = /\[([^\[\]]+)\]\(([^)]+)/;

links = links.split(`\n`).map((line) => {
  if (!line) {
    return null;
  }

  var [_, title, link] = line.match(regex);
  line = line.replace(`[${title}](${link})`, '');

  var authorMeta = line.match(regex);

  if (authorMeta) {
    var [_, author, authorUrl] = authorMeta;
  }

  return { title, link, author, authorUrl };
});

copy(links.filter((l) => l !== null));
