export const Section = ({title,children}) =>(
    <section className="section">
    {title && <h2 className="title">{title}</h2>}        
        {children}       
    </section>   
);