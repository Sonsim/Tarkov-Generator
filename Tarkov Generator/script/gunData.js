const url = 'https://api.tarkov.dev/graphql';
const query = `{
  items(types: preset){
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
}`;

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query})
};

const request = new Request(url, options);

var gunarray = [
  ];

fetch(request)
  .then(response => {
    return response.json();
})
.then(data =>{

  data.data.items.forEach(gun => {
    
    gunarray.push(gun)
  });
})
.catch(error => {
  console.error('Error', error)
});








 
