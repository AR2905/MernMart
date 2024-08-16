export function createOrder(order) {

  return new Promise(async (resolve) => {
    const response = await fetch('https://mern-mart-backend.vercel.app/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    
    resolve({ data });
  });
}



export function updateOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://mern-mart-backend.vercel.app/orders/'+order.id, 
      {
        method : "PATCH",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(order)
      }
    ) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchAllOrders( sort, pagination) {
  let queryString = '';

  for (let key in sort) {
   queryString += `${key}=${sort[key]}&`;
 }
   for (let key in pagination) {
     queryString += `${key}=${pagination[key]}&`;
   }
 
   return new Promise(async (resolve) => {
     //TODO: we will not hard-code server URL here
     const response = await fetch(
       'https://mern-mart-backend.vercel.app/orders?' + queryString
     );
     const data = await response.json();
     const totalOrders = await response.headers.get('X-Total-Count');
     resolve({ data: { orders: data, totalOrders: +totalOrders } });
   });
}