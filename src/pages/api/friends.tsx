type Friend = {
  name: string;
  bio: string;
  // image_name: string;
  link: string;
};

/*
  Ben Dixon - https://malted.dev
  Aram Shiva - https://aram.sh/
  Sam Poder - https://sampoder.com/
  Deven Jadhav - https://devenjadhav.com/
  Aarya Narula - https://github.com/radioblahaj
  Alex Deforest - https://defo.one
  Manitej Boorgu - https://github.com/techpixel
  Ruien Luo - https://rluo.dev/
  Reese Armstrong - https://reeseric.ci/
  Rhys Panopio - https://www.linkedin.com/in/rhys-panopio/
  Ian Madden - https://github.com/YodaLightsabr
  Kieran Klukas - https://kieranklukas.com/
  Ryan Di Lorenzo - https://github.com/LimesKey
  Samuel Fernandez - https://sfernandez.dev/
  Luke Oldenburg - https://github.com/Luke-Oldenburg
  Ryan Rudes - https://ryanrudes.com/
*/

const friends: Friend[] = [
  {
    name: "Ben Dixon",
    bio: "INSERT BIO SOON",
    link: "https://malted.dev",
  },
  {
    name: "Aram Shiva",
    bio: "INSERT BIO SOON",
    link: "https://aram.sh/",
  },
  {
    name: "Sam Poder",
    bio: "INSERT BIO SOON",
    link: "https://sampoder.com/",
  },
  {
    name: "Deven Jadhav",
    bio: "INSERT BIO SOON",
    link: "https://devenjadhav.com/",
  },
  {
    name: "Aarya Narula",
    bio: "INSERT BIO SOON",
    link: "https://github.com/radioblahaj",
  },
  {
    name: "Alex Deforest",
    bio: "INSERT BIO SOON",
    link: "https://defo.one",
  },
  {
    name: "Manitej Boorgu",
    bio: "INSERT BIO SOON",
    link: "https://github.com/techpixel",
  },
  {
    name: "Ruien Luo",
    bio: "INSERT BIO SOON",
    link: "https://rluo.dev/",
  },
  {
    name: "Reese Armstrong",
    bio: "INSERT BIO SOON",
    link: "https://reeseric.ci/",
  },
  {
    name: "Rhys Panopio",
    bio: "INSERT BIO SOON",
    link: "https://www.linkedin.com/in/rhys-panopio/",
  },
  {
    name: "Ian Madden",
    bio: "INSERT BIO SOON",
    link: "https://github.com/YodaLightsabr",
  },
  {
    name: "Kieran Klukas",
    bio: "INSERT BIO SOON",
    link: "https://kieranklukas.com/",
  },
  {
    name: "Ryan Di Lorenzo",
    bio: "INSERT BIO SOON",
    link: "https://github.com/LimesKey",
  },
  {
    name: "Samuel Fernandez",
    bio: "INSERT BIO SOON",
    link: "https://sfernandez.dev/",
  },
  {
    name: "Luke Oldenburg",
    bio: "INSERT BIO SOON",
    link: "https://github.com/Luke-Oldenburg",
  },
  {
    name: "Ryan Rudes",
    bio: "INSERT BIO SOON",
    link: "https://ryanrudes.com/",
  },
];

export default function handler(req: any, res: any) {
  let rjson = friends;

  // modify the json to include a "file_name" property. this should be the name of the person with spaces replaced with underscores and all lowercase. Add .jpg to the end of the file name
  let mjson = rjson.map((friend) => {
    let file_name = friend.name.replace(/ /g, "_").toLowerCase() + ".png";
    return { ...friend, file_name };
  });

  res.status(200).json(mjson);
}
