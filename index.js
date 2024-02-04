// txt file

fetch("./textFile.txt")
  .then((response) => response.json())
  .then((data) => {
    // Opg 1
    var clementineAddress = data.find(
      (user) => user.name === "Clementine Bauch"
    ).address;
    console.log("Clementine Bauch's address:", clementineAddress);

    // Opg 2
    var leanneUser = data.find((user) => user.name === "Leanne Graham");
    var oldPhoneNumber = leanneUser.phone;
    leanneUser.phone = "1-560-196-8310 x54497";
    console.log("Old phone number:", oldPhoneNumber);
    console.log("New phone number:", leanneUser.phone);

    // Opg 3
    var sherwoodUser = data.find(
      (user) => user.email === "Sherwood@rosamond.me"
    );
    console.log(
      "The owner of Sherwood@rosamond.me:",
      sherwoodUser.name,
      sherwoodUser.username
    );
  });

// JSON file

fetch("./fotograf.json")
  .then((response) => response.json())
  .then((data) => {
    // Opg 1
    var numberOfImages = data.length;
    console.log("Number of photos in fotograf.json:", numberOfImages);

    // Opg 2
    var uniqueAlbumIds = [...new Set(data.map((image) => image.albumId))];
    var numberOfAlbums = uniqueAlbumIds.length;
    console.log("Number of albums in fotograf.json:", numberOfAlbums);

    // Opg 3
    var image238Title = data.find((image) => image.id === 238).title;
    console.log("Img 238's title:", image238Title);

   // Opg 4: Jeg får ikke denne helt til å funke, får ikke bildet til å displaye 😭
    var image555 = data.find((image) => image.id === 555);

    if (image555) {
    
      var imgElement = document.createElement("img");
      imgElement.src = image555.url;
      document.body.appendChild(imgElement);

  } 

  });

// API

fetch("https://jsonplaceholder.typicode.com/posts/95")
  .then((response) => response.json())
  .then((post) => {
    // Opg 1
    console.log("post 95's title:", post.title);

    // Opg 2
    var updatedPost = { ...post, body: "New text for userId 5" };
    console.log("Updated post 95:", updatedPost);

    
  });