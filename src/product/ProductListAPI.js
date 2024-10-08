
export function fetchProductByID(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-mart-backend.vercel.app/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://mern-mart-backend.vercel.app/products/', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      'https://mern-mart-backend.vercel.app/products/' + update.id,
      {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


export function fetchProductsByFilters(filter, sort, pagination ,admin) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  // PAGINATION ------>  _page=1&_limit=10
  // SERVER SHOULD FILTER DELETED
  
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  
  if(admin){
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "https://mern-mart-backend.vercel.app/products?"+queryString
    );

    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count')
    // const totalItems = 100;

    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-mart-backend.vercel.app/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-mart-backend.vercel.app/brands");
    const data = await response.json();
    resolve({ data });
  });
}
