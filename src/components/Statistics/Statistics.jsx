import css from './Statistics.module.css';

export const Statistics = (props) =>{ 
    const entriesProps = Object.entries(props);  
    return (    
    <ul className={css.statList}>  
        {entriesProps.map(option =><li key={option[0]} className={css.statItem}>{option[0]}: {option[1]}</li>)}
    </ul> 
    )
}; 
