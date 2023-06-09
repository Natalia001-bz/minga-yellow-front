
import { Link as Anchor,useNavigate } from "react-router-dom"
import { useRef } from "react"

export default function SignIn() {

const navigate = useNavigate ()
const signin = () => {

    let data = {
       email: email.current.value,
        password: password.current.value
    }
    console.log(data)
// // falta funcion onclick con camelcase, en el iput que quiero asignar el evento y el ref{} en los inputs
// navigate('/')


// //     axios.post(url)
// //     .then(res =>navigate('/'))
// // .cath(err=> console.log(err))
console.log(email)
console.log(email.current.value)
console.log(password.current.value)
setTimeout(()=> navigate('/'), 3000)
// console.log(email.current.value) el ref devuelve un objeto current con una unica propiedad


}

const email = useRef()
const password = useRef()



    return (
        <main className="flex w-full min-h-screen items-center justify-between overflow-x-hidden mb-20 ">
            <img className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover" src="/public/assets/images/signIn.png" alt="signin" />
            <div className="flex flex-col mt-[6%] md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%]">
                <div className="flex items-center justify-center ml-10 ">
                    <img className=' w-[100px] h-[40px] mt-8 mr-2  lg:flex ' src="/public/assets/images/Minga.png" alt='logo'></img>
                    <img className=' w-[30px]  h-[25px] mt-8 mr-4 lg:mr-10  ' src="/public/assets/images/kanji.png" alt='logo2'></img>
                </div>
                <p className="font-semibold text-[32px] text-center">Welcome <span className="text-orange">back</span>!</p>
                <p className="font-semibold text-[14px]  text-center p-2">Discover manga and manwha, track your progress, have fun, read manga.</p>
                <form className="flex flex-col my-[2px]">
                    <input  ref={email} className="w-[255px] md:w-[300px] lg:w-[3550px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="email" id="email" placeholder="Email" />
                    <input ref={password} className="w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="password" name="password" id="password" placeholder="Password" />
                    <input className="w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[55px] p-2 my-[8px] xl:my-[12px] text-xl text-white rounded-lg bg-orange" type="button" value="Sign in" onClick={signin} />
                    <div className="">
                    <input className="font-poppins  relative  w-[255px] md:w-[300px] lg:w-[355px] xl:w-[440px] h-[48px] p-2 pl-10 my-[10px] text-[14px] rounded-lg border-2 border-[#1F1F1F]" type="email" name="cuenta" id="google" placeholder=" sign in whit google" />
                    
                        <img className="absolute -mt-9 ml-6" src="/public/assets/images/Google.png" alt="" />
                    
                    </div>
                </form>
                <p className="font-semibold text-[14px] mt-[10px] text-center p-2" >You don't have an account yet?    <Anchor to= '/register' className="text-orange">Register</Anchor>  </p>
                <p className="font-semibold text-[14px] text-center p-2">Go back to <Anchor to='/' className="text-orange hover:text-black">Home Page</Anchor></p>
            </div>
        </main>


    )

}