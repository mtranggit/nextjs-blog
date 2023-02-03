import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => 'Loading...',
})

export { DynamicHeader }