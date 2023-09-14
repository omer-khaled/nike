import Buttton from "./Buttton";

function Updates(){
    return(
        <section className="w-full my-16 justify-between px-3 box-border flex items-center max-lg:flex-col ">
            <h1 className="text-5xl font-bold max-lg:text-3xl max-md:text-xl">
                <span className="lg:block p-0 m-0 mb-2">Sign Up For<span className="text-[#ff6452]">Updates</span></span>
                <span>& Newsletter</span>
            </h1>
            <form className="border border-slate-900 rounded-full p-3 min-w-[40%] flex max-lg:w-full max-lg:mt-7">
                 <input type="text" placeholder="subscribe@nike.com" className="flex-1 focus:ring-0 outline-none me-1"/>
                 <Buttton label="Sign Up" className="bg-[#ff6452] text-white px-6 py-2 rounded-full"/>
            </form>
        </section>
    );
}
export default Updates;