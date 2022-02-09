import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-slate-400 shadow-xl w-full p-4 mb-16">
            <div className="container mx-auto flex justify-between items-center px-24">
                <img src={logo} className="w-36 h-14" alt="Logo" />
                <h3 className="text-green-900 text-2xl font-bold">Breaking Bad App</h3>
            </div>
        </nav>
    )
}

export default Navbar;
