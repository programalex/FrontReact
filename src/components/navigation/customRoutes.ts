import HomePage from '../../pages/Home';
import DevicesPage from '../../pages/Devices';
import Servers from '../../pages/Servers';
import AuditLogsPage from '../../pages/AuditLogs';
import { NewDevice } from '../../pages/NewDevice';
import { DeviceDetails } from '../../pages/DeviceDetails';
import FormAprendisaje from '../../pages/FormAprendisaje';
import { FormularioComponente } from '../FormularioPrueba/FormularioComponente';
const customRoutes = [

  {
    path: '/',
    component: HomePage
  },
  {
    path: '/Devices',
    component: DevicesPage
  },
  {
    path: '/Servers',
    component: Servers
  },
  {
    path: '/AuditLogs',
    component: AuditLogsPage
  },
  {
    path: '/NewDevice',
    component: NewDevice
  },
  {
    path: '/DeviceDetails/:guid',
    component: DeviceDetails
  },
  {
    path: '/FormAprendisaje',
    component: FormularioComponente
  },
];

export default customRoutes;