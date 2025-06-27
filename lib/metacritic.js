export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const rawData = await fetch(url, {
    method: "GET",
  });

  const users = await rawData.json();

  return users.map((user) => {
    const { id, name, email, phone, username, website } = user;

    return {
      id,
      email,
      name,
      phone,
      username,
      website,
    };
  });
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
