import {useDispatch} from 'react-redux'
import { MdPostAdd } from "react-icons/md"
import { modalFunc } from '../redux/modalSlice'


const Header = () => {
 const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
            <div className="text-3xl">REACT UYGULAMA</div>
            <div className="flex items-center gap-5">
                <div >
                    <select className="h-10 rounded-lg">
                        <option value="asc">Artan</option>
                        <option value="desc">Azalan</option>
                    </select>
                </div>
                <div>
                    <input className="h-10 rounded-lg px-4" type="text" placeholder="arama yapınız" />
                </div>
                <div onClick={()=> dispatch(modalFunc())}
                 className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    <MdPostAdd size={24} />
                </div>
            </div>
        </div>
    )
}

export default Header