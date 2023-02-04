import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="./users">users</Link>
      <hr/>
      <Link href="./episodes">episodes</Link>
    </div>
  );
}

export default Home;