const Circles = (props) => {
    const colors = ['#2b2b2b', '#ffffff', '#b94a34', '#f5c14c', '#4cc9c4'];  
    return ( 
        <div className="absolute bottom-[0.05rem] left-[0.3rem] flex items-center">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="w-[1rem] h-[1rem] rounded-full"
                    style={{
                        backgroundColor: color,
                        marginLeft: -5,  // Apply overlap to all circles
                        zIndex: colors.length - index,
                        position: "relative",  // Ensure proper stacking
                    }}
                />
                ))}
        </div>
     );
}
 
export default Circles;