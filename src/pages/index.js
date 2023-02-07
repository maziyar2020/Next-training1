import Link from "next/link";


const Home = () => {
  return (
    <div>
      <Link href="./users" className="main__links">users</Link>
      
      <Link href="./episodes" className="main__links">episodes</Link>

      <Link href="./products" className="main__links">products</Link>

      <Link href="./blogs" className="main__links">blogs</Link>

      <Link href="./profile" className="main__links">profile</Link>

      <Link href="./profile-swr" className="main__links">profile-swr</Link>
    </div>
  );
}

export default Home;