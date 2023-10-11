import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-blue-700 flex justify-between w-screen">
      <img src= {Logo} alt="Logo pokemon" className="min-w-[8vw] h-auto my-[1%] ml-[3%]"/>
      <div className="w-[70%] flex justify-around items-center gap-[5%]">
        <nav className="w-[70%]">
          <ul className="text-white flex gap 12 justify-end gap-[10%] font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="./buycards.html">Buy Cards</a></li>
            <li><a href="./ourblog.html">Our Blog</a></li>
          </ul>
        </nav>
        <button className="btnDark p-[1%] rounded bg-white">Dark Mode</button>
      </div>
    </header>
  );
}

export default Header;