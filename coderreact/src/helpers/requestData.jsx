import MockData from "../data/MOCK_DATA.json"


export  const requestData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MockData);
      }, 1500);
    });
  };