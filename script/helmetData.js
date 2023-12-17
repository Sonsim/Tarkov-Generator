var helmetarray = []

fetch('https://api.tarkov.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(types: helmet){
      shortName
      gridImageLink
      blocksHeadphones
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
    data.data.items.forEach(helmet => {
        helmetarray.push(helmet)
    });
  }
  );

