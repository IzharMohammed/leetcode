
function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost rounded-lg text-xl">Fire Code</a>
                </div>
                <div className="flex-none mr-16">

                {/*     <details className="dropdown">
                        <summary className="btn rounded-lg">open or close</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                            <li ><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details> */}

                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn  rounded-lg">Click</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow mb-2">
                            <li className="btn  rounded-lg mb-2 ">Appearance</li>
                            <li className="btn  rounded-lg ">Sign out</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar