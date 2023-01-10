import { Fragment, useState } from "react";
import { MdSearch, MdMenu, MdFacebook, MdExpandMore } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import classNames from "classnames";
import CircleIconButton from "../common/button/circleIconButton";
import SocialButton from "../common/button/socialButton";
import Drawer from '../drawer';
import HeaderMobile from "./headerMobile";
const listItems = [{ title: 'الرئيسية' }, { title: 'افلام', subItems: ['افلام اجنبي', 'سلاسل افلام كاملة', 'افلام هندي'] }, { title: 'مسلسلات', subItems: ['افلام اجنبي', 'سلاسل افلام كاملة', 'افلام هندي'] }]

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='h-[70px] px-2 flex items-center justify-between bg-primary'>
      <CircleIconButton handleClick={() => setOpen(true)} className='lg:hidden' > <MdMenu /></CircleIconButton>
      <h1 className="text-white font-bold min-w-[240px] mx-3">CImA4U</h1>
      <nav className="mx-auto block flex-1 hidden lg:block flex items-center h-full">
        <ul className="text-white text-right text-base font-bold relative flex items-center h-full">
          {listItems.map((item, index) => (
            <Fragment key={item.title}>
              <li className={classNames("cursor-pointer px-6 group flex items-center h-full", { " flex items-center justify-between relative": item?.subItems?.length > 0 })} >
                <a href="#">{item.title}</a>
                {item?.subItems?.length > 0 && <MdExpandMore className='text-2xl group-hover:rotate-180' />}
                {item?.subItems?.length > 0  && 
                <div className="w-full hidden group-hover:block absolute right-1/2 translate-x-1/2 top-[70px] min-w-[210px]  before:left-1/2 before:-top-2 before:absolute before:w-0 before:h-0 before:border-x-8 before:border-b-8 before:border-b-subMenu before:border-x-transparent">

                  <ul className="text-white bg-subMenu rounded-md relative">
                    {item.subItems?.map(subItem => (<li key={subItem} className="border-b border-b-primaryBorder py-[10px] px-[20px] last:border-0">{subItem}</li>))}
                  </ul>
                </div>}
              </li>

            </Fragment>
          )


          )}



        </ul>
      </nav>
      <div className="hidden lg:flex items-center justify-between w-24 px-1">
        <SocialButton className="!bg-twitter"> <BsTwitter /></SocialButton>
        <SocialButton className="!bg-facebook"><MdFacebook /></SocialButton>
      </div>
      <CircleIconButton> <MdSearch /></CircleIconButton>
      <Drawer open={open} setOpen={setOpen}> <HeaderMobile setOpen={setOpen} className='lg:hidden' /></Drawer>
    </header>
  )
}

export default Header
