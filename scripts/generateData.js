const fs = require('fs');
const data = {
  jobs: [
    { title: "Website redesign", budget: 2000 },
    { title: "Logo design", budget: 500 },
    { title: "Content writing", budget: 800 },
    { title: "SEO audit", budget: 1200 },
  ],
  users: 12,
};
fs.writeFileSync('seedData.json', JSON.stringify(data, null, 2));
console.log('Seed data generated: seedData.json');
