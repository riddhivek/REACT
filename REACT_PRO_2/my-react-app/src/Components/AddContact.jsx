const Addcontact = () => {
    return (
        <>
            <div>
                <div className="text-2xl">
                    <h1>Contact</h1>
                </div>
                <form action="Contact">
                    <div className="font-bold">
                        <div className=" h-8 w-96 border-2 border-black ">
                            <label htmlFor="fname" >First Name : </label>
                            <input type="text" id="fname" placeholder="First Name" />
                        </div>

                        <div className="h-8 w-96 border-2 border-black">
                            <label htmlFor="sname">Second Name : </label>
                            <input type="text" placeholder="Second Name" />
                        </div>

                        <div className="h-8 w-96 border-2 border-black">
                            <label htmlFor="sname">Contact No : </label>
                            <input type="text" placeholder="Contact Name" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addcontact