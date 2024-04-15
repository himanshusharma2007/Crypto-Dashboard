const BottomContainer = ({ labelText, divText, divStyle, labelStyle,image }) => {
    return (
      <div style={divStyle} className="z-10 bottomContainer relative  flex flex-col justify-center w-full lg:w-1/2  pt-3 pl-3 pb-4 rounded-md shadow-md overflow-hidden">
        <div style={image} className="bg-image absolute w-full h-full -top-8 -right-56 rotate-12 z-20"></div>
        <div style={labelStyle} className="label w-fit rounded-xl p-1 cursor-pointer text-sm ">{labelText}</div>
        <div className="text-md  lg:text-lg font-semibold z-40">{divText}</div>
      </div>
    );
  };
  
  export default BottomContainer;
  