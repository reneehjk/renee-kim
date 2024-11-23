import logo from "../assets/logo.svg";


function Home () {
    return (
        <div className="max-w-7xl mx-auto select-none flex flex-row flex-wrap space-x-10">
            <div className="flex flex-col justify-start">
                <div className="flex flex-row space-x-10 mt-64 items-end">
                    <div className="text-[64px] self-end">Hello I'm Renee</div>
                    <img src={logo} className="w-[100px] h-[100px]" alt="logo" />
                </div>              
                <div className="text-[24px] text-left mt-10 mb-20">
                    I’m a third year student in Computer Science with a focus in AI and a passion for digital marketing
                </div>               
                <div className="flex flex-col text-blue text-[24px] space-y-5">
                    <a href="/skills">Skills ⬈</a>
                    <a href="/projects">Coding Projects ⬈</a>
                    <a href="/portfolio">Design Portfolio ⬈</a>
                </div>
            </div>
        </div>
    )
}

export default Home;