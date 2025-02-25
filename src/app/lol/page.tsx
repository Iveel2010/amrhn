"use client";

const page = () => {
  const createUser = async () => {
    const lol = {
      email: "alksdjalkdsh",
      userName: "sjkdhflsdkf",
      password: "akjhsdakjds",
    };
    const resJSON = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(lol),
    });
    const data = resJSON.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={createUser}>hi</button>
    </div>
  );
};
export default page;
