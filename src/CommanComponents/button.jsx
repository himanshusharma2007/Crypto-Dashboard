const Button = ({text,icon}) => {
  return (
   <button className="flex bg-darkPurple rounded-md p-1 pl-3 pr-3  justify-center items-center cursor-pointer text-white">
    <div className="icon mr-2 ">
    {icon}
    </div>
    <div className="text ">{text}</div>
     
   </button>
  )
}

export default Button
