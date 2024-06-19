import { useParams } from 'react-router-dom';
import locationsData from '../../locations.json';

export const Location = () => {
  const { id } = useParams();

  const location = locationsData.locations.find((location) => location.id === id);

  return (
    <div>
      <h1>{location?.name}</h1>
      <p>{location?.description}</p>
    </div>
  );
};
