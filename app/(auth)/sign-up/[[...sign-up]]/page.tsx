import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUp />
        </div>
    )
};

export default Page;