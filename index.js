// Oppgaver med tekstfilen
fetch("./textFile.txt")
  .then((response) => response.json())
  .then((data) => {
    // Hva er adressen til Clementine Bauch? Skriv ut hele adressen.
    const clementineAddress = data.find(
      (user) => user.name === "Clementine Bauch"
    ).address;
    console.log("Adressen til Clementine Bauch:", clementineAddress);

    // Kan du endre telefonnummeret til Leanne Graham? Skriv ut både det gamle og nye telefonnummeret.
    const leanneUser = data.find((user) => user.name === "Leanne Graham");
    const oldPhoneNumber = leanneUser.phone;
    leanneUser.phone = "1-560-196-8310 x54497";
    console.log("Gammelt telefonnummer:", oldPhoneNumber);
    console.log("Nytt telefonnummer:", leanneUser.phone);

    // Hvem eier den eposten Sherwood@rosamond.me? Skriv ut både «name» og «username».
    const sherwoodUser = data.find(
      (user) => user.email === "Sherwood@rosamond.me"
    );
    console.log(
      "Eier av eposten Sherwood@rosamond.me:",
      sherwoodUser.name,
      sherwoodUser.username
    );
  });

// Oppgaver med JSON-filen
fetch("./fotograf.json")
  .then((response) => response.json())
  .then((data) => {
    // Hvor mange bilder har du i fotograf.json?
    const numberOfImages = data.length;
    console.log("Antall bilder i fotograf.json:", numberOfImages);

    // Hvor mange albumer har du i fotograf.json?
    const uniqueAlbumIds = [...new Set(data.map((image) => image.albumId))];
    const numberOfAlbums = uniqueAlbumIds.length;
    console.log("Antall albumer i fotograf.json:", numberOfAlbums);

    // Hva er tittelen til bildet 238?
    const image238Title = data.find((image) => image.id === 238).title;
    console.log("Tittelen til bildet 238:", image238Title);

    // Skriv ut bildet 555 på skjermen.
    const image555 = data.find((image) => image.id === 555);
    console.log("Bilde 555:", image555);
    // Du kan bruke dette objektet (image555) for å gjøre hva du vil på nettsiden.
  });

// Oppgaver med API-en
fetch("https://jsonplaceholder.typicode.com/posts/95")
  .then((response) => response.json())
  .then((post) => {
    // Hva er tittelen til post 95?
    console.log("Tittelen til post 95:", post.title);

    // Kan du skifte «body» til «userId 5»?
    const updatedPost = { ...post, body: "Ny tekst for userId 5" };
    console.log("Oppdatert post 95:", updatedPost);

    // Du kan sende den oppdaterte posten til serveren her hvis du vil.
  });