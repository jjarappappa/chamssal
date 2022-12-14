import { NextPage } from "next";
import Header from "../../../components/layout/header";
import { useRouter } from "next/router";

const Write: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

  return (
    <>
        <Header/>
    </>
  );
};
export default Write;
