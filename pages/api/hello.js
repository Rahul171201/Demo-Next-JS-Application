// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const arr = [];
for (let i = 0; i < 25; i++) {
  arr.push({
    name: "Rahul The " + (i + 1),
    roll: i,
    subject: "maths",
  });
}

export default function handler(req, res) {
  res.send(arr);
}
