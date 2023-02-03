import dynamic from "next/dynamic";

const  AEMText =  dynamic(() => import('../components/text'), {
  loading: () => 'Loading...',
}) ;

export { AEMText }