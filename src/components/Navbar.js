import Select from "react-select";

const Navbar = ({remainingTodos , onFilter}) => {
    const options = [
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'notCompleted', label: 'Not Completed' }
      ];
      const selectStyles = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            width : '8rem' ,
            height : '2rem' ,
            display : 'flex' ,
            outline: 'none',
            borderRadius: '5px' ,
            fontSize: '15px' ,
            border : isFocused ? '2px solid #6d28d9' : '2px solid rgb(208, 208, 208)' , 
            transition: isFocused ? 'all .2s' : 'none',
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        //   const color = chroma(data.color);
          return {
            cursor : 'pointer' ,
            padding : '8px',
            backgroundColor : isFocused ? '#ede9fe' : '#FFF',
            color : isSelected ? '#6d28d9' : '#000',
          };
        },
      };
    return ( 
        <>
            { remainingTodos > 0 ? 
                (
                    <div className="navbar">
                        <div>
                            <span className="value">{remainingTodos}</span>
                            todo{remainingTodos > 1 ? "s" : ""} not completed!
                        </div>
                        <Select options={options} styles={selectStyles} onChange={(e) => onFilter(e)}/>
                    </div> 
                ) 
                : 
                (
                    <div className="navbar">all todos completed!</div>
                ) 
            }
        </>
     );
}
 
export default Navbar;