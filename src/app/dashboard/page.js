import { Button, Input } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        style={{ maxWidth: "350px", minWidth: "350px" }}
        className="border p-4 rounded-xl"
      >
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-primary mb-4">Login</h1>
          <h1 className="text-sm mb-4">
            This dash board is for the Clients who are working with us.
          </h1>
          <hr />
          <Input
            label="Username"
            placeholder="Enter username provided by admin"
            className="mt-4"
          />
          <Input
            label="Password"
            placeholder="Enter the password provided by admin"
            className="mt-4"
          />
          <div className="mt-8">
            <Button variant="ghost">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
