import { useNavigate } from 'react-router-dom';

export const Button = ({nameRoute = "#"}) => {
  const navigate = useNavigate();

  return (
    <a 
      className={`bg-rojo cursor-pointer font-bold inline-block p-1 rounded-md transition-colors hover:bg-rojo/10`}      
      onClick={() => navigate(`/PORTAFOLIO/${nameRoute}`)}
      >More information <span className=''>&rarr;</span>
    </a>
  )
}
