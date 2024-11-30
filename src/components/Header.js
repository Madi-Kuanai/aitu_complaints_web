import img from "../icons/icon.svg"

export function Header() {
    return (<header className="App-header mb-10 size-1/3 flex items-center justify-center">
        {<img src={img} className="icon" alt="icon"/>}
    </header>)
}