// import antv from '@/page/antv.vue'
import example from '@/page/example.vue'
import X6 from '@/page/antv-X6.vue'
import swim from '@/page/swim.vue'
import antv from '@/page/antv-G6.vue'
import userControl from '@/page/userControl.vue'
import pointTable from '@/page/pointTable.vue'
import attackFlow from '@/page/attackFlow.vue'
//公共路由
export const publicRoutes = [{
  path: '/login',
  name: 'operatorLogin',
  component: () => import('@/page/operatorLogin.vue')
}]
//运维人员路由
export const operatorRoutes = [{
    title: '点表',
    path: '/point-table',
    name: 'pointTable',
    component: pointTable
  },
  {
    title: '流程攻击',
    path: '/attack-flow',
    name: 'attackFlow',
    component: attackFlow
  },
  {
    title: '防护审计',
    path: '/user-control',
    name: 'userControl',
    component: userControl
  }
]
//客户路由
export const userRoutes = [{
    path: '/',
    title: 'G6',
    name: 'antv-G6',
    component: antv
  },
  {
    path: '/X6',
    title: 'X6',
    name: 'antv-X6',
    component: X6
  },
  {
    path: '/swim',
    title: 'swim',
    name: 'antv-swim',
    component: swim
  },
  {
    path: '/example',
    title: 'example',
    name: 'example',
    component: example
  }

]