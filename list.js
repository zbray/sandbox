const videos = [
  {
    id: 101,
    title: "abc",
    deleted: false,
  },
  {
    id: 102,
    title: "def",
    deleted: true,
  },
  {
    id: 103,
    title: "ghi",
    deleted: false,
  },
  {
    id: 104,
    title: "jkl",
    deleted: true,
  },
  {
    id: 105,
    title: "mno",
    deleted: false,
  },
  {
    id: 106,
    title: "pqr",
    deleted: false,
  },
];
const ids = videos.map((video) => video.id);

const activeIds = videos
  .filter((video) => video.deleted === false)
  .map((video) => video.title);

console.log(ids, activeIds);
