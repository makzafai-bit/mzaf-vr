(()=>{var fp=0,tu=1,dp=2;var $f=1,Hl=2,Oi=3,$n=0,mn=1,yn=2;var es=0,yr=1,nu=2,iu=3,su=4,pp=5,Ts=100,mp=101,gp=102,ru=103,ou=104,_p=200,xp=201,yp=202,vp=203,ol=204,al=205,Mp=206,bp=207,wp=208,Sp=209,Ep=210,Tp=211,Ap=212,Rp=213,Cp=214,Lp=0,Pp=1,Ip=2,ya=3,Np=4,Dp=5,Up=6,Op=7,Ya=0,Fp=1,Bp=2,ts=0,kp=1,zp=2,Hp=3,Vl=4,Vp=5,Gp=6,au="attached",Wp="detached",Kf=300,br=301,wr=302,Is=303,cl=304,ja=306,vn=1e3,$t=1001,lo=1002,nn=1003,va=1004;var so=1005;var dn=1006,Gl=1007;var di=1008;var ns=1009,Xp=1010,qp=1011,Wl=1012,Zf=1013,Ji=1014,Bi=1015,ho=1016,Jf=1017,Qf=1018,Cs=1020,Yp=1021,Yn=1023,jp=1024,$p=1025,Ls=1026,Sr=1027,Kp=1028,ed=1029,Zp=1030,td=1031,nd=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,cu=35840,lu=35841,hu=35842,uu=35843,id=36196,fu=37492,du=37496,pu=37808,mu=37809,gu=37810,_u=37811,xu=37812,yu=37813,vu=37814,Mu=37815,bu=37816,wu=37817,Su=37818,Eu=37819,Tu=37820,Au=37821,Lc=36492,Ru=36494,Cu=36495,Jp=36283,Lu=36284,Pu=36285,Iu=36286;var Er=2300,Ns=2301,Pc=2302,Nu=2400,Du=2401,Uu=2402,Qp=2500;var sd=0,$a=1,wo=2,rd=3e3,Ps=3001,em=3200,tm=3201,Ka=0,nm=1,jn="",it="srgb",sn="srgb-linear",Xl="display-p3",Za="display-p3-linear",Ma="linear",kt="srgb",ba="rec709",wa="p3";var $s=7680;var Ou=519,im=512,sm=513,rm=514,od=515,om=516,am=517,cm=518,lm=519,ll=35044;var Fu="300 es",hl=1035,ki=2e3,Sa=2001,is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,ro=Math.PI/180,Tr=180/Math.PI;function fi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function ql(s,e){return(s%e+e)%e}function hm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function um(s,e,t){return s!==e?(t-s)/(e-s):0}function oo(s,e,t){return(1-t)*s+t*e}function fm(s,e,t,n){return oo(s,e,1-Math.exp(-t*n))}function dm(s,e=1){return e-Math.abs(ql(s,e*2)-e)}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _m(s,e){return s+Math.random()*(e-s)}function xm(s){return s*(.5-Math.random())}function ym(s){s!==void 0&&(Bu=s);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(s){return s*ro}function Mm(s){return s*Tr}function ul(s){return(s&s-1)===0&&s!==0}function bm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ea(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ct={DEG2RAD:ro,RAD2DEG:Tr,generateUUID:fi,clamp:pn,euclideanModulo:ql,mapLinear:hm,inverseLerp:um,lerp:oo,damp:fm,pingpong:dm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:_m,randFloatSpread:xm,seededRandom:ym,degToRad:vm,radToDeg:Mm,isPowerOfTwo:ul,ceilPowerOfTwo:bm,floorPowerOfTwo:Ea,setQuaternionFromProperEuler:wm,normalize:Nt,denormalize:Mi},He=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],x=i[4],b=i[7],E=i[2],M=i[5],T=i[8];return r[0]=o*_+a*w+c*E,r[3]=o*m+a*x+c*M,r[6]=o*p+a*b+c*T,r[1]=l*_+h*w+u*E,r[4]=l*m+h*x+u*M,r[7]=l*p+h*b+u*T,r[2]=f*_+d*w+g*E,r[5]=f*m+d*x+g*M,r[8]=f*p+d*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new nt;function ad(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sm(){let s=uo("canvas");return s.style.display="block",s}var ku={};function ao(s){s in ku||(ku[s]=!0,console.warn(s))}var zu=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[sn]:{transfer:Ma,primaries:ba,toReference:s=>s,fromReference:s=>s},[it]:{transfer:kt,primaries:ba,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Za]:{transfer:Ma,primaries:wa,toReference:s=>s.applyMatrix3(Hu),fromReference:s=>s.applyMatrix3(zu)},[Xl]:{transfer:kt,primaries:wa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hu),fromReference:s=>s.applyMatrix3(zu).convertLinearToSRGB()}},Em=new Set([sn,Za]),vt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Em.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=zo[e].toReference,i=zo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return zo[s].primaries},getTransfer:function(s){return s===jn?Ma:zo[s].transfer}};function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ks,Ta=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=uo("canvas")),Ks.width=e.width,Ks.height=e.height;let n=Ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tm=0,Aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Dc(i[o].image)):r.push(Dc(i[o]))}else r=Dc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ta.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Am=0,Zt=class s extends is{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=$t,i=$t,r=dn,o=di,a=Yn,c=ns,l=s.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=fi(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ps?it:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?Ps:rd}set encoding(e){ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ps?it:jn}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Kf;Zt.DEFAULT_ANISOTROPY=1;var mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,b=(d+1)/2,E=(p+1)/2,M=(h+f)/4,T=(u+_)/4,O=(g+m)/4;return x>b&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=T/n):b>E?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=M/i,r=O/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=O/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ps?it:jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dl=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),M=Math.atan2(E,p*w);m=Math.sin(m*M)/E,a=Math.sin(a*M)/E}let b=a*w;if(c=c*m+f*b,l=l*m+d*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new D,Vu=new jt,At=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Vo.subVectors(this.max,jr),Zs.subVectors(e.a,jr),Js.subVectors(e.b,jr),Qs.subVectors(e.c,jr),Yi.subVectors(Js,Zs),ji.subVectors(Qs,Js),Ms.subVectors(Zs,Qs);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-Ms.z,Ms.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,Ms.z,0,-Ms.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-Ms.y,Ms.x,0];return!Oc(t,Zs,Js,Qs,Vo)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Zs,Js,Qs,Vo))?!1:(Go.crossVectors(Yi,ji),t=[Go.x,Go.y,Go.z],Oc(t,Zs,Js,Qs,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,Ho=new At,Zs=new D,Js=new D,Qs=new D,Yi=new D,ji=new D,Ms=new D,jr=new D,Vo=new D,Go=new D,bs=new D;function Oc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bs.fromArray(s,r);let a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Rm=new At,$r=new D,Fc=new D,zn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Fc)),this.expandByPoint($r.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new D,Bc=new D,Wo=new D,$i=new D,kc=new D,Xo=new D,zc=new D,Ds=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bc.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=$i.dot(this.direction),c=-$i.dot(Wo),l=$i.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bc).addScaledVector(Wo,f),d}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,r){kc.subVectors(t,e),Xo.subVectors(n,e),zc.crossVectors(kc,Xo);let o=this.direction.dot(zc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let c=a*this.direction.dot(Xo.crossVectors($i,Xo));if(c<0)return null;let l=a*this.direction.dot(kc.cross($i));if(l<0||c+l>o)return null;let h=-a*$i.dot(zc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Lm)}lookAt(e,t,n){let i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ki.crossVectors(n,Bn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ki.crossVectors(n,Bn)),Ki.normalize(),qo.crossVectors(Bn,Ki),i[0]=Ki.x,i[4]=qo.x,i[8]=Bn.x,i[1]=Ki.y,i[5]=qo.y,i[9]=Bn.y,i[2]=Ki.z,i[6]=qo.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],x=n[7],b=n[11],E=n[15],M=i[0],T=i[4],O=i[8],S=i[12],R=i[1],H=i[5],Y=i[9],j=i[13],F=i[2],V=i[6],U=i[10],ee=i[14],W=i[3],G=i[7],Z=i[11],te=i[15];return r[0]=o*M+a*R+c*F+l*W,r[4]=o*T+a*H+c*V+l*G,r[8]=o*O+a*Y+c*U+l*Z,r[12]=o*S+a*j+c*ee+l*te,r[1]=h*M+u*R+f*F+d*W,r[5]=h*T+u*H+f*V+d*G,r[9]=h*O+u*Y+f*U+d*Z,r[13]=h*S+u*j+f*ee+d*te,r[2]=g*M+_*R+m*F+p*W,r[6]=g*T+_*H+m*V+p*G,r[10]=g*O+_*Y+m*U+p*Z,r[14]=g*S+_*j+m*ee+p*te,r[3]=w*M+x*R+b*F+E*W,r[7]=w*T+x*H+b*V+E*G,r[11]=w*O+x*Y+b*U+E*Z,r[15]=w*S+x*j+b*ee+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,b=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,M=t*w+n*x+i*b+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=w*T,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*T,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*T,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*T,e[4]=x*T,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*T,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*T,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*T,e[8]=b*T,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*T,e[12]=E*T,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=c*l,x=c*h,b=c*u,E=n.x,M=n.y,T=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+b)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(f+p))*M,i[6]=(m+w)*M,i[7]=0,i[8]=(g+x)*T,i[9]=(m-w)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=er.set(i[0],i[1],i[2]).length(),o=er.set(i[4],i[5],i[6]).length(),a=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hi.copy(this);let l=1/r,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ki){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===ki)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ki){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,g,_;if(a===ki)g=(o+r)*u,_=-2*u;else if(a===Sa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new D,hi=new ve,Cm=new D(0,0,0),Lm=new D(1,1,1),Ki=new D,qo=new D,Bn=new D,Gu=new ve,Wu=new jt,Rn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pm=0,Xu=new D,tr=new jt,Ii=new ve,Yo=new D,Kr=new D,Im=new D,Nm=new jt,qu=new D(1,0,0),Yu=new D(0,1,0),ju=new D(0,0,1),Dm={type:"added"},Um={type:"removed"},Dt=class s extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Rn,n=new jt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new nt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Kr,Yo,this.up):Ii.lookAt(Yo,Kr,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Ii),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new D,Ni=new D,Hc=new D,Di=new D,nr=new D,ir=new D,$u=new D,Vc=new D,Gc=new D,Wc=new D,jo=!1,Rs=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ui.subVectors(i,t),Ni.subVectors(n,t),Hc.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Ni),c=ui.dot(Hc),l=Ni.dot(Ni),h=Ni.dot(Hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,t,n,i,r,o,a,c){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Ni.subVectors(e,t),ui.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ui.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;nr.subVectors(i,n),ir.subVectors(r,n),Vc.subVectors(e,n);let c=nr.dot(Vc),l=ir.dot(Vc);if(c<=0&&l<=0)return t.copy(n);Gc.subVectors(e,i);let h=nr.dot(Gc),u=ir.dot(Gc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(nr,o);Wc.subVectors(e,r);let d=nr.dot(Wc),g=ir.dot(Wc);if(g>=0&&d<=g)return t.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ir,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return $u.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector($u,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=ql(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return vt.fromWorkingColorSpace(wn.copy(this),e),Math.round(pn(wn.r*255,0,255))*65536+Math.round(pn(wn.g*255,0,255))*256+Math.round(pn(wn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,r=wn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=it){vt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL($o);let n=oo(Zi.h,$o.h,t),i=oo(Zi.s,$o.s,t),r=oo(Zi.l,$o.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new we;we.NAMES=cd;var Om=0,rn=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=yr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zt=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new D,Ko=new He,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}};var Ar=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Fm=0,qn=new ve,qc=new Dt,sr=new D,kn=new At,Zr=new At,fn=new D,Rt=class s extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?Ca:Ar)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(kn.min,Zr.min),kn.expandByPoint(fn),fn.addVectors(kn.max,Zr.max),kn.expandByPoint(fn)):(kn.expandByPoint(Zr.min),kn.expandByPoint(Zr.max))}kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(e,l),fn.add(sr)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new D,h[R]=new D;let u=new D,f=new D,d=new D,g=new He,_=new He,m=new He,p=new D,w=new D;function x(R,H,Y){u.fromArray(i,R*3),f.fromArray(i,H*3),d.fromArray(i,Y*3),g.fromArray(o,R*2),_.fromArray(o,H*2),m.fromArray(o,Y*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(j),w.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(j),l[R].add(p),l[H].add(p),l[Y].add(p),h[R].add(w),h[H].add(w),h[Y].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,H=b.length;R<H;++R){let Y=b[R],j=Y.start,F=Y.count;for(let V=j,U=j+F;V<U;V+=3)x(n[V+0],n[V+1],n[V+2])}let E=new D,M=new D,T=new D,O=new D;function S(R){T.fromArray(r,R*3),O.copy(T);let H=l[R];E.copy(H),E.sub(T.multiplyScalar(T.dot(H))).normalize(),M.crossVectors(O,H);let j=M.dot(h[R])<0?-1:1;c[R*4]=E.x,c[R*4+1]=E.y,c[R*4+2]=E.z,c[R*4+3]=j}for(let R=0,H=b.length;R<H;++R){let Y=b[R],j=Y.start,F=Y.count;for(let V=j,U=j+F;V<U;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Kt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ku=new ve,ws=new Ds,Zo=new zn,Zu=new D,rr=new D,or=new D,ar=new D,Yc=new D,Jo=new D,Qo=new He,ea=new He,ta=new He,Ju=new D,Qu=new D,ef=new D,na=new D,ia=new D,Pe=class extends Dt{constructor(e=new Rt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yc.fromBufferAttribute(u,e),o?Jo.addScaledVector(Yc,h):Jo.addScaledVector(Yc.sub(t),h))}t.add(Jo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Zo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Zo,Zu)===null||ws.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=w,E=x;b<E;b+=3){let M=a.getX(b),T=a.getX(b+1),O=a.getX(b+2);i=sa(this,p,e,n,l,h,u,M,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);i=sa(this,o,e,n,l,h,u,w,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=w,E=x;b<E;b+=3){let M=b,T=b+1,O=b+2;i=sa(this,p,e,n,l,h,u,M,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=m,x=m+1,b=m+2;i=sa(this,o,e,n,l,h,u,w,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Bm(s,e,t,n,i,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===$n,a),c===null)return null;ia.copy(a),ia.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:s}}function sa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,rr),s.getVertexPosition(c,or),s.getVertexPosition(l,ar);let h=Bm(s,e,t,n,rr,or,ar,na);if(h){i&&(Qo.fromBufferAttribute(i,a),ea.fromBufferAttribute(i,c),ta.fromBufferAttribute(i,l),h.uv=Rs.getInterpolation(na,rr,or,ar,Qo,ea,ta,new He)),r&&(Qo.fromBufferAttribute(r,a),ea.fromBufferAttribute(r,c),ta.fromBufferAttribute(r,l),h.uv1=Rs.getInterpolation(na,rr,or,ar,Qo,ea,ta,new He),h.uv2=h.uv1),o&&(Ju.fromBufferAttribute(o,a),Qu.fromBufferAttribute(o,c),ef.fromBufferAttribute(o,l),h.normal=Rs.getInterpolation(na,rr,or,ar,Ju,Qu,ef,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Rs.getNormal(rr,or,ar,u.normal),h.face=u}return h}var Hi=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,p,w,x,b,E,M,T,O,S){let R=b/T,H=E/O,Y=b/2,j=E/2,F=M/2,V=T+1,U=O+1,ee=0,W=0,G=new D;for(let Z=0;Z<U;Z++){let te=Z*H-j;for(let re=0;re<V;re++){let k=re*R-Y;G[_]=k*w,G[m]=te*x,G[p]=F,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),u.push(re/T),u.push(1-Z/O),ee+=1}}for(let Z=0;Z<O;Z++)for(let te=0;te<T;te++){let re=f+te+V*Z,k=f+te+V*(Z+1),q=f+(te+1)+V*(Z+1),se=f+(te+1)+V*Z;c.push(re,k,se),c.push(k,q,se),W+=6}a.addGroup(d,W,S),d+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){let e={};for(let t=0;t<s.length;t++){let n=Rr(s[t]);for(let i in n)e[i]=n[i]}return e}function km(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ld(s){return s.getRenderTarget()===null?s.outputColorSpace:vt.workingColorSpace}var zm={clone:Rr,merge:An},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},La=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends La{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lr=1,pl=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(cr,lr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(cr,lr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(cr,lr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(cr,lr,e,t);a.layers=this.layers,this.add(a);let c=new Ht(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new Ht(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pa=class extends Zt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ml=class extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ps?it:jn),this.texture=new Pa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hi(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:es});r.uniforms.tEquirect.value=t;let o=new Pe(i,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=dn),new pl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},jc=new D,Gm=new D,Wm=new nt,Fi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jc.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new zn,ra=new D,po=class{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],w=i[13],x=i[14],b=i[15];if(n[0].setComponents(c-r,f-l,m-d,b-p).normalize(),n[1].setComponents(c+r,f+l,m+d,b+p).normalize(),n[2].setComponents(c+o,f+h,m+g,b+w).normalize(),n[3].setComponents(c-o,f-h,m-g,b-w).normalize(),n[4].setComponents(c-a,f-u,m-_,b-x).normalize(),t===ki)n[5].setComponents(c+a,f+u,m+_,b+x).normalize();else if(t===Sa)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ra.x=i.normal.x>0?e.max.x:e.min.x,ra.y=i.normal.y>0?e.max.y:e.min.y,ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xm(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Kn=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*f-o;for(let x=0;x<l;x++){let b=x*u-r;g.push(b,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let x=w+l*p,b=w+l*(p+1),E=w+1+l*(p+1),M=w+1+l*p;d.push(x,b,M),d.push(b,E,M)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:jm,alphamap_pars_fragment:$m,alphatest_fragment:Km,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:lg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:xg,displacementmap_vertex:yg,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:wg,envmap_fragment:Sg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:kg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Lg,fog_fragment:Pg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Ng,lightmap_fragment:Dg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Fg,lights_pars_begin:Bg,lights_toon_fragment:zg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:qg,lights_fragment_maps:Yg,lights_fragment_end:jg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:v0,premultiplied_alpha_fragment:M0,project_vertex:b0,dithering_fragment:w0,dithering_pars_fragment:S0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:L0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:N0,skinnormal_vertex:D0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:B0,transmission_fragment:k0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:j0,cube_vert:$0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:o_,meshlambert_vert:a_,meshlambert_frag:c_,meshmatcap_vert:l_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:f_,meshphong_vert:d_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:x_,points_vert:y_,points_frag:v_,shadow_vert:M_,shadow_frag:b_,sprite_vert:w_,sprite_frag:S_},ge={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},vi={basic:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([ge.points,ge.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([ge.common,ge.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([ge.sprite,ge.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([ge.lights,ge.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};vi.physical={uniforms:An([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var oa={r:0,b:0,g:0};function E_(s,e,t,n,i,r,o){let a=new we(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let w=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),w=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ja)?(h===void 0&&(h=new Pe(new Hi(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Rr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=vt.getTransfer(x.colorSpace)!==kt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pe(new Kn(2,2),new Vi({name:"BackgroundMaterial",uniforms:Rr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=vt.getTransfer(x.colorSpace)!==kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(oa,ld(s)),n.buffers.color.setClear(oa.r,oa.g,oa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function T_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(F,V,U,ee,W){let G=!1;if(o){let Z=_(ee,U,V);l!==Z&&(l=Z,d(l.object)),G=p(F,ee,U,W),G&&w(F,ee,U,W)}else{let Z=V.wireframe===!0;(l.geometry!==ee.id||l.program!==U.id||l.wireframe!==Z)&&(l.geometry=ee.id,l.program=U.id,l.wireframe=Z,G=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,O(F,V,U,ee),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function _(F,V,U){let ee=U.wireframe===!0,W=a[F.id];W===void 0&&(W={},a[F.id]=W);let G=W[V.id];G===void 0&&(G={},W[V.id]=G);let Z=G[ee];return Z===void 0&&(Z=m(f()),G[ee]=Z),Z}function m(F){let V=[],U=[],ee=[];for(let W=0;W<i;W++)V[W]=0,U[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:U,attributeDivisors:ee,object:F,attributes:{},index:null}}function p(F,V,U,ee){let W=l.attributes,G=V.attributes,Z=0,te=U.getAttributes();for(let re in te)if(te[re].location>=0){let q=W[re],se=G[re];if(se===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;Z++}return l.attributesNum!==Z||l.index!==ee}function w(F,V,U,ee){let W={},G=V.attributes,Z=0,te=U.getAttributes();for(let re in te)if(te[re].location>=0){let q=G[re];q===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));let se={};se.attribute=q,q&&q.data&&(se.data=q.data),W[re]=se,Z++}l.attributes=W,l.attributesNum=Z,l.index=ee}function x(){let F=l.newAttributes;for(let V=0,U=F.length;V<U;V++)F[V]=0}function b(F){E(F,0)}function E(F,V){let U=l.newAttributes,ee=l.enabledAttributes,W=l.attributeDivisors;U[F]=1,ee[F]===0&&(s.enableVertexAttribArray(F),ee[F]=1),W[F]!==V&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),W[F]=V)}function M(){let F=l.newAttributes,V=l.enabledAttributes;for(let U=0,ee=V.length;U<ee;U++)V[U]!==F[U]&&(s.disableVertexAttribArray(U),V[U]=0)}function T(F,V,U,ee,W,G,Z){Z===!0?s.vertexAttribIPointer(F,V,U,W,G):s.vertexAttribPointer(F,V,U,ee,W,G)}function O(F,V,U,ee){if(n.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let W=ee.attributes,G=U.getAttributes(),Z=V.defaultAttributeValues;for(let te in G){let re=G[te];if(re.location>=0){let k=W[te];if(k===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),k!==void 0){let q=k.normalized,se=k.itemSize,ne=t.get(k);if(ne===void 0)continue;let ae=ne.buffer,_e=ne.type,Be=ne.bytesPerElement,ue=n.isWebGL2===!0&&(_e===s.INT||_e===s.UNSIGNED_INT||k.gpuType===Zf);if(k.isInterleavedBufferAttribute){let Le=k.data,z=Le.stride,Lt=k.offset;if(Le.isInstancedInterleavedBuffer){for(let Ee=0;Ee<re.locationSize;Ee++)E(re.location+Ee,Le.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)b(re.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Ee=0;Ee<re.locationSize;Ee++)T(re.location+Ee,se/re.locationSize,_e,q,z*Be,(Lt+se/re.locationSize*Ee)*Be,ue)}else{if(k.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)E(re.location+Le,k.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Le=0;Le<re.locationSize;Le++)b(re.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Le=0;Le<re.locationSize;Le++)T(re.location+Le,se/re.locationSize,_e,q,se*Be,se/re.locationSize*Le*Be,ue)}}else if(Z!==void 0){let q=Z[te];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(re.location,q);break;case 3:s.vertexAttrib3fv(re.location,q);break;case 4:s.vertexAttrib4fv(re.location,q);break;default:s.vertexAttrib1fv(re.location,q)}}}}M()}function S(){Y();for(let F in a){let V=a[F];for(let U in V){let ee=V[U];for(let W in ee)g(ee[W].object),delete ee[W];delete V[U]}delete a[F]}}function R(F){if(a[F.id]===void 0)return;let V=a[F.id];for(let U in V){let ee=V[U];for(let W in ee)g(ee[W].object),delete ee[W];delete V[U]}delete a[F.id]}function H(F){for(let V in a){let U=a[V];if(U[F.id]===void 0)continue;let ee=U[F.id];for(let W in ee)g(ee[W].object),delete ee[W];delete U[F.id]}}function Y(){j(),h=!0,l!==c&&(l=c,d(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:j,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:b,disableUnusedAttributes:M}}function A_(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function R_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||e.has("OES_texture_float"),E=x&&b,M=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:M}}function C_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Fi,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,x=w*4,b=p.clippingState||null;c.value=b,b=h(g,f,x,d);for(let E=0;E!==x;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=d;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L_(s){let e=new WeakMap;function t(o,a){return a===Is?o.mapping=br:a===cl&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Is||a===cl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ml(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bi=class extends La{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gr=4,tf=[.125,.215,.35,.446,.526,.582],As=20,$c=new bi,nf=new we,Kc=null,Zc=0,Jc=0,Es=(1+Math.sqrt(5))/2,hr=1/Es,sf=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Es,hr),new D(0,Es,-hr),new D(hr,0,Es),new D(-hr,0,Es),new D(Es,hr,0),new D(-Es,hr,0)],Cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Jc),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ho,format:Yn,colorSpace:sn,depthBuffer:!1},i=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=I_(r,e,t)}return i}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,i){let a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nf),h.toneMapping=ts,h.autoClear=!1;let d=new zt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Pe(new Hi,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(nf),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;aa(i,w*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===br||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$c)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sf[(i-1)%sf.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*As-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let p=[],w=0;for(let T=0;T<As;++T){let O=T/_,S=Math.exp(-O*O/2);p.push(S),T===0?w+=S:T<m&&(w+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let b=this._sizeLods[i],E=3*b*(i>x-gr?i-x+gr:0),M=4*(this._cubeSize-b);aa(t,E,M,3*b,2*b),c.setRenderTarget(t),c.render(u,$c)}};function P_(s){let e=[],t=[],n=[],i=s,r=s-gr+1+tf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-gr?c=tf[o-s+gr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),x=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let M=0;M<d;M++){let T=M%3*2/3-1,O=M>2?0:-1,S=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];w.set(S,_*g*M),x.set(f,m*g*M);let R=[M,M,M,M,M,M];b.set(R,p*g*M)}let E=new Rt;E.setAttribute("position",new Kt(w,_)),E.setAttribute("uv",new Kt(x,m)),E.setAttribute("faceIndex",new Kt(b,p)),e.push(E),i>gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(s,e,t){let n=new zi(s,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function I_(s,e,t){let n=new Float32Array(As),i=new D(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function of(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function af(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Is||c===cl,h=c===br||c===wr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Cr(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Cr(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U_(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let w=d.array;_=d.version;for(let x=0,b=w.length;x<b;x+=3){let E=w[x+0],M=w[x+1],T=w[x+2];f.push(E,M,M,T,T,E)}}else if(g!==void 0){let w=g.array;_=g.version;for(let x=0,b=w.length/3-1;x<b;x+=3){let E=x+0,M=x+1,T=x+2;f.push(E,M,M,T,T,E)}}else return;let m=new(ad(f)?Ca:Ar)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function O_(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*c),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let w=0;w<_;w++)p+=g[w];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function F_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function B_(s,e){return s[0]-e[0]}function k_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function z_(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let F=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();let w=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],O=0;w===!0&&(O=1),x===!0&&(O=2),b===!0&&(O=3);let S=h.attributes.position.count*O,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let H=new Float32Array(S*R*4*g),Y=new Ra(H,S,R,g);Y.type=Bi,Y.needsUpdate=!0;let j=O*4;for(let V=0;V<g;V++){let U=E[V],ee=M[V],W=T[V],G=S*R*4*V;for(let Z=0;Z<U.count;Z++){let te=Z*j;w===!0&&(o.fromBufferAttribute(U,Z),H[G+te+0]=o.x,H[G+te+1]=o.y,H[G+te+2]=o.z,H[G+te+3]=0),x===!0&&(o.fromBufferAttribute(ee,Z),H[G+te+4]=o.x,H[G+te+5]=o.y,H[G+te+6]=o.z,H[G+te+7]=0),b===!0&&(o.fromBufferAttribute(W,Z),H[G+te+8]=o.x,H[G+te+9]=o.y,H[G+te+10]=o.z,H[G+te+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:Y,size:new He(S,R)},r.set(h,_),h.addEventListener("dispose",F)}let m=0;for(let w=0;w<f.length;w++)m+=f[w];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let b=g[x];b[0]=x,b[1]=f[x]}g.sort(k_);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(B_);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let b=a[x],E=b[0],M=b[1];E!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+x)!==_[E]&&h.setAttribute("morphTarget"+x,_[E]),m&&h.getAttribute("morphNormal"+x)!==m[E]&&h.setAttribute("morphNormal"+x,m[E]),i[x]=M,p+=M):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",w),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function H_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ia=class extends Zt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Ls,h!==Ls&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Ji),n===void 0&&h===Sr&&(n=Cs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ud=new Zt,fd=new Ia(1,1);fd.compareFunction=od;var dd=new Ra,pd=new dl,md=new Pa,cf=[],lf=[],hf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);function Nr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=cf[i];if(r===void 0&&(r=new Float32Array(i),cf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ja(s,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function V_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function W_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function X_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function q_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;ff.set(n),s.uniformMatrix2fv(this.addr,!1,ff),an(t,n)}}function Y_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;uf.set(n),s.uniformMatrix3fv(this.addr,!1,uf),an(t,n)}}function j_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;hf.set(n),s.uniformMatrix4fv(this.addr,!1,hf),an(t,n)}}function $_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function K_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function Z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function J_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function Q_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function ix(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?fd:ud;t.setTexture2D(e||r,i)}function sx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pd,i)}function rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||md,i)}function ox(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function ax(s){switch(s){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return j_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(s,e){s.uniform1fv(this.addr,e)}function lx(s,e){let t=Nr(e,this.size,2);s.uniform2fv(this.addr,t)}function hx(s,e){let t=Nr(e,this.size,3);s.uniform3fv(this.addr,t)}function ux(s,e){let t=Nr(e,this.size,4);s.uniform4fv(this.addr,t)}function fx(s,e){let t=Nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dx(s,e){let t=Nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function px(s,e){let t=Nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mx(s,e){s.uniform1iv(this.addr,e)}function gx(s,e){s.uniform2iv(this.addr,e)}function _x(s,e){s.uniform3iv(this.addr,e)}function xx(s,e){s.uniform4iv(this.addr,e)}function yx(s,e){s.uniform1uiv(this.addr,e)}function vx(s,e){s.uniform2uiv(this.addr,e)}function Mx(s,e){s.uniform3uiv(this.addr,e)}function bx(s,e){s.uniform4uiv(this.addr,e)}function wx(s,e,t){let n=this.cache,i=e.length,r=Ja(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,r[o])}function Sx(s,e,t){let n=this.cache,i=e.length,r=Ja(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pd,r[o])}function Ex(s,e,t){let n=this.cache,i=e.length,r=Ja(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||md,r[o])}function Tx(s,e,t){let n=this.cache,i=e.length,r=Ja(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dd,r[o])}function Ax(s){switch(s){case 5126:return cx;case 35664:return lx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return vx;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}var gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function df(s,e){s.seq.push(e),s.map[e.id]=e}function Rx(s,e,t){let n=s.name,i=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),o=Qc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){df(t,l===void 0?new gl(a,s,e):new _l(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new xl(a),df(t,u)),t=u}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Rx(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Cx=37297,Lx=0;function Px(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ix(s){let e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(s),n;switch(e===t?n="":e===wa&&t===ba?n="LinearDisplayP3ToLinearSRGB":e===ba&&t===wa&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case Za:return[n,"LinearTransferOETF"];case it:case Xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function mf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(e),o)}else return i}function Nx(s,e){let t=Ix(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dx(s,e){let t;switch(e){case kp:t="Linear";break;case zp:t="Reinhard";break;case Hp:t="OptimizedCineon";break;case Vl:t="ACESFilmic";break;case Gp:t="AgX";break;case Vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ux(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function Fx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function _r(s){return s!==""}function gf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(s){return s.replace(kx,Hx)}var zx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hx(s,e){let t=ht[e];if(t===void 0){let n=zx.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(s){return s.replace(Vx,Gx)}function Gx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Xx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function Yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Fp:e="ENVMAP_BLENDING_MIX";break;case Bp:e="ENVMAP_BLENDING_ADD";break}return e}function jx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $x(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Wx(t),l=Xx(t),h=qx(t),u=Yx(t),f=jx(t),d=t.isWebGL2?"":Ux(t),g=Ox(t),_=Fx(r),m=i.createProgram(),p,w,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),p.length>0&&(p+=`
`),w=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),w.length>0&&(w+=`
`)):(p=[yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),w=[d,yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?ht.tonemapping_pars_fragment:"",t.toneMapping!==ts?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Nx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=yl(o),o=gf(o,t),o=_f(o,t),a=yl(a),a=gf(a,t),a=_f(a,t),o=xf(o),a=xf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let b=x+p+o,E=x+w+a,M=pf(i,i.VERTEX_SHADER,b),T=pf(i,i.FRAGMENT_SHADER,E);i.attachShader(m,M),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(Y){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(T).trim(),U=!0,ee=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,M,T);else{let W=mf(i,M,"vertex"),G=mf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+W+`
`+G)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(F===""||V==="")&&(ee=!1);ee&&(Y.diagnostics={runnable:U,programLog:j,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:w}})}i.deleteShader(M),i.deleteShader(T),S=new Mr(i,m),R=Bx(i,m)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,Cx)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}var Kx=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}};function Zx(s,e,t,n,i,r,o){let a=new fo,c=new vl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,R,H,Y,j){let F=Y.fog,V=j.geometry,U=S.isMeshStandardMaterial?Y.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||U),W=ee&&ee.mapping===ja?ee.image.height:null,G=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Z!==void 0?Z.length:0,re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let k,q,se,ne;if(G){let hn=vi[G];k=hn.vertexShader,q=hn.fragmentShader}else k=S.vertexShader,q=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),ne=c.getFragmentShaderID(S);let ae=s.getRenderTarget(),_e=j.isInstancedMesh===!0,Be=j.isBatchedMesh===!0,ue=!!S.map,Le=!!S.matcap,z=!!ee,Lt=!!S.aoMap,Ee=!!S.lightMap,Ve=!!S.bumpMap,Te=!!S.normalMap,ct=!!S.displacementMap,Xe=!!S.emissiveMap,N=!!S.metalnessMap,C=!!S.roughnessMap,$=S.anisotropy>0,le=S.clearcoat>0,ce=S.iridescence>0,fe=S.sheen>0,Ue=S.transmission>0,Me=$&&!!S.anisotropyMap,Ie=le&&!!S.clearcoatMap,Ye=le&&!!S.clearcoatNormalMap,ot=le&&!!S.clearcoatRoughnessMap,de=ce&&!!S.iridescenceMap,wt=ce&&!!S.iridescenceThicknessMap,ut=fe&&!!S.sheenColorMap,Je=fe&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ne=!!S.specularColorMap,st=!!S.specularIntensityMap,xt=Ue&&!!S.transmissionMap,Ft=Ue&&!!S.thicknessMap,lt=!!S.gradientMap,pe=!!S.alphaMap,B=S.alphaTest>0,xe=!!S.alphaHash,ye=!!S.extensions,Ze=!!V.attributes.uv1,qe=!!V.attributes.uv2,Et=!!V.attributes.uv3,Pt=ts;return S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Pt=s.toneMapping),{isWebGL2:h,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Be,instancing:_e,instancingColor:_e&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:sn,map:ue,matcap:Le,envMap:z,envMapMode:z&&ee.mapping,envMapCubeUVHeight:W,aoMap:Lt,lightMap:Ee,bumpMap:Ve,normalMap:Te,displacementMap:f&&ct,emissiveMap:Xe,normalMapObjectSpace:Te&&S.normalMapType===nm,normalMapTangentSpace:Te&&S.normalMapType===Ka,metalnessMap:N,roughnessMap:C,anisotropy:$,anisotropyMap:Me,clearcoat:le,clearcoatMap:Ie,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ot,iridescence:ce,iridescenceMap:de,iridescenceThicknessMap:wt,sheen:fe,sheenColorMap:ut,sheenRoughnessMap:Je,specularMap:Ge,specularColorMap:Ne,specularIntensityMap:st,transmission:Ue,transmissionMap:xt,thicknessMap:Ft,gradientMap:lt,opaque:S.transparent===!1&&S.blending===yr,alphaMap:pe,alphaTest:B,alphaHash:xe,combine:S.combine,mapUv:ue&&_(S.map.channel),aoMapUv:Lt&&_(S.aoMap.channel),lightMapUv:Ee&&_(S.lightMap.channel),bumpMapUv:Ve&&_(S.bumpMap.channel),normalMapUv:Te&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:N&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:Me&&_(S.anisotropyMap.channel),clearcoatMapUv:Ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Je&&_(S.sheenRoughnessMap.channel),specularMapUv:Ge&&_(S.specularMap.channel),specularColorMapUv:Ne&&_(S.specularColorMap.channel),specularIntensityMapUv:st&&_(S.specularIntensityMap.channel),transmissionMapUv:xt&&_(S.transmissionMap.channel),thicknessMapUv:Ft&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Te||$),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:Et,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(ue||pe),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ye&&S.extensions.derivatives===!0,extensionFragDepth:ye&&S.extensions.fragDepth===!0,extensionDrawBuffers:ye&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let H in S.defines)R.push(H),R.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(w(R,S),x(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function w(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function b(S){let R=g[S.type],H;if(R){let Y=vi[R];H=zm.clone(Y.uniforms)}else H=S.uniforms;return H}function E(S,R){let H;for(let Y=0,j=l.length;Y<j;Y++){let F=l[Y];if(F.cacheKey===R){H=F,++H.usedTimes;break}}return H===void 0&&(H=new $x(s,R,S,r),l.push(H)),H}function M(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function T(S){c.remove(S)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:O}}function Jx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Qx),n.length>1&&n.sort(f||vf),i.length>1&&i.sort(f||vf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ey(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Mf,s.set(n,[o])):i>=r.length?(o=new Mf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ty(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var iy=0;function sy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ry(s,e){let t=new ty,n=ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new ve,a=new ve;function c(h,u){let f=0,d=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let _=0,m=0,p=0,w=0,x=0,b=0,E=0,M=0,T=0,O=0,S=0;h.sort(sy);let R=u===!0?Math.PI:1;for(let Y=0,j=h.length;Y<j;Y++){let F=h[Y],V=F.color,U=F.intensity,ee=F.distance,W=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=V.r*U*R,d+=V.g*U*R,g+=V.b*U*R;else if(F.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],U);S++}else if(F.isDirectionalLight){let G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let Z=F.shadow,te=n.get(F);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=F.shadow.matrix,b++}i.directional[_]=G,_++}else if(F.isSpotLight){let G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(V).multiplyScalar(U*R),G.distance=ee,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,i.spot[p]=G;let Z=F.shadow;if(F.map&&(i.spotLightMap[T]=F.map,T++,Z.updateMatrices(F),F.castShadow&&O++),i.spotLightMatrix[p]=Z.matrix,F.castShadow){let te=n.get(F);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=W,M++}p++}else if(F.isRectAreaLight){let G=t.get(F);G.color.copy(V).multiplyScalar(U),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[w]=G,w++}else if(F.isPointLight){let G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*R),G.distance=F.distance,G.decay=F.decay,F.castShadow){let Z=F.shadow,te=n.get(F);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=F.shadow.matrix,E++}i.point[m]=G,m++}else if(F.isHemisphereLight){let G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(U*R),G.groundColor.copy(F.groundColor).multiplyScalar(U*R),i.hemi[x]=G,x++}}w>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let H=i.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==w||H.hemiLength!==x||H.numDirectionalShadows!==b||H.numPointShadows!==E||H.numSpotShadows!==M||H.numSpotMaps!==T||H.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=w,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=S,H.directionalLength=_,H.pointLength=m,H.spotLength=p,H.rectAreaLength=w,H.hemiLength=x,H.numDirectionalShadows=b,H.numPointShadows=E,H.numSpotShadows=M,H.numSpotMaps=T,H.numLightProbes=S,i.version=iy++)}function l(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){let b=h[w];if(b.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(b.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function bf(s,e){let t=new ry(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function oy(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new bf(s,e),t.set(r,[c])):o>=a.length?(c=new bf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var bl=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ly(s,e,t){let n=new po,i=new He,r=new He,o=new mt,a=new bl({depthPacking:tm}),c=new wl,l={},h=t.maxTextureSize,u={[$n]:mn,[mn]:$n,[yn]:yn},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:ay,fragmentShader:cy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(M,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(es),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let j=p!==Oi&&this.type===Oi,F=p===Oi&&this.type!==Oi;for(let V=0,U=M.length;V<U;V++){let ee=M[V],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let G=W.getFrameExtents();if(i.multiply(G),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,W.mapSize.y=r.y)),W.map===null||j===!0||F===!0){let te=this.type!==Oi?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new zi(i.x,i.y,te),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let Z=W.getViewportCount();for(let te=0;te<Z;te++){let re=W.getViewport(te);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),Y.viewport(o),W.updateMatrices(ee,te),n=W.getFrustum(),b(T,O,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Oi&&w(W,O),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,R,H)};function w(M,T){let O=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zi(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,O,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,O,d,_,null)}function x(M,T,O,S){let R=null,H=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(H!==void 0)R=H;else if(R=O.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=R.uuid,j=T.uuid,F=l[Y];F===void 0&&(F={},l[Y]=F);let V=F[j];V===void 0&&(V=R.clone(),F[j]=V,T.addEventListener("dispose",E)),R=V}if(R.visible=T.visible,R.wireframe=T.wireframe,S===Oi?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let Y=s.properties.get(R);Y.light=O}return R}function b(M,T,O,S,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Oi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);let j=e.update(M),F=M.material;if(Array.isArray(F)){let V=j.groups;for(let U=0,ee=V.length;U<ee;U++){let W=V[U],G=F[W.materialIndex];if(G&&G.visible){let Z=x(M,G,S,R);M.onBeforeShadow(s,M,T,O,j,Z,W),s.renderBufferDirect(O,null,j,Z,M,W),M.onAfterShadow(s,M,T,O,j,Z,W)}}}else if(F.visible){let V=x(M,F,S,R);M.onBeforeShadow(s,M,T,O,j,V,null),s.renderBufferDirect(O,null,j,V,M,null),M.onAfterShadow(s,M,T,O,j,V,null)}}let Y=M.children;for(let j=0,F=Y.length;j<F;j++)b(Y[j],T,O,S,R)}function E(M){M.target.removeEventListener("dispose",E);for(let O in l){let S=l[O],R=M.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function hy(s,e,t){let n=t.isWebGL2;function i(){let B=!1,xe=new mt,ye=null,Ze=new mt(0,0,0,0);return{setMask:function(qe){ye!==qe&&!B&&(s.colorMask(qe,qe,qe,qe),ye=qe)},setLocked:function(qe){B=qe},setClear:function(qe,Et,Pt,St,hn){hn===!0&&(qe*=St,Et*=St,Pt*=St),xe.set(qe,Et,Pt,St),Ze.equals(xe)===!1&&(s.clearColor(qe,Et,Pt,St),Ze.copy(xe))},reset:function(){B=!1,ye=null,Ze.set(-1,0,0,0)}}}function r(){let B=!1,xe=null,ye=null,Ze=null;return{setTest:function(qe){qe?Be(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(qe){xe!==qe&&!B&&(s.depthMask(qe),xe=qe)},setFunc:function(qe){if(ye!==qe){switch(qe){case Lp:s.depthFunc(s.NEVER);break;case Pp:s.depthFunc(s.ALWAYS);break;case Ip:s.depthFunc(s.LESS);break;case ya:s.depthFunc(s.LEQUAL);break;case Np:s.depthFunc(s.EQUAL);break;case Dp:s.depthFunc(s.GEQUAL);break;case Up:s.depthFunc(s.GREATER);break;case Op:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=qe}},setLocked:function(qe){B=qe},setClear:function(qe){Ze!==qe&&(s.clearDepth(qe),Ze=qe)},reset:function(){B=!1,xe=null,ye=null,Ze=null}}}function o(){let B=!1,xe=null,ye=null,Ze=null,qe=null,Et=null,Pt=null,St=null,hn=null;return{setTest:function(It){B||(It?Be(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(It){xe!==It&&!B&&(s.stencilMask(It),xe=It)},setFunc:function(It,xn,Wn){(ye!==It||Ze!==xn||qe!==Wn)&&(s.stencilFunc(It,xn,Wn),ye=It,Ze=xn,qe=Wn)},setOp:function(It,xn,Wn){(Et!==It||Pt!==xn||St!==Wn)&&(s.stencilOp(It,xn,Wn),Et=It,Pt=xn,St=Wn)},setLocked:function(It){B=It},setClear:function(It){hn!==It&&(s.clearStencil(It),hn=It)},reset:function(){B=!1,xe=null,ye=null,Ze=null,qe=null,Et=null,Pt=null,St=null,hn=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,w=null,x=null,b=null,E=null,M=null,T=null,O=null,S=new we(0,0,0),R=0,H=!1,Y=null,j=null,F=null,V=null,U=null,ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=G>=2);let te=null,re={},k=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),se=new mt().fromArray(k),ne=new mt().fromArray(q);function ae(B,xe,ye,Ze){let qe=new Uint8Array(4),Et=s.createTexture();s.bindTexture(B,Et),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<ye;Pt++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(xe,0,s.RGBA,1,1,Ze,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(xe+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return Et}let _e={};_e[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(s.DEPTH_TEST),c.setFunc(ya),Xe(!1),N(tu),Be(s.CULL_FACE),Te(es);function Be(B){f[B]!==!0&&(s.enable(B),f[B]=!0)}function ue(B){f[B]!==!1&&(s.disable(B),f[B]=!1)}function Le(B,xe){return d[B]!==xe?(s.bindFramebuffer(B,xe),d[B]=xe,n&&(B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xe),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xe)),!0):!1}function z(B,xe){let ye=_,Ze=!1;if(B)if(ye=g.get(xe),ye===void 0&&(ye=[],g.set(xe,ye)),B.isWebGLMultipleRenderTargets){let qe=B.texture;if(ye.length!==qe.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Pt=qe.length;Et<Pt;Et++)ye[Et]=s.COLOR_ATTACHMENT0+Et;ye.length=qe.length,Ze=!0}}else ye[0]!==s.COLOR_ATTACHMENT0&&(ye[0]=s.COLOR_ATTACHMENT0,Ze=!0);else ye[0]!==s.BACK&&(ye[0]=s.BACK,Ze=!0);Ze&&(t.isWebGL2?s.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Lt(B){return m!==B?(s.useProgram(B),m=B,!0):!1}let Ee={[Ts]:s.FUNC_ADD,[mp]:s.FUNC_SUBTRACT,[gp]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[ru]=s.MIN,Ee[ou]=s.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ee[ru]=B.MIN_EXT,Ee[ou]=B.MAX_EXT)}let Ve={[_p]:s.ZERO,[xp]:s.ONE,[yp]:s.SRC_COLOR,[ol]:s.SRC_ALPHA,[Ep]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[Mp]:s.DST_ALPHA,[vp]:s.ONE_MINUS_SRC_COLOR,[al]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(B,xe,ye,Ze,qe,Et,Pt,St,hn,It){if(B===es){p===!0&&(ue(s.BLEND),p=!1);return}if(p===!1&&(Be(s.BLEND),p=!0),B!==pp){if(B!==w||It!==H){if((x!==Ts||M!==Ts)&&(s.blendEquation(s.FUNC_ADD),x=Ts,M=Ts),It)switch(B){case yr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nu:s.blendFunc(s.ONE,s.ONE);break;case iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case su:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case yr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case su:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,E=null,T=null,O=null,S.set(0,0,0),R=0,w=B,H=It}return}qe=qe||xe,Et=Et||ye,Pt=Pt||Ze,(xe!==x||qe!==M)&&(s.blendEquationSeparate(Ee[xe],Ee[qe]),x=xe,M=qe),(ye!==b||Ze!==E||Et!==T||Pt!==O)&&(s.blendFuncSeparate(Ve[ye],Ve[Ze],Ve[Et],Ve[Pt]),b=ye,E=Ze,T=Et,O=Pt),(St.equals(S)===!1||hn!==R)&&(s.blendColor(St.r,St.g,St.b,hn),S.copy(St),R=hn),w=B,H=!1}function ct(B,xe){B.side===yn?ue(s.CULL_FACE):Be(s.CULL_FACE);let ye=B.side===mn;xe&&(ye=!ye),Xe(ye),B.blending===yr&&B.transparent===!1?Te(es):Te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);let Ze=B.stencilWrite;l.setTest(Ze),Ze&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),$(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Be(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(B){Y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),Y=B)}function N(B){B!==fp?(Be(s.CULL_FACE),B!==j&&(B===tu?s.cullFace(s.BACK):B===dp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),j=B}function C(B){B!==F&&(W&&s.lineWidth(B),F=B)}function $(B,xe,ye){B?(Be(s.POLYGON_OFFSET_FILL),(V!==xe||U!==ye)&&(s.polygonOffset(xe,ye),V=xe,U=ye)):ue(s.POLYGON_OFFSET_FILL)}function le(B){B?Be(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function ce(B){B===void 0&&(B=s.TEXTURE0+ee-1),te!==B&&(s.activeTexture(B),te=B)}function fe(B,xe,ye){ye===void 0&&(te===null?ye=s.TEXTURE0+ee-1:ye=te);let Ze=re[ye];Ze===void 0&&(Ze={type:void 0,texture:void 0},re[ye]=Ze),(Ze.type!==B||Ze.texture!==xe)&&(te!==ye&&(s.activeTexture(ye),te=ye),s.bindTexture(B,xe||_e[B]),Ze.type=B,Ze.texture=xe)}function Ue(){let B=re[te];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(B){se.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function xt(B){ne.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function Ft(B,xe){let ye=u.get(xe);ye===void 0&&(ye=new WeakMap,u.set(xe,ye));let Ze=ye.get(B);Ze===void 0&&(Ze=s.getUniformBlockIndex(xe,B.name),ye.set(B,Ze))}function lt(B,xe){let Ze=u.get(xe).get(B);h.get(xe)!==Ze&&(s.uniformBlockBinding(xe,Ze,B.__bindingPointIndex),h.set(xe,Ze))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},te=null,re={},d={},g=new WeakMap,_=[],m=null,p=!1,w=null,x=null,b=null,E=null,M=null,T=null,O=null,S=new we(0,0,0),R=0,H=!1,Y=null,j=null,F=null,V=null,U=null,se.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Be,disable:ue,bindFramebuffer:Le,drawBuffers:z,useProgram:Lt,setBlending:Te,setMaterial:ct,setFlipSided:Xe,setCullFace:N,setLineWidth:C,setPolygonOffset:$,setScissorTest:le,activeTexture:ce,bindTexture:fe,unbindTexture:Ue,compressedTexImage2D:Me,compressedTexImage3D:Ie,texImage2D:Ge,texImage3D:Ne,updateUBOMapping:Ft,uniformBlockBinding:lt,texStorage2D:ut,texStorage3D:Je,texSubImage2D:Ye,texSubImage3D:ot,compressedTexSubImage2D:de,compressedTexSubImage3D:wt,scissor:st,viewport:xt,reset:pe}}function uy(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,C){return d?new OffscreenCanvas(N,C):uo("canvas")}function _(N,C,$,le){let ce=1;if((N.width>le||N.height>le)&&(ce=le/Math.max(N.width,N.height)),ce<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let fe=C?Ea:Math.floor,Ue=fe(ce*N.width),Me=fe(ce*N.height);u===void 0&&(u=g(Ue,Me));let Ie=$?g(Ue,Me):u;return Ie.width=Ue,Ie.height=Me,Ie.getContext("2d").drawImage(N,0,0,Ue,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ue+"x"+Me+")."),Ie}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return ul(N.width)&&ul(N.height)}function p(N){return a?!1:N.wrapS!==$t||N.wrapT!==$t||N.minFilter!==nn&&N.minFilter!==dn}function w(N,C){return N.generateMipmaps&&C&&N.minFilter!==nn&&N.minFilter!==dn}function x(N){s.generateMipmap(N)}function b(N,C,$,le,ce=!1){if(a===!1)return C;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=C;if(C===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8)),C===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),C===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8)),C===s.RGBA){let Ue=ce?Ma:vt.getTransfer(le);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=Ue===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function E(N,C,$){return w(N,$)===!0||N.isFramebufferTexture&&N.minFilter!==nn&&N.minFilter!==dn?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function M(N){return N===nn||N===va||N===so?s.NEAREST:s.LINEAR}function T(N){let C=N.target;C.removeEventListener("dispose",T),S(C),C.isVideoTexture&&h.delete(C)}function O(N){let C=N.target;C.removeEventListener("dispose",O),H(C)}function S(N){let C=n.get(N);if(C.__webglInit===void 0)return;let $=N.source,le=f.get($);if(le){let ce=le[C.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(N),Object.keys(le).length===0&&f.delete($)}n.remove(N)}function R(N){let C=n.get(N);s.deleteTexture(C.__webglTexture);let $=N.source,le=f.get($);delete le[C.__cacheKey],o.memory.textures--}function H(N){let C=N.texture,$=n.get(N),le=n.get(C);if(le.__webglTexture!==void 0&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray($.__webglFramebuffer[ce]))for(let fe=0;fe<$.__webglFramebuffer[ce].length;fe++)s.deleteFramebuffer($.__webglFramebuffer[ce][fe]);else s.deleteFramebuffer($.__webglFramebuffer[ce]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[ce])}else{if(Array.isArray($.__webglFramebuffer))for(let ce=0;ce<$.__webglFramebuffer.length;ce++)s.deleteFramebuffer($.__webglFramebuffer[ce]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ce=0;ce<$.__webglColorRenderbuffer.length;ce++)$.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[ce]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ce=0,fe=C.length;ce<fe;ce++){let Ue=n.get(C[ce]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(C[ce])}n.remove(C),n.remove(N)}let Y=0;function j(){Y=0}function F(){let N=Y;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),Y+=1,N}function V(N){let C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function U(N,C){let $=n.get(N);if(N.isVideoTexture&&ct(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){let le=N.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se($,N,C);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+C)}function ee(N,C){let $=n.get(N);if(N.version>0&&$.__version!==N.version){se($,N,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+C)}function W(N,C){let $=n.get(N);if(N.version>0&&$.__version!==N.version){se($,N,C);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+C)}function G(N,C){let $=n.get(N);if(N.version>0&&$.__version!==N.version){ne($,N,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+C)}let Z={[vn]:s.REPEAT,[$t]:s.CLAMP_TO_EDGE,[lo]:s.MIRRORED_REPEAT},te={[nn]:s.NEAREST,[va]:s.NEAREST_MIPMAP_NEAREST,[so]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Gl]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},re={[im]:s.NEVER,[lm]:s.ALWAYS,[sm]:s.LESS,[od]:s.LEQUAL,[rm]:s.EQUAL,[cm]:s.GEQUAL,[om]:s.GREATER,[am]:s.NOTEQUAL};function k(N,C,$){if($?(s.texParameteri(N,s.TEXTURE_WRAP_S,Z[C.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Z[C.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Z[C.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,te[C.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,te[C.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==$t||C.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,M(C.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,M(C.minFilter)),C.minFilter!==nn&&C.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===nn||C.minFilter!==so&&C.minFilter!==di||C.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(N,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function q(N,C){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",T));let le=C.source,ce=f.get(le);ce===void 0&&(ce={},f.set(le,ce));let fe=V(C);if(fe!==N.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ce[fe].usedTimes++;let Ue=ce[N.__cacheKey];Ue!==void 0&&(ce[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&R(C)),N.__cacheKey=fe,N.__webglTexture=ce[fe].texture}return $}function se(N,C,$){let le=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(le=s.TEXTURE_3D);let ce=q(N,C),fe=C.source;t.bindTexture(le,N.__webglTexture,s.TEXTURE0+$);let Ue=n.get(fe);if(fe.version!==Ue.__version||ce===!0){t.activeTexture(s.TEXTURE0+$);let Me=vt.getPrimaries(vt.workingColorSpace),Ie=C.colorSpace===jn?null:vt.getPrimaries(C.colorSpace),Ye=C.colorSpace===jn||Me===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ot=p(C)&&m(C.image)===!1,de=_(C.image,ot,!1,i.maxTextureSize);de=Xe(C,de);let wt=m(de)||a,ut=r.convert(C.format,C.colorSpace),Je=r.convert(C.type),Ge=b(C.internalFormat,ut,Je,C.colorSpace,C.isVideoTexture);k(le,C,wt);let Ne,st=C.mipmaps,xt=a&&C.isVideoTexture!==!0&&Ge!==id,Ft=Ue.__version===void 0||ce===!0,lt=E(C,de,wt);if(C.isDepthTexture)Ge=s.DEPTH_COMPONENT,a?C.type===Bi?Ge=s.DEPTH_COMPONENT32F:C.type===Ji?Ge=s.DEPTH_COMPONENT24:C.type===Cs?Ge=s.DEPTH24_STENCIL8:Ge=s.DEPTH_COMPONENT16:C.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Ls&&Ge===s.DEPTH_COMPONENT&&C.type!==Wl&&C.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ji,Je=r.convert(C.type)),C.format===Sr&&Ge===s.DEPTH_COMPONENT&&(Ge=s.DEPTH_STENCIL,C.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Cs,Je=r.convert(C.type))),Ft&&(xt?t.texStorage2D(s.TEXTURE_2D,1,Ge,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,Ge,de.width,de.height,0,ut,Je,null));else if(C.isDataTexture)if(st.length>0&&wt){xt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let pe=0,B=st.length;pe<B;pe++)Ne=st[pe],xt?t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,ut,Je,Ne.data):t.texImage2D(s.TEXTURE_2D,pe,Ge,Ne.width,Ne.height,0,ut,Je,Ne.data);C.generateMipmaps=!1}else xt?(Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,ut,Je,de.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,de.width,de.height,0,ut,Je,de.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){xt&&Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ge,st[0].width,st[0].height,de.depth);for(let pe=0,B=st.length;pe<B;pe++)Ne=st[pe],C.format!==Yn?ut!==null?xt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,ut,Ne.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ge,Ne.width,Ne.height,de.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,ut,Je,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ge,Ne.width,Ne.height,de.depth,0,ut,Je,Ne.data)}else{xt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let pe=0,B=st.length;pe<B;pe++)Ne=st[pe],C.format!==Yn?ut!==null?xt?t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,ut,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,ut,Je,Ne.data):t.texImage2D(s.TEXTURE_2D,pe,Ge,Ne.width,Ne.height,0,ut,Je,Ne.data)}else if(C.isDataArrayTexture)xt?(Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ge,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ut,Je,de.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,ut,Je,de.data);else if(C.isData3DTexture)xt?(Ft&&t.texStorage3D(s.TEXTURE_3D,lt,Ge,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ut,Je,de.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,ut,Je,de.data);else if(C.isFramebufferTexture){if(Ft)if(xt)t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height);else{let pe=de.width,B=de.height;for(let xe=0;xe<lt;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ge,pe,B,0,ut,Je,null),pe>>=1,B>>=1}}else if(st.length>0&&wt){xt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let pe=0,B=st.length;pe<B;pe++)Ne=st[pe],xt?t.texSubImage2D(s.TEXTURE_2D,pe,0,0,ut,Je,Ne):t.texImage2D(s.TEXTURE_2D,pe,Ge,ut,Je,Ne);C.generateMipmaps=!1}else xt?(Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Je,de)):t.texImage2D(s.TEXTURE_2D,0,Ge,ut,Je,de);w(C,wt)&&x(le),Ue.__version=fe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function ne(N,C,$){if(C.image.length!==6)return;let le=q(N,C),ce=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);let fe=n.get(ce);if(ce.version!==fe.__version||le===!0){t.activeTexture(s.TEXTURE0+$);let Ue=vt.getPrimaries(vt.workingColorSpace),Me=C.colorSpace===jn?null:vt.getPrimaries(C.colorSpace),Ie=C.colorSpace===jn||Ue===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ye=C.isCompressedTexture||C.image[0].isCompressedTexture,ot=C.image[0]&&C.image[0].isDataTexture,de=[];for(let pe=0;pe<6;pe++)!Ye&&!ot?de[pe]=_(C.image[pe],!1,!0,i.maxCubemapSize):de[pe]=ot?C.image[pe].image:C.image[pe],de[pe]=Xe(C,de[pe]);let wt=de[0],ut=m(wt)||a,Je=r.convert(C.format,C.colorSpace),Ge=r.convert(C.type),Ne=b(C.internalFormat,Je,Ge,C.colorSpace),st=a&&C.isVideoTexture!==!0,xt=fe.__version===void 0||le===!0,Ft=E(C,wt,ut);k(s.TEXTURE_CUBE_MAP,C,ut);let lt;if(Ye){st&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,Ne,wt.width,wt.height);for(let pe=0;pe<6;pe++){lt=de[pe].mipmaps;for(let B=0;B<lt.length;B++){let xe=lt[B];C.format!==Yn?Je!==null?st?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,0,0,xe.width,xe.height,Je,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,0,0,xe.width,xe.height,Je,Ge,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B,Ne,xe.width,xe.height,0,Je,Ge,xe.data)}}}else{lt=C.mipmaps,st&&xt&&(lt.length>0&&Ft++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,Ne,de[0].width,de[0].height));for(let pe=0;pe<6;pe++)if(ot){st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,de[pe].width,de[pe].height,Je,Ge,de[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ne,de[pe].width,de[pe].height,0,Je,Ge,de[pe].data);for(let B=0;B<lt.length;B++){let ye=lt[B].image[pe].image;st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,0,0,ye.width,ye.height,Je,Ge,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,Ne,ye.width,ye.height,0,Je,Ge,ye.data)}}else{st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Ge,de[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ne,Je,Ge,de[pe]);for(let B=0;B<lt.length;B++){let xe=lt[B];st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,0,0,Je,Ge,xe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,B+1,Ne,Je,Ge,xe.image[pe])}}}w(C,ut)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ce.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function ae(N,C,$,le,ce,fe){let Ue=r.convert($.format,$.colorSpace),Me=r.convert($.type),Ie=b($.internalFormat,Ue,Me,$.colorSpace);if(!n.get(C).__hasExternalTextures){let ot=Math.max(1,C.width>>fe),de=Math.max(1,C.height>>fe);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,fe,Ie,ot,de,C.depth,0,Ue,Me,null):t.texImage2D(ce,fe,Ie,ot,de,0,Ue,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Te(C)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,ce,n.get($).__webglTexture,0,Ve(C)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,ce,n.get($).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(N,C,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),C.depthBuffer&&!C.stencilBuffer){let le=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||Te(C)){let ce=C.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Bi?le=s.DEPTH_COMPONENT32F:ce.type===Ji&&(le=s.DEPTH_COMPONENT24));let fe=Ve(C);Te(C)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,le,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,le,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,le,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(C.depthBuffer&&C.stencilBuffer){let le=Ve(C);$&&Te(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,C.width,C.height):Te(C)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let le=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0;ce<le.length;ce++){let fe=le[ce],Ue=r.convert(fe.format,fe.colorSpace),Me=r.convert(fe.type),Ie=b(fe.internalFormat,Ue,Me,fe.colorSpace),Ye=Ve(C);$&&Te(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ie,C.width,C.height):Te(C)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Ie,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);let le=n.get(C.depthTexture).__webglTexture,ce=Ve(C);if(C.depthTexture.format===Ls)Te(C)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(C.depthTexture.format===Sr)Te(C)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ue(N){let C=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Be(C.__webglFramebuffer,N)}else if($){C.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[le]),C.__webglDepthbuffer[le]=s.createRenderbuffer(),_e(C.__webglDepthbuffer[le],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),_e(C.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(N,C,$){let le=n.get(N);C!==void 0&&ae(le.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ue(N)}function z(N){let C=N.texture,$=n.get(N),le=n.get(C);N.addEventListener("dispose",O),N.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=C.version,o.memory.textures++);let ce=N.isWebGLCubeRenderTarget===!0,fe=N.isWebGLMultipleRenderTargets===!0,Ue=m(N)||a;if(ce){$.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[Me]=[];for(let Ie=0;Ie<C.mipmaps.length;Ie++)$.__webglFramebuffer[Me][Ie]=s.createFramebuffer()}else $.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let Me=0;Me<C.mipmaps.length;Me++)$.__webglFramebuffer[Me]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(fe)if(i.drawBuffers){let Me=N.texture;for(let Ie=0,Ye=Me.length;Ie<Ye;Ie++){let ot=n.get(Me[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Te(N)===!1){let Me=fe?C:[C];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Me.length;Ie++){let Ye=Me[Ie];$.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ie]);let ot=r.convert(Ye.format,Ye.colorSpace),de=r.convert(Ye.type),wt=b(Ye.internalFormat,ot,de,Ye.colorSpace,N.isXRRenderTarget===!0),ut=Ve(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,wt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),_e($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),k(s.TEXTURE_CUBE_MAP,C,Ue);for(let Me=0;Me<6;Me++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let Ie=0;Ie<C.mipmaps.length;Ie++)ae($.__webglFramebuffer[Me][Ie],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ie);else ae($.__webglFramebuffer[Me],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);w(C,Ue)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){let Me=N.texture;for(let Ie=0,Ye=Me.length;Ie<Ye;Ie++){let ot=Me[Ie],de=n.get(ot);t.bindTexture(s.TEXTURE_2D,de.__webglTexture),k(s.TEXTURE_2D,ot,Ue),ae($.__webglFramebuffer,N,ot,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),w(ot,Ue)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Me=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,le.__webglTexture),k(Me,C,Ue),a&&C.mipmaps&&C.mipmaps.length>0)for(let Ie=0;Ie<C.mipmaps.length;Ie++)ae($.__webglFramebuffer[Ie],N,C,s.COLOR_ATTACHMENT0,Me,Ie);else ae($.__webglFramebuffer,N,C,s.COLOR_ATTACHMENT0,Me,0);w(C,Ue)&&x(Me),t.unbindTexture()}N.depthBuffer&&ue(N)}function Lt(N){let C=m(N)||a,$=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let le=0,ce=$.length;le<ce;le++){let fe=$[le];if(w(fe,C)){let Ue=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=n.get(fe).__webglTexture;t.bindTexture(Ue,Me),x(Ue),t.unbindTexture()}}}function Ee(N){if(a&&N.samples>0&&Te(N)===!1){let C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],$=N.width,le=N.height,ce=s.COLOR_BUFFER_BIT,fe=[],Ue=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(N),Ie=N.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ye=0;Ye<C.length;Ye++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ye=0;Ye<C.length;Ye++){fe.push(s.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&fe.push(Ue);let ot=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ot===!1&&(N.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),Ie){let de=n.get(C[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,$,le,0,0,$,le,ce,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<C.length;Ye++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]);let ot=n.get(C[Ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Ve(N){return Math.min(i.maxSamples,N.samples)}function Te(N){let C=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ct(N){let C=o.render.frame;h.get(N)!==C&&(h.set(N,C),N.update())}function Xe(N,C){let $=N.colorSpace,le=N.format,ce=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===hl||$!==sn&&$!==jn&&(vt.getTransfer($)===kt?a===!1?e.has("EXT_sRGB")===!0&&le===Yn?(N.format=hl,N.minFilter=dn,N.generateMipmaps=!1):C=Ta.sRGBToLinear(C):(le!==Yn||ce!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}this.allocateTextureUnit=F,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=ee,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Le,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Te}function fy(s,e,t){let n=t.isWebGL2;function i(r,o=jn){let a,c=vt.getTransfer(o);if(r===ns)return s.UNSIGNED_BYTE;if(r===Jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xp)return s.BYTE;if(r===qp)return s.SHORT;if(r===Wl)return s.UNSIGNED_SHORT;if(r===Zf)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ho)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Yp)return s.ALPHA;if(r===Yn)return s.RGBA;if(r===jp)return s.LUMINANCE;if(r===$p)return s.LUMINANCE_ALPHA;if(r===Ls)return s.DEPTH_COMPONENT;if(r===Sr)return s.DEPTH_STENCIL;if(r===hl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kp)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===Zp)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Tc||r===Ac||r===Rc||r===Cc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cu||r===lu||r===hu||r===uu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fu||r===du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fu)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===du)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pu||r===mu||r===gu||r===_u||r===xu||r===yu||r===vu||r===Mu||r===bu||r===wu||r===Su||r===Eu||r===Tu||r===Au)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_u)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Su)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Au)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lc||r===Ru||r===Cu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Lc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jp||r===Lu||r===Pu||r===Iu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Lc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Iu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Sl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dy={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},El=class extends is{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,w=[],x=[],b=new He,E=null,M=new Ht;M.layers.enable(1),M.viewport=new mt;let T=new Ht;T.layers.enable(2),T.viewport=new mt;let O=[M,T],S=new Sl;S.layers.enable(1),S.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=w[k];return q===void 0&&(q=new co,w[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=w[k];return q===void 0&&(q=new co,w[k]=q),q.getGripSpace()},this.getHand=function(k){let q=w[k];return q===void 0&&(q=new co,w[k]=q),q.getHandSpace()};function Y(k){let q=x.indexOf(k.inputSource);if(q===-1)return;let se=w[q];se!==void 0&&(se.update(k.inputSource,k.frame,l||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",F);for(let k=0;k<w.length;k++){let q=x[k];q!==null&&(x[k]=null,w[k].disconnect(q))}R=null,H=null,e.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",j),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new zi(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,se=null,ne=null;_.depth&&(ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Sr:Ls,se=_.stencil?Cs:Ji);let ae={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new zi(f.textureWidth,f.textureHeight,{format:Yn,type:ns,depthTexture:new Ia(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let _e=e.properties.get(p);_e.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(k){for(let q=0;q<k.removed.length;q++){let se=k.removed[q],ne=x.indexOf(se);ne>=0&&(x[ne]=null,w[ne].disconnect(se))}for(let q=0;q<k.added.length;q++){let se=k.added[q],ne=x.indexOf(se);if(ne===-1){for(let _e=0;_e<w.length;_e++)if(_e>=x.length){x.push(se),ne=_e;break}else if(x[_e]===null){x[_e]=se,ne=_e;break}if(ne===-1)break}let ae=w[ne];ae&&ae.connect(se)}}let V=new D,U=new D;function ee(k,q,se){V.setFromMatrixPosition(q.matrixWorld),U.setFromMatrixPosition(se.matrixWorld);let ne=V.distanceTo(U),ae=q.projectionMatrix.elements,_e=se.projectionMatrix.elements,Be=ae[14]/(ae[10]-1),ue=ae[14]/(ae[10]+1),Le=(ae[9]+1)/ae[5],z=(ae[9]-1)/ae[5],Lt=(ae[8]-1)/ae[0],Ee=(_e[8]+1)/_e[0],Ve=Be*Lt,Te=Be*Ee,ct=ne/(-Lt+Ee),Xe=ct*-Lt;q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(ct),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let N=Be+ct,C=ue+ct,$=Ve-Xe,le=Te+(ne-Xe),ce=Le*ue/C*N,fe=z*ue/C*N;k.projectionMatrix.makePerspective($,le,ce,fe,N,C),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=T.near=M.near=k.near,S.far=T.far=M.far=k.far,(R!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far);let q=k.parent,se=S.cameras;W(S,q);for(let ne=0;ne<se.length;ne++)W(se[ne],q);se.length===2?ee(S,M,T):S.projectionMatrix.copy(M.projectionMatrix),G(k,S,q)};function G(k,q,se){se===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Tr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let Z=null;function te(k,q){if(h=q.getViewerPose(l||o),g=q,h!==null){let se=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ne=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let ae=0;ae<se.length;ae++){let _e=se[ae],Be=null;if(d!==null)Be=d.getViewport(_e);else{let Le=u.getViewSubImage(f,_e);Be=Le.viewport,ae===0&&(e.setRenderTargetTextures(p,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let ue=O[ae];ue===void 0&&(ue=new Ht,ue.layers.enable(ae),ue.viewport=new mt,O[ae]=ue),ue.matrix.fromArray(_e.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(_e.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Be.x,Be.y,Be.width,Be.height),ae===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(ue)}}for(let se=0;se<w.length;se++){let ne=x[se],ae=w[se];ne!==null&&ae!==void 0&&ae.update(ne,q,l||o)}Z&&Z(k,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let re=new hd;re.setAnimationLoop(te),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}};function py(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function my(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,x){let b=x.program;n.uniformBlockBinding(w,b)}function l(w,x){let b=i[w.id];b===void 0&&(g(w),b=h(w),i[w.id]=b,w.addEventListener("dispose",m));let E=x.program;n.updateUBOMapping(w,E);let M=e.render.frame;r[w.id]!==M&&(f(w),r[w.id]=M)}function h(w){let x=u();w.__bindingPointIndex=x;let b=s.createBuffer(),E=w.__size,M=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,E,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,b),b}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let x=i[w.id],b=w.uniforms,E=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,T=b.length;M<T;M++){let O=Array.isArray(b[M])?b[M]:[b[M]];for(let S=0,R=O.length;S<R;S++){let H=O[S];if(d(H,M,S,E)===!0){let Y=H.__offset,j=Array.isArray(H.value)?H.value:[H.value],F=0;for(let V=0;V<j.length;V++){let U=j[V],ee=_(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,Y+F,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,x,b,E){let M=w.value,T=x+"_"+b;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{let O=E[T];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return E[T]=M,!0}else if(O.equals(M)===!1)return O.copy(M),!0}return!1}function g(w){let x=w.uniforms,b=0,E=16;for(let T=0,O=x.length;T<O;T++){let S=Array.isArray(x[T])?x[T]:[x[T]];for(let R=0,H=S.length;R<H;R++){let Y=S[R],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,V=j.length;F<V;F++){let U=j[F],ee=_(U),W=b%E;W!==0&&E-W<ee.boundary&&(b+=E-W),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=ee.storage}}}let M=b%E;return M>0&&(b+=E-M),w.__size=b,w.__cache={},this}function _(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){let x=w.target;x.removeEventListener("dispose",m);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var mo=class{constructor(e={}){let{canvas:t=Sm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let x=this,b=!1,E=0,M=0,T=null,O=-1,S=null,R=new mt,H=new mt,Y=null,j=new we(0),F=0,V=t.width,U=t.height,ee=1,W=null,G=null,Z=new mt(0,0,V,U),te=new mt(0,0,V,U),re=!1,k=new po,q=!1,se=!1,ne=null,ae=new ve,_e=new He,Be=new D,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?ee:1}let z=n;function Lt(I,X){for(let J=0;J<I.length;J++){let ie=I[J],K=t.getContext(ie,X);if(K!==null)return K}return null}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",xe,!1),z===null){let X=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&X.shift(),z=Lt(X,I),z===null)throw Lt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ee,Ve,Te,ct,Xe,N,C,$,le,ce,fe,Ue,Me,Ie,Ye,ot,de,wt,ut,Je,Ge,Ne,st,xt;function Ft(){Ee=new D_(z),Ve=new R_(z,Ee,e),Ee.init(Ve),Ne=new fy(z,Ee,Ve),Te=new hy(z,Ee,Ve),ct=new F_(z),Xe=new Jx,N=new uy(z,Ee,Te,Xe,Ve,Ne,ct),C=new L_(x),$=new N_(x),le=new Xm(z,Ve),st=new T_(z,Ee,le,Ve),ce=new U_(z,le,ct,st),fe=new H_(z,ce,le,ct),ut=new z_(z,Ve,N),ot=new C_(Xe),Ue=new Zx(x,C,$,Ee,Ve,st,ot),Me=new py(x,Xe),Ie=new ey,Ye=new oy(Ee,Ve),wt=new E_(x,C,$,Te,fe,f,c),de=new ly(x,fe,Ve),xt=new my(z,ct,Ve,Te),Je=new A_(z,Ee,ct,Ve),Ge=new O_(z,Ee,ct,Ve),ct.programs=Ue.programs,x.capabilities=Ve,x.extensions=Ee,x.properties=Xe,x.renderLists=Ie,x.shadowMap=de,x.state=Te,x.info=ct}Ft();let lt=new El(x,z);this.xr=lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let I=Ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(I){I!==void 0&&(ee=I,this.setSize(V,U,!1))},this.getSize=function(I){return I.set(V,U)},this.setSize=function(I,X,J=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=I,U=X,t.width=Math.floor(I*ee),t.height=Math.floor(X*ee),J===!0&&(t.style.width=I+"px",t.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(V*ee,U*ee).floor()},this.setDrawingBufferSize=function(I,X,J){V=I,U=X,ee=J,t.width=Math.floor(I*J),t.height=Math.floor(X*J),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(Z)},this.setViewport=function(I,X,J,ie){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,X,J,ie),Te.viewport(R.copy(Z).multiplyScalar(ee).floor())},this.getScissor=function(I){return I.copy(te)},this.setScissor=function(I,X,J,ie){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,X,J,ie),Te.scissor(H.copy(te).multiplyScalar(ee).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(I){Te.setScissorTest(re=I)},this.setOpaqueSort=function(I){W=I},this.setTransparentSort=function(I){G=I},this.getClearColor=function(I){return I.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(I=!0,X=!0,J=!0){let ie=0;if(I){let K=!1;if(T!==null){let Ae=T.texture.format;K=Ae===nd||Ae===td||Ae===ed}if(K){let Ae=T.texture.type,Re=Ae===ns||Ae===Ji||Ae===Wl||Ae===Cs||Ae===Jf||Ae===Qf,ke=wt.getClearColor(),je=wt.getClearAlpha(),rt=ke.r,et=ke.g,tt=ke.b;Re?(d[0]=rt,d[1]=et,d[2]=tt,d[3]=je,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=rt,g[1]=et,g[2]=tt,g[3]=je,z.clearBufferiv(z.COLOR,0,g))}else ie|=z.COLOR_BUFFER_BIT}X&&(ie|=z.DEPTH_BUFFER_BIT),J&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ie.dispose(),Ye.dispose(),Xe.dispose(),C.dispose(),$.dispose(),fe.dispose(),st.dispose(),xt.dispose(),Ue.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",hn),lt.removeEventListener("sessionend",It),ne&&(ne.dispose(),ne=null),xn.stop()};function pe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let I=ct.autoReset,X=de.enabled,J=de.autoUpdate,ie=de.needsUpdate,K=de.type;Ft(),ct.autoReset=I,de.enabled=X,de.autoUpdate=J,de.needsUpdate=ie,de.type=K}function xe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ye(I){let X=I.target;X.removeEventListener("dispose",ye),Ze(X)}function Ze(I){qe(I),Xe.remove(I)}function qe(I){let X=Xe.get(I).programs;X!==void 0&&(X.forEach(function(J){Ue.releaseProgram(J)}),I.isShaderMaterial&&Ue.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,J,ie,K,Ae){X===null&&(X=ue);let Re=K.isMesh&&K.matrixWorld.determinant()<0,ke=bc(I,X,J,ie,K);Te.setMaterial(ie,Re);let je=J.index,rt=1;if(ie.wireframe===!0){if(je=ce.getWireframeAttribute(J),je===void 0)return;rt=2}let et=J.drawRange,tt=J.attributes.position,Gt=et.start*rt,En=(et.start+et.count)*rt;Ae!==null&&(Gt=Math.max(Gt,Ae.start*rt),En=Math.min(En,(Ae.start+Ae.count)*rt)),je!==null?(Gt=Math.max(Gt,0),En=Math.min(En,je.count)):tt!=null&&(Gt=Math.max(Gt,0),En=Math.min(En,tt.count));let Qt=En-Gt;if(Qt<0||Qt===1/0)return;st.setup(K,ie,ke,J,je);let Xn,Ut=Je;if(je!==null&&(Xn=le.get(je),Ut=Ge,Ut.setIndex(Xn)),K.isMesh)ie.wireframe===!0?(Te.setLineWidth(ie.wireframeLinewidth*Le()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(K.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Te.setLineWidth(Qe*Le()),K.isLineSegments?Ut.setMode(z.LINES):K.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else K.isPoints?Ut.setMode(z.POINTS):K.isSprite&&Ut.setMode(z.TRIANGLES);if(K.isBatchedMesh)Ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Ut.renderInstances(Gt,Qt,K.count);else if(J.isInstancedBufferGeometry){let Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Gr=Math.min(J.instanceCount,Qe);Ut.renderInstances(Gt,Qt,Gr)}else Ut.render(Gt,Qt)};function Et(I,X,J){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=mn,I.needsUpdate=!0,Ys(I,X,J),I.side=$n,I.needsUpdate=!0,Ys(I,X,J),I.side=yn):Ys(I,X,J)}this.compile=function(I,X,J=null){J===null&&(J=I),m=Ye.get(J),m.init(),w.push(m),J.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),I!==J&&I.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);let ie=new Set;return I.traverse(function(K){let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Re=0;Re<Ae.length;Re++){let ke=Ae[Re];Et(ke,J,K),ie.add(ke)}else Et(Ae,J,K),ie.add(Ae)}),w.pop(),m=null,ie},this.compileAsync=function(I,X,J=null){let ie=this.compile(I,X,J);return new Promise(K=>{function Ae(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){K(I);return}setTimeout(Ae,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Pt=null;function St(I){Pt&&Pt(I)}function hn(){xn.stop()}function It(){xn.start()}let xn=new hd;xn.setAnimationLoop(St),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(I){Pt=I,lt.setAnimationLoop(I),I===null?xn.stop():xn.start()},lt.addEventListener("sessionstart",hn),lt.addEventListener("sessionend",It),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,X,T),m=Ye.get(I,w.length),m.init(),w.push(m),ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k.setFromProjectionMatrix(ae),se=this.localClippingEnabled,q=ot.init(this.clippingPlanes,se),_=Ie.get(I,p.length),_.init(),p.push(_),Wn(I,X,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,G),this.info.render.frame++,q===!0&&ot.beginShadows();let J=m.state.shadowsArray;if(de.render(J,I,X),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(_,I),m.setupLights(x._useLegacyLights),X.isArrayCamera){let ie=X.cameras;for(let K=0,Ae=ie.length;K<Ae;K++){let Re=ie[K];Do(_,I,Re,Re.viewport)}}else Do(_,I,X);T!==null&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(x,I,X),st.resetDefaultState(),O=-1,S=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Wn(I,X,J,ie){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||k.intersectsSprite(I)){ie&&Be.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ae);let Re=fe.update(I),ke=I.material;ke.visible&&_.push(I,Re,ke,J,Be.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||k.intersectsObject(I))){let Re=fe.update(I),ke=I.material;if(ie&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Be.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Be.copy(Re.boundingSphere.center)),Be.applyMatrix4(I.matrixWorld).applyMatrix4(ae)),Array.isArray(ke)){let je=Re.groups;for(let rt=0,et=je.length;rt<et;rt++){let tt=je[rt],Gt=ke[tt.materialIndex];Gt&&Gt.visible&&_.push(I,Re,Gt,J,Be.z,tt)}}else ke.visible&&_.push(I,Re,ke,J,Be.z,null)}}let Ae=I.children;for(let Re=0,ke=Ae.length;Re<ke;Re++)Wn(Ae[Re],X,J,ie)}function Do(I,X,J,ie){let K=I.opaque,Ae=I.transmissive,Re=I.transparent;m.setupLightsView(J),q===!0&&ot.setGlobalState(x.clippingPlanes,J),Ae.length>0&&Mc(K,Ae,X,J),ie&&Te.viewport(R.copy(ie)),K.length>0&&qs(K,X,J),Ae.length>0&&qs(Ae,X,J),Re.length>0&&qs(Re,X,J),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Mc(I,X,J,ie){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Ae=Ve.isWebGL2;ne===null&&(ne=new zi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ho:ns,minFilter:di,samples:Ae?4:0})),x.getDrawingBufferSize(_e),Ae?ne.setSize(_e.x,_e.y):ne.setSize(Ea(_e.x),Ea(_e.y));let Re=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(j),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();let ke=x.toneMapping;x.toneMapping=ts,qs(I,J,ie),N.updateMultisampleRenderTarget(ne),N.updateRenderTargetMipmap(ne);let je=!1;for(let rt=0,et=X.length;rt<et;rt++){let tt=X[rt],Gt=tt.object,En=tt.geometry,Qt=tt.material,Xn=tt.group;if(Qt.side===yn&&Gt.layers.test(ie.layers)){let Ut=Qt.side;Qt.side=mn,Qt.needsUpdate=!0,Hr(Gt,J,ie,En,Qt,Xn),Qt.side=Ut,Qt.needsUpdate=!0,je=!0}}je===!0&&(N.updateMultisampleRenderTarget(ne),N.updateRenderTargetMipmap(ne)),x.setRenderTarget(Re),x.setClearColor(j,F),x.toneMapping=ke}function qs(I,X,J){let ie=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ae=I.length;K<Ae;K++){let Re=I[K],ke=Re.object,je=Re.geometry,rt=ie===null?Re.material:ie,et=Re.group;ke.layers.test(J.layers)&&Hr(ke,X,J,je,rt,et)}}function Hr(I,X,J,ie,K,Ae){I.onBeforeRender(x,X,J,ie,K,Ae),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(x,X,J,ie,I,Ae),K.transparent===!0&&K.side===yn&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,x.renderBufferDirect(J,X,ie,K,I,Ae),K.side=$n,K.needsUpdate=!0,x.renderBufferDirect(J,X,ie,K,I,Ae),K.side=yn):x.renderBufferDirect(J,X,ie,K,I,Ae),I.onAfterRender(x,X,J,ie,K,Ae)}function Ys(I,X,J){X.isScene!==!0&&(X=ue);let ie=Xe.get(I),K=m.state.lights,Ae=m.state.shadowsArray,Re=K.state.version,ke=Ue.getParameters(I,K.state,Ae,X,J),je=Ue.getProgramCacheKey(ke),rt=ie.programs;ie.environment=I.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(I.isMeshStandardMaterial?$:C).get(I.envMap||ie.environment),rt===void 0&&(I.addEventListener("dispose",ye),rt=new Map,ie.programs=rt);let et=rt.get(je);if(et!==void 0){if(ie.currentProgram===et&&ie.lightsStateVersion===Re)return Uo(I,ke),et}else ke.uniforms=Ue.getUniforms(I),I.onBuild(J,ke,x),I.onBeforeCompile(ke,x),et=Ue.acquireProgram(ke,je),rt.set(je,et),ie.uniforms=ke.uniforms;let tt=ie.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(tt.clippingPlanes=ot.uniform),Uo(I,ke),ie.needsLights=Sc(I),ie.lightsStateVersion=Re,ie.needsLights&&(tt.ambientLightColor.value=K.state.ambient,tt.lightProbe.value=K.state.probe,tt.directionalLights.value=K.state.directional,tt.directionalLightShadows.value=K.state.directionalShadow,tt.spotLights.value=K.state.spot,tt.spotLightShadows.value=K.state.spotShadow,tt.rectAreaLights.value=K.state.rectArea,tt.ltc_1.value=K.state.rectAreaLTC1,tt.ltc_2.value=K.state.rectAreaLTC2,tt.pointLights.value=K.state.point,tt.pointLightShadows.value=K.state.pointShadow,tt.hemisphereLights.value=K.state.hemi,tt.directionalShadowMap.value=K.state.directionalShadowMap,tt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,tt.spotShadowMap.value=K.state.spotShadowMap,tt.spotLightMatrix.value=K.state.spotLightMatrix,tt.spotLightMap.value=K.state.spotLightMap,tt.pointShadowMap.value=K.state.pointShadowMap,tt.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=et,ie.uniformsList=null,et}function Vr(I){if(I.uniformsList===null){let X=I.currentProgram.getUniforms();I.uniformsList=Mr.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function Uo(I,X){let J=Xe.get(I);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function bc(I,X,J,ie,K){X.isScene!==!0&&(X=ue),N.resetTextureUnits();let Ae=X.fog,Re=ie.isMeshStandardMaterial?X.environment:null,ke=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,je=(ie.isMeshStandardMaterial?$:C).get(ie.envMap||Re),rt=ie.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),tt=!!J.morphAttributes.position,Gt=!!J.morphAttributes.normal,En=!!J.morphAttributes.color,Qt=ts;ie.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Qt=x.toneMapping);let Xn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ut=Xn!==void 0?Xn.length:0,Qe=Xe.get(ie),Gr=m.state.lights;if(q===!0&&(se===!0||I!==S)){let Mn=I===S&&ie.id===O;ot.setState(ie,I,Mn)}let Bt=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Gr.state.version||Qe.outputColorSpace!==ke||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||Qe.envMap!==je||ie.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ot.numPlanes||Qe.numIntersection!==ot.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==et||Qe.morphTargets!==tt||Qe.morphNormals!==Gt||Qe.morphColors!==En||Qe.toneMapping!==Qt||Ve.isWebGL2===!0&&Qe.morphTargetsCount!==Ut)&&(Bt=!0):(Bt=!0,Qe.__version=ie.version);let Ri=Qe.currentProgram;Bt===!0&&(Ri=Ys(ie,X,K));let Wr=!1,vs=!1,Xr=!1,un=Ri.getUniforms(),yi=Qe.uniforms;if(Te.useProgram(Ri.program)&&(Wr=!0,vs=!0,Xr=!0),ie.id!==O&&(O=ie.id,vs=!0),Wr||S!==I){un.setValue(z,"projectionMatrix",I.projectionMatrix),un.setValue(z,"viewMatrix",I.matrixWorldInverse);let Mn=un.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,Be.setFromMatrixPosition(I.matrixWorld)),Ve.logarithmicDepthBuffer&&un.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&un.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,vs=!0,Xr=!0)}if(K.isSkinnedMesh){un.setOptional(z,K,"bindMatrix"),un.setOptional(z,K,"bindMatrixInverse");let Mn=K.skeleton;Mn&&(Ve.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),un.setValue(z,"boneTexture",Mn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(un.setOptional(z,K,"batchingTexture"),un.setValue(z,"batchingTexture",K._matricesTexture,N));let Wt=J.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0&&Ve.isWebGL2===!0)&&ut.update(K,J,Ri),(vs||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,un.setValue(z,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(yi.envMap.value=je,yi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),vs&&(un.setValue(z,"toneMappingExposure",x.toneMappingExposure),Qe.needsLights&&wc(yi,Xr),Ae&&ie.fog===!0&&Me.refreshFogUniforms(yi,Ae),Me.refreshMaterialUniforms(yi,ie,ee,U,ne),Mr.upload(z,Vr(Qe),yi,N)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Mr.upload(z,Vr(Qe),yi,N),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&un.setValue(z,"center",K.center),un.setValue(z,"modelViewMatrix",K.modelViewMatrix),un.setValue(z,"normalMatrix",K.normalMatrix),un.setValue(z,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Mn=ie.uniformsGroups;for(let qr=0,Oo=Mn.length;qr<Oo;qr++)if(Ve.isWebGL2){let Yr=Mn[qr];xt.update(Yr,Ri),xt.bind(Yr,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function wc(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Sc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,X,J){Xe.get(I.texture).__webglTexture=X,Xe.get(I.depthTexture).__webglTexture=J;let ie=Xe.get(I);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=J===void 0,ie.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,X){let J=Xe.get(I);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,J=0){T=I,E=X,M=J;let ie=!0,K=null,Ae=!1,Re=!1;if(I){let je=Xe.get(I);je.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(z.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?N.setupRenderTarget(I):je.__hasExternalTextures&&N.rebindTextures(I,Xe.get(I.texture).__webglTexture,Xe.get(I.depthTexture).__webglTexture);let rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Re=!0);let et=Xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(et[X])?K=et[X][J]:K=et[X],Ae=!0):Ve.isWebGL2&&I.samples>0&&N.useMultisampledRTT(I)===!1?K=Xe.get(I).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[J]:K=et,R.copy(I.viewport),H.copy(I.scissor),Y=I.scissorTest}else R.copy(Z).multiplyScalar(ee).floor(),H.copy(te).multiplyScalar(ee).floor(),Y=re;if(Te.bindFramebuffer(z.FRAMEBUFFER,K)&&Ve.drawBuffers&&ie&&Te.drawBuffers(I,K),Te.viewport(R),Te.scissor(H),Te.setScissorTest(Y),Ae){let je=Xe.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,je.__webglTexture,J)}else if(Re){let je=Xe.get(I.texture),rt=X||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,J||0,rt)}O=-1},this.readRenderTargetPixels=function(I,X,J,ie,K,Ae,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){Te.bindFramebuffer(z.FRAMEBUFFER,ke);try{let je=I.texture,rt=je.format,et=je.type;if(rt!==Yn&&Ne.convert(rt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=et===ho&&(Ee.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(et!==ns&&Ne.convert(et)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===Bi&&(Ve.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-ie&&J>=0&&J<=I.height-K&&z.readPixels(X,J,ie,K,Ne.convert(rt),Ne.convert(et),Ae)}finally{let je=T!==null?Xe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(I,X,J=0){let ie=Math.pow(2,-J),K=Math.floor(X.image.width*ie),Ae=Math.floor(X.image.height*ie);N.setTexture2D(X,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,I.x,I.y,K,Ae),Te.unbindTexture()},this.copyTextureToTexture=function(I,X,J,ie=0){let K=X.image.width,Ae=X.image.height,Re=Ne.convert(J.format),ke=Ne.convert(J.type);N.setTexture2D(J,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ie,I.x,I.y,K,Ae,Re,ke,X.image.data):X.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ie,I.x,I.y,X.mipmaps[0].width,X.mipmaps[0].height,Re,X.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,ie,I.x,I.y,Re,ke,X.image),ie===0&&J.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(I,X,J,ie,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=I.max.x-I.min.x+1,Re=I.max.y-I.min.y+1,ke=I.max.z-I.min.z+1,je=Ne.convert(ie.format),rt=Ne.convert(ie.type),et;if(ie.isData3DTexture)N.setTexture3D(ie,0),et=z.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)N.setTexture2DArray(ie,0),et=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ie.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ie.unpackAlignment);let tt=z.getParameter(z.UNPACK_ROW_LENGTH),Gt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),En=z.getParameter(z.UNPACK_SKIP_PIXELS),Qt=z.getParameter(z.UNPACK_SKIP_ROWS),Xn=z.getParameter(z.UNPACK_SKIP_IMAGES),Ut=J.isCompressedTexture?J.mipmaps[K]:J.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),J.isDataTexture||J.isData3DTexture?z.texSubImage3D(et,K,X.x,X.y,X.z,Ae,Re,ke,je,rt,Ut.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(et,K,X.x,X.y,X.z,Ae,Re,ke,je,Ut.data)):z.texSubImage3D(et,K,X.x,X.y,X.z,Ae,Re,ke,je,rt,Ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,tt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,En),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xn),K===0&&ie.generateMipmaps&&z.generateMipmap(et),Te.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Te.unbindTexture()},this.resetState=function(){E=0,M=0,T=null,Te.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xl?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?Ps:rd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ps?it:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Tl=class extends mo{};Tl.prototype.isWebGL1Renderer=!0;var ss=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new D,Us=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},go=class extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,Jr=new D,fr=new D,dr=new D,pr=new He,Qr=new He,gd=new ve,ca=new D,eo=new D,la=new D,wf=new He,el=new He,Sf=new He,Na=class extends Dt{constructor(e=new go){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Us(n,3,0,!1)),ur.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-dr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ha(ca.set(-.5,-.5,0),dr,o,fr,i,r),ha(eo.set(.5,-.5,0),dr,o,fr,i,r),ha(la.set(.5,.5,0),dr,o,fr,i,r),wf.set(0,0),el.set(1,0),Sf.set(1,1);let a=e.ray.intersectTriangle(ca,eo,la,!1,Jr);if(a===null&&(ha(eo.set(-.5,.5,0),dr,o,fr,i,r),el.set(0,1),a=e.ray.intersectTriangle(ca,la,eo,!1,Jr),a===null))return;let c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:Rs.getInterpolation(Jr,ca,eo,la,wf,el,Sf,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(s,e,t,n,i,r){pr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qr.x=r*pr.x-i*pr.y,Qr.y=i*pr.x+r*pr.y):Qr.copy(pr),s.copy(e),s.x+=Qr.x,s.y+=Qr.y,s.applyMatrix4(gd)}var Ef=new D,Tf=new mt,Af=new mt,gy=new D,Rf=new ve,ua=new D,tl=new zn,Cf=new ve,nl=new Ds,rs=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new ve,this.bindMatrixInverse=new ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new At),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1&&(Cf.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Cf),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Tf.fromBufferAttribute(i.attributes.skinIndex,e),Af.fromBufferAttribute(i.attributes.skinWeight,e),Ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Af.getComponent(r);if(o!==0){let a=Tf.getComponent(r);Rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gy.copy(Ef).applyMatrix4(Rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},wi=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Da=class extends Zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=new ve,_y=new ve,os=class s{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_y;Lf.multiplyMatrices(a,t[r]),Lf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Da(t,e,e,Yn,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wi),this.bones.push(o),this.boneInverses.push(new ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Os=class extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new ve,Pf=new ve,fa=[],If=new At,xy=new ve,to=new Pe,no=new zn,Ua=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new At),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),If.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(If)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),no.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mr),Pf.multiplyMatrices(n,mr),to.matrixWorld=Pf,to.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){let c=fa[o];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Sn=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nf=new D,Df=new D,Uf=new ve,il=new Ds,da=new zn,Zn=class extends Dt{constructor(e=new Rt,t=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nf.fromBufferAttribute(t,i-1),Df.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nf.distanceTo(Df);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Uf.copy(i).invert(),il.copy(e.ray).applyMatrix4(Uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let x=p,b=w-1;x<b;x+=d){let E=g.getX(x),M=g.getX(x+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,M),il.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let x=p,b=w-1;x<b;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),il.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Of=new D,Ff=new D,Gi=class extends Zn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Of.fromBufferAttribute(t,i),Ff.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Of.distanceTo(Ff);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends Zn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Si=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bf=new ve,Al=new Ds,pa=new zn,ma=new D,as=class extends Dt{constructor(e=new Rt,t=new Si){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Bf.copy(i).invert(),Al.copy(e.ray).applyMatrix4(Bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=l.getX(g);ma.fromBufferAttribute(u,m),kf(ma,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ma.fromBufferAttribute(u,g),kf(ma,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kf(s,e,t,n,i,r,o){let a=Al.distanceSqToPoint(s);if(a<t){let c=new D;Al.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Wi=class extends Zt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new He:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],o=[],a=new D,c=new ve;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(pn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var Ba=class s extends Rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cn=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function w(){let b=new D,E=new D,M=0,T=(t-e)/n;for(let O=0;O<=r;O++){let S=[],R=O/r,H=R*(t-e)+e;for(let Y=0;Y<=i;Y++){let j=Y/i,F=j*c+a,V=Math.sin(F),U=Math.cos(F);E.x=H*V,E.y=-R*n+m,E.z=H*U,u.push(E.x,E.y,E.z),b.set(V,T,U).normalize(),f.push(b.x,b.y,b.z),d.push(j,1-R),S.push(g++)}_.push(S)}for(let O=0;O<i;O++)for(let S=0;S<r;S++){let R=_[S][O],H=_[S+1][O],Y=_[S+1][O+1],j=_[S][O+1];h.push(R,H,j),h.push(H,Y,j),M+=6}l.addGroup(p,M,0),p+=M}function x(b){let E=g,M=new He,T=new D,O=0,S=b===!0?e:t,R=b===!0?1:-1;for(let Y=1;Y<=i;Y++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;let H=g;for(let Y=0;Y<=i;Y++){let F=Y/i*c+a,V=Math.cos(F),U=Math.sin(F);T.x=S*U,T.y=m*R,T.z=S*V,u.push(T.x,T.y,T.z),f.push(0,R,0),M.x=V*.5+.5,M.y=U*.5*R+.5,d.push(M.x,M.y),g++}for(let Y=0;Y<i;Y++){let j=E+Y,F=H+Y;b===!0?h.push(F,F+1,j):h.push(F+1,F,j),O+=3}l.addGroup(p,O,b===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yy={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=_d(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Sy(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return _o(r,o,t,a,c,d,0),o}};function _d(s,e,t,n,i){let r,o;if(i===Uy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=zf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=zf(r,s[r],s[r+1],o);return o&&Qa(o,o.next)&&(yo(o),o=o.next),o}function Fs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Qa(t,t.next)||qt(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Cy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?My(s,n,i,r):vy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=by(Fs(s),e,t),_o(s,e,t,n,i,r,2)):o===2&&wy(s,e,t,n,i,r):_o(Fs(s),e,t,n,i,r,1);break}}}function vy(s){let e=s.prev,t=s,n=s.next;if(qt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&xr(i,a,r,c,o,l,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function My(s,e,t,n){let i=s.prev,r=s,o=s.next;if(qt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Rl(d,g,e,t,n),w=Rl(_,m,e,t,n),x=s.prevZ,b=s.nextZ;for(;x&&x.z>=p&&b&&b.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&xr(a,h,c,u,l,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&xr(a,h,c,u,l,f,b.x,b.y)&&qt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&xr(a,h,c,u,l,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=w;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&xr(a,h,c,u,l,f,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function by(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Qa(i,r)&&xd(i,n,n.next,r)&&xo(i,r)&&xo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),yo(n),yo(n.next),n=s=r),n=n.next}while(n!==s);return Fs(n)}function wy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iy(o,a)){let c=yd(o,a);o=Fs(o,o.next),c=Fs(c,c.next),_o(o,e,t,n,i,r,0),_o(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Sy(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=_d(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Py(l));for(i.sort(Ey),r=0;r<i.length;r++)t=Ty(i[r],t);return t}function Ey(s,e){return s.x-e.x}function Ty(s,e){let t=Ay(s,e);if(!t)return e;let n=yd(t,s);return Fs(n,n.next),Fs(t,t.next)}function Ay(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&xr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),xo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Ry(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Ry(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function Cy(s,e,t,n){let i=s;do i.z===0&&(i.z=Rl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ly(i)}function Ly(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Rl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Py(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Iy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ny(s,e)&&(xo(s,e)&&xo(e,s)&&Dy(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||Qa(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Qa(s,e){return s.x===e.x&&s.y===e.y}function xd(s,e,t,n){let i=_a(qt(s,e,t)),r=_a(qt(s,e,n)),o=_a(qt(t,n,s)),a=_a(qt(t,n,e));return!!(i!==r&&o!==a||i===0&&ga(s,t,e)||r===0&&ga(s,n,e)||o===0&&ga(t,s,n)||a===0&&ga(t,e,n))}function ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _a(s){return s>0?1:s<0?-1:0}function Ny(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&xd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xo(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function Dy(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function yd(s,e){let t=new Cl(s.i,s.x,s.y),n=new Cl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zf(s,e,t,n){let i=new Cl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ka=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Hf(e),Vf(n,e);let o=e.length;t.forEach(Hf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Vf(n,t[c]);let a=yy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Hf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var vo=class s extends Rt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,g=new He;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let w=p+m,x=w,b=w+n+1,E=w+n+2,M=w+1;a.push(x,b,M),a.push(b,E,M)}}this.setIndex(a),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var cs=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let w=[],x=p/n,b=0;p===0&&o===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){let M=E/t;u.x=-e*Math.cos(i+M*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+M*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(M+b,1-x),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let x=h[p][w+1],b=h[p][w],E=h[p+1][w],M=h[p+1][w+1];(p!==0||o>0)&&d.push(x,b,M),(p!==n-1||c<Math.PI)&&d.push(b,E,M)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var za=class s extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,w=(i+1)*d+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ln=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},pi=class extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pr=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function xa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fy(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function vd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ls=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends ls{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=e,a=2*t-n;break;case Uu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,c=2*n-t;break;case Uu:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+w*o[l+E]+x*o[c+E]+b*o[u+E];return r}},Pl=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Il=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case Pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Oy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ns;var hs=class extends Qn{};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Er;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Qn{};Ha.prototype.ValueTypeName="color";var mi=class extends Qn{};mi.prototype.ValueTypeName="number";var Nl=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Pn=class extends Qn{InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}};Pn.prototype.ValueTypeName="quaternion";Pn.prototype.DefaultInterpolation=Ns;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Qn{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Er;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Qn{};Un.prototype.ValueTypeName="vector";var Xi=class{constructor(e,t=-1,n,i=Qp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ky(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Fy(c);c=Gf(c,1,h),l=Gf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,_){if(d.length!==0){let m=[],p=[];vd(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let w=0;w!==f[g].morphTargets.length;++w){let x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new mi(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Un,d+".position",f,"pos",i),n(Pn,d+".quaternion",f,"rot",i),n(Un,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function By(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return Un;case"color":return Ha;case"quaternion":return Pn;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ky(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=By(s.type);if(s.times===void 0){let t=[],n=[];vd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Qi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Mo=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},zy=new Mo,cn=class{constructor(e){this.manager=e!==void 0?e:zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Dl=class extends Error{constructor(e,t){super(e),this.response=t}},ei=class extends cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:i});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ui[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){w();function w(){u.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let M=0,T=h.length;M<T;M++){let O=h[M];O.onProgress&&O.onProgress(E)}p.enqueue(b),w()}})}}});return new Response(m)}else throw new Dl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Qi.add(e,l);let h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ul=class extends cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=uo("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Va=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Da,a=new ei(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:$t,o.wrapT=l.wrapT!==void 0?l.wrapT:$t,o.magFilter=l.magFilter!==void 0?l.magFilter:dn,o.minFilter=l.minFilter!==void 0?l.minFilter:dn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=di),l.mipmapCount===1&&(o.minFilter=dn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}},gi=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=new Zt,o=new Ul(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Bs=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ga=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sl=new ve,Wf=new D,Xf=new D,bo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=class extends bo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fs=class extends Bs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qf=new ve,io=new D,rl=new D,Fl=class extends bo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),n.position.copy(io),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),i.makeTranslation(-io.x,-io.y,-io.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}},Hn=class extends Bs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bl=class extends bo{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ir=class extends Bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ti=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wa=class extends cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}};var Xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yf(){return(typeof performance>"u"?Date:performance).now()}var jl="\\[\\]\\.:\\/",Hy=new RegExp("["+jl+"]","g"),$l="[^"+jl+"]",Vy="[^"+jl.replace("\\.","")+"]",Gy=/((?:WC+[\/:])*)/.source.replace("WC",$l),Wy=/(WCOD+)?/.source.replace("WCOD",Vy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),Yy=new RegExp("^"+Gy+Wy+Xy+qy+"$"),jy=["material","materials","bones","map"],kl=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hy,"")}static parseTrackName(e){let t=Yy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=kl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mM=new Float32Array(1);var qa=class{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zl(e[i],this,n,t);return n.sort(jf),n}};function jf(s,e){return s.distance-e.distance}function zl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)zl(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var tc=class extends ss{constructor(e=null){super();let t=new Hi;t.deleteAttribute("uv");let n=new Ln({side:mn}),i=new Ln,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Hn(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Pe(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Pe(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Pe(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Pe(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Pe(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Pe(t,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new Pe(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Pe(t,Dr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Pe(t,Dr(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Pe(t,Dr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Pe(t,Dr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let w=new Pe(t,Dr(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,.1),this.add(w);let x=new Pe(t,Dr(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Dr(s){let e=new zt;return e.color.setScalar(s),e}var Md=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))},$y=function(s){return new Worker(s)};try{URL.revokeObjectURL(Md(""))}catch{Md=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},$y=function(e){return new Worker(e,{type:"module"})}}var ni=Uint8Array,ds=Uint16Array,Jl=Uint32Array,bd=new ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wd=new ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ky=new ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sd=function(s,e){for(var t=new ds(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Jl(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Ed=Sd(bd,2),Td=Ed[0],Zy=Ed[1];Td[28]=258,Zy[258]=28;var Ad=Sd(wd,0),Jy=Ad[0],xM=Ad[1],Ql=new ds(32768);for(bt=0;bt<32768;++bt)qi=(bt&43690)>>>1|(bt&21845)<<1,qi=(qi&52428)>>>2|(qi&13107)<<2,qi=(qi&61680)>>>4|(qi&3855)<<4,Ql[bt]=((qi&65280)>>>8|(qi&255)<<8)>>>1;var qi,bt,So=(function(s,e,t){for(var n=s.length,i=0,r=new ds(e);i<n;++i)++r[s[i]-1];var o=new ds(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new ds(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[Ql[u]>>>c]=l}else for(a=new ds(n),i=0;i<n;++i)s[i]&&(a[i]=Ql[o[s[i]-1]++]>>>15-s[i]);return a}),Eo=new ni(288);for(bt=0;bt<144;++bt)Eo[bt]=8;var bt;for(bt=144;bt<256;++bt)Eo[bt]=9;var bt;for(bt=256;bt<280;++bt)Eo[bt]=7;var bt;for(bt=280;bt<288;++bt)Eo[bt]=8;var bt,Rd=new ni(32);for(bt=0;bt<32;++bt)Rd[bt]=5;var bt;var Qy=So(Eo,9,1);var ev=So(Rd,5,1),Kl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},_i=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Zl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},tv=function(s){return(s/8|0)+(s&7&&1)},nv=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof ds?ds:s instanceof Jl?Jl:ni)(t-e);return n.set(s.subarray(e,t)),n},iv=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new ni(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new ni(n*3));var o=function(ne){var ae=e.length;if(ne>ae){var _e=new ni(Math.max(ae*2,ne));_e.set(e),e=_e}},a=t.f||0,c=t.p||0,l=t.b||0,h=t.l,u=t.d,f=t.m,d=t.n,g=n*8;do{if(!h){t.f=a=_i(s,c,1);var _=_i(s,c+1,3);if(c+=3,_)if(_==1)h=Qy,u=ev,f=9,d=5;else if(_==2){var x=_i(s,c,31)+257,b=_i(s,c+10,15)+4,E=x+_i(s,c+5,31)+1;c+=14;for(var M=new ni(E),T=new ni(19),O=0;O<b;++O)T[Ky[O]]=_i(s,c+O*3,7);c+=b*3;for(var S=Kl(T),R=(1<<S)-1,H=So(T,S,1),O=0;O<E;){var Y=H[_i(s,c,R)];c+=Y&15;var m=Y>>>4;if(m<16)M[O++]=m;else{var j=0,F=0;for(m==16?(F=3+_i(s,c,3),c+=2,j=M[O-1]):m==17?(F=3+_i(s,c,7),c+=3):m==18&&(F=11+_i(s,c,127),c+=7);F--;)M[O++]=j}}var V=M.subarray(0,x),U=M.subarray(x);f=Kl(V),d=Kl(U),h=So(V,f,1),u=So(U,d,1)}else throw"invalid block type";else{var m=tv(c)+4,p=s[m-4]|s[m-3]<<8,w=m+p;if(w>n){if(r)throw"unexpected EOF";break}i&&o(l+p),e.set(s.subarray(m,w),l),t.b=l+=p,t.p=c=w*8;continue}if(c>g){if(r)throw"unexpected EOF";break}}i&&o(l+131072);for(var ee=(1<<f)-1,W=(1<<d)-1,G=c;;G=c){var j=h[Zl(s,c)&ee],Z=j>>>4;if(c+=j&15,c>g){if(r)throw"unexpected EOF";break}if(!j)throw"invalid length/literal";if(Z<256)e[l++]=Z;else if(Z==256){G=c,h=null;break}else{var te=Z-254;if(Z>264){var O=Z-257,re=bd[O];te=_i(s,c,(1<<re)-1)+Td[O],c+=re}var k=u[Zl(s,c)&W],q=k>>>4;if(!k)throw"invalid distance";c+=k&15;var U=Jy[q];if(q>3){var re=wd[q];U+=Zl(s,c)&(1<<re)-1,c+=re}if(c>g){if(r)throw"unexpected EOF";break}i&&o(l+131072);for(var se=l+te;l<se;l+=4)e[l]=e[l-U],e[l+1]=e[l+1-U],e[l+2]=e[l+2-U],e[l+3]=e[l+3-U];l=se}}t.l=h,t.p=G,t.b=l,h&&(a=1,t.m=f,t.d=u,t.n=d)}while(!a);return l==e.length?e:nv(e,0,l)};var sv=new ni(0);var rv=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Cd(s,e){return iv((rv(s),s.subarray(2,-4)),e)}var ov=typeof TextDecoder<"u"&&new TextDecoder,av=0;try{ov.decode(sv,{stream:!0}),av=1}catch{}function Ld(s,e,t){let n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function lv(s,e,t,n){let i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let c=0;for(let l=0;l<a;++l){let h=o[l+1],u=r[a-l],f=i[l]/(h+u);i[l]=c+h*f,c=u*f}i[a]=c}return i}function Pd(s,e,t,n){let i=Ld(s,n,e),r=lv(i,n,s,e),o=new mt(0,0,0,0);for(let a=0;a<=s;++a){let c=t[i-s+a],l=r[a],h=c.w*l;o.x+=c.x*h,o.y+=c.y*h,o.z+=c.z*h,o.w+=c.w*l}return o}function hv(s,e,t,n,i){let r=[];for(let u=0;u<=t;++u)r[u]=0;let o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);let a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;let c=r.slice(0),l=r.slice(0);for(let u=1;u<=t;++u){c[u]=e-i[s+1-u],l[u]=i[s+u]-e;let f=0;for(let d=0;d<u;++d){let g=l[d+1],_=c[u-d];a[u][d]=g+_;let m=a[d][u-1]/a[u][d];a[d][u]=f+g*m,f=_*m}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,d=1,g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0,p=u-_,w=t-_;u>=_&&(g[d][0]=g[f][0]/a[w+1][p],m=g[d][0]*a[p][w]);let x=p>=-1?1:-p,b=u-1<=w?_-1:t-u;for(let M=x;M<=b;++M)g[d][M]=(g[f][M]-g[f][M-1])/a[w+1][p+M],m+=g[d][M]*a[p+M][w];u<=w&&(g[d][_]=-g[f][_-1]/a[w+1][u],m+=g[d][_]*a[u][w]),o[_][u]=m;let E=f;f=d,d=E}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function uv(s,e,t,n,i){let r=i<s?i:s,o=[],a=Ld(s,n,e),c=hv(a,n,s,r,e),l=[];for(let h=0;h<t.length;++h){let u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,l[h]=u}for(let h=0;h<=r;++h){let u=l[a-s].clone().multiplyScalar(c[h][0]);for(let f=1;f<=s;++f)u.add(l[a-s+f].clone().multiplyScalar(c[h][f]));o[h]=u}for(let h=r+1;h<=i+1;++h)o[h]=new mt(0,0,0);return o}function fv(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function dv(s){let e=s.length,t=[],n=[];for(let r=0;r<e;++r){let o=s[r];t[r]=new D(o.x,o.y,o.z),n[r]=o.w}let i=[];for(let r=0;r<e;++r){let o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(fv(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function Id(s,e,t,n,i){let r=uv(s,e,t,n,i);return dv(r)}var nc=class extends Fa{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){let a=n[o];this.controlPoints[o]=new mt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new D){let n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Pd(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new D){let n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Id(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}};var ft,Jt,In,sc=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=r.path===""?ti.extractUrlBase(e):r.path,a=new ei(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){if(mv(e))ft=new oh().parse(e);else{let i=Od(e);if(!gv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Nd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Nd(i));ft=new rh().parse(i)}let n=new gi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new nh(n,this.manager).parse(ft)}},nh=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Jt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new ih().parse(i);return this.parseScene(i,r,n),In}parseConnections(){let e=new Map;return"Connections"in ft&&ft.Connections.connections.forEach(function(n){let i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});let a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let c={ID:i,relationship:o};e.get(r).children.push(c)}),e}parseImages(){let e={},t={};if("Video"in ft.Objects){let n=ft.Objects.Video;for(let i in n){let r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){let a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(a||c){let l=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=l}}}}for(let n in e){let i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in ft.Objects){let n=ft.Objects.Texture;for(let i in n){let r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?vn:$t,n.wrapT=a===0?vn:$t,"Scaling"in e){let c=e.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in e){let c=e.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(e,t){let n,i=this.textureLoader.path,r=Jt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o,a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){let c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Zt):(c.setPath(this.textureLoader.path),o=c.load(n))}else if(a==="dds"){let c=this.manager.getHandler(".dds");c===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",e.RelativeFilename),o=new Zt):(c.setPath(this.textureLoader.path),o=c.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Zt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){let t=new Map;if("Material"in ft.Objects){let n=ft.Objects.Material;for(let i in n){let r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){let n=e.id,i=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Jt.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(r.toLowerCase()){case"phong":a=new pi;break;case"lambert":a=new Pr;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new pi;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){let i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new we().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new we().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new we().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new we().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new we().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new we().fromArray(e.SpecularColor.value).convertSRGBToLinear());let r=this;return Jt.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=it);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=it);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Is,i.envMap.colorSpace=it);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=it);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in ft.Objects&&t in ft.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Jt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in ft.Objects){let n=ft.Objects.Deformer;for(let i in n){let r=n[i],o=Jt.get(parseInt(i));if(r.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){let a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(i){let r=t[i.ID];if(r.attrType!=="Cluster")return;let o={ID:i.ID,indices:[],weights:[],transformLink:new ve().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let i=0;i<e.children.length;i++){let r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Jt.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){In=new Mt;let i=this.parseModels(e.skeletons,t,n),r=ft.Objects.Model,o=this;i.forEach(function(c){let l=r[c.ID];o.setLookAtProperties(c,l),Jt.get(c.ID).parents.forEach(function(u){let f=i.get(u.ID);f!==void 0&&f.add(c)}),c.parent===null&&In.add(c)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),In.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);let l=Dd(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});let a=new sh().parse();In.children.length===1&&In.children[0].isGroup&&(In.children[0].animations=a,In=In.children[0]),In.animations=a}parseModels(e,t,n){let i=new Map,r=ft.Objects.Model;for(let o in r){let a=parseInt(o),c=r[o],l=Jt.get(a),h=this.buildSkeleton(l,e,a,c.attrName);if(!h){switch(c.attrType){case"Camera":h=this.createCamera(l);break;case"Light":h=this.createLight(l);break;case"Mesh":h=this.createMesh(l,t,n);break;case"NurbsCurve":h=this.createCurve(l,t);break;case"LimbNode":case"Root":h=new wi;break;default:h=new Mt;break}h.name=c.attrName?yt.sanitizeNodeName(c.attrName):"",h.userData.originalName=c.attrName,h.ID=a}this.getTransformData(h,c),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(let a in t){let c=t[a];c.rawBones.forEach(function(l,h){if(l.ID===o.ID){let u=r;r=new wi,r.matrixWorld.copy(l.transformLink),r.name=i?yt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,c.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){let r=ft.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Dt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);let l=a/c,h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);let u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Ht(h,l,r,o),u!==null&&t.setFocalLength(u);break;case 1:t=new bi(-a/2,a/2,c/2,-c/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Dt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){let r=ft.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Dt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new we().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let c=1;switch(i){case 0:t=new Hn(r,o,a,c);break;case 1:t=new Ei(r,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=Ct.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Ct.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new fs(r,o,a,l,h,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Hn(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null,a=[];return e.children.forEach(function(c){t.has(c.ID)&&(r=t.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new pi({name:cn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(i=new rs(r,o),i.normalizeSkinWeights()):i=new Pe(r,o),i}createCurve(e,t){let n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Sn({name:cn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Zn(n,i)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ud(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Jt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){let r=ft.Objects.Model[i.ID];if("Lcl_Translation"in r){let o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),In.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){let i=this.parsePoseNodes();for(let r in e){let o=e[r];Jt.get(parseInt(o.ID)).parents.forEach(function(c){if(t.has(c.ID)){let l=c.ID;Jt.get(l).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new os(o.bones),i[u.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in ft.Objects){let t=ft.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new ve().fromArray(r.Matrix.a)}):e[i.Node]=new ve().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in ft){if("AmbientColor"in ft.GlobalSettings){let e=ft.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){let r=new we(t,n,i).convertSRGBToLinear();In.add(new Ir(r,1))}}"UnitScaleFactor"in ft.GlobalSettings&&(In.userData.unitScaleFactor=ft.GlobalSettings.UnitScaleFactor.value)}}},ih=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in ft.Objects){let n=ft.Objects.Geometry;for(let i in n){let r=Jt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let i=n.skeletons,r=[],o=e.parents.map(function(u){return ft.Objects.Model[u.ID]});if(o.length===0)return;let a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});let c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=Ud(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);let h=Dd(l);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,i){let r=new Rt;e.attrName&&(r.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),c=new Ke(a.vertex,3);if(c.applyMatrix4(i),r.setAttribute("position",c),a.colors.length>0&&r.setAttribute("color",new Ke(a.colors,3)),t&&(r.setAttribute("skinIndex",new Ar(a.weightsIndices,4)),r.setAttribute("skinWeight",new Ke(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){let l=new nt().getNormalMatrix(i),h=new Ke(a.normal,3);h.applyNormalMatrix(l),r.setAttribute("normal",h)}if(a.uvs.forEach(function(l,h){let u=h===0?"uv":`uv${h}`;r.setAttribute(u,new Ke(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==l&&(r.addGroup(h,f-h,l),l=u,h=f)}),r.groups.length>0){let u=r.groups[r.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,l)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,i=0,r=!1,o=[],a=[],c=[],l=[],h=[],u=[],f=this;return e.vertexIndices.forEach(function(d,g){let _,m=!1;d<0&&(d=d^-1,m=!0);let p=[],w=[];if(o.push(d*3,d*3+1,d*3+2),e.color){let x=ic(g,n,d,e.color);c.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){w.push(x.weight),p.push(x.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let x=[0,0,0,0],b=[0,0,0,0];w.forEach(function(E,M){let T=E,O=p[M];b.forEach(function(S,R,H){if(T>S){H[R]=T,T=S;let Y=x[R];x[R]=O,O=Y}})}),p=x,w=b}for(;w.length<4;)w.push(0),p.push(0);for(let x=0;x<4;++x)h.push(w[x]),u.push(p[x])}if(e.normal){let x=ic(g,n,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=ic(g,n,d,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,b){let E=ic(g,n,d,x);l[b]===void 0&&(l[b]=[]),l[b].push(E[0]),l[b].push(E[1])}),i++,m&&(f.genFace(t,e,o,_,a,c,l,h,u,i),n++,i=0,o=[],a=[],c=[],l=[],h=[],u=[])}),t}getNormalNewell(e){let t=new D(0,0,0);for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new D(0,1,0):new D(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new He(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,c,l,h){let u;if(h>3){let f=[];for(let m=0;m<n.length;m+=3)f.push(new D(t.vertexPositions[n[m]],t.vertexPositions[n[m+1]],t.vertexPositions[n[m+2]]));let{tangent:d,bitangent:g}=this.getNormalTangentAndBitangent(f),_=[];for(let m of f)_.push(this.flattenVertex(m,d,g));u=ka.triangulateShape(_,[])}else u=[[0,1,2]];for(let[f,d,g]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(c[f*4]),e.vertexWeights.push(c[f*4+1]),e.vertexWeights.push(c[f*4+2]),e.vertexWeights.push(c[f*4+3]),e.vertexWeights.push(c[d*4]),e.vertexWeights.push(c[d*4+1]),e.vertexWeights.push(c[d*4+2]),e.vertexWeights.push(c[d*4+3]),e.vertexWeights.push(c[g*4]),e.vertexWeights.push(c[g*4+1]),e.vertexWeights.push(c[g*4+2]),e.vertexWeights.push(c[g*4+3]),e.weightsIndices.push(l[f*4]),e.weightsIndices.push(l[f*4+1]),e.weightsIndices.push(l[f*4+2]),e.weightsIndices.push(l[f*4+3]),e.weightsIndices.push(l[d*4]),e.weightsIndices.push(l[d*4+1]),e.weightsIndices.push(l[d*4+2]),e.weightsIndices.push(l[d*4+3]),e.weightsIndices.push(l[g*4]),e.weightsIndices.push(l[g*4+1]),e.weightsIndices.push(l[g*4+2]),e.weightsIndices.push(l[g*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){let c=ft.Objects.Geometry[a.geoID];c!==void 0&&r.genMorphGeometry(e,t,c,i,a.name)})})}genMorphGeometry(e,t,n,i,r){let o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],l=e.attributes.position.count*3,h=new Float32Array(l);for(let g=0;g<c.length;g++){let _=c[g]*3;h[_]=a[g*3],h[_+1]=a[g*3+1],h[_+2]=a[g*3+2]}let u={vertexIndices:o,vertexPositions:h},f=this.genBuffers(u),d=new Ke(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new we;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Rt;let n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)r.push(new mt().fromArray(o,u));let a,c;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,c=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}let h=new nc(n,i,r,a,c).getPoints(r.length*12);return new Rt().setFromPoints(h)}},sh=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ft.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=ft.Objects.AnimationCurveNode,t=new Map;for(let n in e){let i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=ft.Objects.AnimationCurve;for(let n in t){let i={id:t[n].id,times:t[n].KeyTime.a.map(_v),values:t[n].KeyValueFloat.a},r=Jt.get(i.id);if(r!==void 0){let o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){let t=ft.Objects.AnimationLayer,n=new Map;for(let i in t){let r=[],o=Jt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(e.has(c.ID)){let h=e.get(c.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[l]===void 0){let u=Jt.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){let f=ft.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}let d={modelName:f.attrName?yt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};In.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new ve),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[l]=d}}r[l]&&(r[l][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[l]===void 0){let u=Jt.get(c.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=Jt.get(u).parents[0].ID,d=Jt.get(f).parents[0].ID,g=Jt.get(d).parents[0].ID,_=ft.Objects.Model[g],m={modelName:_.attrName?yt.sanitizeNodeName(_.attrName):"",morphName:ft.Objects.Deformer[u].attrName};r[l]=m}r[l][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){let t=ft.Objects.AnimationStack,n={};for(let i in t){let r=Jt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Xi(e.name,-1,t)}generateTracks(e){let t=[],n=new D,i=new D;if(e.transform&&e.transform.decompose(n,new jt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){let r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Un(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let u=this.interpolateRotations(t.x,t.y,t.z,r);o=u[0],a=u[1]}n!==void 0&&(n=n.map(Ct.degToRad),n.push(r),n=new Rn().fromArray(n),n=new jt().setFromEuler(n)),i!==void 0&&(i=i.map(Ct.degToRad),i.push(r),i=new Rn().fromArray(i),i=new jt().setFromEuler(i).invert());let c=new jt,l=new Rn,h=[];if(!a||!o)return new Pn(e+".quaternion",[],[]);for(let u=0;u<a.length;u+=3)l.set(a[u],a[u+1],a[u+2],r),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),u>2&&new jt().fromArray(h,(u-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,u/3*4);return new Pn(e+".quaternion",o,h)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=In.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new mi(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){let o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let i=n,r=[],o=-1,a=-1,c=-1;return e.forEach(function(l){if(t.x&&(o=t.x.times.indexOf(l)),t.y&&(a=t.y.times.indexOf(l)),t.z&&(c=t.z.times.indexOf(l)),o!==-1){let h=t.x.values[o];r.push(h),i[0]=h}else r.push(i[0]);if(a!==-1){let h=t.y.values[a];r.push(h),i[1]=h}else r.push(i[1]);if(c!==-1){let h=t.z.values[c];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){let r=[],o=[];r.push(e.times[0]),o.push(Ct.degToRad(e.values[0])),o.push(Ct.degToRad(t.values[0])),o.push(Ct.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let c=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;let l=c.map(Ct.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;let u=h.map(Ct.degToRad),f=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let _=Math.max(...d)/180,m=new Rn(...l,i),p=new Rn(...u,i),w=new jt().setFromEuler(m),x=new jt().setFromEuler(p);w.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);let b=e.times[a-1],E=e.times[a]-b,M=new jt,T=new Rn;for(let O=0;O<1;O+=1/_)M.copy(w.clone().slerp(x.clone(),O)),r.push(b+O*E),T.setFromQuaternion(M,i),o.push(T.x),o.push(T.y),o.push(T.z)}else r.push(e.times[a]),o.push(Ct.degToRad(e.values[a])),o.push(Ct.degToRad(t.values[a])),o.push(Ct.degToRad(n.values[a]))}return[r,o]}},rh=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new oc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){let o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;let c=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(i,c):l?t.parseNodeProperty(i,l,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){let c=r.split(",").slice(1),l=parseInt(c[0]),h=parseInt(c[1]),u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[l,h],yv(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=th(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=th(t.a))}parseNodeSpecialProperty(e,t,n){let i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],c=i[3],l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=th(l);break}this.getPrevNode()[r]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),r)}},oh=class{parse(e){let t=new rc(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let i=new oc;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(i===0)return null;let c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(e));let l=c.length>0?c[0]:"",h=c.length>1?c[1]:"",u=c.length>2?c[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){let f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=c,typeof l=="number"&&(n.id=l),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){let i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:c}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}let a=Cd(new Uint8Array(e.getArrayBuffer(o))),c=new rc(a.buffer);switch(t){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},rc=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}},oc=class{add(e,t){this[e]=t}};function mv(s){let e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Od(s,0,e.length)}function gv(s){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(i){let r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Nd(s){let e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function _v(s){return s/46186158e3}var xv=[];function ic(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);let r=i*n.dataSize,o=r+n.dataSize;return vv(xv,n.buffer,r,o)}var eh=new Rn,Ur=new D;function Dd(s){let e=new ve,t=new ve,n=new ve,i=new ve,r=new ve,o=new ve,a=new ve,c=new ve,l=new ve,h=new ve,u=new ve,f=new ve,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Ur.fromArray(s.translation)),s.preRotation){let R=s.preRotation.map(Ct.degToRad);R.push(s.eulerOrder||Rn.DEFAULT_ORDER),t.makeRotationFromEuler(eh.fromArray(R))}if(s.rotation){let R=s.rotation.map(Ct.degToRad);R.push(s.eulerOrder||Rn.DEFAULT_ORDER),n.makeRotationFromEuler(eh.fromArray(R))}if(s.postRotation){let R=s.postRotation.map(Ct.degToRad);R.push(s.eulerOrder||Rn.DEFAULT_ORDER),i.makeRotationFromEuler(eh.fromArray(R)),i.invert()}s.scale&&r.scale(Ur.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Ur.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Ur.fromArray(s.scalingPivot)),s.rotationOffset&&c.setPosition(Ur.fromArray(s.rotationOffset)),s.rotationPivot&&l.setPosition(Ur.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));let g=t.clone().multiply(n).multiply(i),_=new ve;_.extractRotation(h);let m=new ve;m.copyPosition(h);let p=m.clone().invert().multiply(h),w=_.clone().invert().multiply(p),x=r,b=new ve;if(d===0)b.copy(_).multiply(g).multiply(w).multiply(x);else if(d===1)b.copy(_).multiply(w).multiply(g).multiply(x);else{let H=new ve().scale(new D().setFromMatrixScale(u)).clone().invert(),Y=w.clone().multiply(H);b.copy(_).multiply(g).multiply(Y).multiply(x)}let E=l.clone().invert(),M=o.clone().invert(),T=e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(E).multiply(a).multiply(o).multiply(r).multiply(M),O=new ve().copyPosition(T),S=h.clone().multiply(O);return f.copyPosition(S),T=f.clone().multiply(b),T.premultiply(h.invert()),T}function Ud(s){s=s||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function th(s){return s.split(",").map(function(t){return parseFloat(t)})}function Od(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function yv(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function vv(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function ah(s,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wo||e===$a){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===wo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ao=class extends cn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ph(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ti.extractUrlBase(e);o=ti.resolveURL(l,this.path)}else o=ti.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ei(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hd){try{o[dt.KHR_BINARY_GLTF]=new Rh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new fh;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ch(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new Lh;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new Ph;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Mv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uh=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ei(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hn(h),l.distance=u;break;case"spot":l=new fs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ms(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},fh=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,it)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,it)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Sh=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eh=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Th=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ah=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ii.TRIANGLES&&l.mode!==ii.TRIANGLE_STRIP&&l.mode!==ii.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let _=new ve,m=new D,p=new jt,w=new D(1,1,1),x=new Ua(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&w.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,p,w));for(let b in c)if(b==="_COLOR_0"){let E=c[b];x.instanceColor=new Os(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);Dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Hd="glTF",To=12,Fd={JSON:1313821514,BIN:5130562},Rh=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,To),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-To,r=new DataView(e,To),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Fd.JSON){let l=new Uint8Array(e,To+o,a);this.content=n.decode(l)}else if(c===Fd.BIN){let l=To+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ch=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Nh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Or[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(d)},a,l,sn,f)})})}},Lh=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ph=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},ac=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,w=1-m,x=p-f+u;for(let b=0;b!==a;b++){let E=o[_+b+a],M=o[_+b+c]*h,T=o[g+b+a],O=o[g+b]*h;r[b]=w*E+x*M+m*T+p*O}return r}},bv=new jt,Ih=class extends ac{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return bv.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:nn,9729:dn,9984:va,9985:Gl,9986:so,9987:di},kd={33071:$t,33648:lo,10497:vn},ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wv={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Er},lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function ks(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ms(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ev(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Tv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Av(s){let e,t=s.extensions&&s.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hh(t.attributes):e=s.indices+":"+hh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hh(s.targets[n]);return e}function hh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Cv=new ve,Uh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new gi(this.options.manager):this.textureLoader=new Wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ei(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ks(r,a,i),ms(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ti.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=ch[i.type],a=Or[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Kt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ch[i.type],l=Or[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(w);x||(_=new l(a,p*d,i.count*d/h),x=new Lr(_,d/h),t.cache.add(w,x)),m=new Us(x,c,f%d/h,g)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),m=new Kt(_,c,g);if(i.sparse!==void 0){let p=ch.SCALAR,w=Or[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,E=new w(o[1],x,i.sparse.count*p),M=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,O=E.length;T<O;T++){let S=E[T];if(m.setX(S,M[T*c]),c>=2&&m.setY(S,M[T*c+1]),c>=3&&m.setZ(S,M[T*c+2]),c>=4&&m.setW(S,M[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Bd[f.magFilter]||dn,h.minFilter=Bd[f.minFilter]||di,h.wrapS=kd[f.wrapS]||vn,h.wrapT=kd[f.wrapT]||vn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Zt(_);m.needsUpdate=!0,f(m)}),t.load(ti.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Rv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Si,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Sn,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=i[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,it)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yn);let h=r.alphaMode||lh.OPAQUE;if(h===lh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===lh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==zt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zt){let u=r.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==zt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,it)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ms(u,r),t.associations.set(u,{materials:e}),r.extensions&&ks(i,u,r),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return zd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Av(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=zd(new Rt,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Sv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],m=o[d],p,w=l[d];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new rs(_,w):new Pe(_,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?p.geometry=ah(p.geometry,$a):m.mode===ii.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,wo));else if(m.mode===ii.LINES)p=new Gi(_,w);else if(m.mode===ii.LINE_STRIP)p=new Zn(_,w);else if(m.mode===ii.LINE_LOOP)p=new Oa(_,w);else if(m.mode===ii.POINTS)p=new as(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Tv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ms(p,r),m.extensions&&ks(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ks(i,u[0],r),u[0];let f=new Mt;r.extensions&&ks(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Ct.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ms(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new os(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let w=0,x=f.length;w<x;w++){let b=f[w],E=d[w],M=g[w],T=_[w],O=m[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let S=n._createAnimationTracks(b,E,M,T,O);if(S)for(let R=0;R<S.length;R++)p.push(S[R])}return new Xi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Cv)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new wi:l.length>1?h=new Mt:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ms(h,r),r.extensions&&ks(n,h,r),r.matrix!==void 0){let u=new ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Mt;n.name&&(r.name=i.createUniqueName(n.name)),ms(r,n),n.extensions&&ks(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof rn||f instanceof Zt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];ps[r.path]===ps.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ps[r.path]){case ps.weights:l=mi;break;case ps.rotation:l=Pn;break;case ps.position:case ps.scale:l=Un;break;default:n.itemSize===1?l=mi:l=Un;break}let h=i.interpolation!==void 0?wv[i.interpolation]:Ns,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+ps[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Pn?Ih:ac;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lv(s,e,t){let n=e.attributes,i=new At;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Dh(Or[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Dh(Or[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Nh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return vt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),ms(s,e),Lv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ev(s,e.targets,t):s})}var Ro=class extends Va{constructor(e){super(e)}parse(e){function t(U){switch(U.image_type){case f:case _:if(U.colormap_length>256||U.colormap_size!==24||U.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case g:case m:case p:if(U.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+U.image_type)}if(U.width<=0||U.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(U.pixel_size!==8&&U.pixel_size!==16&&U.pixel_size!==24&&U.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+U.pixel_size)}function n(U,ee,W,G,Z){let te,re,k=W.pixel_size>>3,q=W.width*W.height*k;if(ee&&(re=Z.subarray(G,G+=W.colormap_length*(W.colormap_size>>3))),U){te=new Uint8Array(q);let se,ne,ae,_e=0,Be=new Uint8Array(k);for(;_e<q;)if(se=Z[G++],ne=(se&127)+1,se&128){for(ae=0;ae<k;++ae)Be[ae]=Z[G++];for(ae=0;ae<ne;++ae)te.set(Be,_e+ae*k);_e+=k*ne}else{for(ne*=k,ae=0;ae<ne;++ae)te[_e+ae]=Z[G++];_e+=ne}}else te=Z.subarray(G,G+=ee?W.width*W.height:q);return{pixel_data:te,palettes:re}}function i(U,ee,W,G,Z,te,re,k,q){let se=q,ne,ae=0,_e,Be,ue=R.width;for(Be=ee;Be!==G;Be+=W)for(_e=Z;_e!==re;_e+=te,ae++)ne=k[ae],U[(_e+ue*Be)*4+3]=255,U[(_e+ue*Be)*4+2]=se[ne*3+0],U[(_e+ue*Be)*4+1]=se[ne*3+1],U[(_e+ue*Be)*4+0]=se[ne*3+2];return U}function r(U,ee,W,G,Z,te,re,k){let q,se=0,ne,ae,_e=R.width;for(ae=ee;ae!==G;ae+=W)for(ne=Z;ne!==re;ne+=te,se+=2)q=k[se+0]+(k[se+1]<<8),U[(ne+_e*ae)*4+0]=(q&31744)>>7,U[(ne+_e*ae)*4+1]=(q&992)>>2,U[(ne+_e*ae)*4+2]=(q&31)<<3,U[(ne+_e*ae)*4+3]=q&32768?0:255;return U}function o(U,ee,W,G,Z,te,re,k){let q=0,se,ne,ae=R.width;for(ne=ee;ne!==G;ne+=W)for(se=Z;se!==re;se+=te,q+=3)U[(se+ae*ne)*4+3]=255,U[(se+ae*ne)*4+2]=k[q+0],U[(se+ae*ne)*4+1]=k[q+1],U[(se+ae*ne)*4+0]=k[q+2];return U}function a(U,ee,W,G,Z,te,re,k){let q=0,se,ne,ae=R.width;for(ne=ee;ne!==G;ne+=W)for(se=Z;se!==re;se+=te,q+=4)U[(se+ae*ne)*4+2]=k[q+0],U[(se+ae*ne)*4+1]=k[q+1],U[(se+ae*ne)*4+0]=k[q+2],U[(se+ae*ne)*4+3]=k[q+3];return U}function c(U,ee,W,G,Z,te,re,k){let q,se=0,ne,ae,_e=R.width;for(ae=ee;ae!==G;ae+=W)for(ne=Z;ne!==re;ne+=te,se++)q=k[se],U[(ne+_e*ae)*4+0]=q,U[(ne+_e*ae)*4+1]=q,U[(ne+_e*ae)*4+2]=q,U[(ne+_e*ae)*4+3]=255;return U}function l(U,ee,W,G,Z,te,re,k){let q=0,se,ne,ae=R.width;for(ne=ee;ne!==G;ne+=W)for(se=Z;se!==re;se+=te,q+=2)U[(se+ae*ne)*4+0]=k[q+0],U[(se+ae*ne)*4+1]=k[q+0],U[(se+ae*ne)*4+2]=k[q+0],U[(se+ae*ne)*4+3]=k[q+1];return U}function h(U,ee,W,G,Z){let te,re,k,q,se,ne;switch((R.flags&w)>>x){default:case M:te=0,k=1,se=ee,re=0,q=1,ne=W;break;case b:te=0,k=1,se=ee,re=W-1,q=-1,ne=-1;break;case T:te=ee-1,k=-1,se=-1,re=0,q=1,ne=W;break;case E:te=ee-1,k=-1,se=-1,re=W-1,q=-1,ne=-1;break}if(j)switch(R.pixel_size){case 8:c(U,re,q,ne,te,k,se,G);break;case 16:l(U,re,q,ne,te,k,se,G);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:i(U,re,q,ne,te,k,se,G,Z);break;case 16:r(U,re,q,ne,te,k,se,G);break;case 24:o(U,re,q,ne,te,k,se,G);break;case 32:a(U,re,q,ne,te,k,se,G);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return U}let u=0,f=1,d=2,g=3,_=9,m=10,p=11,w=48,x=4,b=0,E=1,M=2,T=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let O=0,S=new Uint8Array(e),R={id_length:S[O++],colormap_type:S[O++],image_type:S[O++],colormap_index:S[O++]|S[O++]<<8,colormap_length:S[O++]|S[O++]<<8,colormap_size:S[O++],origin:[S[O++]|S[O++]<<8,S[O++]|S[O++]<<8],width:S[O++]|S[O++]<<8,height:S[O++]|S[O++]<<8,pixel_size:S[O++],flags:S[O++]};if(t(R),R.id_length+O>e.length)throw new Error("THREE.TGALoader: No data.");O+=R.id_length;let H=!1,Y=!1,j=!1;switch(R.image_type){case _:H=!0,Y=!0;break;case f:Y=!0;break;case m:H=!0;break;case d:break;case p:H=!0,j=!0;break;case g:j=!0;break}let F=new Uint8Array(R.width*R.height*4),V=n(H,Y,R,O,S);return h(F,R.width,R.height,V.pixel_data,V.palettes),{data:F,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:di}}};var cc=class extends cn{load(e,t,n,i){let r=this,o=r.path===""?ti.extractUrlBase(e):r.path,a=new ei(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(v,y){let L=[],A=v.childNodes;for(let P=0,Q=A.length;P<Q;P++){let oe=A[P];oe.nodeName===y&&L.push(oe)}return L}function i(v){if(v.length===0)return[];let y=v.trim().split(/\s+/),L=new Array(y.length);for(let A=0,P=y.length;A<P;A++)L[A]=y[A];return L}function r(v){if(v.length===0)return[];let y=v.trim().split(/\s+/),L=new Array(y.length);for(let A=0,P=y.length;A<P;A++)L[A]=parseFloat(y[A]);return L}function o(v){if(v.length===0)return[];let y=v.trim().split(/\s+/),L=new Array(y.length);for(let A=0,P=y.length;A<P;A++)L[A]=parseInt(y[A]);return L}function a(v){return v.substring(1)}function c(){return"three_default_"+hp++}function l(v){return Object.keys(v).length===0}function h(v){return{unit:u(n(v,"unit")[0]),upAxis:f(n(v,"up_axis")[0])}}function u(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function f(v){return v!==void 0?v.textContent:"Y_UP"}function d(v,y,L,A){let P=n(v,y)[0];if(P!==void 0){let Q=n(P,L);for(let oe=0;oe<Q.length;oe++)A(Q[oe])}}function g(v,y){for(let L in v){let A=v[L];A.build=y(v[L])}}function _(v,y){return v.build!==void 0||(v.build=y(v)),v.build}function m(v){let y={sources:{},samplers:{},channels:{}},L=!1;for(let A=0,P=v.childNodes.length;A<P;A++){let Q=v.childNodes[A];if(Q.nodeType!==1)continue;let oe;switch(Q.nodeName){case"source":oe=Q.getAttribute("id"),y.sources[oe]=B(Q);break;case"sampler":oe=Q.getAttribute("id"),y.samplers[oe]=p(Q);break;case"channel":oe=Q.getAttribute("target"),y.channels[oe]=w(Q);break;case"animation":m(Q),L=!0;break;default:console.log(Q)}}L===!1&&($e.animations[v.getAttribute("id")||Ct.generateUUID()]=y)}function p(v){let y={inputs:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1&&P.nodeName==="input"){let Q=a(P.getAttribute("source")),oe=P.getAttribute("semantic");y.inputs[oe]=Q}}return y}function w(v){let y={},A=v.getAttribute("target").split("/"),P=A.shift(),Q=A.shift(),oe=Q.indexOf("(")!==-1,Ce=Q.indexOf(".")!==-1;if(Ce)A=Q.split("."),Q=A.shift(),y.member=A.shift();else if(oe){let me=Q.split("(");Q=me.shift();for(let be=0;be<me.length;be++)me[be]=parseInt(me[be].replace(/\)/,""));y.indices=me}return y.id=P,y.sid=Q,y.arraySyntax=oe,y.memberSyntax=Ce,y.sampler=a(v.getAttribute("source")),y}function x(v){let y=[],L=v.channels,A=v.samplers,P=v.sources;for(let Q in L)if(L.hasOwnProperty(Q)){let oe=L[Q],Ce=A[oe.sampler],me=Ce.inputs.INPUT,be=Ce.inputs.OUTPUT,Fe=P[me],he=P[be],Oe=E(oe,Fe,he);R(Oe,y)}return y}function b(v){return _($e.animations[v],x)}function E(v,y,L){let A=$e.nodes[v.id],P=Qe(A.id),Q=A.transforms[v.sid],oe=A.matrix.clone().transpose(),Ce,me,be,Fe,he,Oe,De={};switch(Q){case"matrix":for(be=0,Fe=y.array.length;be<Fe;be++)if(Ce=y.array[be],me=be*L.stride,De[Ce]===void 0&&(De[Ce]={}),v.arraySyntax===!0){let Xt=L.array[me],Tt=v.indices[0]+4*v.indices[1];De[Ce][Tt]=Xt}else for(he=0,Oe=L.stride;he<Oe;he++)De[Ce][he]=L.array[me+he];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let We=M(De,oe);return{name:P.uuid,keyframes:We}}function M(v,y){let L=[];for(let P in v)L.push({time:parseFloat(P),value:v[P]});L.sort(A);for(let P=0;P<16;P++)H(L,P,y.elements[P]);return L;function A(P,Q){return P.time-Q.time}}let T=new D,O=new D,S=new jt;function R(v,y){let L=v.keyframes,A=v.name,P=[],Q=[],oe=[],Ce=[];for(let me=0,be=L.length;me<be;me++){let Fe=L[me],he=Fe.time,Oe=Fe.value;Re.fromArray(Oe).transpose(),Re.decompose(T,S,O),P.push(he),Q.push(T.x,T.y,T.z),oe.push(S.x,S.y,S.z,S.w),Ce.push(O.x,O.y,O.z)}return Q.length>0&&y.push(new Un(A+".position",P,Q)),oe.length>0&&y.push(new Pn(A+".quaternion",P,oe)),Ce.length>0&&y.push(new Un(A+".scale",P,Ce)),y}function H(v,y,L){let A,P=!0,Q,oe;for(Q=0,oe=v.length;Q<oe;Q++)A=v[Q],A.value[y]===void 0?A.value[y]=null:P=!1;if(P===!0)for(Q=0,oe=v.length;Q<oe;Q++)A=v[Q],A.value[y]=L;else Y(v,y)}function Y(v,y){let L,A;for(let P=0,Q=v.length;P<Q;P++){let oe=v[P];if(oe.value[y]===null){if(L=j(v,P,y),A=F(v,P,y),L===null){oe.value[y]=A.value[y];continue}if(A===null){oe.value[y]=L.value[y];continue}V(oe,L,A,y)}}}function j(v,y,L){for(;y>=0;){let A=v[y];if(A.value[L]!==null)return A;y--}return null}function F(v,y,L){for(;y<v.length;){let A=v[y];if(A.value[L]!==null)return A;y++}return null}function V(v,y,L,A){if(L.time-y.time===0){v.value[A]=y.value[A];return}v.value[A]=(v.time-y.time)*(L.value[A]-y.value[A])/(L.time-y.time)+y.value[A]}function U(v){let y={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="instance_animation"&&y.animations.push(a(P.getAttribute("url")))}$e.clips[v.getAttribute("id")]=y}function ee(v){let y=[],L=v.name,A=v.end-v.start||-1,P=v.animations;for(let Q=0,oe=P.length;Q<oe;Q++){let Ce=b(P[Q]);for(let me=0,be=Ce.length;me<be;me++)y.push(Ce[me])}return new Xi(L,A,y)}function W(v){return _($e.clips[v],ee)}function G(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"skin":y.id=a(P.getAttribute("source")),y.skin=Z(P);break;case"morph":y.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$e.controllers[v.getAttribute("id")]=y}function Z(v){let y={sources:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(P.textContent);break;case"source":let Q=P.getAttribute("id");y.sources[Q]=B(P);break;case"joints":y.joints=te(P);break;case"vertex_weights":y.vertexWeights=re(P);break}}return y}function te(v){let y={inputs:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1&&P.nodeName==="input"){let Q=P.getAttribute("semantic"),oe=a(P.getAttribute("source"));y.inputs[Q]=oe}}return y}function re(v){let y={inputs:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"input":let Q=P.getAttribute("semantic"),oe=a(P.getAttribute("source")),Ce=parseInt(P.getAttribute("offset"));y.inputs[Q]={id:oe,offset:Ce};break;case"vcount":y.vcount=o(P.textContent);break;case"v":y.v=o(P.textContent);break}}return y}function k(v){let y={id:v.id},L=$e.geometries[y.id];return v.skin!==void 0&&(y.skin=q(v.skin),L.sources.skinIndices=y.skin.indices,L.sources.skinWeights=y.skin.weights),y}function q(v){let L={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=v.sources,P=v.vertexWeights,Q=P.vcount,oe=P.v,Ce=P.inputs.JOINT.offset,me=P.inputs.WEIGHT.offset,be=v.sources[v.joints.inputs.JOINT],Fe=v.sources[v.joints.inputs.INV_BIND_MATRIX],he=A[P.inputs.WEIGHT.id].array,Oe=0,De,We,ze;for(De=0,ze=Q.length;De<ze;De++){let Tt=Q[De],gt=[];for(We=0;We<Tt;We++){let _t=oe[Oe+Ce],Ci=oe[Oe+me],Dn=he[Ci];gt.push({index:_t,weight:Dn}),Oe+=2}for(gt.sort(Xt),We=0;We<4;We++){let _t=gt[We];_t!==void 0?(L.indices.array.push(_t.index),L.weights.array.push(_t.weight)):(L.indices.array.push(0),L.weights.array.push(0))}}for(v.bindShapeMatrix?L.bindMatrix=new ve().fromArray(v.bindShapeMatrix).transpose():L.bindMatrix=new ve().identity(),De=0,ze=be.array.length;De<ze;De++){let Tt=be.array[De],gt=new ve().fromArray(Fe.array,De*Fe.stride).transpose();L.joints.push({name:Tt,boneInverse:gt})}return L;function Xt(Tt,gt){return gt.weight-Tt.weight}}function se(v){return _($e.controllers[v],k)}function ne(v){let y={init_from:n(v,"init_from")[0].textContent};$e.images[v.getAttribute("id")]=y}function ae(v){return v.build!==void 0?v.build:v.init_from}function _e(v){let y=$e.images[v];return y!==void 0?_(y,ae):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function Be(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="profile_COMMON"&&(y.profile=ue(P))}$e.effects[v.getAttribute("id")]=y}function ue(v){let y={surfaces:{},samplers:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"newparam":Le(P,y);break;case"technique":y.technique=Ee(P);break;case"extra":y.extra=C(P);break}}return y}function Le(v,y){let L=v.getAttribute("sid");for(let A=0,P=v.childNodes.length;A<P;A++){let Q=v.childNodes[A];if(Q.nodeType===1)switch(Q.nodeName){case"surface":y.surfaces[L]=z(Q);break;case"sampler2D":y.samplers[L]=Lt(Q);break}}}function z(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="init_from"&&(y.init_from=P.textContent)}return y}function Lt(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="source"&&(y.source=P.textContent)}return y}function Ee(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=P.nodeName,y.parameters=Ve(P);break;case"extra":y.extra=C(P);break}}return y}function Ve(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[P.nodeName]=Te(P);break;case"transparent":y[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:Te(P)};break}}return y}function Te(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"color":y[P.nodeName]=r(P.textContent);break;case"float":y[P.nodeName]=parseFloat(P.textContent);break;case"texture":y[P.nodeName]={id:P.getAttribute("texture"),extra:ct(P)};break}}return y}function ct(v){let y={technique:{}};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="extra"&&Xe(P,y)}return y}function Xe(v,y){for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="technique"&&N(P,y)}}function N(v,y){for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?y.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?y.technique[P.nodeName]=0:y.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":y[P.nodeName]=le(P);break}}}function C(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="technique"&&(y.technique=$(P))}return y}function $(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"double_sided":y[P.nodeName]=parseInt(P.textContent);break;case"bump":y[P.nodeName]=le(P);break}}return y}function le(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="texture"&&(y[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:ct(P)})}return y}function ce(v){return v}function fe(v){return _($e.effects[v],ce)}function Ue(v){let y={name:v.getAttribute("name")};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="instance_effect"&&(y.url=a(P.getAttribute("url")))}$e.materials[v.getAttribute("id")]=y}function Me(v){let y,L=v.slice((v.lastIndexOf(".")-1>>>0)+2);return L=L.toLowerCase(),L==="tga"?y=Ec:y=Yr,y}function Ie(v){let y=fe(v.url),L=y.profile.technique,A;switch(L.type){case"phong":case"blinn":A=new pi;break;case"lambert":A=new Pr;break;default:A=new zt;break}A.name=v.name||"";function P(me,be=null){let Fe=y.profile.samplers[me.id],he=null;if(Fe!==void 0){let Oe=y.profile.surfaces[Fe.source];he=_e(Oe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),he=_e(me.id);if(he!==null){let Oe=Me(he);if(Oe!==void 0){let De=Oe.load(he),We=me.extra;if(We!==void 0&&We.technique!==void 0&&l(We.technique)===!1){let ze=We.technique;De.wrapS=ze.wrapU?vn:$t,De.wrapT=ze.wrapV?vn:$t,De.offset.set(ze.offsetU||0,ze.offsetV||0),De.repeat.set(ze.repeatU||1,ze.repeatV||1)}else De.wrapS=vn,De.wrapT=vn;return be!==null&&(De.colorSpace=be),De}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",he),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",me.id),null}let Q=L.parameters;for(let me in Q){let be=Q[me];switch(me){case"diffuse":be.color&&A.color.fromArray(be.color),be.texture&&(A.map=P(be.texture,it));break;case"specular":be.color&&A.specular&&A.specular.fromArray(be.color),be.texture&&(A.specularMap=P(be.texture));break;case"bump":be.texture&&(A.normalMap=P(be.texture));break;case"ambient":be.texture&&(A.lightMap=P(be.texture,it));break;case"shininess":be.float&&A.shininess&&(A.shininess=be.float);break;case"emission":be.color&&A.emissive&&A.emissive.fromArray(be.color),be.texture&&(A.emissiveMap=P(be.texture,it));break}}A.color.convertSRGBToLinear(),A.specular&&A.specular.convertSRGBToLinear(),A.emissive&&A.emissive.convertSRGBToLinear();let oe=Q.transparent,Ce=Q.transparency;if(Ce===void 0&&oe&&(Ce={float:1}),oe===void 0&&Ce&&(oe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),oe&&Ce)if(oe.data.texture)A.transparent=!0;else{let me=oe.data.color;switch(oe.opaque){case"A_ONE":A.opacity=me[3]*Ce.float;break;case"RGB_ZERO":A.opacity=1-me[0]*Ce.float;break;case"A_ZERO":A.opacity=1-me[3]*Ce.float;break;case"RGB_ONE":A.opacity=me[0]*Ce.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',oe.opaque)}A.opacity<1&&(A.transparent=!0)}if(L.extra!==void 0&&L.extra.technique!==void 0){let me=L.extra.technique;for(let be in me){let Fe=me[be];switch(be){case"double_sided":A.side=Fe===1?yn:$n;break;case"bump":A.normalMap=P(Fe.texture),A.normalScale=new He(1,1);break}}}return A}function Ye(v){return _($e.materials[v],Ie)}function ot(v){let y={name:v.getAttribute("name")};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="optics"&&(y.optics=de(P))}$e.cameras[v.getAttribute("id")]=y}function de(v){for(let y=0;y<v.childNodes.length;y++){let L=v.childNodes[y];if(L.nodeName==="technique_common")return wt(L)}return{}}function wt(v){let y={};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];switch(A.nodeName){case"perspective":case"orthographic":y.technique=A.nodeName,y.parameters=ut(A);break}}return y}function ut(v){let y={};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[A.nodeName]=parseFloat(A.textContent);break}}return y}function Je(v){let y;switch(v.optics.technique){case"perspective":y=new Ht(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let L=v.optics.parameters.ymag,A=v.optics.parameters.xmag,P=v.optics.parameters.aspect_ratio;A=A===void 0?L*P:A,L=L===void 0?A/P:L,A*=.5,L*=.5,y=new bi(-A,A,L,-L,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:y=new Ht;break}return y.name=v.name||"",y}function Ge(v){let y=$e.cameras[v];return y!==void 0?_(y,Je):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Ne(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];P.nodeType===1&&P.nodeName==="technique_common"&&(y=st(P))}$e.lights[v.getAttribute("id")]=y}function st(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=P.nodeName,y.parameters=xt(P)}}return y}function xt(v){let y={};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"color":let Q=r(P.textContent);y.color=new we().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":let oe=parseFloat(P.textContent);y.distance=oe?Math.sqrt(1/oe):0;break}}return y}function Ft(v){let y;switch(v.technique){case"directional":y=new Ei;break;case"point":y=new Hn;break;case"spot":y=new fs;break;case"ambient":y=new Ir;break}return v.parameters.color&&y.color.copy(v.parameters.color),v.parameters.distance&&(y.distance=v.parameters.distance),y}function lt(v){let y=$e.lights[v];return y!==void 0?_(y,Ft):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function pe(v){let y={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},L=n(v,"mesh")[0];if(L!==void 0){for(let A=0;A<L.childNodes.length;A++){let P=L.childNodes[A];if(P.nodeType!==1)continue;let Q=P.getAttribute("id");switch(P.nodeName){case"source":y.sources[Q]=B(P);break;case"vertices":y.vertices=xe(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(ye(P));break;default:console.log(P)}}$e.geometries[v.getAttribute("id")]=y}}function B(v){let y={array:[],stride:3};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"float_array":y.array=r(A.textContent);break;case"Name_array":y.array=i(A.textContent);break;case"technique_common":let P=n(A,"accessor")[0];P!==void 0&&(y.stride=parseInt(P.getAttribute("stride")));break}}return y}function xe(v){let y={};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];A.nodeType===1&&(y[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return y}function ye(v){let y={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let L=0,A=v.childNodes.length;L<A;L++){let P=v.childNodes[L];if(P.nodeType===1)switch(P.nodeName){case"input":let Q=a(P.getAttribute("source")),oe=P.getAttribute("semantic"),Ce=parseInt(P.getAttribute("offset")),me=parseInt(P.getAttribute("set")),be=me>0?oe+me:oe;y.inputs[be]={id:Q,offset:Ce},y.stride=Math.max(y.stride,Ce+1),oe==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(P.textContent);break;case"p":y.p=o(P.textContent);break}}return y}function Ze(v){let y={};for(let L=0;L<v.length;L++){let A=v[L];y[A.type]===void 0&&(y[A.type]=[]),y[A.type].push(A)}return y}function qe(v){let y=0;for(let L=0,A=v.length;L<A;L++)v[L].hasUV===!0&&y++;y>0&&y<v.length&&(v.uvsNeedsFix=!0)}function Et(v){let y={},L=v.sources,A=v.vertices,P=v.primitives;if(P.length===0)return{};let Q=Ze(P);for(let oe in Q){let Ce=Q[oe];qe(Ce),y[oe]=Pt(Ce,L,A)}return y}function Pt(v,y,L){let A={},P={array:[],stride:0},Q={array:[],stride:0},oe={array:[],stride:0},Ce={array:[],stride:0},me={array:[],stride:0},be={array:[],stride:4},Fe={array:[],stride:4},he=new Rt,Oe=[],De=0;for(let We=0;We<v.length;We++){let ze=v[We],Xt=ze.inputs,Tt=0;switch(ze.type){case"lines":case"linestrips":Tt=ze.count*2;break;case"triangles":Tt=ze.count*3;break;case"polylist":for(let gt=0;gt<ze.count;gt++){let _t=ze.vcount[gt];switch(_t){case 3:Tt+=3;break;case 4:Tt+=6;break;default:Tt+=(_t-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}he.addGroup(De,Tt,We),De+=Tt,ze.material&&Oe.push(ze.material);for(let gt in Xt){let _t=Xt[gt];switch(gt){case"VERTEX":for(let Ci in L){let Dn=L[Ci];switch(Ci){case"POSITION":let js=P.array.length;if(St(ze,y[Dn],_t.offset,P.array),P.stride=y[Dn].stride,y.skinWeights&&y.skinIndices&&(St(ze,y.skinIndices,_t.offset,be.array),St(ze,y.skinWeights,_t.offset,Fe.array)),ze.hasUV===!1&&v.uvsNeedsFix===!0){let up=(P.array.length-js)/P.stride;for(let eu=0;eu<up;eu++)oe.array.push(0,0)}break;case"NORMAL":St(ze,y[Dn],_t.offset,Q.array),Q.stride=y[Dn].stride;break;case"COLOR":St(ze,y[Dn],_t.offset,me.array),me.stride=y[Dn].stride;break;case"TEXCOORD":St(ze,y[Dn],_t.offset,oe.array),oe.stride=y[Dn].stride;break;case"TEXCOORD1":St(ze,y[Dn],_t.offset,Ce.array),oe.stride=y[Dn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ci)}}break;case"NORMAL":St(ze,y[_t.id],_t.offset,Q.array),Q.stride=y[_t.id].stride;break;case"COLOR":St(ze,y[_t.id],_t.offset,me.array,!0),me.stride=y[_t.id].stride;break;case"TEXCOORD":St(ze,y[_t.id],_t.offset,oe.array),oe.stride=y[_t.id].stride;break;case"TEXCOORD1":St(ze,y[_t.id],_t.offset,Ce.array),Ce.stride=y[_t.id].stride;break}}}return P.array.length>0&&he.setAttribute("position",new Ke(P.array,P.stride)),Q.array.length>0&&he.setAttribute("normal",new Ke(Q.array,Q.stride)),me.array.length>0&&he.setAttribute("color",new Ke(me.array,me.stride)),oe.array.length>0&&he.setAttribute("uv",new Ke(oe.array,oe.stride)),Ce.array.length>0&&he.setAttribute("uv1",new Ke(Ce.array,Ce.stride)),be.array.length>0&&he.setAttribute("skinIndex",new Ke(be.array,be.stride)),Fe.array.length>0&&he.setAttribute("skinWeight",new Ke(Fe.array,Fe.stride)),A.data=he,A.type=v[0].type,A.materialKeys=Oe,A}function St(v,y,L,A,P=!1){let Q=v.p,oe=v.stride,Ce=v.vcount;function me(he){let Oe=Q[he+L]*Fe,De=Oe+Fe;for(;Oe<De;Oe++)A.push(be[Oe]);if(P){let We=A.length-Fe-1;Fo.setRGB(A[We+0],A[We+1],A[We+2]).convertSRGBToLinear(),A[We+0]=Fo.r,A[We+1]=Fo.g,A[We+2]=Fo.b}}let be=y.array,Fe=y.stride;if(v.vcount!==void 0){let he=0;for(let Oe=0,De=Ce.length;Oe<De;Oe++){let We=Ce[Oe];if(We===4){let ze=he+oe*0,Xt=he+oe*1,Tt=he+oe*2,gt=he+oe*3;me(ze),me(Xt),me(gt),me(Xt),me(Tt),me(gt)}else if(We===3){let ze=he+oe*0,Xt=he+oe*1,Tt=he+oe*2;me(ze),me(Xt),me(Tt)}else if(We>4)for(let ze=1,Xt=We-2;ze<=Xt;ze++){let Tt=he+oe*0,gt=he+oe*ze,_t=he+oe*(ze+1);me(Tt),me(gt),me(_t)}he+=oe*We}}else for(let he=0,Oe=Q.length;he<Oe;he+=oe)me(he)}function hn(v){return _($e.geometries[v],Et)}function It(v){let y={name:v.getAttribute("name")||"",joints:{},links:[]};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];A.nodeType===1&&A.nodeName==="technique_common"&&Do(A,y)}$e.kinematicsModels[v.getAttribute("id")]=y}function xn(v){return v.build!==void 0?v.build:v}function Wn(v){return _($e.kinematicsModels[v],xn)}function Do(v,y){for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"joint":y.joints[A.getAttribute("sid")]=Mc(A);break;case"link":y.links.push(Hr(A));break}}}function Mc(v){let y;for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":y=qs(A);break}}return y}function qs(v){let y={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new D,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"axis":let P=r(A.textContent);y.axis.fromArray(P);break;case"limits":let Q=A.getElementsByTagName("max")[0],oe=A.getElementsByTagName("min")[0];y.limits.max=parseFloat(Q.textContent),y.limits.min=parseFloat(oe.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function Hr(v){let y={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":y.attachments.push(Ys(A));break;case"matrix":case"translate":case"rotate":y.transforms.push(Vr(A));break}}return y}function Ys(v){let y={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"link":y.links.push(Hr(A));break;case"matrix":case"translate":case"rotate":y.transforms.push(Vr(A));break}}return y}function Vr(v){let y={type:v.nodeName},L=r(v.textContent);switch(y.type){case"matrix":y.obj=new ve,y.obj.fromArray(L).transpose();break;case"translate":y.obj=new D,y.obj.fromArray(L);break;case"rotate":y.obj=new D,y.obj.fromArray(L),y.angle=Ct.degToRad(L[3]);break}return y}function Uo(v){let y={name:v.getAttribute("name")||"",rigidBodies:{}};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];A.nodeType===1&&A.nodeName==="rigid_body"&&(y.rigidBodies[A.getAttribute("name")]={},bc(A,y.rigidBodies[A.getAttribute("name")]))}$e.physicsModels[v.getAttribute("id")]=y}function bc(v,y){for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];A.nodeType===1&&A.nodeName==="technique_common"&&wc(A,y)}}function wc(v,y){for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1)switch(A.nodeName){case"inertia":y.inertia=r(A.textContent);break;case"mass":y.mass=r(A.textContent)[0];break}}}function Sc(v){let y={bindJointAxis:[]};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];A.nodeType===1&&A.nodeName==="bind_joint_axis"&&y.bindJointAxis.push(I(A))}$e.kinematicsScenes[a(v.getAttribute("url"))]=y}function I(v){let y={target:v.getAttribute("target").split("/").pop()};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType===1&&A.nodeName==="axis"){let P=A.getElementsByTagName("param")[0];y.axis=P.textContent;let Q=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=Q.substring(0,Q.length-1)}}return y}function X(v){return v.build!==void 0?v.build:v}function J(v){return _($e.kinematicsScenes[v],X)}function ie(){let v=Object.keys($e.kinematicsModels)[0],y=Object.keys($e.kinematicsScenes)[0],L=Object.keys($e.visualScenes)[0];if(v===void 0||y===void 0)return;let A=Wn(v),P=J(y),Q=Wr(L),oe=P.bindJointAxis,Ce={};for(let Fe=0,he=oe.length;Fe<he;Fe++){let Oe=oe[Fe],De=Wt.querySelector('[sid="'+Oe.target+'"]');if(De){let We=De.parentElement;me(Oe.jointIndex,We)}}function me(Fe,he){let Oe=he.getAttribute("name"),De=A.joints[Fe];Q.traverse(function(We){We.name===Oe&&(Ce[Fe]={object:We,transforms:K(he),joint:De,position:De.zeroPosition})})}let be=new ve;Qh={joints:A&&A.joints,getJointValue:function(Fe){let he=Ce[Fe];if(he)return he.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,he){let Oe=Ce[Fe];if(Oe){let De=Oe.joint;if(he>De.limits.max||he<De.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+he+" outside of limits (min: "+De.limits.min+", max: "+De.limits.max+").");else if(De.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let We=Oe.object,ze=De.axis,Xt=Oe.transforms;Re.identity();for(let Tt=0;Tt<Xt.length;Tt++){let gt=Xt[Tt];if(gt.sid&&gt.sid.indexOf(Fe)!==-1)switch(De.type){case"revolute":Re.multiply(be.makeRotationAxis(ze,Ct.degToRad(he)));break;case"prismatic":Re.multiply(be.makeTranslation(ze.x*he,ze.y*he,ze.z*he));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+De.type);break}else switch(gt.type){case"matrix":Re.multiply(gt.obj);break;case"translate":Re.multiply(be.makeTranslation(gt.obj.x,gt.obj.y,gt.obj.z));break;case"scale":Re.scale(gt.obj);break;case"rotate":Re.multiply(be.makeRotationAxis(gt.obj,gt.angle));break}}We.matrix.copy(Re),We.matrix.decompose(We.position,We.quaternion,We.scale),Ce[Fe].position=he}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function K(v){let y=[],L=Wt.querySelector('[id="'+v.id+'"]');for(let A=0;A<L.childNodes.length;A++){let P=L.childNodes[A];if(P.nodeType!==1)continue;let Q,oe;switch(P.nodeName){case"matrix":Q=r(P.textContent);let Ce=new ve().fromArray(Q).transpose();y.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:Ce});break;case"translate":case"scale":Q=r(P.textContent),oe=new D().fromArray(Q),y.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:oe});break;case"rotate":Q=r(P.textContent),oe=new D().fromArray(Q);let me=Ct.degToRad(Q[3]);y.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:oe,angle:me});break}}return y}function Ae(v){let y=v.getElementsByTagName("node");for(let L=0;L<y.length;L++){let A=y[L];A.hasAttribute("id")===!1&&A.setAttribute("id",c())}}let Re=new ve,ke=new D;function je(v){let y={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new ve,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];if(A.nodeType!==1)continue;let P;switch(A.nodeName){case"node":y.nodes.push(A.getAttribute("id")),je(A);break;case"instance_camera":y.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(rt(A));break;case"instance_light":y.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(rt(A));break;case"instance_node":y.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":P=r(A.textContent),y.matrix.multiply(Re.fromArray(P).transpose()),y.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":P=r(A.textContent),ke.fromArray(P),y.matrix.multiply(Re.makeTranslation(ke.x,ke.y,ke.z)),y.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":P=r(A.textContent);let Q=Ct.degToRad(P[3]);y.matrix.multiply(Re.makeRotationAxis(ke.fromArray(P),Q)),y.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":P=r(A.textContent),y.matrix.scale(ke.fromArray(P)),y.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return Ut(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):$e.nodes[y.id]=y,y}function rt(v){let y={id:a(v.getAttribute("url")),materials:{},skeletons:[]};for(let L=0;L<v.childNodes.length;L++){let A=v.childNodes[L];switch(A.nodeName){case"bind_material":let P=A.getElementsByTagName("instance_material");for(let Q=0;Q<P.length;Q++){let oe=P[Q],Ce=oe.getAttribute("symbol"),me=oe.getAttribute("target");y.materials[Ce]=a(me)}break;case"skeleton":y.skeletons.push(a(A.textContent));break;default:break}}return y}function et(v,y){let L=[],A=[],P,Q,oe;for(P=0;P<v.length;P++){let be=v[P],Fe;if(Ut(be))Fe=Qe(be),tt(Fe,y,L);else if(Ri(be)){let Oe=$e.visualScenes[be].children;for(let De=0;De<Oe.length;De++){let We=Oe[De];if(We.type==="JOINT"){let ze=Qe(We.id);tt(ze,y,L)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",be)}for(P=0;P<y.length;P++)for(Q=0;Q<L.length;Q++)if(oe=L[Q],oe.bone.name===y[P].name){A[P]=oe,oe.processed=!0;break}for(P=0;P<L.length;P++)oe=L[P],oe.processed===!1&&(A.push(oe),oe.processed=!0);let Ce=[],me=[];for(P=0;P<A.length;P++)oe=A[P],Ce.push(oe.bone),me.push(oe.boneInverse);return new os(Ce,me)}function tt(v,y,L){v.traverse(function(A){if(A.isBone===!0){let P;for(let Q=0;Q<y.length;Q++){let oe=y[Q];if(oe.name===A.name){P=oe.boneInverse;break}}P===void 0&&(P=new ve),L.push({bone:A,boneInverse:P,processed:!1})}})}function Gt(v){let y=[],L=v.matrix,A=v.nodes,P=v.type,Q=v.instanceCameras,oe=v.instanceControllers,Ce=v.instanceLights,me=v.instanceGeometries,be=v.instanceNodes;for(let he=0,Oe=A.length;he<Oe;he++)y.push(Qe(A[he]));for(let he=0,Oe=Q.length;he<Oe;he++){let De=Ge(Q[he]);De!==null&&y.push(De.clone())}for(let he=0,Oe=oe.length;he<Oe;he++){let De=oe[he],We=se(De.id),ze=hn(We.id),Xt=Xn(ze,De.materials),Tt=De.skeletons,gt=We.skin.joints,_t=et(Tt,gt);for(let Ci=0,Dn=Xt.length;Ci<Dn;Ci++){let js=Xt[Ci];js.isSkinnedMesh&&(js.bind(_t,We.skin.bindMatrix),js.normalizeSkinWeights()),y.push(js)}}for(let he=0,Oe=Ce.length;he<Oe;he++){let De=lt(Ce[he]);De!==null&&y.push(De.clone())}for(let he=0,Oe=me.length;he<Oe;he++){let De=me[he],We=hn(De.id),ze=Xn(We,De.materials);for(let Xt=0,Tt=ze.length;Xt<Tt;Xt++)y.push(ze[Xt])}for(let he=0,Oe=be.length;he<Oe;he++)y.push(Qe(be[he]).clone());let Fe;if(A.length===0&&y.length===1)Fe=y[0];else{Fe=P==="JOINT"?new wi:new Mt;for(let he=0;he<y.length;he++)Fe.add(y[he])}return Fe.name=P==="JOINT"?v.sid:v.name,Fe.matrix.copy(L),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let En=new zt({name:cn.DEFAULT_MATERIAL_NAME,color:16711935});function Qt(v,y){let L=[];for(let A=0,P=v.length;A<P;A++){let Q=y[v[A]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[A]),L.push(En)):L.push(Ye(Q))}return L}function Xn(v,y){let L=[];for(let A in v){let P=v[A],Q=Qt(P.materialKeys,y);if(Q.length===0&&(A==="lines"||A==="linestrips"?Q.push(new Sn):Q.push(new pi)),A==="lines"||A==="linestrips")for(let be=0,Fe=Q.length;be<Fe;be++){let he=Q[be];if(he.isMeshPhongMaterial===!0||he.isMeshLambertMaterial===!0){let Oe=new Sn;Oe.color.copy(he.color),Oe.opacity=he.opacity,Oe.transparent=he.transparent,Q[be]=Oe}}let oe=P.data.attributes.skinIndex!==void 0,Ce=Q.length===1?Q[0]:Q,me;switch(A){case"lines":me=new Gi(P.data,Ce);break;case"linestrips":me=new Zn(P.data,Ce);break;case"triangles":case"polylist":oe?me=new rs(P.data,Ce):me=new Pe(P.data,Ce);break}L.push(me)}return L}function Ut(v){return $e.nodes[v]!==void 0}function Qe(v){return _($e.nodes[v],Gt)}function Gr(v){let y={name:v.getAttribute("name"),children:[]};Ae(v);let L=n(v,"node");for(let A=0;A<L.length;A++)y.children.push(je(L[A]));$e.visualScenes[v.getAttribute("id")]=y}function Bt(v){let y=new Mt;y.name=v.name;let L=v.children;for(let A=0;A<L.length;A++){let P=L[A];y.add(Qe(P.id))}return y}function Ri(v){return $e.visualScenes[v]!==void 0}function Wr(v){return _($e.visualScenes[v],Bt)}function vs(v){let y=n(v,"instance_visual_scene")[0];return Wr(a(y.getAttribute("url")))}function Xr(){let v=$e.clips;if(l(v)===!0){if(l($e.animations)===!1){let y=[];for(let L in $e.animations){let A=b(L);for(let P=0,Q=A.length;P<Q;P++)y.push(A[P])}Bo.push(new Xi("default",-1,y))}}else for(let y in v)Bo.push(W(y))}function un(v){let y="",L=[v];for(;L.length;){let A=L.shift();A.nodeType===Node.TEXT_NODE?y+=A.textContent:(y+=`
`,L.push.apply(L,A.childNodes))}return y.trim()}if(e.length===0)return{scene:new ss};let yi=new DOMParser().parseFromString(e,"application/xml"),Wt=n(yi,"COLLADA")[0],Mn=yi.getElementsByTagName("parsererror")[0];if(Mn!==void 0){let v=n(Mn,"div")[0],y;return v?y=v.textContent:y=un(Mn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let qr=Wt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",qr);let Oo=h(n(Wt,"asset")[0]),Yr=new gi(this.manager);Yr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Ec;Ro&&(Ec=new Ro(this.manager),Ec.setPath(this.resourcePath||t));let Fo=new we,Bo=[],Qh={},hp=0,$e={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(Wt,"library_animations","animation",m),d(Wt,"library_animation_clips","animation_clip",U),d(Wt,"library_controllers","controller",G),d(Wt,"library_images","image",ne),d(Wt,"library_effects","effect",Be),d(Wt,"library_materials","material",Ue),d(Wt,"library_cameras","camera",ot),d(Wt,"library_lights","light",Ne),d(Wt,"library_geometries","geometry",pe),d(Wt,"library_nodes","node",je),d(Wt,"library_visual_scenes","visual_scene",Gr),d(Wt,"library_kinematics_models","kinematics_model",It),d(Wt,"library_physics_models","physics_model",Uo),d(Wt,"scene","instance_kinematics_scene",Sc),g($e.animations,x),g($e.clips,ee),g($e.controllers,k),g($e.images,ae),g($e.effects,ce),g($e.materials,Ie),g($e.cameras,Je),g($e.lights,Ft),g($e.geometries,Et),g($e.visualScenes,Bt),Xr(),ie();let ko=vs(n(Wt,"scene")[0]);return ko.animations=Bo,Oo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ko.rotation.set(-Math.PI/2,0,0)),ko.scale.multiplyScalar(Oo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Bo},kinematics:Qh,library:$e,scene:ko}}};var Pv=/^[og]\s*(.+)?/,Iv=/^mtllib /,Nv=/^usemtl /,Dv=/^usemap /,Vd=/\s+/,Gd=new D,Oh=new D,Wd=new D,Xd=new D,si=new D,lc=new we;function Uv(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;Gd.fromArray(i,e),Oh.fromArray(i,t),Wd.fromArray(i,n),si.subVectors(Wd,Oh),Xd.subVectors(Gd,Oh),si.cross(Xd),si.normalize(),r.push(si.x,si.y,si.z),r.push(si.x,si.y,si.z),r.push(si.x,si.y,si.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,c,l){let h=this.vertices.length,u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(c,g),d=this.parseNormalIndex(l,g),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(i!==void 0&&i!==""){let g=this.uvs.length;u=this.parseUVIndex(i,g),f=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}var hc=class extends cn{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,o=new ei(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new Uv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split(Vd);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(lc.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),t.colors.push(lc.r,lc.g,lc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=l.slice(1).trim().split(Vd),d=[];for(let _=0,m=f.length;_<m;_++){let p=f[_];if(p.length>0){let w=p.split("/");d.push(w)}}let g=d[0];for(let _=1,m=d.length-1;_<m;_++){let p=d[_],w=d[_+1];t.addFace(g[0],p[0],w[0],g[1],p[1],w[1],g[2],p[2],w[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),f=[],d=[];if(l.indexOf("/")===-1)f=u;else for(let g=0,_=u.length;g<_;g++){let m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(h==="p"){let f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Pv.exec(l))!==null){let u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Nv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Iv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Dv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){let f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let r=new Mt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],h=l.geometry,u=l.materials,f=h.type==="Line",d=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let _=new Rt;_.setAttribute("position",new Ke(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new Ke(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new Ke(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new Ke(h.uvs,2));let m=[];for(let w=0,x=u.length;w<x;w++){let b=u[w],E=b.name+"_"+b.smooth+"_"+g,M=t.materials[E];if(this.materials!==null){if(M=this.materials.create(b.name),f&&M&&!(M instanceof Sn)){let T=new Sn;rn.prototype.copy.call(T,M),T.color.copy(M.color),M=T}else if(d&&M&&!(M instanceof Si)){let T=new Si({size:10,sizeAttenuation:!1});rn.prototype.copy.call(T,M),T.color.copy(M.color),T.map=M.map,M=T}}M===void 0&&(f?M=new Sn:d?M=new Si({size:1,sizeAttenuation:!1}):M=new pi,M.name=b.name,M.flatShading=!b.smooth,M.vertexColors=g,t.materials[E]=M),m.push(M)}let p;if(m.length>1){for(let w=0,x=u.length;w<x;w++){let b=u[w];_.addGroup(b.groupStart,b.groupCount,w)}f?p=new Gi(_,m):d?p=new as(_,m):p=new Pe(_,m)}else f?p=new Gi(_,m[0]):d?p=new as(_,m[0]):p=new Pe(_,m[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){let a=new Si({size:1,sizeAttenuation:!1}),c=new Rt;c.setAttribute("position",new Ke(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ke(t.colors,3)),a.vertexColors=!0);let l=new as(c,a);r.add(l)}return r}};function gs(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function zs(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function uc(s,e=1,t=1){return`rgba(${Math.min(255,s[0]*e)|0},${Math.min(255,s[1]*e)|0},${Math.min(255,s[2]*e)|0},${t})`}function fc(s,e,t,n,i){s.strokeStyle=n,s.lineWidth=i,s.strokeRect(i/2,i/2,e-i,t-i)}function Ov(s=3){let n=gs(512,1024),i=n.getContext("2d"),r=zs(s);i.fillStyle="#f4f2ee",i.fillRect(0,0,512,1024);for(let o=0;o<70;o++){let a=r()*512,c=r()*1024,l=40+r()*180,h=i.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(196,190,180,0.12)"),h.addColorStop(1,"rgba(196,190,180,0)"),i.fillStyle=h,i.fillRect(0,0,512,1024)}for(let o=0;o<10;o++){let a=r()*512,c=-20;for(i.beginPath(),i.moveTo(a,c),i.lineWidth=.6+r()*2.4,i.strokeStyle=`rgba(${115+r()*40|0},${108+r()*30|0},${96+r()*30|0},${.22+r()*.4})`;c<1044;)a+=(r()-.5)*70,c+=18+r()*50,i.lineTo(a,c);i.stroke()}return fc(i,512,1024,"#d8d2c8",3),n}function Fh({w:s=512,h:e=768,planks:t=4,base:n=[178,134,90],seed:i=2,joints:r=!0}={}){let o=gs(s,e),a=o.getContext("2d"),c=zs(i),l=s/t;for(let h=0;h<t;h++){let u=.86+c()*.28;a.fillStyle=uc(n,u),a.fillRect(h*l,0,l,e);for(let f=0;f<46;f++){let d=h*l+c()*l,g=1+c()*4,_=c()*6;a.strokeStyle=uc(n,u*.68,.12+c()*.25),a.lineWidth=.5+c()*1.6,a.beginPath(),a.moveTo(d,0);for(let m=0;m<=e;m+=24)a.lineTo(d+Math.sin(m*.012+_)*g,m);a.stroke()}t>1&&(a.fillStyle="rgba(45,28,12,0.55)",a.fillRect(h*l,0,2,e),r&&a.fillRect(h*l,c()*e,l,2))}return o}function Fv(s=5){let n=gs(512,512),i=n.getContext("2d"),r=zs(s);i.fillStyle="#9d9a94",i.fillRect(0,0,512,512);for(let o=0;o<9e3;o++){let a=120+r()*70|0;i.fillStyle=`rgba(${a},${a-2},${a-6},0.35)`,i.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}return fc(i,512,512,"#7c7973",4),n}function Bv(s=7){let n=gs(512,512),i=n.getContext("2d"),r=zs(s);i.fillStyle="#ebe5db",i.fillRect(0,0,512,512);let o=["#809671","#D2AB80","#725C3A","#B3B792","#c9c2b6","#8d8a85"];for(let a=0;a<520;a++){let c=r()*512,l=r()*512,h=2+r()*9,u=4+(r()*3|0);i.fillStyle=o[r()*o.length|0],i.beginPath();for(let f=0;f<u;f++){let d=f/u*Math.PI*2,g=h*(.6+r()*.6);i.lineTo(c+Math.cos(d)*g,l+Math.sin(d)*g)}i.fill()}return fc(i,512,512,"#d2cbc0",3),n}function kv(s=9){let n=gs(512,512),i=n.getContext("2d"),r=zs(s);i.fillStyle="#cfcac2",i.fillRect(0,0,512,512);let o=512/2,a=512/4;for(let c=0;c<4;c++)for(let l=-1;l<3;l++){let h=l*o+(c%2?o/2:0),u=c*a,f=242+r()*10|0,d=i.createLinearGradient(0,u,0,u+a);d.addColorStop(0,`rgb(${f},${f},${f-3})`),d.addColorStop(1,`rgb(${f-14},${f-14},${f-16})`),i.fillStyle=d,i.fillRect(h+3,u+3,o-6,a-6)}return n}function zv(s=11){let n=gs(512,512),i=n.getContext("2d"),r=zs(s);i.fillStyle="#e4e1d8",i.fillRect(0,0,512,512);let o=512/3;for(let a=0;a<3;a++)for(let c=0;c<3;c++){let l=.85+r()*.3,h=[128,150,113],u=i.createRadialGradient(a*o+o*r(),c*o+o*r(),4,a*o+o/2,c*o+o/2,o);u.addColorStop(0,uc(h,l*1.15)),u.addColorStop(1,uc(h,l*.85)),i.fillStyle=u,i.fillRect(a*o+3,c*o+3,o-6,o-6)}return n}function Hv(s=13){let n=gs(1024,512),i=n.getContext("2d"),r=zs(s);i.fillStyle="#b9b6b0",i.fillRect(0,0,1024,512);for(let o=0;o<50;o++){let a=r()*1024,c=r()*512,l=60+r()*200,h=i.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(150,146,140,0.18)"),h.addColorStop(1,"rgba(150,146,140,0)"),i.fillStyle=h,i.fillRect(0,0,1024,512)}return fc(i,1024,512,"#9a968f",3),n}function qd(){let s=gs(512,288),e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,288);t.addColorStop(0,"#9fc3d8"),t.addColorStop(.6,"#e8d3b0"),t.addColorStop(1,"#6f7f5a"),e.fillStyle=t,e.fillRect(0,0,512,288),e.fillStyle="rgba(80,95,70,0.9)",e.beginPath(),e.moveTo(0,230);for(let n=0;n<=512;n+=32)e.lineTo(n,200+Math.sin(n*.02)*25);return e.lineTo(512,288),e.lineTo(0,288),e.fill(),s}function Yd(){return{floor:{label:"Floor",options:[{name:"Statuario Marble",sub:"600 x 1200 mm",canvas:Ov(),tile:[.6,1.2],rough:.12},{name:"Oak Plank",sub:"200 x 1200 mm",canvas:Fh(),tile:[.8,1.2],rough:.55},{name:"Grey Stone",sub:"600 x 600 mm",canvas:Fv(),tile:[.6,.6],rough:.8},{name:"Terrazzo",sub:"600 x 600 mm",canvas:Bv(),tile:[.6,.6],rough:.35}]},walltile:{label:"Wall Tile",options:[{name:"White Subway",sub:"75 x 150 mm",canvas:kv(),tile:[.3,.3],rough:.15},{name:"Sage Zellige",sub:"100 x 100 mm",canvas:zv(),tile:[.3,.3],rough:.2},{name:"Grey Slab",sub:"600 x 1200 mm",canvas:Hv(),tile:[1.2,.6],rough:.3}]},wall:{label:"Wall Paint",options:[{name:"Almond",sub:"Matt emulsion",color:"#E5E0D8",rough:.92},{name:"Vanilla",sub:"Matt emulsion",color:"#E5D2B8",rough:.92},{name:"Soft Sage",sub:"Matt emulsion",color:"#BCC4AB",rough:.92},{name:"Warm White",sub:"Matt emulsion",color:"#F3F0EA",rough:.92}]},kitchen:{label:"Kitchen",options:[{name:"Matte Matcha",sub:"Laminate",color:"#809671",rough:.6},{name:"Walnut",sub:"Veneer",canvas:Fh({w:256,h:512,planks:1,base:[112,74,46],joints:!1,seed:21}),tile:[.6,1.2],rough:.45},{name:"Gloss White",sub:"Acrylic",color:"#F4F3EF",rough:.08},{name:"Chai",sub:"Laminate",color:"#D2AB80",rough:.5}]},wardrobe:{label:"Wardrobe",options:[{name:"Light Oak",sub:"Veneer",canvas:Fh({w:256,h:512,planks:1,base:[196,160,118],joints:!1,seed:31}),tile:[.6,1.2],rough:.5},{name:"Carob",sub:"Laminate",color:"#725C3A",rough:.55},{name:"Pistache",sub:"Laminate",color:"#B3B792",rough:.6},{name:"Almond Matte",sub:"Laminate",color:"#E5E0D8",rough:.7}]}}}function jd(s,e,t){let n=new Wi(s);return n.colorSpace=it,n.wrapS=n.wrapT=vn,n.anisotropy=t,n.repeat.set(1/e[0],1/e[1]),n}var dc={};function pt(s,e,t=.7,n={}){return dc[s]||(dc[s]=new Ln({color:e,roughness:t,metalness:0,...n}),dc[s].name=s),dc[s]}function Se(s,e,t,n,i=0,r=0,o=0,a){let c=new Pe(new Hi(s,e,t),n);return c.position.set(i,r,o),a&&a.add(c),c}function ri(s,e,t=0,n=0,i=0){let r=new Mt;return r.name=s,r.position.set(t,n,i),e&&e.add(r),r}function Bh(s,e,t,n,i,r=1){Se(e,t,.018,i,0,t/2,.018/2,s),Se(.018,t,n,i,-e/2+.018/2,t/2,n/2,s),Se(.018,t,n,i,e/2-.018/2,t/2,n/2,s),Se(e,.018,n,i,0,.018/2,n/2,s),Se(e,.018,n,i,0,t-.018/2,n/2,s);for(let a=1;a<=r;a++)Se(e-2*.018,.018,n-.03,i,0,t*a/(r+1),n/2,s)}function kh(){let s=new Mt;s.name="demo_room";let e=5,t=6,n=3,i=pt("carcass","#ECE8E1",.75),r=pt("steel","#c8cacc",.25,{metalness:.9}),o=pt("black_glass","#141414",.15),a=pt("counter_quartz","#EEEBE5",.25),c=pt("handle","#2b2b2b",.35,{metalness:.6}),l=new Pe(new Kn(e,t),pt("floor","#ddd",.3));l.rotation.x=-Math.PI/2,l.name="floor",s.add(l);let h=new Pe(new Kn(e,t),pt("ceiling","#F7F5F1",.95));h.rotation.x=Math.PI/2,h.position.y=n,s.add(h);let u=pt("wall","#E5E0D8",.92);Se(e,n,.1,u,0,n/2,-t/2-.05,s),Se(e,n,.1,u,0,n/2,t/2+.05,s),Se(.1,n,t,u,-e/2-.05,n/2,0,s);{let ue=e/2+.05,Le=-1.95,z=-.45,Lt=.87,Ee=2.43;Se(.1,n,Le+t/2,u,ue,n/2,(-t/2+Le)/2,s),Se(.1,n,t/2-z,u,ue,n/2,(z+t/2)/2,s),Se(.1,Lt,z-Le,u,ue,Lt/2,(Le+z)/2,s),Se(.1,n-Ee,z-Le,u,ue,(n+Ee)/2,(Le+z)/2,s)}let f=pt("light_cove","#fff2dc",.5,{emissive:"#ffd9a0",emissiveIntensity:1});Se(e-.2,.02,.06,f,0,n-.02,-t/2+.12,s),Se(e-.2,.02,.06,f,0,n-.02,t/2-.12,s);let d=pt("light_down","#ffffff",.5,{emissive:"#fff0d8",emissiveIntensity:1.5});[[-1.2,-1.6],[1.2,-1.6],[-1.2,1.6],[1.2,.2],[-1.2,.2]].forEach(([ue,Le])=>{let z=new Pe(new Cn(.05,.05,.01,24),d);z.position.set(ue,n-.006,Le),s.add(z)});let g=new Pe(new Kn(1.4,1.5),new zt({color:"#eef4f7"}));g.material.name="window_sky",g.scale.set(1.15,1.1,1),g.position.set(e/2+.11,1.65,-1.2),g.rotation.y=-Math.PI/2,s.add(g);let _=pt("window_frame","#3a3a38",.5);Se(.06,1.6,.05,_,e/2-.03,1.65,-1.95,s),Se(.06,1.6,.05,_,e/2-.03,1.65,-.45,s),Se(.06,.05,1.55,_,e/2-.03,2.43,-1.2,s),Se(.06,.05,1.55,_,e/2-.03,.87,-1.2,s),Se(.06,1.5,.03,_,e/2-.03,1.65,-1.2,s);let m=pt("kitchen","#809671",.6),p=ri("kit_block",s,0,0,-t/2),w=-2.4,x=.6,b=.78,E=.1,M=.58;Se(3,E,.52,pt("plinth","#2a2a2a",.6),w+1.5,E/2,.26,p),["drawers3","doorL","doorR","drawers2","doorR"].forEach((ue,Le)=>{let z=w+x*Le+x/2,Lt=ri("base_carcass_"+Le,p,z,E,0);Bh(Lt,x,b,M,i,ue.startsWith("door")?1:0);let Ee=M+.01;if(ue.startsWith("door")){let Ve=ue==="doorL"?"L":"R",Te=ri(`door_${Ve}_base_${Le}`,p);Se(x-.004,b-.004,.018,m,z,E+b/2,Ee,Te);let ct=Ve==="L"?z+x/2-.05:z-x/2+.05;Se(.012,.18,.025,c,ct,E+b-.16,Ee+.02,Te);for(let Xe=0;Xe<3;Xe++){let N=new Pe(new Cn(.06,.05,.08,20),pt("bowl","#f2efe9",.3));N.position.set(z-.15+Xe*.15,E+b/2+.05,.3),p.add(N)}}else{let Ve=ue==="drawers3"?3:2,Te=Ve===3?[.2,.28,.3]:[.36,.42],ct=E;for(let Xe=Ve-1;Xe>=0;Xe--){let N=Te[Xe]*(b/Te.reduce((fe,Ue)=>fe+Ue,0)),C=ri(`drawer_base_${Le}_${Xe}`,p);Se(x-.004,N-.004,.018,m,z,ct+N/2,Ee,C),Se(.3,.012,.025,c,z,ct+N-.05,Ee+.02,C);let $=x-.06,le=M-.06,ce=Math.min(N-.06,.16);if(Se($,.012,le,i,z,ct+.03,Ee-le/2,C),Se(.012,ce,le,i,z-$/2,ct+.03+ce/2,Ee-le/2,C),Se(.012,ce,le,i,z+$/2,ct+.03+ce/2,Ee-le/2,C),Se($,ce,.012,i,z,ct+.03+ce/2,Ee-le,C),Xe===Ve-1)for(let fe=0;fe<4;fe++)Se(.02,.01,.22,r,z-.12+fe*.08,ct+.045,Ee-.2,C);ct+=N}}}),Se(3.04,.04,.62,a,w+1.5,E+b+.02,.31,p),Se(.5,.012,.4,r,w+x*2.5,E+b+.046,.3,p),Se(.42,.01,.32,pt("sink_bowl","#8d9093",.3,{metalness:.8}),w+x*2.5,E+b+.053,.3,p);let O=new Pe(new Cn(.015,.015,.32,12),r);O.position.set(w+x*2.5,E+b+.2,.06),p.add(O),Se(.03,.03,.18,r,w+x*2.5,E+b+.36,.14,p),Se(.58,.008,.5,o,w+x*4,E+b+.044,.3,p),[[-.14,.2],[.14,.2],[-.14,.42],[.14,.42]].forEach(([ue,Le])=>{let z=new Pe(new za(.07,.006,8,32),pt("burner","#555",.4,{metalness:.5}));z.rotation.x=Math.PI/2,z.position.set(w+x*4+ue,E+b+.05,Le),p.add(z)});let S=new Pe(new Kn(3.04,.6),pt("walltile","#eee",.2));S.position.set(w+1.5,E+b+.04+.3,.004),S.name="walltile_splash",p.add(S);let R=1.5,H=.72,Y=.35;[0,1,2,4].forEach((ue,Le)=>{let z=w+x*ue+x/2,Lt=ri("wall_carcass_"+ue,p,z,R,0);Bh(Lt,x,H,Y,i,1);let Ee=Le%2?"R":"L",Ve=ri(`door_${Ee}_wall_${ue}`,p);Se(x-.004,H-.004,.018,m,z,R+H/2,Y+.01,Ve),Se(.012,.16,.025,c,Ee==="L"?z+x/2-.05:z-x/2+.05,R+.12,Y+.03,Ve);for(let Te=0;Te<4;Te++){let ct=new Pe(new Cn(.035,.035,.14,16),pt("jar","#cbb59a",.4));ct.position.set(z-.18+Te*.12,R+H/2+.08,.17),p.add(ct)}}),Se(.6,.12,.5,r,w+x*4.5,1.62,.25,p),Se(.28,1.3,.25,r,w+x*4.5,2.33,.13,p);let j=pt("wardrobe","#c4a076",.5),F=ri("ward_block",s,-e/2,0,.2),V=.6,U=2.4,ee=0,W=ri("ward_carcass",F,0,0,.9);W.rotation.y=Math.PI/2,Bh(W,1.8,U,V,i,0),Se(V-.03,U-.04,.018,i,V/2,U/2,.6,F),Se(V-.03,U-.04,.018,i,V/2,U/2,1.2,F),[.45,.9,1.35,1.8].forEach(ue=>Se(V-.04,.018,.58,i,V/2,ue,.3,F)),[1.9].forEach(ue=>Se(V-.04,.018,1.18,i,V/2,ue,1.2,F));let G=new Pe(new Cn(.012,.012,1.15,12),r);G.rotation.x=Math.PI/2,G.position.set(V/2,1.78,1.2),F.add(G);let Z=["#725C3A","#809671","#E5D2B8","#3d4a5c","#D2AB80","#f2efe9","#5c3a3a"];for(let ue=0;ue<11;ue++)Se(.42,.85+ue%3*.12,.03,pt("cloth"+ue%7,Z[ue%7],.9),V/2,1.76-(.85+ue%3*.12)/2,.68+ue*.1,F);[.45,.9,1.35].forEach((ue,Le)=>{for(let z=0;z<3;z++)Se(.4,.07,.3,pt("cloth"+(Le+z)%7,Z[(Le+z)%7],.9),V/2,ue+.045+z*.072,.3,F)});let te=V+.01;[["L",0],["R",1],["R",2]].forEach(([ue,Le])=>{let z=ri(`door_${ue}_wardrobe_${Le}`,F),Lt=ee+Le*.6+.3;Se(.02,U-.01,.596,j,te,U/2,Lt,z);let Ee=ue==="L"?Lt-.25:Lt+.25;Se(.025,.6,.015,c,te+.025,1.1,Ee,z)});let re=ri("tv_unit",s);Se(.42,.45,1.9,pt("tv_unit_wood","#6e5135",.5),e/2-.21,.3,1.3,re);let k=new Pe(new Kn(1.4,.79),new zt({map:new Wi(qd())}));k.material.map.colorSpace=it,k.material.name="tv_screen",k.position.set(e/2-.04,1.35,1.3),k.rotation.y=-Math.PI/2,s.add(k),Se(.03,.83,1.44,o,e/2-.02,1.35,1.3,s);let q=new Pe(new Kn(2,2.6),pt("rug","#cfc6b6",1));q.rotation.x=-Math.PI/2,q.position.set(.9,.005,1.3),s.add(q);let se=new Pe(new Cn(.42,.42,.04,48),pt("table_top","#8a6a48",.4));se.position.set(1.3,.4,1.3),s.add(se);let ne=new Pe(new Cn(.08,.12,.38,24),pt("table_leg","#2b2b2b",.5));ne.position.set(1.3,.19,1.3),s.add(ne);let ae=new Pe(new Cn(.18,.14,.4,24),pt("pot","#725C3A",.8));ae.position.set(2.15,.2,2.6),s.add(ae);for(let ue=0;ue<7;ue++){let Le=new Pe(new cs(.16,12,10),pt("leaf","#5b7349",.8));Le.position.set(2.15+Math.sin(ue)*.15,.6+ue*.08,2.6+Math.cos(ue*1.7)*.15),s.add(Le)}let _e=new D(0,0,1.3);s.add(Vv("option_sofa_3-Seater Sage",pt("fabric_sage","#8f9f7e",.95),_e)),s.add(Gv("option_sofa_L-Shape Almond",pt("fabric_almond","#d9cfc0",.95),_e)),s.add(Wv("option_sofa_Armchairs Chai",pt("fabric_chai","#c89a68",.95),_e)),[1.3].forEach(ue=>{let Le=new Pe(new Cn(.004,.004,.9,6),c);Le.position.set(1.3,n-.45,ue),s.add(Le);let z=new Pe(new cs(.1,24,16),pt("light_shade","#fff4dd",.5,{emissive:"#ffe2b0",emissiveIntensity:1.2}));z.position.set(1.3,n-.95,ue),s.add(z)});let Be=Se(.1,.1,.1,pt("marker","#ff00ff"),.6,1.5,-.4,s);return Be.name="photospot_kitchen",{root:s,start:new D(1.7,0,2.7),lights:[new D(1.3,2,1.3),new D(-.9,2.4,-1.8)]}}function zh(s,e,t){let n=ri(s);return n.position.copy(t),n.rotation.y=Math.PI/2,n}function Hh(s,e,t){let n=pt("sofa_leg","#3a2c1e",.5);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([i,r])=>Se(.05,.08,.05,n,i*(e/2-.08),.04,r*(t/2-.08),s))}function Vv(s,e,t){let n=zh(s,e,t),i=2.1,r=.92;Hh(n,i,r),Se(i,.32,r,e,0,.24,0,n),Se(i,.42,.2,e,0,.61,-r/2+.1,n),Se(.18,.26,r,e,-i/2+.09,.53,0,n),Se(.18,.26,r,e,i/2-.09,.53,0,n);for(let o=0;o<3;o++)Se(.57,.14,.66,e,-.58+o*.58,.47,.08,n),Se(.55,.36,.14,e,-.58+o*.58,.68,-.27,n);return Se(.38,.38,.12,pt("cushion","#E5D2B8",.95),-.7,.66,-.15,n),n}function Gv(s,e,t){let n=zh(s,e,t),i=2.3,r=.92;Hh(n,i,r),Se(i,.32,r,e,0,.24,0,n),Se(i,.42,.2,e,0,.61,-r/2+.1,n),Se(.18,.26,r,e,-i/2+.09,.53,0,n),Se(.75,.32,.8,e,i/2-.375,.24,r/2+.4,n),Se(.71,.14,1.5,e,i/2-.375,.47,.35,n);for(let o=0;o<2;o++)Se(.6,.14,.66,e,-.85+o*.62,.47,.08,n),Se(.58,.36,.14,e,-.85+o*.62,.68,-.27,n);return Se(.6,.36,.14,e,i/2-.375,.68,-.27,n),n}function Wv(s,e,t){let n=zh(s,e,t);[-.6,.6].forEach(r=>{let o=ri("",n,r,0,0);Hh(o,.85,.85),Se(.85,.3,.85,e,0,.23,0,o),Se(.85,.5,.18,e,0,.63,-.33,o),Se(.14,.26,.85,e,-.355,.51,0,o),Se(.14,.26,.85,e,.355,.51,0,o),Se(.56,.12,.62,e,0,.44,.06,o)});let i=new Pe(new Cn(.22,.22,.5,32),pt("side_table","#8a6a48",.4));return i.position.set(0,.25,0),n.add(i),n}var Co={tile:/(tile|ceramic|porcelain|vitrified|mosaic|subway|zellige|marble|granite|stone|terrazzo|cladding)/i,wood:/(wood|oak|teak|walnut|plank|laminate|veneer|parquet)/i,paint:/(paint|emulsion|plaster|putty|colour|color)/i,light:/(light|lamp|led|bulb|cove|glow|emissive)/i,glass:/(glass|mirror|window|sky|screen|tv|monitor)/i,metal:/(metal|steel|chrome|brass|aluminium|aluminum|handle|black)/i},Fr=()=>new D;function $d(s,e={}){s.updateMatrixWorld(!0);let t=new At().setFromObject(s),n=e.floorY??t.min.y,i=t.max.y-n,r={floors:[],walls:[],walltiles:[],doors:[],drawers:[],kitchen:0,wardrobe:0,lights:[],notes:[]},o=[];s.traverse(E=>{E.isMesh&&o.push(E)});let a=new Map;for(let E of o){let M=new At().setFromObject(E),T=M.getSize(Fr()),O=M.getCenter(Fr()),S=Array.isArray(E.material)?E.material:[E.material],R=Math.min(T.x,T.z),H=Math.max(T.x,T.z);a.set(E,{b:M,s:T,c:O,mats:S,thinH:R,longH:H,vol:T.x*T.y*T.z,horizontal:T.y<.06&&H>.3,vertSlab:T.y>.08&&R<.06&&H>.08&&T.y>R*2})}let c=new Map;for(let E of o)for(let M of a.get(E).mats)c.has(M)||c.set(M,[]),c.get(M).push(E);let l=E=>!!(E&&E.map),h=E=>E&&E.name||"";for(let E of c.keys())(E.emissive&&E.emissive.r+E.emissive.g+E.emissive.b>.3&&(E.emissiveIntensity??1)>0||Co.light.test(h(E)))&&(r.lights.push(h(E)),E.name="light_auto_"+r.lights.length,E.userData.auto="light");let u=E=>{let M=a.get(E);return M.s.y>i*.9||M.longH>2.6},f=[];for(let E of o){let M=a.get(E);if(!M.vertSlab||u(E))continue;let T=M.longH,O=M.s.y;if(T<.15||T>1.3||O<.1||O>2.6||M.mats[0]?.userData?.auto==="light"||M.mats[0]?.transparent)continue;let S=M.s.x<M.s.z?"x":"z",R=S==="x"?"z":"x",H=null,Y=1e9;for(let V of o){if(V===E)continue;let U=a.get(V);if(Math.max(U.s.x,U.s.y,U.s.z)>.65||U.vol>.004||U.mats[0]===M.mats[0]||Math.max(U.s.x,U.s.y,U.s.z)>.7*Math.max(T,O)||!(U.c[R]>M.b.min[R]-.01&&U.c[R]<M.b.max[R]+.01&&U.c.y>M.b.min.y-.01&&U.c.y<M.b.max.y+.01))continue;let W=Math.max(U.b.min[S]-M.b.max[S],M.b.min[S]-U.b.max[S]);W>.04||W<-.03||W<Y&&(Y=W,H=V)}if(!H)continue;let j=a.get(H).c,F=Fr();F[S]=Math.sign(j[S]-M.c[S])||1,f.push({m:E,i:M,handle:H,thinAxis:S,wideAxis:R,w:T,h:O,nrm:F})}let d=new Set,g=new Set(f.map(E=>E.m)),_=new Set;for(let E of f){let{m:M,i:T,handle:O,wideAxis:S,w:R,h:H,nrm:Y}=E;if(_.has(M)||_.has(O)){E.skip=!0;continue}let j=a.get(O).c,F=j[S]-T.c[S],V=R/H>1.25&&H<.5&&Math.abs(F)<.2*R||H<.32&&Math.abs(F)<.25*R,U=M;for(;U.parent&&U.parent!==s&&!d.has(U.parent);){let Z=new At().setFromObject(U.parent),te=Z.getSize(Fr()),re=0;if(U.parent.traverse(q=>{q.isMesh&&re++}),!(Math.abs(te[S]-R)<.06&&Math.abs(te.y-H)<.06&&te[E.thinAxis]<(V?.7:.1))||re>14)break;U=U.parent}if(U===M&&O.parent!==M){let Z=new Mt,te=M.parent;if(te.add(Z),Z.attach(M),Z.attach(O),U=Z,V){let re=E.thinAxis,k=S,q=T.b;for(let se of[...te.children]){if(!se.isMesh||se===M||se===O||_.has(se)||d.has(se))continue;let ne=a.get(se);if(!ne||Math.max(ne.s.x,ne.s.y,ne.s.z)>.7||ne.b.min[k]<q.min[k]-.01||ne.b.max[k]>q.max[k]+.01||ne.b.min.y<q.min.y-.02||ne.b.max.y>q.max.y+.01)continue;let ae=Y[re]>0?q.min[re]-ne.b.max[re]:ne.b.min[re]-q.max[re],_e=Y[re]>0?q.min[re]-ne.b.min[re]:ne.b.max[re]-q.max[re];ae<-.03||_e>.65||(Z.attach(se),_.add(se))}}}else Xv(U,O)||U.attach(O);d.add(U),E.node=U;let ee=H>=1.4;if(V)U.name=`drawer_auto_${r.drawers.length+1}`,r.drawers.push(U.name);else{let Z=Fr().crossVectors(Y.clone().negate(),new D(0,1,0)),re=Fr().subVectors(j,T.c).dot(Z)>0?"L":"R";U.name=`door_${re}_auto_${r.doors.length+1}`,r.doors.push(U.name)}let W=ee?"wardrobe":"kitchen",G=T.mats[0];if(G&&!G.userData.auto){let Z=c.get(G).some(re=>!f.find(k=>k.m===re)),te=G;Z&&(te=G.userData.autoClone?.[W]||G.clone(),G.userData.autoClone={...G.userData.autoClone||{},[W]:te},M.material=te),te.name=W,te.userData.auto=W}else if(G&&G.userData.auto&&G.userData.auto!==W&&G.userData.auto!=="light"){let Z=G.userData.autoClone?.[W]||G.clone();G.userData.autoClone={...G.userData.autoClone||{},[W]:Z},Z.name=W,Z.userData.auto=W,M.material=Z}r[W]++}let m=new Set(f.filter(E=>!E.skip).map(E=>E.m)),p=new Map;for(let E of o){let M=a.get(E);if(!M.horizontal||M.b.max.y>n+.06||M.s.x*M.s.z<.6)continue;let T=M.mats[0];!T||T.userData.auto||p.set(T,(p.get(T)||0)+M.s.x*M.s.z)}for(let[E,M]of[...p]){let T=0;for(let O of c.get(E)){let S=a.get(O);T+=Math.max(S.s.x*S.s.z,Math.max(S.s.x,S.s.z)*S.s.y)}(M<1.5||M/T<.5)&&p.delete(E)}let w=E=>{let M=new At;for(let T of c.get(E)){let O=a.get(T);O.horizontal&&O.b.max.y<=n+.06&&M.union(O.b)}return M};for(let[E,M]of[...p])for(let[T,O]of p){if(T===E||O<=M*2.5)continue;let S=w(E),R=w(T);if(R.min.x<=S.min.x+.01&&R.min.z<=S.min.z+.01&&R.max.x>=S.max.x-.01&&R.max.z>=S.max.z-.01){p.delete(E),r.notes.push(`${h(E)||"A surface"} lies on the floor; treated as a rug.`);break}}let x=[...p.entries()].sort((E,M)=>M[1]-E[1]);x.forEach(([E],M)=>{let T=x.length===1?"floor":`floor_area${M+1}`;r.floors.push(`${h(E)||"(unnamed)"} -> ${T}`),E.name=T,E.userData.auto="floor"});let b=new Set;for(let E of f){let M=(E.node||E.m).parent;!M||M===s||M.traverse(T=>{T.isMesh&&b.add(T)})}for(let[E,M]of c){if(!E||E.userData.auto||E.transparent||Co.glass.test(h(E)))continue;let T=0,O=0,S=0;for(let Y of M){if(m.has(Y))continue;let j=a.get(Y),F=j.thinH<.03&&(j.s.x<j.s.z?Math.min(j.b.min.x-t.min.x,t.max.x-j.b.max.x):Math.min(j.b.min.z-t.min.z,t.max.z-j.b.max.z))<.15;if(b.has(Y)&&!F){O+=Math.max(j.s.x,j.s.z)*j.s.y;continue}let V=Math.max(j.s.x,j.s.z)*j.s.y;O+=V;let U=j.s.y>.4&&j.thinH<.4&&j.longH>.9,ee=j.b.min.x-t.min.x<.3||t.max.x-j.b.max.x<.3||j.b.min.z-t.min.z<.3||t.max.z-j.b.max.z<.3;U&&(j.s.y>i*.5||ee)&&(T+=V);let W=(j.s.x<j.s.z?Math.min(j.b.min.x-t.min.x,t.max.x-j.b.max.x):Math.min(j.b.min.z-t.min.z,t.max.z-j.b.max.z))<.15;j.thinH<.03&&j.s.y>.2&&j.s.y<i*.85&&j.longH>.3&&W&&(S+=V)}if(O<.5)continue;let R=Co.tile.test(h(E))||l(E)&&!Co.wood.test(h(E))&&!Co.paint.test(h(E)),H=S/O>.6;if(T/O>.6&&T>2||H&&S>.5){let Y=R||H?"walltile":"wall",j=Y==="wall"?r.walls:r.walltiles,F=j.length?`${Y}_area${j.length+1}`:Y;j.push(`${h(E)||"(unnamed)"} -> ${F}`),E.name=F,E.userData.auto=Y}}return!r.doors.length&&!r.drawers.length&&r.notes.push("No shutters found: check that each shutter has a handle."),r}function Xv(s,e){for(let t=e;t;t=t.parent)if(t===s)return!0;return!1}function Kd(s){let e=!1;return s.traverse(t=>{if(/^(door[_\- ]?[lr]|drawer|option[_\- ]|photo[_\- ]?spot)/i.test(t.name||"")&&(e=!0),t.isMesh)for(let n of[].concat(t.material))/^(floor|walltile|wall|kitchen|wardrobe)/i.test(n?.name||"")&&(e=!0)}),e}function Zd(s,e=null){s.updateMatrixWorld(!0);let t=[],n=(m,p,w="")=>t.push({level:m,title:p,fix:w}),i=new At().setFromObject(s),r=i.getSize(new D);r.y>50||Math.max(r.x,r.z)>300?n("error",`Model looks too big (${r.x.toFixed(0)} \xD7 ${r.z.toFixed(0)} m). The units are probably wrong.`,"Export FBX with Units: Meters, and model at real size."):r.y<1.8?n("error",`Model is only ${r.y.toFixed(2)} m high. The units are probably wrong, or the walls are missing.`,"Model at real size and export with Units: Meters."):n("ok",`Real size OK (${r.x.toFixed(1)} \xD7 ${r.z.toFixed(1)} m, ${r.y.toFixed(1)} m high).`),Math.abs(i.min.y)>.05&&n("warn",`Lowest point is at ${(i.min.y*1e3).toFixed(0)} mm, not at 0.`,"Move the model so the finished floor is at height 0.");let o=0,a=[],c=m=>{let p=0;return m.traverse(w=>{if(w.isMesh){let x=w.geometry;p+=(x.index?x.index.count:x.attributes.position.count)/3}}),p};for(let m of s.children){let p=c(m);o+=p,p>5e4&&m.children.length&&a.push(`${m.name||"unnamed group"} (${Math.round(p/1e3)}k faces)`)}a.length&&n("warn",`Heavy objects: ${a.slice(0,5).join(", ")}${a.length>5?` and ${a.length-5} more`:""}.`,"Replace with lighter models (under about 50,000 faces each) or simplify plants, curtains and decor."),o>15e5?n("error",`Whole model has ${(o/1e6).toFixed(1)} million faces. It will be slow in the headset.`,"Purge Unused and replace heavy downloaded models."):n("ok",`Model size OK (${Math.round(o/1e3)}k faces).`);let l=s.children.filter(m=>m.isMesh).length;l>0&&n("warn",`${l} loose surfaces are not inside any group.`,"Select them, right click, Make Group.");let h=new Map;s.traverse(m=>{if(m.isMesh)for(let p of[].concat(m.material))p&&h.set(p.uuid,p)});let u=[...h.values()].filter(m=>!m.name||/^(material|default|<auto>|mat)[\s_#-]*\d*$/i.test(m.name)||/^__/.test(m.name));u.length&&n("warn",`${u.length} materials have default names (like "Material12").`,"Rename them in Window \u203A Materials \u203A In Model so finishes can be found.");let f=[...h.values()].filter(m=>/(tile|marble|wood|oak|laminate|veneer|granite|stone)/i.test(m.name||"")&&!m.map&&!m.userData.auto);f.length&&n("warn",`Texture missing for: ${f.slice(0,4).map(m=>m.name).join(", ")}.`,"Tick Export texture maps and send the texture folder with the FBX.");let d=0;if(s.traverse(m=>{if(!m.isMesh)return;let p=m.geometry;if(!p.attributes.normal)return;let w=new At().setFromObject(m);if(w.max.y>i.min.y+.06||w.getSize(new D).y>.06)return;let x=new D,b=new nt().getNormalMatrix(m.matrixWorld),E=0,M=0;for(let T=0;T<p.attributes.normal.count;T++)x.fromBufferAttribute(p.attributes.normal,T).applyMatrix3(b),x.y<-.9?E++:x.y>.9&&M++;E>M&&M===0&&d++}),d&&n("error",`${d} floor surfaces face downwards (reversed faces).`,"View \u203A Face Style \u203A Monochrome, right click the blue grey faces \u203A Reverse Faces."),e){let m=e.floors.length,p=e.walls.length+e.walltiles.length;n(m?"ok":"error",m?`Floors found: ${m} (each gets a tile menu).`:"No floor found.",m?"":"Model the floor as real faces at height 0."),n(p?"ok":"warn",p?`Wall finishes found: ${e.walls.length} paint, ${e.walltiles.length} tile.`:"No wall finish found.",p?"":"Paint walls with one paint material, and wall tiles with a tile material."),n(e.doors.length?"ok":"warn",`Opening shutters found: ${e.doors.length}. Drawers: ${e.drawers.length}.`,e.doors.length?"":"Give every shutter its own group with a handle, or name it door_L_ / door_R_."),e.loneP&&n("warn",`${e.loneP} shutter-sized panels have no handle, so they will not open.`,"Add a handle inside the shutter group, or name the group door_L_ / door_R_.")}let g=!1;s.traverse(m=>{if(m.isMesh){let p=new At().setFromObject(m),w=p.getSize(new D);w.y<.15&&p.min.y>i.max.y-.3&&w.x*w.z>4&&(g=!0)}}),n(g?"ok":"warn",g?"Ceiling found.":"No ceiling found.",g?"":"Model the ceiling so the rooms get real light and shadow.");let _={tris:Math.round(o),groups:{},mats:[...h.values()].map(m=>m.name).sort()};return s.traverse(m=>{m!==s&&m.name&&!m.isMesh&&(_.groups[m.name]=(_.groups[m.name]||0)+1)}),{items:t,sig:_}}function Jd(s,e){if(!s)return[];let t=[],n=Object.keys(s.groups),r=Object.keys(e.groups).filter(h=>!s.groups[h]),o=n.filter(h=>!e.groups[h]);r.length&&t.push(`Added: ${r.slice(0,6).join(", ")}${r.length>6?"\u2026":""}`),o.length&&t.push(`Removed: ${o.slice(0,6).join(", ")}${o.length>6?"\u2026":""}`);let a=e.mats.filter(h=>!s.mats.includes(h)),c=s.mats.filter(h=>!e.mats.includes(h));(a.length||c.length)&&t.push(`Materials changed: +${a.length} / -${c.length}`);let l=e.tris-s.tris;return Math.abs(l)>1e3&&t.push(`Faces: ${l>0?"+":""}${Math.round(l/1e3)}k`),t.length||t.push("No changes since the last upload."),t}var qv=document.getElementById("stage"),Vt=new mo({antialias:!0});Vt.setPixelRatio(Math.min(window.devicePixelRatio,2));Vt.setSize(window.innerWidth,window.innerHeight);Vt.outputColorSpace=it;Vt.toneMapping=Vl;Vt.toneMappingExposure=.72;Vt.shadowMap.enabled=!0;Vt.shadowMap.type=Hl;Vt.xr.enabled=!0;Vt.xr.setReferenceSpaceType("local-floor");qv.appendChild(Vt.domElement);var Gn=new ss;Gn.background=new we("#d9d4cb");var Yv=new Cr(Vt);Gn.environment=Yv.fromScene(new tc(Vt),.04).texture;var tn=new Ht(70,window.innerWidth/window.innerHeight,.05,100),Yt=new Mt;Yt.add(tn);Gn.add(Yt);tn.position.set(0,1.6,0);var xi=new Mt;Gn.add(xi);var ip=new Ga("#fff7ea","#a89c88",.3);Gn.add(ip);var ci=new Ei("#fff1dc",1.8);ci.castShadow=!0;ci.shadow.mapSize.set(2048,2048);ci.shadow.bias=-4e-4;ci.shadow.normalBias=.02;Gn.add(ci,ci.target);var pc=[],jv=Vt.capabilities.getMaxAnisotropy(),$v=Yd(),Qd=6,ep=4,Vh=new Map,ln=null,xc=new D,Kv=new D,Zv=["walltile","floor","wall","kitchen","wardrobe"];function Jv(s){let e=(s||"").toLowerCase().replace(/[^a-z0-9_]/g,"");for(let t of Zv){if(e===t||e.startsWith(t+"_")||e.startsWith(t+"-")){let n=e.slice(t.length+1).split(/[_-]/)[0];return{key:n&&/^[a-z]+$/.test(n)?t+"_"+n:t,prefix:t,room:n&&/^[a-z]+$/.test(n)?n:""}}if(e.startsWith(t)&&/^[0-9]*$/.test(e.slice(t.length)))return{key:t,prefix:t,room:""}}return null}function Xh(s){return s.replace(/[_]+/g," ").replace(/\s+/g," ").trim()}function tp(s){return s.charAt(0).toUpperCase()+s.slice(1)}function Qv(s){for(;s;){if(!s.visible)return!1;s=s.parent}return!0}function eM(s){let e=s.geometry.clone(),t=e.attributes.position;e.attributes.normal||e.computeVertexNormals();let i=e.attributes.normal,r=new Float32Array(t.count*2),o=s.matrixWorld,a=new nt().getNormalMatrix(o),c=new D,l=new D;for(let h=0;h<t.count;h++){c.fromBufferAttribute(t,h).applyMatrix4(o),l.fromBufferAttribute(i,h).applyMatrix3(a).normalize();let u=Math.abs(l.x),f=Math.abs(l.y),d=Math.abs(l.z);f>=u&&f>=d?(r[h*2]=c.x,r[h*2+1]=-c.z):u>=d?(r[h*2]=c.z*Math.sign(l.x||1)*-1,r[h*2+1]=c.y):(r[h*2]=c.x*Math.sign(l.z||1),r[h*2+1]=c.y)}e.setAttribute("uv",new Kt(r,2)),s.geometry=e}function mc(s,{start:e,keepOriginalOption:t=!0,isDemo:n=!1,lightmap:i=null}={}){ln&&xi.clear(),xi.add(s),s.updateMatrixWorld(!0);let r=new At().setFromObject(s),o=r.min.y,a={root:s,finishes:{},variants:{},anims:[],floorY:o,bounds:r,isDemo:n};s.traverse(b=>{if(!b.isMesh)return;let E=M=>{if(M.isMeshStandardMaterial)return M.side=yn,M;let T=new Ln({color:M.color?M.color.clone():new we("#ccc"),map:M.map||null,roughness:.7,metalness:0,transparent:!!M.transparent,opacity:M.opacity??1,side:yn});return T.map&&(T.map.colorSpace=it),T.name=M.name,T};if(b.material=Array.isArray(b.material)?b.material.map(E):E(b.material),b.receiveShadow=!0,i&&b.geometry.attributes.uv1){b.userData.lm=!0;let M=T=>{if(!Vh.has(T)){let O=T.clone();O.lightMap=i,O.lightMapIntensity=ep,O.envMapIntensity=.12,Vh.set(T,O)}return Vh.get(T)};b.material=Array.isArray(b.material)?b.material.map(M):M(b.material)}}),a.baked=!!i;let c=[],l=[],h=[],u=[];(function b(E){let M=(E.name||"").toLowerCase().trim();if(E!==s){let T;if(T=M.match(/^door[_\- ]?(l|r)(?:[_\- ]|$)/)){c.push({o:E,side:T[1]});return}if(/^drawer/.test(M)){l.push(E);return}if(T=E.name.match(/^photo[_\- ]?spot[_\- ](.+)$/i)){u.push({o:E,name:T[1].toLowerCase().trim()});return}(T=E.name.match(/^option[_\- ]([^_]+)[_\- ](.+)$/i))&&h.push({o:E,group:T[1].toLowerCase(),label:Xh(T[2])})}E.children.slice().forEach(b)})(s);let f=b=>{let E=b.getCenter(new D),M=[{axis:"x",sign:1,dist:E.x-r.min.x},{axis:"x",sign:-1,dist:r.max.x-E.x},{axis:"z",sign:1,dist:E.z-r.min.z},{axis:"z",sign:-1,dist:r.max.z-E.z}];return M.sort((T,O)=>T.dist-O.dist),M[0]};for(let{o:b,side:E}of c){b.updateMatrixWorld(!0);let M=new At().setFromObject(b),T=M.getSize(new D),O=M.getCenter(new D),S=T.x>=T.z?"x":"z",R=S==="x"?"z":"x",H=O[R]-r.min[R]<r.max[R]-O[R]?1:-1,Y=new D;Y[R]=H;let j=Y.clone().negate(),F=new D().crossVectors(j,new D(0,1,0)),V=E==="l"?F.clone().negate():F.clone(),U=O.clone();U[S]=V[S]>0?M.max[S]:M.min[S],U[R]=H>0?M.max[R]:M.min[R];let ee=new Mt;ee.name="pivot_"+b.name,ee.position.copy(U),xi.add(ee),ee.updateMatrixWorld(!0),ee.attach(b);let W=O.clone().sub(U);W.y=0;let G=Ct.degToRad(100),te=(k=>new D(W.x*Math.cos(k)+W.z*Math.sin(k),0,-W.x*Math.sin(k)+W.z*Math.cos(k)))(G).sub(W).dot(Y)>0?G:-G,re={obj:ee,kind:"rot",from:0,to:te,t:0,target:0};a.anims.push(re),b.traverse(k=>{k.isMesh&&(k.userData.act={kind:"toggle",anim:re})})}for(let b of l){b.updateMatrixWorld(!0);let E=new At().setFromObject(b),M=E.getSize(new D),T=null;b.traverse(F=>{if(!F.isMesh)return;let V=new At().setFromObject(F).getSize(new D),U=V.x<V.z,ee=(U?V.z:V.x)*V.y,W=Math.min(V.x,V.z);V.y>W*2&&(!T||ee>T.area)&&(T={area:ee,axis:U?"x":"z"})});let O=T?T.axis:f(E).axis,S={axis:O,sign:E.min[O]-r.min[O]<r.max[O]-E.max[O]?1:-1},R=Math.min(.45,M[S.axis]*.8),H=new Mt;H.name="slide_"+b.name,xi.add(H),H.attach(b);let Y=new D;Y[S.axis]=S.sign;let j={obj:H,kind:"move",dir:Y,from:0,to:R,t:0,target:0};a.anims.push(j),b.traverse(F=>{F.isMesh&&(F.userData.act={kind:"toggle",anim:j})})}a.spots=[];for(let{o:b,name:E}of u){b.updateMatrixWorld(!0);let M=new At().setFromObject(b).getCenter(new D);b.visible=!1;let T=cM(Xh(E));T.position.set(M.x,o+.01,M.z),xi.add(T);let O={kind:"photo",name:E};T.traverse(S=>{(S.isMesh||S.isSprite)&&(S.userData.act=O)}),a.spots.push({name:E,pos:M,marker:T})}for(let{o:b,group:E,label:M}of h){let T="opt_"+E;a.variants[T]||(a.variants[T]={label:tp(E),items:[],sel:0}),a.variants[T].items.push({name:M,obj:b}),b.traverse(O=>{O.isMesh&&!O.userData.act&&(O.userData.act={kind:"menu",tab:T})})}for(let b of Object.values(a.variants))b.items.sort((E,M)=>E.name.localeCompare(M.name)),b.items=b.items.slice(0,Qd),b.items.forEach((E,M)=>E.obj.visible=M===0);s.updateMatrixWorld(!0),xi.updateMatrixWorld(!0);let d=[];xi.traverse(b=>{b.isMesh&&d.push(b)});for(let b of d){let E=Array.isArray(b.material)?b.material:[b.material],M=E.map(S=>Jv(S.name));if(!M.some(Boolean))continue;M.every(S=>S&&S.key===M[0].key)&&eM(b),b.userData.orig=b.material;let O=E.map((S,R)=>{let H=M[R];if(!H)return S;if(!a.finishes[H.key]){let Y=$v[H.prefix],j=new Ln({color:"#fff",roughness:.6,metalness:0,side:yn});j.name="finish_"+H.key;let F=j.clone();i&&(F.lightMap=i,F.lightMapIntensity=ep,F.envMapIntensity=.12),a.finishes[H.key]={label:Y.label+(H.room?" \xB7 "+tp(H.room):""),prefix:H.prefix,mat:j,matLM:F,meshes:[],options:Y.options.slice(0,Qd),sel:0,allowOriginal:t}}return a.finishes[H.key].meshes.push(b),b.userData.lm?a.finishes[H.key].matLM:a.finishes[H.key].mat});b.material=Array.isArray(b.material)?O:O[0],b.userData.finishKeys=M.map(S=>S&&S.key),b.userData.act||(b.userData.act={kind:"finish"})}for(let[b,E]of Object.entries(a.finishes))jh(a,b,E.allowOriginal?-1:0);d.forEach(b=>{let E=new At().setFromObject(b),M=E.getSize(xc);b.castShadow=M.y<2.2&&E.min.y<o+2&&Math.max(M.x,M.z)<4});let g=r.getCenter(new D),_=r.getSize(new D);ci.position.set(g.x+_.x*.3,r.max.y+4,g.z+_.z*.2),ci.target.position.set(g.x,o,g.z);let m=Math.max(_.x,_.z)*.75;Object.assign(ci.shadow.camera,{left:-m,right:m,top:m,bottom:-m,near:.5,far:_.y+10}),ci.shadow.camera.updateProjectionMatrix(),pc.forEach(b=>Gn.remove(b)),pc.length=0;let p=Math.max(1,Math.round(_.x/3)),w=Math.max(1,Math.round(_.z/3));for(let b=0;b<p;b++)for(let E=0;E<w;E++){let M=new Hn("#ffe4c2",1,6,1.8);M.position.set(r.min.x+(b+.5)*_.x/p,r.max.y-.35,r.min.z+(E+.5)*_.z/w),Gn.add(M),pc.push(M)}ci.intensity=a.baked?0:1.8,ci.castShadow=!a.baked,ip.intensity=a.baked?.12:.3,pc.forEach(b=>b.visible=!a.baked),Vt.toneMappingExposure=a.baked?.9:.72,ln=a;let x=e||new D(g.x,o,g.z);return Yt.position.set(x.x,x.y,x.z),Yt.rotation.set(0,0,0),ai=0,Xs=0,Vs=sp()[0]?.key||null,a}function jh(s,e,t){let n=s.finishes[e];if(n.sel=t,t===-1){n.meshes.forEach(r=>{let o=r.userData.orig;Array.isArray(r.material)?r.material=r.material.map((a,c)=>a===n.mat||a===n.matLM?o[c]:a):r.material=o});return}n.meshes.forEach(r=>{let o=r.userData.finishKeys,a=r.userData.lm?n.matLM:n.mat;Array.isArray(r.material)?r.material=r.material.map((c,l)=>o[l]===e?a:c):r.material=a});let i=n.options[t];i.canvas&&(i.tex=i.tex||jd(i.canvas,i.tile,jv));for(let r of[n.mat,n.matLM])i.canvas?(r.map=i.tex,r.color.set("#ffffff")):(r.map=null,r.color.set(i.color)),r.roughness=i.rough,r.needsUpdate=!0}function sp(){if(!ln)return[];let s=[],e=["floor","walltile","wall","kitchen","wardrobe"];return Object.entries(ln.finishes).sort((t,n)=>e.indexOf(t[1].prefix)-e.indexOf(n[1].prefix)||t[0].localeCompare(n[0])).forEach(([t,n])=>s.push({key:t,label:n.label,type:"finish"})),Object.entries(ln.variants).forEach(([t,n])=>s.push({key:t,label:n.label,type:"variant"})),s}var Nn=1024,Ws=660,yc=document.createElement("canvas");yc.width=Nn;yc.height=Ws;var at=yc.getContext("2d"),$h=new Wi(yc);$h.colorSpace=it;var gn=new Pe(new Kn(1,Ws/Nn),new zt({map:$h,toneMapped:!1,depthTest:!1,transparent:!0}));gn.renderOrder=999;gn.visible=!1;Gn.add(gn);var gc="help",Vs=null,_s=[],Gs=null,Ot={bg:"#F2EEE7",ink:"#2c2620",mute:"#7a7062",matcha:"#809671",carob:"#725C3A",line:"#d8d0c3",chip:"#E5E0D8"};function Hs(s,e,t,n,i){at.beginPath(),at.moveTo(s+i,e),at.arcTo(s+t,e,s+t,e+n,i),at.arcTo(s+t,e+n,s,e+n,i),at.arcTo(s,e+n,s,e,i),at.arcTo(s,e,s+t,e,i),at.closePath()}function On(s,e,t,n,i,r=400,o="left"){at.font=`${r} ${n}px "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,at.fillStyle=i,at.textAlign=o,at.textBaseline="alphabetic",at.fillText(s,e,t)}function Gh(s,e,t,n=400){if(at.font=`${n} ${t}px "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,at.measureText(s).width<=e)return s;for(;s.length>2&&at.measureText(s+"\u2026").width>e;)s=s.slice(0,-1);return s+"\u2026"}function Lo(){if(_s=[],at.clearRect(0,0,Nn,Ws),Hs(0,0,Nn,Ws,36),at.fillStyle=Ot.bg,at.fill(),On("MZAF",44,66,34,Ot.carob,800),On("VR WALKTHROUGH",160,66,22,Ot.mute,600),Hs(Nn-104,26,64,56,16),at.fillStyle=Gs==="close"?Ot.line:Ot.chip,at.fill(),On("\u2715",Nn-72,66,30,Ot.ink,600,"center"),_s.push({id:"close",x:Nn-104,y:26,w:64,h:56,fn:()=>Io()}),gc==="help"){On("How to use",44,140,40,Ot.ink,700),[["Trigger on the floor","Move to that spot"],["Trigger on a door or drawer","Open or close it"],["Trigger on wall, cabinet, sofa","Change its finish or model"],["Grip on the floor","Change the floor tile"],["Trigger on a gold circle","Photo view of that spot"],["A / X button","Open this menu"],["Right thumbstick","Turn  \xB7  Left thumbstick: walk"]].forEach(([r,o],a)=>{let c=190+a*48;On(r,44,c,27,Ot.ink,600),On(o,470,c,27,Ot.mute,400)});let e=44,t=540,n=Nn-88,i=84;Hs(e,t,n,i,22),at.fillStyle=Gs==="start"?"#6d8360":Ot.matcha,at.fill(),On("Start walkthrough",Nn/2,t+55,34,"#fff",700,"center"),_s.push({id:"start",x:e,y:t,w:n,h:i,fn:()=>{gc="finish",Lo()}})}else{let s=sp();s.find(a=>a.key===Vs)||(Vs=s[0]?.key);let e=44,t=104,n=(Nn-88)/Math.max(1,s.length),i=62;s.forEach((a,c)=>{let l=e+c*n,h=a.key===Vs;Hs(l+4,t,n-8,i,16),at.fillStyle=h?Ot.matcha:Gs==="tab"+c?Ot.line:Ot.chip,at.fill(),On(Gh(a.label,n-24,24,600),l+n/2,t+40,24,h?"#fff":Ot.ink,600,"center"),_s.push({id:"tab"+c,x:l+4,y:t,w:n-8,h:i,fn:()=>{Vs=a.key,Lo()}})});let r=s.find(a=>a.key===Vs);if(r){let a,c,l;if(r.type==="finish"){let w=ln.finishes[r.key];a=w.options.map(x=>({name:x.name,sub:x.sub,canvas:x.canvas,color:x.color})),w.allowOriginal&&a.unshift({name:"As designed",sub:"From the model",original:!0}),c=w.allowOriginal?w.sel+1:w.sel,l=x=>jh(ln,r.key,w.allowOriginal?x-1:x)}else{let w=ln.variants[r.key];a=w.items.map(x=>({name:x.name,sub:w.label+" option",variant:!0})),c=w.sel,l=x=>{w.sel=x,w.items.forEach((b,E)=>b.obj.visible=E===x)}}let h=a.length,u=Math.min(h,4),f=Math.ceil(h/u),d=22,g=Math.min(210,(Nn-88-d*(u-1))/u),_=f>1?150:230,m=(Nn-(u*g+(u-1)*d))/2,p=196;a.forEach((w,x)=>{let b=x%u,E=Math.floor(x/u),M=m+b*(g+d),T=p+E*(_+70);at.save(),Hs(M,T,g,_,18),at.clip(),w.canvas?at.drawImage(w.canvas,0,0,w.canvas.width,Math.min(w.canvas.height,w.canvas.width*_/g),M,T,g,_):w.color?(at.fillStyle=w.color,at.fillRect(M,T,g,_)):(at.fillStyle=w.original?"#ddd6ca":Ot.chip,at.fillRect(M,T,g,_),On(w.original?"\u25CE":"\u29C9",M+g/2,T+_/2+22,64,Ot.carob,400,"center")),at.restore(),Hs(M,T,g,_,18),at.lineWidth=x===c?8:2,at.strokeStyle=x===c?Ot.matcha:Gs==="it"+x?Ot.carob:Ot.line,at.stroke(),x===c&&(at.beginPath(),at.arc(M+g-26,T+26,18,0,Math.PI*2),at.fillStyle=Ot.matcha,at.fill(),On("\u2713",M+g-26,T+35,24,"#fff",700,"center")),On(Gh(w.name,g,24,600),M+g/2,T+_+32,24,Ot.ink,600,"center"),On(Gh(w.sub||"",g,19),M+g/2,T+_+58,19,Ot.mute,400,"center"),_s.push({id:"it"+x,x:M,y:T,w:g,h:_+60,fn:()=>{l(x),Lo()}})})}let o=Ws-78;[["Open all doors",1],["Close all",0]].forEach(([a,c],l)=>{let h=44+l*250;Hs(h,o,230,52,14),at.fillStyle=Gs==="all"+l?Ot.line:Ot.chip,at.fill(),On(a,h+115,o+34,22,Ot.ink,600,"center"),_s.push({id:"all"+l,x:h,y:o,w:230,h:52,fn:()=>ln.anims.forEach(u=>u.target=c)})}),On("Point and pull the trigger to choose",Nn-44,o+34,20,Ot.mute,400,"right")}$h.needsUpdate=!0}function xs(s,e){gc=s,e&&(Vs=e);let t=tn.getWorldPosition(xc),n=new D;tn.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize(),gn.position.copy(t).addScaledVector(n,1),gn.position.y=t.y-.12,gn.lookAt(t.x,gn.position.y,t.z),gn.visible=!0,Lo(),Jh()}function Io(){gn.visible=!1,Jh()}function rp(s){let e=s.x*Nn,t=(1-s.y)*Ws,n=_s.find(i=>e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h);n&&n.fn()}function op(s){let e=null;if(s){let t=s.x*Nn,n=(1-s.y)*Ws,i=_s.find(r=>t>=r.x&&t<=r.x+r.w&&n>=r.y&&n<=r.y+r.h);e=i?i.id:null}e!==Gs&&(Gs=e,Lo())}var ys=new qa;ys.far=30;function kr(){if(gn.visible){let e=ys.intersectObject(gn,!1)[0];if(e)return{type:"panel",uv:e.uv,point:e.point,dist:e.distance}}if(No)return{type:"none",dist:10};let s=ys.intersectObject(xi,!0);for(let e of s){if(!Qv(e.object))continue;let t=e.face?e.face.normal.clone().transformDirection(e.object.matrixWorld):new D,n=null;for(let r=e.object;r&&!n;r=r.parent)n=r.userData.act||null;let i=t.y>.75&&e.point.y<ln.floorY+.25;if(n&&n.kind==="finish"){let r=e.object.userData.finishKeys||[];n={kind:"menu",tab:r[e.face?.materialIndex??0]||r.find(Boolean)}}return{type:i&&(!n||n.kind==="menu")?"floor":n?n.kind:"none",act:n,point:e.point,dist:e.distance,floorTab:i&&n?n.tab:null}}return{type:"none",dist:10}}function _c(s,e){if(s.type==="panel"){e&&rp(s.uv);return}if(No){hM();return}if(s.type==="photo"){lM(s.act.name);return}if(s.type==="floor"){e?ap(s.point):xs("finish",s.floorTab||Object.keys(ln.finishes).find(t=>t.startsWith("floor")));return}if(s.type==="toggle"){s.act.anim.target=s.act.anim.target?0:1;return}if(s.type==="menu"){xs("finish",s.act.tab);return}e||xs("finish")}function ap(s){let e=tn.getWorldPosition(xc);Yt.position.x+=s.x-e.x,Yt.position.z+=s.z-e.z,Yt.position.y=s.y}var Ti=new Pe(new vo(.16,.22,40),new zt({color:"#9fd3a8",transparent:!0,opacity:.85,depthWrite:!1}));Ti.rotation.x=-Math.PI/2;Ti.visible=!1;Gn.add(Ti);var cp=[];for(let s=0;s<2;s++){let e=Vt.xr.getController(s),t=new Rt().setFromPoints([new D(0,0,0),new D(0,0,-1)]),n=new Zn(t,new Sn({color:"#ffffff",transparent:!0,opacity:.7})),i=new Pe(new cs(.012,12,8),new zt({color:"#ffffff"}));e.add(n,i),Yt.add(e);let r=Vt.xr.getControllerGrip(s),o=new Pe(new Cn(.018,.024,.12,16),new Ln({color:"#e8e4dc",roughness:.5}));o.rotation.x=Math.PI/2-.5,r.add(o),Yt.add(r);let a={c:e,line:n,dot:i,source:null,last:null,btn:{}};e.addEventListener("connected",c=>{a.source=c.data}),e.addEventListener("disconnected",()=>{a.source=null}),e.addEventListener("select",()=>{qh(a),_c(kr(),!0)}),e.addEventListener("squeeze",()=>{qh(a),_c(kr(),!1)}),cp.push(a)}var np=new ve;function qh(s){np.identity().extractRotation(s.c.matrixWorld),ys.ray.origin.setFromMatrixPosition(s.c.matrixWorld),ys.ray.direction.set(0,0,-1).applyMatrix4(np)}var Wh=!1;function tM(s){let e=tn.getWorldPosition(new D);Yt.rotation.y+=s,Yt.updateMatrixWorld(!0);let t=tn.getWorldPosition(new D);Yt.position.x+=e.x-t.x,Yt.position.z+=e.z-t.z}function nM(s){let e=!1,t=null;for(let n of cp){if(!n.source){n.line.visible=n.dot.visible=!1;continue}n.line.visible=n.dot.visible=!0,qh(n);let i=kr(),r=Math.min(i.dist??10,10);n.line.scale.z=r,n.dot.position.set(0,0,-r);let o=i.type!=="none";n.line.material.color.set(o?"#9fd3a8":"#ffffff"),i.type==="floor"&&(Ti.position.copy(i.point).y+=.01,e=!0),i.type==="panel"&&(t=i.uv);let a=n.source.gamepad;if(!a)continue;let c=a.axes.length>=4?[a.axes[2],a.axes[3]]:[a.axes[0]||0,a.axes[1]||0];if(n.source.handedness==="right")Math.abs(c[0])>.7?Wh||(tM(-Math.sign(c[0])*Math.PI/6),Wh=!0):Math.abs(c[0])<.3&&(Wh=!1);else if(Math.abs(c[1])>.25||Math.abs(c[0])>.25){let h=new D;tn.getWorldDirection(h),h.y=0,h.normalize();let u=new D().crossVectors(h,new D(0,1,0));Yt.position.addScaledVector(h,-c[1]*1.3*s).addScaledVector(u,c[0]*1.3*s)}let l=a.buttons[4]?.pressed;l&&!n.btn.a&&(gn.visible?Io():xs(gc==="help"?"help":"finish")),n.btn.a=l}Ti.visible=e,gn.visible&&op(t)}var ai=0,Xs=0,Fn=null,oi={},Kh=new He,zr=Vt.domElement;zr.addEventListener("contextmenu",s=>s.preventDefault());zr.addEventListener("pointerdown",s=>{Fn={x:s.clientX,y:s.clientY,moved:0,button:s.button},zr.setPointerCapture(s.pointerId)});zr.addEventListener("pointermove",s=>{if(Kh.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),Fn){let e=s.clientX-Fn.x,t=s.clientY-Fn.y;Fn.moved+=Math.abs(e)+Math.abs(t),Fn.x=s.clientX,Fn.y=s.clientY,Fn.moved>6&&(ai-=e*.004,Xs=Ct.clamp(Xs-t*.004,-1.3,1.3))}});zr.addEventListener("pointerup",s=>{Fn&&Fn.moved<=6&&(ys.setFromCamera(Kh,tn),_c(kr(),Fn.button!==2)),Fn=null});addEventListener("keydown",s=>{oi[s.code]=!0,(s.code==="KeyM"||s.code==="Space")&&(gn.visible?Io():xs("finish"),s.preventDefault())});addEventListener("keyup",s=>{oi[s.code]=!1});function iM(s){tn.rotation.set(Xs,ai,0,"YXZ");let e=new D(-Math.sin(ai),0,-Math.cos(ai)),t=new D(Math.cos(ai),0,-Math.sin(ai)),n=1.6*s;(oi.KeyW||oi.ArrowUp)&&Yt.position.addScaledVector(e,n),(oi.KeyS||oi.ArrowDown)&&Yt.position.addScaledVector(e,-n),(oi.KeyA||oi.ArrowLeft)&&Yt.position.addScaledVector(t,-n),(oi.KeyD||oi.ArrowRight)&&Yt.position.addScaledVector(t,n),oi.KeyQ&&(ai+=1.6*s),oi.KeyE&&(ai-=1.6*s),ys.setFromCamera(Kh,tn);let i=kr();zr.style.cursor=Fn&&Fn.moved>6?"grabbing":i.type!=="none"?"pointer":"grab",Ti.visible=i.type==="floor",Ti.visible&&(Ti.position.copy(i.point),Ti.position.y+=.01),gn.visible&&op(i.type==="panel"?i.uv:null)}function sM(){if(!ln)return;let s=ln.bounds,e=tn.getWorldPosition(Kv),t=.25,n=Ct.clamp(e.x,s.min.x+t,s.max.x-t),i=Ct.clamp(e.z,s.min.z+t,s.max.z-t);Yt.position.x+=n-e.x,Yt.position.z+=i-e.z}var rM=new Xa;function oM(s){return s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2}Vt.setAnimationLoop(()=>{let s=Math.min(rM.getDelta(),.05);if(Vt.xr.isPresenting?(nM(s),Yh>0&&--Yh===0&&xs("help")):iM(s),sM(),ln)for(let e of ln.anims){if(e.t===e.target)continue;e.t=e.target>e.t?Math.min(e.target,e.t+s*1.6):Math.max(e.target,e.t-s*1.6);let t=e.from+(e.to-e.from)*oM(e.t);e.kind==="rot"?e.obj.rotation.y=t:e.obj.position.copy(e.dir).multiplyScalar(t)}No&&tn.getWorldPosition(Ai.position),Vt.render(Gn,tn)});addEventListener("resize",()=>{tn.aspect=innerWidth/innerHeight,tn.updateProjectionMatrix(),Vt.setSize(innerWidth,innerHeight)});var Zh={},No=null,Ai=new Pe(new cs(20,64,32),new zt({side:mn,toneMapped:!1,depthWrite:!1}));Ai.scale.x=-1;Ai.rotation.y=-Math.PI/2;Ai.visible=!1;Ai.renderOrder=-1;Gn.add(Ai);var aM=new gi;function cM(s){let e=new Mt,t=new Pe(new vo(.22,.3,48),new zt({color:"#D2AB80",transparent:!0,opacity:.95,depthWrite:!1}));t.rotation.x=-Math.PI/2,e.add(t);let n=new Pe(new Ba(.22,48),new zt({color:"#D2AB80",transparent:!0,opacity:.25,depthWrite:!1}));n.rotation.x=-Math.PI/2,e.add(n);let i=document.createElement("canvas");i.width=512,i.height=128;let r=i.getContext("2d");r.fillStyle="rgba(44,38,32,0.85)",r.beginPath(),r.roundRect(8,8,496,112,56),r.fill(),r.fillStyle="#fff",r.font="600 44px Segoe UI, Roboto, Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("Photo view \xB7 "+s,256,66);let o=new Wi(i);o.colorSpace=it;let a=new Na(new go({map:o,depthTest:!1,transparent:!0}));return a.scale.set(.8,.2,1),a.position.y=1,a.renderOrder=998,e.add(a),e}function lM(s){let e=Zh[s];if(!e){Vn('No panorama image found for "'+Xh(s)+'". Add photospot_'+s+".jpg to the files.");return}Vn("Opening photo view\u2026",0),aM.load(e,t=>{t.colorSpace=it,t.mapping=Is,Ai.material.map=t,Ai.material.needsUpdate=!0;let n=ln.spots.find(i=>i.name===s);n&&ap(new D(n.pos.x,ln.floorY,n.pos.z)),No=s,Ai.visible=!0,xi.visible=!1,Ti.visible=!1,_n("toast").hidden=!0,Vn("Photo view. Click or pull the trigger to go back.",4e3)},void 0,()=>Vn("Could not open the panorama image."))}function hM(){No=null,Ai.visible=!1,xi.visible=!0}var _n=s=>document.getElementById(s);function Vn(s,e=3500){let t=_n("toast");t.textContent=s,t.hidden=!1,clearTimeout(Vn.h),e&&(Vn.h=setTimeout(()=>t.hidden=!0,e))}function Jh(){_n("btn-menu").textContent=gn.visible?"Close menu":"Finishes & options"}_n("btn-menu").addEventListener("click",()=>{gn.visible?Io():xs("finish")});_n("btn-demo").addEventListener("click",()=>vc());var Br=null,Yh=0;async function uM(){let s=_n("btn-vr");if(!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr").catch(()=>!1))){s.disabled=!0,s.textContent="VR: open on headset",s.title="Open this link in the Pico browser, or in Chrome on a laptop with SteamVR running";return}s.disabled=!1,s.textContent="Enter VR",s.addEventListener("click",async()=>{if(Br){Br.end();return}try{Br=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]}),tn.position.set(0,0,0),tn.rotation.set(0,0,0),Vt.xr.setFoveation(1),await Vt.xr.setSession(Br),s.textContent="Exit VR",Yh=30,Br.addEventListener("end",()=>{Br=null,s.textContent="Enter VR",tn.position.set(0,1.6,0)})}catch(t){Vn("Could not start VR: "+t.message)}})}_n("file").addEventListener("change",async s=>{let e=[...s.target.files];if(s.target.value="",!e.length)return;let t={};e.forEach(c=>t[c.name.toLowerCase()]=URL.createObjectURL(c)),e.forEach(c=>{let l=c.name.toLowerCase().match(/^photo[_\- ]?spot[_\- ](.+)\.(jpe?g|png)$/);l&&(Zh[l[1].trim()]=t[c.name.toLowerCase()])});let i=[".glb",".gltf",".fbx",".dae",".obj"].map(c=>e.find(l=>l.name.toLowerCase().endsWith(c))).find(Boolean);if(!i){Vn("Choose the exported model file (.fbx, .dae, .glb or .obj) together with its texture images.");return}Vn("Loading "+i.name+"\u2026",0);let r=new Mo;r.setURLModifier(c=>{let l=decodeURIComponent(c.split(/[\\/]/).pop().split("?")[0]).toLowerCase();return t[l]||c});let o=i.name.toLowerCase().slice(i.name.lastIndexOf(".")),a=t[i.name.toLowerCase()];try{let c;o===".glb"||o===".gltf"?c=(await new Ao(r).loadAsync(a)).scene:o===".fbx"?c=await new sc(r).loadAsync(a):o===".dae"?c=(await new cc(r).loadAsync(a)).scene:c=await new hc(r).loadAsync(a),lp(c,i.name)}catch(c){console.error(c),Vn("Could not read "+i.name+". Export again as FBX with texture maps.",8e3)}});function lp(s,e){let t=new At().setFromObject(s),n=t.getSize(xc).y||1,r=[1,.001,.01,.0254,.3048].reduce((p,w)=>Math.abs(Math.log(n*w/3))<Math.abs(Math.log(n*p/3))?w:p,1);s.scale.multiplyScalar(r),s.updateMatrixWorld(!0);let o=new At().setFromObject(s),a=o.getCenter(new D);s.position.x-=a.x,s.position.z-=a.z,s.position.y-=o.min.y;let c=new Mt;c.name="model",c.add(s),c.updateMatrixWorld(!0);let l=Kd(c)?null:$d(c),h=Zd(c,l),u=null,f="mzafvr_sig_"+e.replace(/\.[^.]+$/,"").toLowerCase();try{u=JSON.parse(localStorage.getItem(f)||"null"),localStorage.setItem(f,JSON.stringify(h.sig))}catch{}let d=mc(c,{keepOriginalOption:!0});fM(e,l,h.items,u?Jd(u,h.sig):null);let g=d.anims.length,_=Object.keys(d.finishes).length,m=Object.keys(d.variants).length;Vn(`${e}: ${g} opening parts, ${_} changeable finishes, ${m} furniture choices found.`,7e3),_n("title-sub").textContent=e.replace(/\.[^.]+$/,"")}function fM(s,e,t,n){let i=_n("check");if(!i)return;let r=u=>String(u).replace(/[&<>]/g,f=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[f]),o=t.filter(u=>u.level==="error"),a=t.filter(u=>u.level==="warn"),c=t.filter(u=>u.level==="ok"),l=u=>`<li class="${u.level}"><span class="dot"></span><div><b>${r(u.title)}</b>${u.fix?`<small>Fix: ${r(u.fix)}</small>`:""}</div></li>`,h=`<header><div><b>Model check</b><span>${r(s)}</span></div><button type="button" id="check-x" aria-label="Close">\xD7</button></header>`;if(h+=`<p class="sum">${o.length?`<em class="e">${o.length} to fix</em>`:""}${a.length?`<em class="w">${a.length} to check</em>`:""}<em class="o">${c.length} OK</em></p>`,e){let u=[...e.floors,...e.walls,...e.walltiles];h+='<h4>Named automatically</h4><p class="note">This model did not use the naming rules, so the software detected the parts itself. Check them in the walkthrough.</p><ul class="auto">',h+=`<li>Floors: ${e.floors.length}</li><li>Paint walls: ${e.walls.length}</li><li>Wall tiles: ${e.walltiles.length}</li><li>Shutters: ${e.doors.length} (hinge side found from the handle)</li><li>Drawers: ${e.drawers.length}</li><li>Kitchen fronts: ${e.kitchen}, wardrobe fronts: ${e.wardrobe}</li><li>Lights: ${e.lights.length}</li>`,h+=`</ul>${u.length?`<details><summary>Material changes (${u.length})</summary><ul class="mono">${u.map(f=>`<li>${r(f)}</li>`).join("")}</ul></details>`:""}`,e.notes.length&&(h+=`<ul class="mono">${e.notes.map(f=>`<li>${r(f)}</li>`).join("")}</ul>`)}(o.length||a.length)&&(h+=`<h4>Problems to fix in SketchUp</h4><ul class="items">${[...o,...a].map(l).join("")}</ul>`),n&&(h+=`<h4>Changes since last upload</h4><ul class="mono">${n.map(u=>`<li>${r(u)}</li>`).join("")}</ul>`),h+=`<h4>Passed</h4><ul class="items">${c.map(l).join("")}</ul>`,i.innerHTML=h,i.hidden=!1,_n("btn-check").hidden=!1,_n("check-x").onclick=()=>{i.hidden=!0}}_n("btn-check")?.addEventListener("click",()=>{_n("check").hidden=!_n("check").hidden});function dM(){let e=kh().root,t=[];e.traverse(r=>{/^option_sofa_(L-Shape|Armchairs)/.test(r.name)&&t.push(r)}),t.forEach(r=>r.parent.remove(r));let n=0,i=new Set;e.traverse(r=>{if(r.name=r.isMesh?"":"Group#"+n++,r.isMesh)for(let o of[].concat(r.material))i.has(o)||(i.add(o),o.name="Material"+i.size)}),lp(e,"Unnamed_SketchUp_model.fbx")}var Po=!!window.DEMO_BAKED;async function vc(){let s=kh();if(Object.assign(Zh,window.DEMO_PANOS||{}),Po&&window.DEMO_BAKED){Vn("Loading realistic lighting\u2026",0);try{let[e,t]=await Promise.all([new Ao().loadAsync(window.DEMO_BAKED.glb),new gi().loadAsync(window.DEMO_BAKED.lightmap)]);t.flipY=!1,t.channel=1,t.colorSpace=it;let n=new Mt;n.add(e.scene),mc(n,{start:s.start,keepOriginalOption:!1,isDemo:!0,lightmap:t}),_n("toast").hidden=!0}catch(e){console.error(e),Vn("Realistic lighting could not load, showing simple lighting."),mc(s.root,{start:s.start,keepOriginalOption:!1,isDemo:!0})}}else mc(s.root,{start:s.start,keepOriginalOption:!1,isDemo:!0});_n("title-sub").textContent="Sample kitchen & living",pM()}function pM(){let s=_n("btn-light");s&&(s.hidden=!window.DEMO_BAKED||!ln?.isDemo,s.textContent=Po?"Realistic light: On":"Realistic light: Off")}_n("btn-light")?.addEventListener("click",()=>{Po=!Po;let s=Yt.position.clone(),e=ai,t=Xs;vc().then(()=>{Yt.position.copy(s),ai=e,Xs=t})});/test=unnamed/.test(location.search)?dM():vc();uM();Jh();window.__vr={loadDemo:vc,applyFinish:jh,setRealistic:s=>{Po=s},state:()=>ln,pick:kr,doAction:_c,openPanel:xs,closePanel:Io,raycaster:ys,camera:tn,rig:Yt,panel:gn,panelClick:rp,setYaw:(s,e=0)=>{ai=s,Xs=e},renderer:Vt,scene:Gn};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
