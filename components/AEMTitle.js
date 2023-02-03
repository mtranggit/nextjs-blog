import dynamic from "next/dynamic";

const  AEMTitle =  dynamic(() => import('../components/title'), {
  loading: () => 'Loading...',
}) ;

export { AEMTitle }