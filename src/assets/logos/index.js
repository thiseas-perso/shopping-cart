function importAll(data) {
  let images = {};
  data.keys().map((item) => {
    images[item.replace("./", "")] = data(item);
  });
  return images;
}

const logos = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default logos;
