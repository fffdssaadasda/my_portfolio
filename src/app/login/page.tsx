"use client"
import Notifecation from "@/components/Notifecation"
import WrapperSections from "@/components/WrapperSections"
import google from '@/imgs/2993685_brand_brands_google_logo_logos_icon.png'
import facebook from '@/imgs/5296499_fb_facebook_facebook logo_icon.png'
import axios, { Axios, AxiosError, AxiosResponse } from "axios"
import { signIn } from "next-auth/react"
import { FormEventHandler, useState } from "react"
// Login =>  https://firsttestapp-tb73wp5t.b4a.run/users/login
const page = () => {

    // https://firsttestapp-tb73wp5t.b4a.run
    const URL_LOGIN = `http://127.0.0.1:5001/users/login`
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const handelSubmit: any = async (e: SubmitEvent) => {
        e.preventDefault()
        try {
            const { data }: AxiosResponse = await axios(URL_LOGIN, {
                method: "POST",
                data: {
                    email: username,
                    password
                }
            })
            console.log(data);
        } catch (err: any) {
            setMessage(err?.response?.data.err)
        }
        // if (!data) {
        // }
    }
    return (
        // yosef_3r1@aa.com
        <section className="sm:w-[50%] mx-auto">
            <WrapperSections isFull>
                {message.length > 0 &&
                    <Notifecation type="error" message={message} />
                }
                {/* {message} */}
                <h3 className="text-[30px] font-semibold text-center">Login</h3>
                <section className="px-[3vw] py-[15px]">
                    <form onSubmit={handelSubmit}>
                        <WrapperSections isFull>
                            <input required type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full " />
                        </WrapperSections>
                        <section className="mt-[10px]">
                            <WrapperSections isFull>
                                <input required type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full " />
                            </WrapperSections>
                        </section>
                        <button className="bg-black text-white block w-full mt-[15px] text-[22px] rounded-[10px] p-[10px]" type="submit">Login</button>
                    </form>
                    <section className="flex gap-3 mt-[15px] items-center justify-between">
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#bbb] to-white "></div>
                        <div className="flex-1 text-center text-[22px]">Or Signin with</div>
                        <div className="flex-1 h-[2px] bg-gradient-to-l from-[#bbb] to-white "></div>
                    </section>
                    <section className="flex items-center justify-center mt-[15px] gap-[5px]">
                        <div onClick={() => signIn('google', { redirectTo: "/" })} className="flex px-[10px] items-center transition-all duration-[300ms] rounded-[8px] gap-2 bg-white hover:bg-[#eee] cursor-pointer">
                            <img src={google.src} className="size-[50px] p-[10px] flex items-center justify-center" loading="lazy" alt="" />
                            <span>Sign In With Google</span>
                        </div>
                        {/* <span className="size-[50px] transition-all duration-[300ms] p-[10px] rounded-[8px] bg-white hover:bg-[#eee] cursor-pointer flex items-center justify-center">
                            <img src={facebook.src} className="size-full" loading="lazy" alt="" />
                        </span> */}
                    </section>
                    {/* <span className="size-[50px] flex items-center justify-center"></span> */}
                </section>
            </WrapperSections>
        </section>
    )
}

export default page