'use client'
import { useRouter } from "next/navigation";
import { faker } from '@faker-js/faker';

const page = () => {
    const route=useRouter();
    const data=route.query;

  return (
    <div>page</div>
  )
}

export default page