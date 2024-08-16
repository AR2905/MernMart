export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://mern-mart-backend.vercel.app/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Include credentials
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://mern-mart-backend.vercel.app/auth/login', {
  method: 'POST',
  body: JSON.stringify(loginInfo),
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
});
      if (response.ok) {
        const data = await response.json();
        console.log('Login response:', data);
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://mern-mart-backend.vercel.app/auth/check', {
        credentials: 'include', // Include credentials
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://mern-mart-backend.vercel.app/auth/logout', {
        credentials: 'include', // Include credentials
      });
      if (response.ok) {
        resolve({ data: 'success' });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
