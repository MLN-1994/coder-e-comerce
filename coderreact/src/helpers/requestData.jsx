import MockData from "../data/MOCK_DATA.json"


export  const requestData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MockData);
      }, 1500);
    });
  };

  export const requestItemId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
          const item = MockData.find((el) => el.id === id)
          if (item) {
            resolve(item)
          }else {
            reject({
              error: "no se encontro"
            })
          }

          resolve(item)
        }, 2000);
    })
  }