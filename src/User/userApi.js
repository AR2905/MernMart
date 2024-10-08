export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://mern-mart-backend.vercel.app/orders/own/') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://mern-mart-backend.vercel.app/users/own') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://mern-mart-backend.vercel.app/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

