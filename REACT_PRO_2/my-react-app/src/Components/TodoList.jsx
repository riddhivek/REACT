import Img1 from "../assets/download.png"
import Img2 from "../assets/grid.svg"
// import { Link } from 'react-router-dom'

const ToDoList = () => {
    return (
        <>
            <div>
                <div className="font-bold">
                    <h1 className="-mb-8 text-2xl">Contacts</h1>

                    <div className=" font-bold  text-start  ">
                        <div className="flex justify-end">
                            <a to="/AddContact" href="#" className="bg-blue-600 rounded-xl mb-5 p-5 text-white "><i class="fa-solid fa-user-plus"></i>Add Contact</a>
                            <a href="#" className="ms-5 bg-blue-600 p-5 mb-5 rounded-lg text-white"><i class="fa-solid fa-list-check"></i></a>
                            <img src={Img2} className="bg-blue-600 ms-5 mb-5 rounded-lg text-white" alt="" />
                            <label htmlFor="Search Contact" className="ms-5 pb-5"></label>
                            <input type="text" id="search" name="Search Contact" placeholder="Search Contact" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="w-full text-left text-gray-700">


                    <tr className="h-12 border border-black">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6 " alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>alen@mail.com</td>
                        <td>Boston,USA</td>
                        <td>+1 202 555 0197</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>linda@mail.com</td>
                        <td>Sydney,Austrelia</td>
                        <td>+1 202 555 0170</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>lila@mail.com</td>
                        <td>Miami,USA</td>
                        <td>+1 202 555 0105</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>andy@mail.com</td>
                        <td>Tokyo,Japan</td>
                        <td>+1 202 555 0194</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>jessy@mail.com</td>
                        <td>Edinburg,UK</td>
                        <td>+1 202 555 0161</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>xavier@mail.com</td>
                        <td>New York,UK</td>
                        <td>+1 202 555 0155</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>susan@mail.com</td>
                        <td>Miami,USA</td>
                        <td>+1 202 555 0118</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>traci@mail.com</td>
                        <td>Edinburg,UK</td>
                        <td>+1 202 555 0135</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>sokot@verizon.net</td>
                        <td>Edinburg,UK</td>
                        <td>+1 202 555 0135</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>sravani@comcast.net</td>
                        <td>Michign,US</td>
                        <td>+1 202 555 0134</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>drhyed@mail.com</td>
                        <td>Entnmo,Spain</td>
                        <td>+1 202 555 0153</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>

                    <tr className="h-12 border border-black">
                        <div className="flex ">
                            <img src={Img1} className="w-6" alt="" />
                            <td className="mt-2">Alen Green</td>
                        </div>
                        <td>maikelnai@optonline.net</td>
                        <td>Lubin,Potand</td>
                        <td>+1 202 555 0115</td>
                        <td>
                            <button className="border-2 border-blue-700 rounded-md w-14 text-blue-700">Edit</button>
                            <button className="border-2 border-red-700 rounded-md w-16 ml-2 text-red-700">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ToDoList