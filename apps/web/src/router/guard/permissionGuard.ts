import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import {
  addAsyncRoutes,
  checkAccessToken,
  isRequiresAuthRoute
} from '@/router/helper'
import { BConsole } from '@/utils/console'
import { ConsoleTypeEnum } from '@/enums/consoleEnum'

export const createPermissionGuard = (router: Router) => {
  BConsole.SUCCESS(ConsoleTypeEnum.ROUTER, 'create permission guard')
  router.beforeEach(async (to, from, next) => {
    const { invalid, setUserInfo, reLogin } = $(useUserStore())
    const menuStore = useMenuStore()
    if (isRequiresAuthRoute(to)) {
      if (!checkAccessToken()) {
        console.error('token expires')
        await reLogin()
        await addAsyncRoutes()
        next(to.fullPath)
      } else {
        invalid && (await setUserInfo())
        if (!menuStore.hasRoutes) {
          await addAsyncRoutes()
          next(to.fullPath)
        } else {
          next()
        }
      }
    } else {
      next()
    }
  })
}
