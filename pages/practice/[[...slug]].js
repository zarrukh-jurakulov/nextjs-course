import React from "react";
import { useRouter } from "next/router";

const PracticeDetail = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>PracticeDetail</h1>
    </div>
  );
};

export default PracticeDetail;
