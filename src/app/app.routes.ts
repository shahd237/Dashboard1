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
import { UpdateStatus } from './pages/update-status/update-status';
import { EditMaintance } from './pages/edit-maintance/edit-maintance';
import { LoyaltyProgram } from './pages/loyalty-program/loyalty-program';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';
import { Marketing } from './pages/marketing/marketing';
import { Devices } from './pages/devices/devices';
import { DeviceDetail } from './pages/device-detail/device-detail';
import { Logout } from './pages/logout/logout';
import { MarketingDetails } from './pages/marketing-details/marketing-details';
import { Notificatioform } from './pages/notificatioform/notificatioform';
import { EditMarketing } from './pages/edit-marketing/edit-marketing';
export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  {
    path: '',
    component: Layout,
    // canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard, data: { title: 'الرئيسية' } },
      {
        path: 'maintenance-requests',
        component: MaintenanceRequests,
        data: { title: 'طلبات الصيانة' },
      },
      // {
      //   path: 'maintenance-requests/:id/assign',
      //   component: TechnicianAssign,
      //   data: { title: 'تكليف فني' },
      // },
      // {
      //   path: 'maintenance-requests/:id/track',
      //   component: TechnicianTracking,
      //   data: { title: 'تتبع الفني' },
      // },
      {
        path: 'maintenance-requests/:id/edit',
        component: EditMaintance,
        data: { title: 'تعديل الطلب' },
      },
      { path: 'clients', component: Clients, data: { title: 'العملاء' } },
      { path: 'clients/:id', component: ClientDetail, data: { title: 'تفاصيل العميل' } },
      {
        path: 'subscription-requests',
        component: SubscriptionRequests,
        data: { title: 'طلبات الاشتراك' },
      },
      {
        path: 'subscription-requests/:id',
        component: SubscriptionDetail,
        data: { title: 'تفاصيل طلب الاشتراك' },
      },
      {
        path: 'update-status',
        component: UpdateStatus,
      },
      { path: 'contacts', component: Contacts, data: { title: 'المحادثات' } },
      { path: 'technicians', component: Technicians, data: { title: 'مراجعة الهواتف' } },
      { path: 'loyalty-program', component: LoyaltyProgram, data: { title: 'برنامج الولاء' } },
      // { path: 'reports', component: Reports, data: { title: 'نتائج الفحص' } },
      { path: 'settings', component: Settings, data: { title: 'الاشعارات' } },
      { path: 'marketing', component: Marketing, data: { title: 'العروض' } },
      {path:'marketing/:id',component:MarketingDetails,data:{title:'تفاصيل العرض'}},
      {path:'edit_marketing/:id',component:EditMarketing,data:{title:'تعديل العرض'}},
      { path: 'devices', component: Devices, data: { title: 'متجر الهواتف' } },
      
      { path: 'devices/:id', component: DeviceDetail, data: { title: 'تفاصيل الهاتف' } },
      { path: 'logout', component: Logout, data: { title: 'تسجيل الخروج' } },
      {path:'notifications',component:Notificatioform,data:{title:'الاشعارات'}},
      {path:'technicians/:id',component:TechnicianTracking,data:{title:'تتبع الفني'}},
    ],
  },
  { path: '**', redirectTo: 'login' },
];
