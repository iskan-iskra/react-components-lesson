function myFetchData(url) {
  let status = "pending";
  let result;
  let suspender = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      status = "success";
      result = data;
    })
    .catch((error) => {
      status = "error";
      result = error;
    });

  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
}

export { myFetchData };
