
import './nav.scss'
import { GiSkills } from 'react-icons/gi';
import { AiFillProject } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';




const Nav = ({ navState, setNavState }) => {
    const navList_items = [
        {id:0, to:'/skills', icon:<GiSkills />, title:'SKILLS', setstate:'skills'},
        {id:1, to:'/project', icon:<AiFillProject />, title:'PROJECT', setstate:'project'},
        {id:2, to:'/about', icon:<BsPersonCircle />, title:'ABOUT', setstate:'about'},
        {id:3, to:'/contact', icon:<MdContactMail />, title:'CONTACT', setstate:'contact'}
    ]

   console.log(navState)
    return (
        <nav className='nav'>
            <ul className='navList_wrap'>
                {navList_items.map((item, index)=>{
                    return (
                        <Link to={item.to}>
                        <li key={item.id} className='navList' style={{opacity:navState === item.setstate? '1':'0.5'}} onClick={()=>{
                            setNavState(item.setstate)
                        }}>{item.icon}<span>{item.title}</span></li>
                    </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav