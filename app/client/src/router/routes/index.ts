import type { AppRouteConfig } from '../types'
import AdminRoutes from './modules/admin/index'
import { PageNotFoundRoute } from './modules/error'
import ScreenRoute from './modules/screen'

const RootRoute: AppRouteConfig = {
  path: '/',
  name: 'Root',
  redirect: '/login'
}

const LoginRoute: AppRouteConfig = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: 'menu.login',
    requiresAuth: false
  }
}

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  ScreenRoute,
  ...AdminRoutes,
  PageNotFoundRoute
]
