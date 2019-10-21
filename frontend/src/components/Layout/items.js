import { FaHome, FaTasks, FaWpforms, FaBox } from 'react-icons/fa';

const items = [
  {
    route: '/',
    icon: FaHome,
    label: 'Home',
  },
  {
    route: '/change-expert',
    icon: FaTasks,
    label: 'Trocar Perito',
  },
  {
    route: '/form-example',
    icon: FaWpforms,
    label: 'Exemplo Formulario',
  },
  {
    route: '/material/new',
    icon: FaBox,
    label: 'Materiais',
  },
];

export default items;
