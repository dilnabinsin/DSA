interface UserRequest {
  name: string;
  age: number;
}

interface UserResponse {
  status: string;
  data: UserRequest;
}

function createUser(user: UserRequest): UserResponse {
  return {
    status: "success",
    data: user
  };
}

const user: UserRequest = {
  name: "Dilna",
  age: 25
};

const response = createUser(user);
console.log(response);
