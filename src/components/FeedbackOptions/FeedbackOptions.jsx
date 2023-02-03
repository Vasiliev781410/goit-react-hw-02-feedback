import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) =>{    
    return (    
    <ul className="feedbackOptions"> 
        {options.map(option =><button onClick={onLeaveFeedback} key={[option+"Btn"]} className={css.feedbackBtn} name={option}>{option}</button>)}  
    </ul>
    )    
}; 
