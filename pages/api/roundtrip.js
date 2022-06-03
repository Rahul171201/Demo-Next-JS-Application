// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let arr = [];
for (let i = 0; i < 10000; i++) {
  const obj = {
    id: i,
    name: "Sprinklr",
    location: "Gurgaon",
    isGood: true,
  };
  arr.push(obj);
}

export default function handler(req, res) {
  res.send(arr);
}
