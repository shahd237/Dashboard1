import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Layout } from './layout/layout';
import { Login } from './auth/login/login';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Dashboard } from './dashboard/dashboard';
import { MaintenanceRequests } from './pages/maintenance-requests/maintenance-requests';
import { Clients } from './pages/clients/clients';
import { ClientDetail } from './pages/client-detail/client-detail';
import { SubscriptionRequests } from './pages/subscription-requests/subscription-requests';
import { SubscriptionDetail } from './pages/subscription-detail/subscription-detail';
import { Contacts } from './pages/contacts/contacts';
import { Technicians } from './pages/technicians/technicians';
import { TechnicianAssign } from './pages/technician-assign/technician-assign';
import { TechnicianTracking } from './pages/technician-tracking/technician-tracking';
import { LoyaltyProgram } from './pages/loyalty-program/loyalty-program';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';
import { Marketing } from './pages/marketing/marketing';
import { Devices } from './pages/devices/devices';
import { DeviceDetail } from './pages/device-detail/device-detail';
import { Logout } from './pages/logout/logout';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  {
    path: '',
    component: Layout,
    // canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',              component: Dashboard,            data: { title: 'الرئيسية' } },
      { path: 'maintenance-requests',   component: MaintenanceRequests,  data: { title: 'إدارة الطلبات' } },
      { path: 'maintenance-requests/:id/assign', component: TechnicianAssign, data: { title: 'تكليف فني' } },
      { path: 'maintenance-requests/:id/track',  component: TechnicianTracking, data: { title: 'تتبع الفني' } },
      { path: 'clients',               component: Clients,               data: { title: 'العملاء' } },
      { path: 'clients/:id',           component: ClientDetail,          data: { title: 'تفاصيل العميل' } },
      { path: 'subscription-requests', component: SubscriptionRequests,  data: { title: 'طلبات الاشتراك' } },
      { path: 'subscription-requests/:id', component: SubscriptionDetail, data: { title: 'تفاصيل طلب الاشتراك' } },
      { path: 'contacts',              component: Contacts,              data: { title: 'المحادثات' } },
      { path: 'technicians',           component: Technicians,           data: { title: 'مراجعة الهواتف' } },
      { path: 'loyalty-program',       component: LoyaltyProgram,        data: { title: 'برنامج الولاء' } },
      { path: 'reports',               component: Reports,               data: { title: 'نتائج الفحص' } },
      { path: 'settings',              component: Settings,              data: { title: 'الاشعارات' } },
      { path: 'marketing',             component: Marketing,             data: { title: 'العروض' } },
      { path: 'devices',               component: Devices,               data: { title: 'متجر الهواتف' } },
      { path: 'devices/:id',           component: DeviceDetail,          data: { title: 'تفاصيل الهاتف' } },
      { path: 'logout',                component: Logout,                data: { title: 'تسجيل الخروج' } },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
