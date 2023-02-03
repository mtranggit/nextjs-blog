import dynamic from "next/dynamic";

const  AEMImage =  dynamic(() => import('../components/image'), {
  loading: () => 'Loading...',
}) ;

export { AEMImage }