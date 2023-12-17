var bparray = [];

fetch('https://api.tarkov.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(types: backpack){
      shortName
      gridImageLink
      buyFor {
        price
        currency
        requirements {
          value
          
        }
        vendor{
          name        
        }
      
      }
    }
  }`})
})

    

  .then(r => r.json())
  .then(data => {
    data.data.items.forEach(bp => {
        bparray.push(bp)
    });
  }
  );
