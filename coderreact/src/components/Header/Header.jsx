import CartWidget from "./CartWidget"
const Header = () => {
    
    return (
        

        <div className="w-full bg-yellow-300 p-4 flex justify-around shadow-md">
            <div className="">
                <h1 className="text-3xl font-bold tracking-[.25em]">Mercado Flaco</h1>
            </div>
            <nav className="flex items-center">
                <ul className="flex items-center gap-4 ">
                    <li className="font-bold cursor-pointer text-lg">Login</li>
                    <li className="font-bold cursor-pointer text-lg">Sign up</li>
                </ul>
            </nav>
            <div className="hover:animate-bounce">
                <CartWidget />
            </div>
            
        </div>
    )
}
export default Header