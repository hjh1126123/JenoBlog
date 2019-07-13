export default function ($axios) {
  return new Promise((resolve, reject) => {
    let requireHtml = require.context('~/static/train', false);        
    let htmls = [];

    requireHtml.keys().forEach(key => {      
      let adress = `train/${key.match(/(?<=.\/).+/)[0]}`;
      $axios.get(adress).then(res => {
        htmls.push({
          title: res.data.match(/(?<=<title>).+(?=<\/title>)/)[0],
          path: adress,
          select: false
        });
        resolve(htmls)
      })
    });
  });
}
