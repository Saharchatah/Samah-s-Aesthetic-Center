const YearCombo = ({birthyear}) => {
    const onYearChange = e => {
        console.log("selected value:", e.target.value);
        birthyear=e.target.value;
        console.log("birthyear value:", birthyear);
    };
    const getYearDropList = () => {
        const year = new Date().getFullYear();
      return (
          Array.from( new Array(60), (v,i) =>
            <option key={i} value={year-i}>{year-i} - age : {i}</option>
        )
      );
    };

    
      return (
        <div>
          <select onChange={onYearChange}>
            {getYearDropList()}
          </select>
        </div>
      );
}
 
export default YearCombo;