import type { Friend } from "@/lib/types";

/*
  Aarya Narula - https://github.com/radioblahaj
  Alex Deforest - https://defo.one
  Aram Shiva - https://aram.sh/
  Ben Dixon - https://malted.dev
  Cisco Wallace-Hurtado - https://jaspermayone.com/404
  Deven Jadhav - https://devenjadhav.com/
  Ian Madden - https://github.com/YodaLightsabr
  Kieran Klukas - https://kieranklukas.com/
  Luke Oldenburg - https://github.com/Luke-Oldenburg
  Manitej Boorgu - https://github.com/techpixel
  Milo Heintz - https://www.instagram.com/milo_heintz
  Reese Armstrong - https://reeseric.ci/
  Rhys Panopio - https://www.linkedin.com/in/rhys-panopio/
  Robert Goll - https://rgoll.com/
  Ryan Di Lorenzo - https://github.com/LimesKey
  Ryan Rudes - https://ryanrudes.com/
  Samuel Fernandez - https://sfernandez.dev/
  Sam Poder - https://sampoder.com/
  Ruien Luo - https://rluo.dev/
  Samantha Miel - https://www.instagram.com/cirque_du_samantha/
  Théo Reid - https://www.instagram.com/theointheair/
*/

const friends: Friend[] = [
  {
    name: "Arav Narula",
    bio: "INSERT BIO SOON",
    link: "https://github.com/radioblahaj",
  },
  {
    name: "Alex Deforest",
    bio: "INSERT BIO SOON",
    link: "https://defo.one",
  },
  {
    name: "Aram Shiva",
    bio: "INSERT BIO SOON",
    link: "https://aram.sh/",
  },
  {
    name: "Ben Dixon",
    bio: "INSERT BIO SOON",
    link: "https://malted.dev",
  },
  {
    name: "Cisco Wallace-Hurtado",
    bio: "INSERT BIO SOON",
    link: "https://jaspermayone.com/404",
  },
  {
    name: "Deven Jadhav",
    bio: "INSERT BIO SOON",
    link: "https://devenjadhav.com/",
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
    name: "Luke Oldenburg",
    bio: "INSERT BIO SOON",
    link: "https://github.com/Luke-Oldenburg",
  },
  {
    name: "Manitej Boorgu",
    bio: "INSERT BIO SOON",
    link: "https://github.com/techpixel",
  },
  {
    name: "Milo Heintz",
    bio: "INSERT BIO SOON",
    link: "https://www.instagram.com/milo_heintz",
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
    name: "Robert Goll",
    bio: "INSERT BIO SOON",
    link: "https://rgoll.com/",
  },
  {
    name: "Ryan Di Lorenzo",
    bio: "INSERT BIO SOON",
    link: "https://github.com/LimesKey",
  },
  {
    name: "Ryan Rudes",
    bio: "INSERT BIO SOON",
    link: "https://ryanrudes.com/",
  },
  {
    name: "Samuel Fernandez",
    bio: "INSERT BIO SOON",
    link: "https://sfernandez.dev/",
  },
  {
    name: "Sam Poder",
    bio: "INSERT BIO SOON",
    link: "https://sampoder.com/",
  },
  {
    name: "Samantha Miel",
    bio: "INSERT BIO SOON",
    link: "https://www.instagram.com/cirque_du_samantha/",
  },
  {
    name: "Théo Reid",
    bio: "INSERT BIO SOON",
    link: "https://www.instagram.com/theointheair/",
  },
  {
    name: "Ruien Luo",
    bio: "INSERT BIO SOON",
    link: "https://rluo.dev/",
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
