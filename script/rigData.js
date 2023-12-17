var rigarray = []

fetch('https://api.tarkov.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(types: rig){
      shortName
      gridImageLink
      weight
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
    data.data.items.forEach(rig => {
        rigarray.push(rig)
    });
  }
  );
