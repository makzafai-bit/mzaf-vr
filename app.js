(()=>{var gp=0,iu=1,xp=2;var Zf=1,Gl=2,Oi=3,$n=0,gn=1,yn=2;var ts=0,vr=1,su=2,ru=3,ou=4,_p=5,As=100,yp=101,vp=102,au=103,cu=104,Mp=200,bp=201,wp=202,Sp=203,cl=204,ll=205,Ep=206,Tp=207,Ap=208,Rp=209,Cp=210,Pp=211,Lp=212,Ip=213,Np=214,Dp=0,Up=1,Op=2,Ma=3,Fp=4,Bp=5,kp=6,zp=7,ja=0,Hp=1,Vp=2,ns=0,Gp=1,Wp=2,Xp=3,Wl=4,qp=5,Yp=6,lu="attached",jp="detached",Jf=300,wr=301,Sr=302,Ns=303,hl=304,$a=306,vn=1e3,Kt=1001,uo=1002,nn=1003,ba=1004;var oo=1005;var pn=1006,Xl=1007;var di=1008;var is=1009,$p=1010,Kp=1011,ql=1012,Qf=1013,Qi=1014,Bi=1015,fo=1016,ed=1017,td=1018,Ps=1020,Zp=1021,Yn=1023,Jp=1024,Qp=1025,Ls=1026,Er=1027,em=1028,nd=1029,tm=1030,id=1031,sd=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,hu=35840,uu=35841,fu=35842,du=35843,rd=36196,pu=37492,mu=37496,gu=37808,xu=37809,_u=37810,yu=37811,vu=37812,Mu=37813,bu=37814,wu=37815,Su=37816,Eu=37817,Tu=37818,Au=37819,Ru=37820,Cu=37821,Ic=36492,Pu=36494,Lu=36495,nm=36283,Iu=36284,Nu=36285,Du=36286;var Tr=2300,Ds=2301,Nc=2302,Uu=2400,Ou=2401,Fu=2402,im=2500;var od=0,Ka=1,To=2,ad=3e3,Is=3001,sm=3200,rm=3201,Za=0,om=1,jn="",it="srgb",sn="srgb-linear",Yl="display-p3",Ja="display-p3-linear",wa="linear",kt="srgb",Sa="rec709",Ea="p3";var Ks=7680;var Bu=519,am=512,cm=513,lm=514,cd=515,hm=516,um=517,fm=518,dm=519,ul=35044;var ku="300 es",fl=1035,ki=2e3,Ta=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,ao=Math.PI/180,Ar=180/Math.PI;function fi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function mn(s,e,t){return Math.max(e,Math.min(t,s))}function jl(s,e){return(s%e+e)%e}function pm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mm(s,e,t){return s!==e?(t-s)/(e-s):0}function co(s,e,t){return(1-t)*s+t*e}function gm(s,e,t,n){return co(s,e,1-Math.exp(-t*n))}function xm(s,e=1){return e-Math.abs(jl(s,e*2)-e)}function _m(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ym(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mm(s,e){return s+Math.random()*(e-s)}function bm(s){return s*(.5-Math.random())}function wm(s){s!==void 0&&(zu=s);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sm(s){return s*ao}function Em(s){return s*Ar}function dl(s){return(s&s-1)===0&&s!==0}function Tm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Aa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Am(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Pt={DEG2RAD:ao,RAD2DEG:Ar,generateUUID:fi,clamp:mn,euclideanModulo:jl,mapLinear:pm,inverseLerp:mm,lerp:co,damp:gm,pingpong:xm,smoothstep:_m,smootherstep:ym,randInt:vm,randFloat:Mm,randFloatSpread:bm,seededRandom:wm,degToRad:Sm,radToDeg:Em,isPowerOfTwo:dl,ceilPowerOfTwo:Tm,floorPowerOfTwo:Aa,setQuaternionFromProperEuler:Am,normalize:Dt,denormalize:bi},He=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],b=i[1],_=i[4],E=i[7],F=i[2],S=i[5],P=i[8];return r[0]=o*x+a*b+c*F,r[3]=o*m+a*_+c*S,r[6]=o*p+a*E+c*P,r[1]=l*x+h*b+u*F,r[4]=l*m+h*_+u*S,r[7]=l*p+h*E+u*P,r[2]=f*x+d*b+g*F,r[5]=f*m+d*_+g*S,r[8]=f*p+d*E+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new et;function ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function po(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rm(){let s=po("canvas");return s.style.display="block",s}var Hu={};function lo(s){s in Hu||(Hu[s]=!0,console.warn(s))}var Vu=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[sn]:{transfer:wa,primaries:Sa,toReference:s=>s,fromReference:s=>s},[it]:{transfer:kt,primaries:Sa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ja]:{transfer:wa,primaries:Ea,toReference:s=>s.applyMatrix3(Gu),fromReference:s=>s.applyMatrix3(Vu)},[Yl]:{transfer:kt,primaries:Ea,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gu),fromReference:s=>s.applyMatrix3(Vu).convertLinearToSRGB()}},Cm=new Set([sn,Ja]),Mt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Vo[e].toReference,i=Vo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Vo[s].primaries},getTransfer:function(s){return s===jn?wa:Vo[s].transfer}};function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=po("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pm=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oc(i[o].image)):r.push(Oc(i[o]))}else r=Oc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lm=0,Zt=class s extends ss{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Kt,i=Kt,r=pn,o=di,a=Yn,c=is,l=s.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=fi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Is?it:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?Is:ad}set encoding(e){lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Is?it:jn}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Jf;Zt.DEFAULT_ANISOTROPY=1;var mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,E=(d+1)/2,F=(p+1)/2,S=(h+f)/4,P=(u+x)/4,R=(g+m)/4;return _>E&&_>F?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=P/n):E>F?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=S/i,r=R/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=P/r,i=R/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Is?it:jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ml=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let F=Math.sqrt(_),S=Math.atan2(F,p*b);m=Math.sin(m*S)/F,a=Math.sin(a*S)/F}let E=a*b;if(c=c*m+f*E,l=l*m+d*E,h=h*m+g*E,u=u*m+x*E,m===1-a){let F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new D,Wu=new Gt,Ct=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Wo.subVectors(this.max,Kr),Js.subVectors(e.a,Kr),Qs.subVectors(e.b,Kr),er.subVectors(e.c,Kr),ji.subVectors(Qs,Js),$i.subVectors(er,Qs),bs.subVectors(Js,er);let t=[0,-ji.z,ji.y,0,-$i.z,$i.y,0,-bs.z,bs.y,ji.z,0,-ji.x,$i.z,0,-$i.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-$i.y,$i.x,0,-bs.y,bs.x,0];return!Bc(t,Js,Qs,er,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Js,Qs,er,Wo))?!1:(Xo.crossVectors(ji,$i),t=[Xo.x,Xo.y,Xo.z],Bc(t,Js,Qs,er,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,Go=new Ct,Js=new D,Qs=new D,er=new D,ji=new D,$i=new D,bs=new D,Kr=new D,Wo=new D,Xo=new D,ws=new D;function Bc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ws.fromArray(s,r);let a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Im=new Ct,Zr=new D,kc=new D,Hn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Im.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(kc)),this.expandByPoint(Zr.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new D,zc=new D,qo=new D,Ki=new D,Hc=new D,Yo=new D,Vc=new D,Us=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(zc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Ki.dot(this.direction),c=-Ki.dot(qo),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zc).addScaledVector(qo,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){Hc.subVectors(t,e),Yo.subVectors(n,e),Vc.crossVectors(Hc,Yo);let o=this.direction.dot(Vc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(Yo.crossVectors(Ki,Yo));if(c<0)return null;let l=a*this.direction.dot(Hc.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Vc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nm,e,Dm)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Zi.crossVectors(n,kn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Zi.crossVectors(n,kn)),Zi.normalize(),jo.crossVectors(kn,Zi),i[0]=Zi.x,i[4]=jo.x,i[8]=kn.x,i[1]=Zi.y,i[5]=jo.y,i[9]=kn.y,i[2]=Zi.z,i[6]=jo.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],E=n[11],F=n[15],S=i[0],P=i[4],R=i[8],y=i[12],w=i[1],B=i[5],H=i[9],j=i[13],O=i[2],V=i[6],U=i[10],$=i[14],q=i[3],z=i[7],ee=i[11],Z=i[15];return r[0]=o*S+a*w+c*O+l*q,r[4]=o*P+a*B+c*V+l*z,r[8]=o*R+a*H+c*U+l*ee,r[12]=o*y+a*j+c*$+l*Z,r[1]=h*S+u*w+f*O+d*q,r[5]=h*P+u*B+f*V+d*z,r[9]=h*R+u*H+f*U+d*ee,r[13]=h*y+u*j+f*$+d*Z,r[2]=g*S+x*w+m*O+p*q,r[6]=g*P+x*B+m*V+p*z,r[10]=g*R+x*H+m*U+p*ee,r[14]=g*y+x*j+m*$+p*Z,r[3]=b*S+_*w+E*O+F*q,r[7]=b*P+_*B+E*V+F*z,r[11]=b*R+_*H+E*U+F*ee,r[15]=b*y+_*j+E*$+F*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,_=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,E=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,F=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,S=t*b+n*_+i*E+r*F;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/S;return e[0]=b*P,e[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*P,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*P,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*P,e[4]=_*P,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*P,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*P,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*P,e[8]=E*P,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*P,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*P,e[12]=F*P,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*P,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*P,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,b=c*l,_=c*h,E=c*u,F=n.x,S=n.y,P=n.z;return i[0]=(1-(x+p))*F,i[1]=(d+E)*F,i[2]=(g-_)*F,i[3]=0,i[4]=(d-E)*S,i[5]=(1-(f+p))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(g+_)*P,i[9]=(m-b)*P,i[10]=(1-(f+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=tr.set(i[0],i[1],i[2]).length(),o=tr.set(i[4],i[5],i[6]).length(),a=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hi.copy(this);let l=1/r,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ki){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===ki)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ki){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,g,x;if(a===ki)g=(o+r)*u,x=-2*u;else if(a===Ta)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new D,hi=new _e,Nm=new D(0,0,0),Dm=new D(1,1,1),Zi=new D,jo=new D,kn=new D,Xu=new _e,qu=new Gt,Mn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Um=0,Yu=new D,nr=new Gt,Ii=new _e,$o=new D,Jr=new D,Om=new D,Fm=new Gt,ju=new D(1,0,0),$u=new D(0,1,0),Ku=new D(0,0,1),Bm={type:"added"},km={type:"removed"},Tt=class s extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Mn,n=new Gt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new et}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Jr,$o,this.up):Ii.lookAt($o,Jr,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(Ii),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new D,Ni=new D,Gc=new D,Di=new D,ir=new D,sr=new D,Zu=new D,Wc=new D,Xc=new D,qc=new D,Ko=!1,Cs=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ui.subVectors(i,t),Ni.subVectors(n,t),Gc.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Ni),c=ui.dot(Gc),l=Ni.dot(Ni),h=Ni.dot(Gc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,t,n,i,r,o,a,c){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Ni.subVectors(e,t),ui.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ui.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ir.subVectors(i,n),sr.subVectors(r,n),Wc.subVectors(e,n);let c=ir.dot(Wc),l=sr.dot(Wc);if(c<=0&&l<=0)return t.copy(n);Xc.subVectors(e,i);let h=ir.dot(Xc),u=sr.dot(Xc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ir,o);qc.subVectors(e,r);let d=ir.dot(qc),g=sr.dot(qc);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(sr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Zu.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Zu,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=jl(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yc(o,r,e+1/3),this.g=Yc(o,r,e),this.b=Yc(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return Mt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(mn(Sn.r*255,0,255))*65536+Math.round(mn(Sn.g*255,0,255))*256+Math.round(mn(Sn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=it){Mt.fromWorkingColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,i=Sn.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Zo);let n=co(Ji.h,Zo.h,t),i=co(Ji.s,Zo.s,t),r=co(Ji.l,Zo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new we;we.NAMES=hd;var zm=0,rn=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=vr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zt=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new D,Jo=new He,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}};var Rr=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var La=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Hm=0,qn=new _e,jc=new Tt,rr=new D,zn=new Ct,Qr=new Ct,dn=new D,bt=class s extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?La:Rr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(zn.min,Qr.min),zn.expandByPoint(dn),dn.addVectors(zn.max,Qr.max),zn.expandByPoint(dn)):(zn.expandByPoint(Qr.min),zn.expandByPoint(Qr.max))}zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)dn.fromBufferAttribute(a,l),c&&(rr.fromBufferAttribute(e,l),dn.add(rr)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new D,h[w]=new D;let u=new D,f=new D,d=new D,g=new He,x=new He,m=new He,p=new D,b=new D;function _(w,B,H){u.fromArray(i,w*3),f.fromArray(i,B*3),d.fromArray(i,H*3),g.fromArray(o,w*2),x.fromArray(o,B*2),m.fromArray(o,H*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let j=1/(x.x*m.y-m.x*x.y);isFinite(j)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(j),b.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(j),l[w].add(p),l[B].add(p),l[H].add(p),h[w].add(b),h[B].add(b),h[H].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,B=E.length;w<B;++w){let H=E[w],j=H.start,O=H.count;for(let V=j,U=j+O;V<U;V+=3)_(n[V+0],n[V+1],n[V+2])}let F=new D,S=new D,P=new D,R=new D;function y(w){P.fromArray(r,w*3),R.copy(P);let B=l[w];F.copy(B),F.sub(P.multiplyScalar(P.dot(B))).normalize(),S.crossVectors(R,B);let j=S.dot(h[w])<0?-1:1;c[w*4]=F.x,c[w*4+1]=F.y,c[w*4+2]=F.z,c[w*4+3]=j}for(let w=0,B=E.length;w<B;++w){let H=E[w],j=H.start,O=H.count;for(let V=j,U=j+O;V<U;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new _e,Ss=new Us,Qo=new Hn,Qu=new D,or=new D,ar=new D,cr=new D,$c=new D,ea=new D,ta=new He,na=new He,ia=new He,ef=new D,tf=new D,nf=new D,sa=new D,ra=new D,Ie=class extends Tt{constructor(e=new bt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&($c.fromBufferAttribute(u,e),o?ea.addScaledVector($c,h):ea.addScaledVector($c.sub(t),h))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Qo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Qo,Qu)===null||Ss.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,F=_;E<F;E+=3){let S=a.getX(E),P=a.getX(E+1),R=a.getX(E+2);i=oa(this,p,e,n,l,h,u,S,P,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);i=oa(this,o,e,n,l,h,u,b,_,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,F=_;E<F;E+=3){let S=E,P=E+1,R=E+2;i=oa(this,p,e,n,l,h,u,S,P,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,E=m+2;i=oa(this,o,e,n,l,h,u,b,_,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Vm(s,e,t,n,i,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===$n,a),c===null)return null;ra.copy(a),ra.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:s}}function oa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,or),s.getVertexPosition(c,ar),s.getVertexPosition(l,cr);let h=Vm(s,e,t,n,or,ar,cr,sa);if(h){i&&(ta.fromBufferAttribute(i,a),na.fromBufferAttribute(i,c),ia.fromBufferAttribute(i,l),h.uv=Cs.getInterpolation(sa,or,ar,cr,ta,na,ia,new He)),r&&(ta.fromBufferAttribute(r,a),na.fromBufferAttribute(r,c),ia.fromBufferAttribute(r,l),h.uv1=Cs.getInterpolation(sa,or,ar,cr,ta,na,ia,new He),h.uv2=h.uv1),o&&(ef.fromBufferAttribute(o,a),tf.fromBufferAttribute(o,c),nf.fromBufferAttribute(o,l),h.normal=Cs.getInterpolation(sa,or,ar,cr,ef,tf,nf,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Cs.getNormal(or,ar,cr,u.normal),h.face=u}return h}var Hi=class s extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(x,m,p,b,_,E,F,S,P,R,y){let w=E/P,B=F/R,H=E/2,j=F/2,O=S/2,V=P+1,U=R+1,$=0,q=0,z=new D;for(let ee=0;ee<U;ee++){let Z=ee*B-j;for(let re=0;re<V;re++){let G=re*w-H;z[x]=G*b,z[m]=Z*_,z[p]=O,l.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[p]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(re/P),u.push(1-ee/R),$+=1}}for(let ee=0;ee<R;ee++)for(let Z=0;Z<P;Z++){let re=f+Z+V*ee,G=f+Z+V*(ee+1),X=f+(Z+1)+V*(ee+1),K=f+(Z+1)+V*ee;c.push(re,G,K),c.push(G,X,K),q+=6}a.addGroup(d,q,y),d+=q,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){let e={};for(let t=0;t<s.length;t++){let n=Cr(s[t]);for(let i in n)e[i]=n[i]}return e}function Gm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ud(s){return s.getRenderTarget()===null?s.outputColorSpace:Mt.workingColorSpace}var Wm={clone:Cr,merge:Cn},Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends Ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,hr=1,gl=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(lr,hr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(lr,hr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(lr,hr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(lr,hr,e,t);a.layers=this.layers,this.add(a);let c=new Ht(lr,hr,e,t);c.layers=this.layers,this.add(c);let l=new Ht(lr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends Zt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xl=class extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Is?it:jn),this.texture=new Na(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hi(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ts});r.uniforms.tEquirect.value=t;let o=new Ie(i,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=pn),new gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Kc=new D,Ym=new D,jm=new et,Fi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Kc.subVectors(n,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jm.getNormalMatrix(e),i=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Hn,aa=new D,go=class{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],b=i[13],_=i[14],E=i[15];if(n[0].setComponents(c-r,f-l,m-d,E-p).normalize(),n[1].setComponents(c+r,f+l,m+d,E+p).normalize(),n[2].setComponents(c+o,f+h,m+g,E+b).normalize(),n[3].setComponents(c-o,f-h,m-g,E-b).normalize(),n[4].setComponents(c-a,f-u,m-x,E-_).normalize(),t===ki)n[5].setComponents(c+a,f+u,m+x,E+_).normalize();else if(t===Ta)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $m(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Kn=class s extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let _=0;_<l;_++){let E=_*u-r;g.push(E,-b,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let _=b+l*p,E=b+l*(p+1),F=b+1+l*(p+1),S=b+1+l*p;d.push(_,E,S),d.push(E,F,S)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
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
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,hg=`#ifdef USE_BUMPMAP
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yg=`#define PI 3.141592653589793
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
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`
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
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,$g=`struct PhysicalMaterial {
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
}`,Kg=`
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,Mx=`#define TOON
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
}`,bx=`#define TOON
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
}`,wx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:xg,color_vertex:_g,common:yg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:bg,displacementmap_vertex:wg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Eg,colorspace_fragment:Tg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Ng,fog_pars_vertex:Dg,fog_fragment:Ug,fog_pars_fragment:Og,gradientmap_pars_fragment:Fg,lightmap_fragment:Bg,lightmap_pars_fragment:kg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:jg,lights_physical_pars_fragment:$g,lights_fragment_begin:Kg,lights_fragment_maps:Zg,lights_fragment_end:Jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:c0,morphcolor_vertex:l0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:d0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:x0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:S0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:N0,shadowmask_pars_fragment:D0,skinbase_vertex:U0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:z0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:j0,background_vert:$0,background_frag:K0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:Q0,cube_frag:ex,depth_vert:tx,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:sx,equirect_vert:rx,equirect_frag:ox,linedashed_vert:ax,linedashed_frag:cx,meshbasic_vert:lx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:fx,meshmatcap_vert:dx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:xx,meshphong_frag:_x,meshphysical_vert:yx,meshphysical_frag:vx,meshtoon_vert:Mx,meshtoon_frag:bx,points_vert:wx,points_frag:Sx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Rx},xe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Mi={basic:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new we(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new we(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([xe.points,xe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([xe.common,xe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([xe.sprite,xe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Cn([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Cn([xe.lights,xe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:Cn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ca={r:0,b:0,g:0};function Cx(s,e,t,n,i,r,o){let a=new we(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let b=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),b=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===$a)?(h===void 0&&(h=new Ie(new Hi(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Cr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(_.colorSpace)!==kt,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ie(new Kn(2,2),new Vi({name:"BackgroundMaterial",uniforms:Cr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(_.colorSpace)!==kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(ca,ud(s)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function Px(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(O,V,U,$,q){let z=!1;if(o){let ee=x($,U,V);l!==ee&&(l=ee,d(l.object)),z=p(O,$,U,q),z&&b(O,$,U,q)}else{let ee=V.wireframe===!0;(l.geometry!==$.id||l.program!==U.id||l.wireframe!==ee)&&(l.geometry=$.id,l.program=U.id,l.wireframe=ee,z=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,R(O,V,U,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,V,U){let $=U.wireframe===!0,q=a[O.id];q===void 0&&(q={},a[O.id]=q);let z=q[V.id];z===void 0&&(z={},q[V.id]=z);let ee=z[$];return ee===void 0&&(ee=m(f()),z[$]=ee),ee}function m(O){let V=[],U=[],$=[];for(let q=0;q<i;q++)V[q]=0,U[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:U,attributeDivisors:$,object:O,attributes:{},index:null}}function p(O,V,U,$){let q=l.attributes,z=V.attributes,ee=0,Z=U.getAttributes();for(let re in Z)if(Z[re].location>=0){let X=q[re],K=z[re];if(K===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),X===void 0||X.attribute!==K||K&&X.data!==K.data)return!0;ee++}return l.attributesNum!==ee||l.index!==$}function b(O,V,U,$){let q={},z=V.attributes,ee=0,Z=U.getAttributes();for(let re in Z)if(Z[re].location>=0){let X=z[re];X===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(X=O.instanceColor));let K={};K.attribute=X,X&&X.data&&(K.data=X.data),q[re]=K,ee++}l.attributes=q,l.attributesNum=ee,l.index=$}function _(){let O=l.newAttributes;for(let V=0,U=O.length;V<U;V++)O[V]=0}function E(O){F(O,0)}function F(O,V){let U=l.newAttributes,$=l.enabledAttributes,q=l.attributeDivisors;U[O]=1,$[O]===0&&(s.enableVertexAttribArray(O),$[O]=1),q[O]!==V&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),q[O]=V)}function S(){let O=l.newAttributes,V=l.enabledAttributes;for(let U=0,$=V.length;U<$;U++)V[U]!==O[U]&&(s.disableVertexAttribArray(U),V[U]=0)}function P(O,V,U,$,q,z,ee){ee===!0?s.vertexAttribIPointer(O,V,U,q,z):s.vertexAttribPointer(O,V,U,$,q,z)}function R(O,V,U,$){if(n.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let q=$.attributes,z=U.getAttributes(),ee=V.defaultAttributeValues;for(let Z in z){let re=z[Z];if(re.location>=0){let G=q[Z];if(G===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(G=O.instanceColor)),G!==void 0){let X=G.normalized,K=G.itemSize,se=t.get(G);if(se===void 0)continue;let oe=se.buffer,pe=se.type,Ce=se.bytesPerElement,he=n.isWebGL2===!0&&(pe===s.INT||pe===s.UNSIGNED_INT||G.gpuType===Qf);if(G.isInterleavedBufferAttribute){let Pe=G.data,W=Pe.stride,Lt=G.offset;if(Pe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<re.locationSize;Ee++)F(re.location+Ee,Pe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)E(re.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Ee=0;Ee<re.locationSize;Ee++)P(re.location+Ee,K/re.locationSize,pe,X,W*Ce,(Lt+K/re.locationSize*Ee)*Ce,he)}else{if(G.isInstancedBufferAttribute){for(let Pe=0;Pe<re.locationSize;Pe++)F(re.location+Pe,G.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Pe=0;Pe<re.locationSize;Pe++)E(re.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Pe=0;Pe<re.locationSize;Pe++)P(re.location+Pe,K/re.locationSize,pe,X,K*Ce,K/re.locationSize*Pe*Ce,he)}}else if(ee!==void 0){let X=ee[Z];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(re.location,X);break;case 3:s.vertexAttrib3fv(re.location,X);break;case 4:s.vertexAttrib4fv(re.location,X);break;default:s.vertexAttrib1fv(re.location,X)}}}}S()}function y(){H();for(let O in a){let V=a[O];for(let U in V){let $=V[U];for(let q in $)g($[q].object),delete $[q];delete V[U]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;let V=a[O.id];for(let U in V){let $=V[U];for(let q in $)g($[q].object),delete $[q];delete V[U]}delete a[O.id]}function B(O){for(let V in a){let U=a[V];if(U[O.id]===void 0)continue;let $=U[O.id];for(let q in $)g($[q].object),delete $[q];delete U[O.id]}}function H(){j(),h=!0,l!==c&&(l=c,d(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:E,disableUnusedAttributes:S}}function Lx(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ix(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=o||e.has("OES_texture_float"),F=_&&E,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:F,maxSamples:S}}function Nx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Fi,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,_=b*4,E=p.clippingState||null;c.value=E,E=h(g,f,_,d);for(let F=0;F!==_;++F)E[F]=t[F];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,E=d;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dx(s){let e=new WeakMap;function t(o,a){return a===Ns?o.mapping=wr:a===hl&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ns||a===hl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var wi=class extends Ia{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,sf=[.125,.215,.35,.446,.526,.582],Rs=20,Zc=new wi,rf=new we,Jc=null,Qc=0,el=0,Ts=(1+Math.sqrt(5))/2,ur=1/Ts,of=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ts,ur),new D(0,Ts,-ur),new D(ur,0,Ts),new D(-ur,0,Ts),new D(Ts,ur,0),new D(-Ts,ur,0)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,Qc,el),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:fo,format:Yn,colorSpace:sn,depthBuffer:!1},i=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Ox(r,e,t)}return i}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,i){let a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(rf),h.toneMapping=ns,h.autoClear=!1;let d=new zt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Ie(new Hi,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(rf),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;la(i,b*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===wr||e.mapping===Sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=of[(i-1)%of.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);let p=[],b=0;for(let P=0;P<Rs;++P){let R=P/x,y=Math.exp(-R*R/2);p.push(y),P===0?b+=y:P<m&&(b+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let E=this._sizeLods[i],F=3*E*(i>_-xr?i-_+xr:0),S=4*(this._cubeSize-E);la(t,F,S,3*E,2*E),c.setRenderTarget(t),c.render(u,Zc)}};function Ux(s){let e=[],t=[],n=[],i=s,r=s-xr+1+sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-xr?c=sf[o-s+xr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),_=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let S=0;S<d;S++){let P=S%3*2/3-1,R=S>2?0:-1,y=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];b.set(y,x*g*S),_.set(f,m*g*S);let w=[S,S,S,S,S,S];E.set(w,p*g*S)}let F=new bt;F.setAttribute("position",new Vt(b,x)),F.setAttribute("uv",new Vt(_,m)),F.setAttribute("faceIndex",new Vt(E,p)),e.push(F),i>xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(s,e,t){let n=new zi(s,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ox(s,e,t){let n=new Float32Array(Rs),i=new D(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function cf(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function lf(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function Fx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ns||c===hl,h=c===wr||c===Sr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Pr(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Pr(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let _=0,E=b.length;_<E;_+=3){let F=b[_+0],S=b[_+1],P=b[_+2];f.push(F,S,S,P,P,F)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,E=b.length/3-1;_<E;_+=3){let F=_+0,S=_+1,P=_+2;f.push(F,S,S,P,P,F)}}else return;let m=new(ld(f)?La:Rr)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function zx(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*c),t.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,x),t.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let b=0;b<x;b++)p+=g[b];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Hx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vx(s,e){return s[0]-e[0]}function Gx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Wx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let O=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,F=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],R=0;b===!0&&(R=1),_===!0&&(R=2),E===!0&&(R=3);let y=h.attributes.position.count*R,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let B=new Float32Array(y*w*4*g),H=new Pa(B,y,w,g);H.type=Bi,H.needsUpdate=!0;let j=R*4;for(let V=0;V<g;V++){let U=F[V],$=S[V],q=P[V],z=y*w*4*V;for(let ee=0;ee<U.count;ee++){let Z=ee*j;b===!0&&(o.fromBufferAttribute(U,ee),B[z+Z+0]=o.x,B[z+Z+1]=o.y,B[z+Z+2]=o.z,B[z+Z+3]=0),_===!0&&(o.fromBufferAttribute($,ee),B[z+Z+4]=o.x,B[z+Z+5]=o.y,B[z+Z+6]=o.z,B[z+Z+7]=0),E===!0&&(o.fromBufferAttribute(q,ee),B[z+Z+8]=o.x,B[z+Z+9]=o.y,B[z+Z+10]=o.z,B[z+Z+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:H,size:new He(y,w)},r.set(h,x),h.addEventListener("dispose",O)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<d;_++){let E=g[_];E[0]=_,E[1]=f[_]}g.sort(Gx);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Vx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let E=a[_],F=E[0],S=E[1];F!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[F]&&h.setAttribute("morphTarget"+_,x[F]),m&&h.getAttribute("morphNormal"+_)!==m[F]&&h.setAttribute("morphNormal"+_,m[F]),i[_]=S,p+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Xx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Da=class extends Zt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Ls,h!==Ls&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Qi),n===void 0&&h===Er&&(n=Ps),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dd=new Zt,pd=new Da(1,1);pd.compareFunction=cd;var md=new Pa,gd=new ml,xd=new Na,hf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=hf[i];if(r===void 0&&(r=new Float32Array(i),hf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qa(s,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function Kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;pf.set(n),s.uniformMatrix2fv(this.addr,!1,pf),an(t,n)}}function Zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;df.set(n),s.uniformMatrix3fv(this.addr,!1,df),an(t,n)}}function Jx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;ff.set(n),s.uniformMatrix4fv(this.addr,!1,ff),an(t,n)}}function Qx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function n_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function i_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function s_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function r_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function a_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?pd:dd;t.setTexture2D(e||r,i)}function c_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gd,i)}function l_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xd,i)}function h_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||md,i)}function u_(s){switch(s){case 5126:return qx;case 35664:return Yx;case 35665:return jx;case 35666:return $x;case 35674:return Kx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function f_(s,e){s.uniform1fv(this.addr,e)}function d_(s,e){let t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function p_(s,e){let t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function m_(s,e){let t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function g_(s,e){let t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x_(s,e){let t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function __(s,e){let t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y_(s,e){s.uniform1iv(this.addr,e)}function v_(s,e){s.uniform2iv(this.addr,e)}function M_(s,e){s.uniform3iv(this.addr,e)}function b_(s,e){s.uniform4iv(this.addr,e)}function w_(s,e){s.uniform1uiv(this.addr,e)}function S_(s,e){s.uniform2uiv(this.addr,e)}function E_(s,e){s.uniform3uiv(this.addr,e)}function T_(s,e){s.uniform4uiv(this.addr,e)}function A_(s,e,t){let n=this.cache,i=e.length,r=Qa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||dd,r[o])}function R_(s,e,t){let n=this.cache,i=e.length,r=Qa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gd,r[o])}function C_(s,e,t){let n=this.cache,i=e.length,r=Qa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xd,r[o])}function P_(s,e,t){let n=this.cache,i=e.length,r=Qa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||md,r[o])}function L_(s){switch(s){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}var _l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function mf(s,e){s.seq.push(e),s.map[e.id]=e}function I_(s,e,t){let n=s.name,i=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),o=tl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){mf(t,l===void 0?new _l(a,s,e):new yl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new vl(a),mf(t,u)),t=u}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);I_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function gf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N_=37297,D_=0;function U_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function O_(s){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(s),n;switch(e===t?n="":e===Ea&&t===Sa?n="LinearDisplayP3ToLinearSRGB":e===Sa&&t===Ea&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case Ja:return[n,"LinearTransferOETF"];case it:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U_(s.getShaderSource(e),o)}else return i}function F_(s,e){let t=O_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B_(s,e){let t;switch(e){case Gp:t="Linear";break;case Wp:t="Reinhard";break;case Xp:t="OptimizedCineon";break;case Wl:t="ACESFilmic";break;case Yp:t="AgX";break;case qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function z_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function H_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function _r(s){return s!==""}function _f(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(G_,X_)}var W_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X_(s,e){let t=ht[e];if(t===void 0){let n=W_.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(s){return s.replace(q_,Y_)}function Y_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function $_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wr:case Sr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function Z_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Hp:e="ENVMAP_BLENDING_MIX";break;case Vp:e="ENVMAP_BLENDING_ADD";break}return e}function J_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=j_(t),l=$_(t),h=K_(t),u=Z_(t),f=J_(t),d=t.isWebGL2?"":k_(t),g=z_(t),x=H_(r),m=i.createProgram(),p,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),p.length>0&&(p+=`
`),b=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),b.length>0&&(b+=`
`)):(p=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),b=[d,Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?ht.tonemapping_pars_fragment:"",t.toneMapping!==ns?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=Ml(o),o=_f(o,t),o=yf(o,t),a=Ml(a),a=_f(a,t),a=yf(a,t),o=vf(o),a=vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let E=_+p+o,F=_+b+a,S=gf(i,i.VERTEX_SHADER,E),P=gf(i,i.FRAGMENT_SHADER,F);i.attachShader(m,S),i.attachShader(m,P),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function R(H){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(S).trim(),V=i.getShaderInfoLog(P).trim(),U=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,P);else{let q=xf(i,S,"vertex"),z=xf(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+q+`
`+z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(O===""||V==="")&&($=!1);$&&(H.diagnostics={runnable:U,programLog:j,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:b}})}i.deleteShader(S),i.deleteShader(P),y=new br(i,m),w=V_(i,m)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,N_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=P,this}var ey=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wl(e),t.set(e,n)),n}},wl=class{constructor(e){this.id=ey++,this.code=e,this.usedTimes=0}};function ty(s,e,t,n,i,r,o){let a=new mo,c=new bl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,w,B,H,j){let O=H.fog,V=j.geometry,U=y.isMeshStandardMaterial?H.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),q=$&&$.mapping===$a?$.image.height:null,z=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=ee!==void 0?ee.length:0,re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let G,X,K,se;if(z){let un=Mi[z];G=un.vertexShader,X=un.fragmentShader}else G=y.vertexShader,X=y.fragmentShader,c.update(y),K=c.getVertexShaderID(y),se=c.getFragmentShaderID(y);let oe=s.getRenderTarget(),pe=j.isInstancedMesh===!0,Ce=j.isBatchedMesh===!0,he=!!y.map,Pe=!!y.matcap,W=!!$,Lt=!!y.aoMap,Ee=!!y.lightMap,Ve=!!y.bumpMap,Te=!!y.normalMap,ct=!!y.displacementMap,Xe=!!y.emissiveMap,N=!!y.metalnessMap,A=!!y.roughnessMap,J=y.anisotropy>0,le=y.clearcoat>0,ce=y.iridescence>0,fe=y.sheen>0,Oe=y.transmission>0,Me=J&&!!y.anisotropyMap,Ne=le&&!!y.clearcoatMap,Ye=le&&!!y.clearcoatNormalMap,ot=le&&!!y.clearcoatRoughnessMap,de=ce&&!!y.iridescenceMap,St=ce&&!!y.iridescenceThicknessMap,ut=fe&&!!y.sheenColorMap,Je=fe&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,De=!!y.specularColorMap,st=!!y.specularIntensityMap,yt=Oe&&!!y.transmissionMap,Ft=Oe&&!!y.thicknessMap,lt=!!y.gradientMap,me=!!y.alphaMap,k=y.alphaTest>0,ye=!!y.alphaHash,ve=!!y.extensions,Ze=!!V.attributes.uv1,qe=!!V.attributes.uv2,At=!!V.attributes.uv3,It=ns;return y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(It=s.toneMapping),{isWebGL2:h,shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:X,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ce,instancing:pe,instancingColor:pe&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:sn,map:he,matcap:Pe,envMap:W,envMapMode:W&&$.mapping,envMapCubeUVHeight:q,aoMap:Lt,lightMap:Ee,bumpMap:Ve,normalMap:Te,displacementMap:f&&ct,emissiveMap:Xe,normalMapObjectSpace:Te&&y.normalMapType===om,normalMapTangentSpace:Te&&y.normalMapType===Za,metalnessMap:N,roughnessMap:A,anisotropy:J,anisotropyMap:Me,clearcoat:le,clearcoatMap:Ne,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ot,iridescence:ce,iridescenceMap:de,iridescenceThicknessMap:St,sheen:fe,sheenColorMap:ut,sheenRoughnessMap:Je,specularMap:Ge,specularColorMap:De,specularIntensityMap:st,transmission:Oe,transmissionMap:yt,thicknessMap:Ft,gradientMap:lt,opaque:y.transparent===!1&&y.blending===vr,alphaMap:me,alphaTest:k,alphaHash:ye,combine:y.combine,mapUv:he&&x(y.map.channel),aoMapUv:Lt&&x(y.aoMap.channel),lightMapUv:Ee&&x(y.lightMap.channel),bumpMapUv:Ve&&x(y.bumpMap.channel),normalMapUv:Te&&x(y.normalMap.channel),displacementMapUv:ct&&x(y.displacementMap.channel),emissiveMapUv:Xe&&x(y.emissiveMap.channel),metalnessMapUv:N&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:Me&&x(y.anisotropyMap.channel),clearcoatMapUv:Ne&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&x(y.sheenRoughnessMap.channel),specularMapUv:Ge&&x(y.specularMap.channel),specularColorMapUv:De&&x(y.specularColorMap.channel),specularIntensityMapUv:st&&x(y.specularIntensityMap.channel),transmissionMapUv:yt&&x(y.transmissionMap.channel),thicknessMapUv:Ft&&x(y.thicknessMap.channel),alphaMapUv:me&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Te||J),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:At,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(he||me),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,useLegacyLights:s._useLegacyLights,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ve&&y.extensions.derivatives===!0,extensionFragDepth:ve&&y.extensions.fragDepth===!0,extensionDrawBuffers:ve&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)w.push(B),w.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(b(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let w=g[y.type],B;if(w){let H=Mi[w];B=Wm.clone(H.uniforms)}else B=y.uniforms;return B}function F(y,w){let B;for(let H=0,j=l.length;H<j;H++){let O=l[H];if(O.cacheKey===w){B=O,++B.usedTimes;break}}return B===void 0&&(B=new Q_(s,w,y,r),l.push(B)),B}function S(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function P(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:S,releaseShaderCache:P,programs:l,dispose:R}}function ny(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function iy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||iy),n.length>1&&n.sort(f||bf),i.length>1&&i.sort(f||bf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function sy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new wf,s.set(n,[o])):i>=r.length?(o=new wf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ry(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function oy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ay=0;function cy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ly(s,e){let t=new ry,n=oy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new _e,a=new _e;function c(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,m=0,p=0,b=0,_=0,E=0,F=0,S=0,P=0,R=0,y=0;h.sort(cy);let w=u===!0?Math.PI:1;for(let H=0,j=h.length;H<j;H++){let O=h[H],V=O.color,U=O.intensity,$=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=V.r*U*w,d+=V.g*U*w,g+=V.b*U*w;else if(O.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(O.sh.coefficients[z],U);y++}else if(O.isDirectionalLight){let z=t.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){let ee=O.shadow,Z=n.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,i.directionalShadow[x]=Z,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=O.shadow.matrix,E++}i.directional[x]=z,x++}else if(O.isSpotLight){let z=t.get(O);z.position.setFromMatrixPosition(O.matrixWorld),z.color.copy(V).multiplyScalar(U*w),z.distance=$,z.coneCos=Math.cos(O.angle),z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),z.decay=O.decay,i.spot[p]=z;let ee=O.shadow;if(O.map&&(i.spotLightMap[P]=O.map,P++,ee.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[p]=ee.matrix,O.castShadow){let Z=n.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=q,S++}p++}else if(O.isRectAreaLight){let z=t.get(O);z.color.copy(V).multiplyScalar(U),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=z,b++}else if(O.isPointLight){let z=t.get(O);if(z.color.copy(O.color).multiplyScalar(O.intensity*w),z.distance=O.distance,z.decay=O.decay,O.castShadow){let ee=O.shadow,Z=n.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=O.shadow.matrix,F++}i.point[m]=z,m++}else if(O.isHemisphereLight){let z=t.get(O);z.skyColor.copy(O.color).multiplyScalar(U*w),z.groundColor.copy(O.groundColor).multiplyScalar(U*w),i.hemi[_]=z,_++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let B=i.hash;(B.directionalLength!==x||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==b||B.hemiLength!==_||B.numDirectionalShadows!==E||B.numPointShadows!==F||B.numSpotShadows!==S||B.numSpotMaps!==P||B.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=b,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=F,i.pointShadowMap.length=F,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=F,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=y,B.directionalLength=x,B.pointLength=m,B.spotLength=p,B.rectAreaLength=b,B.hemiLength=_,B.numDirectionalShadows=E,B.numPointShadows=F,B.numSpotShadows=S,B.numSpotMaps=P,B.numLightProbes=y,i.version=ay++)}function l(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let E=h[b];if(E.isDirectionalLight){let F=i.directional[f];F.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(p),f++}else if(E.isSpotLight){let F=i.spot[g];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(p),F.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let F=i.rectArea[x];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),F.halfWidth.applyMatrix4(a),F.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let F=i.point[d];F.position.setFromMatrixPosition(E.matrixWorld),F.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let F=i.hemi[m];F.direction.setFromMatrixPosition(E.matrixWorld),F.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Sf(s,e){let t=new ly(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hy(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Sf(s,e),t.set(r,[c])):o>=a.length?(c=new Sf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Sl=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
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
}`;function dy(s,e,t){let n=new go,i=new He,r=new He,o=new mt,a=new Sl({depthPacking:rm}),c=new El,l={},h=t.maxTextureSize,u={[$n]:gn,[gn]:$n,[yn]:yn},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:uy,fragmentShader:fy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zf;let p=this.type;this.render=function(S,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let y=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ts),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=p!==Oi&&this.type===Oi,O=p===Oi&&this.type!==Oi;for(let V=0,U=S.length;V<U;V++){let $=S[V],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let z=q.getFrameExtents();if(i.multiply(z),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,q.mapSize.y=r.y)),q.map===null||j===!0||O===!0){let Z=this.type!==Oi?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new zi(i.x,i.y,Z),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let ee=q.getViewportCount();for(let Z=0;Z<ee;Z++){let re=q.getViewport(Z);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),H.viewport(o),q.updateMatrices($,Z),n=q.getFrustum(),E(P,R,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===Oi&&b(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,B)};function b(S,P){let R=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new zi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(P,null,R,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(P,null,R,d,x,null)}function _(S,P,R,y){let w=null,B=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)w=B;else if(w=R.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let H=w.uuid,j=P.uuid,O=l[H];O===void 0&&(O={},l[H]=O);let V=O[j];V===void 0&&(V=w.clone(),O[j]=V,P.addEventListener("dispose",F)),w=V}if(w.visible=P.visible,w.wireframe=P.wireframe,y===Oi?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=s.properties.get(w);H.light=R}return w}function E(S,P,R,y,w){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Oi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let j=e.update(S),O=S.material;if(Array.isArray(O)){let V=j.groups;for(let U=0,$=V.length;U<$;U++){let q=V[U],z=O[q.materialIndex];if(z&&z.visible){let ee=_(S,z,y,w);S.onBeforeShadow(s,S,P,R,j,ee,q),s.renderBufferDirect(R,null,j,ee,S,q),S.onAfterShadow(s,S,P,R,j,ee,q)}}}else if(O.visible){let V=_(S,O,y,w);S.onBeforeShadow(s,S,P,R,j,V,null),s.renderBufferDirect(R,null,j,V,S,null),S.onAfterShadow(s,S,P,R,j,V,null)}}let H=S.children;for(let j=0,O=H.length;j<O;j++)E(H[j],P,R,y,w)}function F(S){S.target.removeEventListener("dispose",F);for(let R in l){let y=l[R],w=S.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function py(s,e,t){let n=t.isWebGL2;function i(){let k=!1,ye=new mt,ve=null,Ze=new mt(0,0,0,0);return{setMask:function(qe){ve!==qe&&!k&&(s.colorMask(qe,qe,qe,qe),ve=qe)},setLocked:function(qe){k=qe},setClear:function(qe,At,It,Et,un){un===!0&&(qe*=Et,At*=Et,It*=Et),ye.set(qe,At,It,Et),Ze.equals(ye)===!1&&(s.clearColor(qe,At,It,Et),Ze.copy(ye))},reset:function(){k=!1,ve=null,Ze.set(-1,0,0,0)}}}function r(){let k=!1,ye=null,ve=null,Ze=null;return{setTest:function(qe){qe?Ce(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(qe){ye!==qe&&!k&&(s.depthMask(qe),ye=qe)},setFunc:function(qe){if(ve!==qe){switch(qe){case Dp:s.depthFunc(s.NEVER);break;case Up:s.depthFunc(s.ALWAYS);break;case Op:s.depthFunc(s.LESS);break;case Ma:s.depthFunc(s.LEQUAL);break;case Fp:s.depthFunc(s.EQUAL);break;case Bp:s.depthFunc(s.GEQUAL);break;case kp:s.depthFunc(s.GREATER);break;case zp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=qe}},setLocked:function(qe){k=qe},setClear:function(qe){Ze!==qe&&(s.clearDepth(qe),Ze=qe)},reset:function(){k=!1,ye=null,ve=null,Ze=null}}}function o(){let k=!1,ye=null,ve=null,Ze=null,qe=null,At=null,It=null,Et=null,un=null;return{setTest:function(Nt){k||(Nt?Ce(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Nt){ye!==Nt&&!k&&(s.stencilMask(Nt),ye=Nt)},setFunc:function(Nt,_n,Wn){(ve!==Nt||Ze!==_n||qe!==Wn)&&(s.stencilFunc(Nt,_n,Wn),ve=Nt,Ze=_n,qe=Wn)},setOp:function(Nt,_n,Wn){(At!==Nt||It!==_n||Et!==Wn)&&(s.stencilOp(Nt,_n,Wn),At=Nt,It=_n,Et=Wn)},setLocked:function(Nt){k=Nt},setClear:function(Nt){un!==Nt&&(s.clearStencil(Nt),un=Nt)},reset:function(){k=!1,ye=null,ve=null,Ze=null,qe=null,At=null,It=null,Et=null,un=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,b=null,_=null,E=null,F=null,S=null,P=null,R=null,y=new we(0,0,0),w=0,B=!1,H=null,j=null,O=null,V=null,U=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,z=0,ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=z>=1):ee.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=z>=2);let Z=null,re={},G=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),K=new mt().fromArray(G),se=new mt().fromArray(X);function oe(k,ye,ve,Ze){let qe=new Uint8Array(4),At=s.createTexture();s.bindTexture(k,At),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<ve;It++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(ye,0,s.RGBA,1,1,Ze,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(ye+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return At}let pe={};pe[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ce(s.DEPTH_TEST),c.setFunc(Ma),Xe(!1),N(iu),Ce(s.CULL_FACE),Te(ts);function Ce(k){f[k]!==!0&&(s.enable(k),f[k]=!0)}function he(k){f[k]!==!1&&(s.disable(k),f[k]=!1)}function Pe(k,ye){return d[k]!==ye?(s.bindFramebuffer(k,ye),d[k]=ye,n&&(k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ye),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ye)),!0):!1}function W(k,ye){let ve=x,Ze=!1;if(k)if(ve=g.get(ye),ve===void 0&&(ve=[],g.set(ye,ve)),k.isWebGLMultipleRenderTargets){let qe=k.texture;if(ve.length!==qe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let At=0,It=qe.length;At<It;At++)ve[At]=s.COLOR_ATTACHMENT0+At;ve.length=qe.length,Ze=!0}}else ve[0]!==s.COLOR_ATTACHMENT0&&(ve[0]=s.COLOR_ATTACHMENT0,Ze=!0);else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ze=!0);Ze&&(t.isWebGL2?s.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Lt(k){return m!==k?(s.useProgram(k),m=k,!0):!1}let Ee={[As]:s.FUNC_ADD,[yp]:s.FUNC_SUBTRACT,[vp]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[au]=s.MIN,Ee[cu]=s.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(Ee[au]=k.MIN_EXT,Ee[cu]=k.MAX_EXT)}let Ve={[Mp]:s.ZERO,[bp]:s.ONE,[wp]:s.SRC_COLOR,[cl]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[Ap]:s.DST_COLOR,[Ep]:s.DST_ALPHA,[Sp]:s.ONE_MINUS_SRC_COLOR,[ll]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Tp]:s.ONE_MINUS_DST_ALPHA,[Pp]:s.CONSTANT_COLOR,[Lp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Np]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(k,ye,ve,Ze,qe,At,It,Et,un,Nt){if(k===ts){p===!0&&(he(s.BLEND),p=!1);return}if(p===!1&&(Ce(s.BLEND),p=!0),k!==_p){if(k!==b||Nt!==B){if((_!==As||S!==As)&&(s.blendEquation(s.FUNC_ADD),_=As,S=As),Nt)switch(k){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFunc(s.ONE,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ou:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,F=null,P=null,R=null,y.set(0,0,0),w=0,b=k,B=Nt}return}qe=qe||ye,At=At||ve,It=It||Ze,(ye!==_||qe!==S)&&(s.blendEquationSeparate(Ee[ye],Ee[qe]),_=ye,S=qe),(ve!==E||Ze!==F||At!==P||It!==R)&&(s.blendFuncSeparate(Ve[ve],Ve[Ze],Ve[At],Ve[It]),E=ve,F=Ze,P=At,R=It),(Et.equals(y)===!1||un!==w)&&(s.blendColor(Et.r,Et.g,Et.b,un),y.copy(Et),w=un),b=k,B=!1}function ct(k,ye){k.side===yn?he(s.CULL_FACE):Ce(s.CULL_FACE);let ve=k.side===gn;ye&&(ve=!ve),Xe(ve),k.blending===vr&&k.transparent===!1?Te(ts):Te(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);let Ze=k.stencilWrite;l.setTest(Ze),Ze&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(k){H!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),H=k)}function N(k){k!==gp?(Ce(s.CULL_FACE),k!==j&&(k===iu?s.cullFace(s.BACK):k===xp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),j=k}function A(k){k!==O&&(q&&s.lineWidth(k),O=k)}function J(k,ye,ve){k?(Ce(s.POLYGON_OFFSET_FILL),(V!==ye||U!==ve)&&(s.polygonOffset(ye,ve),V=ye,U=ve)):he(s.POLYGON_OFFSET_FILL)}function le(k){k?Ce(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function ce(k){k===void 0&&(k=s.TEXTURE0+$-1),Z!==k&&(s.activeTexture(k),Z=k)}function fe(k,ye,ve){ve===void 0&&(Z===null?ve=s.TEXTURE0+$-1:ve=Z);let Ze=re[ve];Ze===void 0&&(Ze={type:void 0,texture:void 0},re[ve]=Ze),(Ze.type!==k||Ze.texture!==ye)&&(Z!==ve&&(s.activeTexture(ve),Z=ve),s.bindTexture(k,ye||pe[k]),Ze.type=k,Ze.texture=ye)}function Oe(){let k=re[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(k){K.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function yt(k){se.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Ft(k,ye){let ve=u.get(ye);ve===void 0&&(ve=new WeakMap,u.set(ye,ve));let Ze=ve.get(k);Ze===void 0&&(Ze=s.getUniformBlockIndex(ye,k.name),ve.set(k,Ze))}function lt(k,ye){let Ze=u.get(ye).get(k);h.get(ye)!==Ze&&(s.uniformBlockBinding(ye,Ze,k.__bindingPointIndex),h.set(ye,Ze))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,re={},d={},g=new WeakMap,x=[],m=null,p=!1,b=null,_=null,E=null,F=null,S=null,P=null,R=null,y=new we(0,0,0),w=0,B=!1,H=null,j=null,O=null,V=null,U=null,K.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ce,disable:he,bindFramebuffer:Pe,drawBuffers:W,useProgram:Lt,setBlending:Te,setMaterial:ct,setFlipSided:Xe,setCullFace:N,setLineWidth:A,setPolygonOffset:J,setScissorTest:le,activeTexture:ce,bindTexture:fe,unbindTexture:Oe,compressedTexImage2D:Me,compressedTexImage3D:Ne,texImage2D:Ge,texImage3D:De,updateUBOMapping:Ft,uniformBlockBinding:lt,texStorage2D:ut,texStorage3D:Je,texSubImage2D:Ye,texSubImage3D:ot,compressedTexSubImage2D:de,compressedTexSubImage3D:St,scissor:st,viewport:yt,reset:me}}function my(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return d?new OffscreenCanvas(N,A):po("canvas")}function x(N,A,J,le){let ce=1;if((N.width>le||N.height>le)&&(ce=le/Math.max(N.width,N.height)),ce<1||A===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let fe=A?Aa:Math.floor,Oe=fe(ce*N.width),Me=fe(ce*N.height);u===void 0&&(u=g(Oe,Me));let Ne=J?g(Oe,Me):u;return Ne.width=Oe,Ne.height=Me,Ne.getContext("2d").drawImage(N,0,0,Oe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Oe+"x"+Me+")."),Ne}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return dl(N.width)&&dl(N.height)}function p(N){return a?!1:N.wrapS!==Kt||N.wrapT!==Kt||N.minFilter!==nn&&N.minFilter!==pn}function b(N,A){return N.generateMipmaps&&A&&N.minFilter!==nn&&N.minFilter!==pn}function _(N){s.generateMipmap(N)}function E(N,A,J,le,ce=!1){if(a===!1)return A;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=A;if(A===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),A===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),A===s.RGBA){let Oe=ce?wa:Mt.getTransfer(le);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=Oe===kt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function F(N,A,J){return b(N,J)===!0||N.isFramebufferTexture&&N.minFilter!==nn&&N.minFilter!==pn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function S(N){return N===nn||N===ba||N===oo?s.NEAREST:s.LINEAR}function P(N){let A=N.target;A.removeEventListener("dispose",P),y(A),A.isVideoTexture&&h.delete(A)}function R(N){let A=N.target;A.removeEventListener("dispose",R),B(A)}function y(N){let A=n.get(N);if(A.__webglInit===void 0)return;let J=N.source,le=f.get(J);if(le){let ce=le[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&w(N),Object.keys(le).length===0&&f.delete(J)}n.remove(N)}function w(N){let A=n.get(N);s.deleteTexture(A.__webglTexture);let J=N.source,le=f.get(J);delete le[A.__cacheKey],o.memory.textures--}function B(N){let A=N.texture,J=n.get(N),le=n.get(A);if(le.__webglTexture!==void 0&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(J.__webglFramebuffer[ce]))for(let fe=0;fe<J.__webglFramebuffer[ce].length;fe++)s.deleteFramebuffer(J.__webglFramebuffer[ce][fe]);else s.deleteFramebuffer(J.__webglFramebuffer[ce]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[ce])}else{if(Array.isArray(J.__webglFramebuffer))for(let ce=0;ce<J.__webglFramebuffer.length;ce++)s.deleteFramebuffer(J.__webglFramebuffer[ce]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ce=0;ce<J.__webglColorRenderbuffer.length;ce++)J.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[ce]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ce=0,fe=A.length;ce<fe;ce++){let Oe=n.get(A[ce]);Oe.__webglTexture&&(s.deleteTexture(Oe.__webglTexture),o.memory.textures--),n.remove(A[ce])}n.remove(A),n.remove(N)}let H=0;function j(){H=0}function O(){let N=H;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),H+=1,N}function V(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function U(N,A){let J=n.get(N);if(N.isVideoTexture&&ct(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){let le=N.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,N,A);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function $(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){K(J,N,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function q(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){K(J,N,A);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function z(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){se(J,N,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}let ee={[vn]:s.REPEAT,[Kt]:s.CLAMP_TO_EDGE,[uo]:s.MIRRORED_REPEAT},Z={[nn]:s.NEAREST,[ba]:s.NEAREST_MIPMAP_NEAREST,[oo]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Xl]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},re={[am]:s.NEVER,[dm]:s.ALWAYS,[cm]:s.LESS,[cd]:s.LEQUAL,[lm]:s.EQUAL,[fm]:s.GEQUAL,[hm]:s.GREATER,[um]:s.NOTEQUAL};function G(N,A,J){if(J?(s.texParameteri(N,s.TEXTURE_WRAP_S,ee[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ee[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ee[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Z[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Z[A.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Kt||A.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,S(A.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==nn&&A.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===nn||A.minFilter!==oo&&A.minFilter!==di||A.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(N,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function X(N,A){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",P));let le=A.source,ce=f.get(le);ce===void 0&&(ce={},f.set(le,ce));let fe=V(A);if(fe!==N.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ce[fe].usedTimes++;let Oe=ce[N.__cacheKey];Oe!==void 0&&(ce[N.__cacheKey].usedTimes--,Oe.usedTimes===0&&w(A)),N.__cacheKey=fe,N.__webglTexture=ce[fe].texture}return J}function K(N,A,J){let le=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=s.TEXTURE_3D);let ce=X(N,A),fe=A.source;t.bindTexture(le,N.__webglTexture,s.TEXTURE0+J);let Oe=n.get(fe);if(fe.version!==Oe.__version||ce===!0){t.activeTexture(s.TEXTURE0+J);let Me=Mt.getPrimaries(Mt.workingColorSpace),Ne=A.colorSpace===jn?null:Mt.getPrimaries(A.colorSpace),Ye=A.colorSpace===jn||Me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ot=p(A)&&m(A.image)===!1,de=x(A.image,ot,!1,i.maxTextureSize);de=Xe(A,de);let St=m(de)||a,ut=r.convert(A.format,A.colorSpace),Je=r.convert(A.type),Ge=E(A.internalFormat,ut,Je,A.colorSpace,A.isVideoTexture);G(le,A,St);let De,st=A.mipmaps,yt=a&&A.isVideoTexture!==!0&&Ge!==rd,Ft=Oe.__version===void 0||ce===!0,lt=F(A,de,St);if(A.isDepthTexture)Ge=s.DEPTH_COMPONENT,a?A.type===Bi?Ge=s.DEPTH_COMPONENT32F:A.type===Qi?Ge=s.DEPTH_COMPONENT24:A.type===Ps?Ge=s.DEPTH24_STENCIL8:Ge=s.DEPTH_COMPONENT16:A.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ls&&Ge===s.DEPTH_COMPONENT&&A.type!==ql&&A.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Qi,Je=r.convert(A.type)),A.format===Er&&Ge===s.DEPTH_COMPONENT&&(Ge=s.DEPTH_STENCIL,A.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ps,Je=r.convert(A.type))),Ft&&(yt?t.texStorage2D(s.TEXTURE_2D,1,Ge,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,Ge,de.width,de.height,0,ut,Je,null));else if(A.isDataTexture)if(st.length>0&&St){yt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let me=0,k=st.length;me<k;me++)De=st[me],yt?t.texSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,ut,Je,De.data):t.texImage2D(s.TEXTURE_2D,me,Ge,De.width,De.height,0,ut,Je,De.data);A.generateMipmaps=!1}else yt?(Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,de.width,de.height,ut,Je,de.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,de.width,de.height,0,ut,Je,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){yt&&Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ge,st[0].width,st[0].height,de.depth);for(let me=0,k=st.length;me<k;me++)De=st[me],A.format!==Yn?ut!==null?yt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,ut,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ge,De.width,De.height,de.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,ut,Je,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Ge,De.width,De.height,de.depth,0,ut,Je,De.data)}else{yt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let me=0,k=st.length;me<k;me++)De=st[me],A.format!==Yn?ut!==null?yt?t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,ut,De.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Ge,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,ut,Je,De.data):t.texImage2D(s.TEXTURE_2D,me,Ge,De.width,De.height,0,ut,Je,De.data)}else if(A.isDataArrayTexture)yt?(Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ge,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ut,Je,de.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,ut,Je,de.data);else if(A.isData3DTexture)yt?(Ft&&t.texStorage3D(s.TEXTURE_3D,lt,Ge,de.width,de.height,de.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ut,Je,de.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,ut,Je,de.data);else if(A.isFramebufferTexture){if(Ft)if(yt)t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height);else{let me=de.width,k=de.height;for(let ye=0;ye<lt;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ge,me,k,0,ut,Je,null),me>>=1,k>>=1}}else if(st.length>0&&St){yt&&Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,st[0].width,st[0].height);for(let me=0,k=st.length;me<k;me++)De=st[me],yt?t.texSubImage2D(s.TEXTURE_2D,me,0,0,ut,Je,De):t.texImage2D(s.TEXTURE_2D,me,Ge,ut,Je,De);A.generateMipmaps=!1}else yt?(Ft&&t.texStorage2D(s.TEXTURE_2D,lt,Ge,de.width,de.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Je,de)):t.texImage2D(s.TEXTURE_2D,0,Ge,ut,Je,de);b(A,St)&&_(le),Oe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function se(N,A,J){if(A.image.length!==6)return;let le=X(N,A),ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+J);let fe=n.get(ce);if(ce.version!==fe.__version||le===!0){t.activeTexture(s.TEXTURE0+J);let Oe=Mt.getPrimaries(Mt.workingColorSpace),Me=A.colorSpace===jn?null:Mt.getPrimaries(A.colorSpace),Ne=A.colorSpace===jn||Oe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,de=[];for(let me=0;me<6;me++)!Ye&&!ot?de[me]=x(A.image[me],!1,!0,i.maxCubemapSize):de[me]=ot?A.image[me].image:A.image[me],de[me]=Xe(A,de[me]);let St=de[0],ut=m(St)||a,Je=r.convert(A.format,A.colorSpace),Ge=r.convert(A.type),De=E(A.internalFormat,Je,Ge,A.colorSpace),st=a&&A.isVideoTexture!==!0,yt=fe.__version===void 0||le===!0,Ft=F(A,St,ut);G(s.TEXTURE_CUBE_MAP,A,ut);let lt;if(Ye){st&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,De,St.width,St.height);for(let me=0;me<6;me++){lt=de[me].mipmaps;for(let k=0;k<lt.length;k++){let ye=lt[k];A.format!==Yn?Je!==null?st?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k,0,0,ye.width,ye.height,Je,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k,0,0,ye.width,ye.height,Je,Ge,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k,De,ye.width,ye.height,0,Je,Ge,ye.data)}}}else{lt=A.mipmaps,st&&yt&&(lt.length>0&&Ft++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,De,de[0].width,de[0].height));for(let me=0;me<6;me++)if(ot){st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de[me].width,de[me].height,Je,Ge,de[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,De,de[me].width,de[me].height,0,Je,Ge,de[me].data);for(let k=0;k<lt.length;k++){let ve=lt[k].image[me].image;st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k+1,0,0,ve.width,ve.height,Je,Ge,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k+1,De,ve.width,ve.height,0,Je,Ge,ve.data)}}else{st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,Ge,de[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,De,Je,Ge,de[me]);for(let k=0;k<lt.length;k++){let ye=lt[k];st?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k+1,0,0,Je,Ge,ye.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,k+1,De,Je,Ge,ye.image[me])}}}b(A,ut)&&_(s.TEXTURE_CUBE_MAP),fe.__version=ce.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function oe(N,A,J,le,ce,fe){let Oe=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),Ne=E(J.internalFormat,Oe,Me,J.colorSpace);if(!n.get(A).__hasExternalTextures){let ot=Math.max(1,A.width>>fe),de=Math.max(1,A.height>>fe);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,fe,Ne,ot,de,A.depth,0,Oe,Me,null):t.texImage2D(ce,fe,Ne,ot,de,0,Oe,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Te(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,ce,n.get(J).__webglTexture,0,Ve(A)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,ce,n.get(J).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(N,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let le=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||Te(A)){let ce=A.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Bi?le=s.DEPTH_COMPONENT32F:ce.type===Qi&&(le=s.DEPTH_COMPONENT24));let fe=Ve(A);Te(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,le,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,le,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,le,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let le=Ve(A);J&&Te(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,A.width,A.height):Te(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let le=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ce=0;ce<le.length;ce++){let fe=le[ce],Oe=r.convert(fe.format,fe.colorSpace),Me=r.convert(fe.type),Ne=E(fe.internalFormat,Oe,Me,fe.colorSpace),Ye=Ve(A);J&&Te(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ne,A.width,A.height):Te(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);let le=n.get(A.depthTexture).__webglTexture,ce=Ve(A);if(A.depthTexture.format===Ls)Te(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(A.depthTexture.format===Er)Te(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function he(N){let A=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ce(A.__webglFramebuffer,N)}else if(J){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=s.createRenderbuffer(),pe(A.__webglDepthbuffer[le],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),pe(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(N,A,J){let le=n.get(N);A!==void 0&&oe(le.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&he(N)}function W(N){let A=N.texture,J=n.get(N),le=n.get(A);N.addEventListener("dispose",R),N.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=A.version,o.memory.textures++);let ce=N.isWebGLCubeRenderTarget===!0,fe=N.isWebGLMultipleRenderTargets===!0,Oe=m(N)||a;if(ce){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)J.__webglFramebuffer[Me][Ne]=s.createFramebuffer()}else J.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)J.__webglFramebuffer[Me]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(fe)if(i.drawBuffers){let Me=N.texture;for(let Ne=0,Ye=Me.length;Ne<Ye;Ne++){let ot=n.get(Me[Ne]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Te(N)===!1){let Me=fe?A:[A];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){let Ye=Me[Ne];J.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);let ot=r.convert(Ye.format,Ye.colorSpace),de=r.convert(Ye.type),St=E(Ye.internalFormat,ot,de,Ye.colorSpace,N.isXRRenderTarget===!0),ut=Ve(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,St,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),G(s.TEXTURE_CUBE_MAP,A,Oe);for(let Me=0;Me<6;Me++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)oe(J.__webglFramebuffer[Me][Ne],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne);else oe(J.__webglFramebuffer[Me],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);b(A,Oe)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){let Me=N.texture;for(let Ne=0,Ye=Me.length;Ne<Ye;Ne++){let ot=Me[Ne],de=n.get(ot);t.bindTexture(s.TEXTURE_2D,de.__webglTexture),G(s.TEXTURE_2D,ot,Oe),oe(J.__webglFramebuffer,N,ot,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),b(ot,Oe)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Me=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,le.__webglTexture),G(Me,A,Oe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)oe(J.__webglFramebuffer[Ne],N,A,s.COLOR_ATTACHMENT0,Me,Ne);else oe(J.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Me,0);b(A,Oe)&&_(Me),t.unbindTexture()}N.depthBuffer&&he(N)}function Lt(N){let A=m(N)||a,J=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let le=0,ce=J.length;le<ce;le++){let fe=J[le];if(b(fe,A)){let Oe=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=n.get(fe).__webglTexture;t.bindTexture(Oe,Me),_(Oe),t.unbindTexture()}}}function Ee(N){if(a&&N.samples>0&&Te(N)===!1){let A=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],J=N.width,le=N.height,ce=s.COLOR_BUFFER_BIT,fe=[],Oe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(N),Ne=N.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){fe.push(s.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&fe.push(Oe);let ot=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ot===!1&&(N.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Ne&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Oe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Oe])),Ne){let de=n.get(A[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,J,le,0,0,J,le,ce,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ye]);let ot=n.get(A[Ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Ve(N){return Math.min(i.maxSamples,N.samples)}function Te(N){let A=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function Xe(N,A){let J=N.colorSpace,le=N.format,ce=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===fl||J!==sn&&J!==jn&&(Mt.getTransfer(J)===kt?a===!1?e.has("EXT_sRGB")===!0&&le===Yn?(N.format=fl,N.minFilter=pn,N.generateMipmaps=!1):A=Ra.sRGBToLinear(A):(le!==Yn||ce!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Pe,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Te}function gy(s,e,t){let n=t.isWebGL2;function i(r,o=jn){let a,c=Mt.getTransfer(o);if(r===is)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$p)return s.BYTE;if(r===Kp)return s.SHORT;if(r===ql)return s.UNSIGNED_SHORT;if(r===Qf)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===fo)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Zp)return s.ALPHA;if(r===Yn)return s.RGBA;if(r===Jp)return s.LUMINANCE;if(r===Qp)return s.LUMINANCE_ALPHA;if(r===Ls)return s.DEPTH_COMPONENT;if(r===Er)return s.DEPTH_STENCIL;if(r===fl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===em)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===tm)return s.RG;if(r===id)return s.RG_INTEGER;if(r===sd)return s.RGBA_INTEGER;if(r===Rc||r===Cc||r===Pc||r===Lc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hu||r===uu||r===fu||r===du)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pu||r===mu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===pu)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gu||r===xu||r===_u||r===yu||r===vu||r===Mu||r===bu||r===wu||r===Su||r===Eu||r===Tu||r===Au||r===Ru||r===Cu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===gu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_u)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Su)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Au)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ru)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic||r===Pu||r===Lu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ic)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nm||r===Iu||r===Nu||r===Du)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Iu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Du)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ps?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Tl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_t=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xy={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Al=class extends ss{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=t.getContextAttributes(),m=null,p=null,b=[],_=[],E=new He,F=null,S=new Ht;S.layers.enable(1),S.viewport=new mt;let P=new Ht;P.layers.enable(2),P.viewport=new mt;let R=[S,P],y=new Tl;y.layers.enable(1),y.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=b[G];return X===void 0&&(X=new ho,b[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=b[G];return X===void 0&&(X=new ho,b[G]=X),X.getGripSpace()},this.getHand=function(G){let X=b[G];return X===void 0&&(X=new ho,b[G]=X),X.getHandSpace()};function H(G){let X=_.indexOf(G.inputSource);if(X===-1)return;let K=b[X];K!==void 0&&(K.update(G.inputSource,G.frame,l||o),K.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",O);for(let G=0;G<b.length;G++){let X=_[G];X!==null&&(_[G]=null,b[G].disconnect(X))}w=null,B=null,e.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",j),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new zi(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:is,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,K=null,se=null;x.depth&&(se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?Er:Ls,K=x.stencil?Ps:Qi);let oe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new zi(f.textureWidth,f.textureHeight,{format:Yn,type:is,depthTexture:new Da(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let pe=e.properties.get(p);pe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(G){for(let X=0;X<G.removed.length;X++){let K=G.removed[X],se=_.indexOf(K);se>=0&&(_[se]=null,b[se].disconnect(K))}for(let X=0;X<G.added.length;X++){let K=G.added[X],se=_.indexOf(K);if(se===-1){for(let pe=0;pe<b.length;pe++)if(pe>=_.length){_.push(K),se=pe;break}else if(_[pe]===null){_[pe]=K,se=pe;break}if(se===-1)break}let oe=b[se];oe&&oe.connect(K)}}let V=new D,U=new D;function $(G,X,K){V.setFromMatrixPosition(X.matrixWorld),U.setFromMatrixPosition(K.matrixWorld);let se=V.distanceTo(U),oe=X.projectionMatrix.elements,pe=K.projectionMatrix.elements,Ce=oe[14]/(oe[10]-1),he=oe[14]/(oe[10]+1),Pe=(oe[9]+1)/oe[5],W=(oe[9]-1)/oe[5],Lt=(oe[8]-1)/oe[0],Ee=(pe[8]+1)/pe[0],Ve=Ce*Lt,Te=Ce*Ee,ct=se/(-Lt+Ee),Xe=ct*-Lt;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Xe),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let N=Ce+ct,A=he+ct,J=Ve-Xe,le=Te+(se-Xe),ce=Pe*he/A*N,fe=W*he/A*N;G.projectionMatrix.makePerspective(J,le,ce,fe,N,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=P.near=S.near=G.near,y.far=P.far=S.far=G.far,(w!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,B=y.far);let X=G.parent,K=y.cameras;q(y,X);for(let se=0;se<K.length;se++)q(K[se],X);K.length===2?$(y,S,P):y.projectionMatrix.copy(S.projectionMatrix),z(G,y,X)};function z(G,X,K){K===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(K.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ar*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let ee=null;function Z(G,X){if(h=X.getViewerPose(l||o),g=X,h!==null){let K=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;K.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let oe=0;oe<K.length;oe++){let pe=K[oe],Ce=null;if(d!==null)Ce=d.getViewport(pe);else{let Pe=u.getViewSubImage(f,pe);Ce=Pe.viewport,oe===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let he=R[oe];he===void 0&&(he=new Ht,he.layers.enable(oe),he.viewport=new mt,R[oe]=he),he.matrix.fromArray(pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),oe===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(he)}}for(let K=0;K<b.length;K++){let se=_[K],oe=b[K];se!==null&&oe!==void 0&&oe.update(se,X,l||o)}ee&&ee(G,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let re=new fd;re.setAnimationLoop(Z),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}};function _y(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ud(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yy(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,_){let E=_.program;n.uniformBlockBinding(b,E)}function l(b,_){let E=i[b.id];E===void 0&&(g(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",m));let F=_.program;n.updateUBOMapping(b,F);let S=e.render.frame;r[b.id]!==S&&(f(b),r[b.id]=S)}function h(b){let _=u();b.__bindingPointIndex=_;let E=s.createBuffer(),F=b.__size,S=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,F,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=i[b.id],E=b.uniforms,F=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,P=E.length;S<P;S++){let R=Array.isArray(E[S])?E[S]:[E[S]];for(let y=0,w=R.length;y<w;y++){let B=R[y];if(d(B,S,y,F)===!0){let H=B.__offset,j=Array.isArray(B.value)?B.value:[B.value],O=0;for(let V=0;V<j.length;V++){let U=j[V],$=x(U);typeof U=="number"||typeof U=="boolean"?(B.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,H+O,B.__data)):U.isMatrix3?(B.__data[0]=U.elements[0],B.__data[1]=U.elements[1],B.__data[2]=U.elements[2],B.__data[3]=0,B.__data[4]=U.elements[3],B.__data[5]=U.elements[4],B.__data[6]=U.elements[5],B.__data[7]=0,B.__data[8]=U.elements[6],B.__data[9]=U.elements[7],B.__data[10]=U.elements[8],B.__data[11]=0):(U.toArray(B.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,_,E,F){let S=b.value,P=_+"_"+E;if(F[P]===void 0)return typeof S=="number"||typeof S=="boolean"?F[P]=S:F[P]=S.clone(),!0;{let R=F[P];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return F[P]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(b){let _=b.uniforms,E=0,F=16;for(let P=0,R=_.length;P<R;P++){let y=Array.isArray(_[P])?_[P]:[_[P]];for(let w=0,B=y.length;w<B;w++){let H=y[w],j=Array.isArray(H.value)?H.value:[H.value];for(let O=0,V=j.length;O<V;O++){let U=j[O],$=x(U),q=E%F;q!==0&&F-q<$.boundary&&(E+=F-q),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=$.storage}}}let S=E%F;return S>0&&(E+=F-S),b.__size=E,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var xo=class{constructor(e={}){let{canvas:t=Rm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=ns,this.toneMappingExposure=1;let _=this,E=!1,F=0,S=0,P=null,R=-1,y=null,w=new mt,B=new mt,H=null,j=new we(0),O=0,V=t.width,U=t.height,$=1,q=null,z=null,ee=new mt(0,0,V,U),Z=new mt(0,0,V,U),re=!1,G=new go,X=!1,K=!1,se=null,oe=new _e,pe=new He,Ce=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return P===null?$:1}let W=n;function Lt(I,Y){for(let te=0;te<I.length;te++){let ie=I[te],Q=t.getContext(ie,Y);if(Q!==null)return Q}return null}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ye,!1),W===null){let Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),W=Lt(Y,I),W===null)throw Lt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ee,Ve,Te,ct,Xe,N,A,J,le,ce,fe,Oe,Me,Ne,Ye,ot,de,St,ut,Je,Ge,De,st,yt;function Ft(){Ee=new Bx(W),Ve=new Ix(W,Ee,e),Ee.init(Ve),De=new gy(W,Ee,Ve),Te=new py(W,Ee,Ve),ct=new Hx(W),Xe=new ny,N=new my(W,Ee,Te,Xe,Ve,De,ct),A=new Dx(_),J=new Fx(_),le=new $m(W,Ve),st=new Px(W,Ee,le,Ve),ce=new kx(W,le,ct,st),fe=new Xx(W,ce,le,ct),ut=new Wx(W,Ve,N),ot=new Nx(Xe),Oe=new ty(_,A,J,Ee,Ve,st,ot),Me=new _y(_,Xe),Ne=new sy,Ye=new hy(Ee,Ve),St=new Cx(_,A,J,Te,fe,f,c),de=new dy(_,fe,Ve),yt=new yy(W,ct,Ve,Te),Je=new Lx(W,Ee,ct,Ve),Ge=new zx(W,Ee,ct,Ve),ct.programs=Oe.programs,_.capabilities=Ve,_.extensions=Ee,_.properties=Xe,_.renderLists=Ne,_.shadowMap=de,_.state=Te,_.info=ct}Ft();let lt=new Al(_,W);this.xr=lt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let I=Ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(V,U,!1))},this.getSize=function(I){return I.set(V,U)},this.setSize=function(I,Y,te=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=I,U=Y,t.width=Math.floor(I*$),t.height=Math.floor(Y*$),te===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(V*$,U*$).floor()},this.setDrawingBufferSize=function(I,Y,te){V=I,U=Y,$=te,t.width=Math.floor(I*te),t.height=Math.floor(Y*te),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(ee)},this.setViewport=function(I,Y,te,ie){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,Y,te,ie),Te.viewport(w.copy(ee).multiplyScalar($).floor())},this.getScissor=function(I){return I.copy(Z)},this.setScissor=function(I,Y,te,ie){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,Y,te,ie),Te.scissor(B.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(I){Te.setScissorTest(re=I)},this.setOpaqueSort=function(I){q=I},this.setTransparentSort=function(I){z=I},this.getClearColor=function(I){return I.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(I=!0,Y=!0,te=!0){let ie=0;if(I){let Q=!1;if(P!==null){let Ae=P.texture.format;Q=Ae===sd||Ae===id||Ae===nd}if(Q){let Ae=P.texture.type,Re=Ae===is||Ae===Qi||Ae===ql||Ae===Ps||Ae===ed||Ae===td,ke=St.getClearColor(),je=St.getClearAlpha(),rt=ke.r,tt=ke.g,nt=ke.b;Re?(d[0]=rt,d[1]=tt,d[2]=nt,d[3]=je,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=rt,g[1]=tt,g[2]=nt,g[3]=je,W.clearBufferiv(W.COLOR,0,g))}else ie|=W.COLOR_BUFFER_BIT}Y&&(ie|=W.DEPTH_BUFFER_BIT),te&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ne.dispose(),Ye.dispose(),Xe.dispose(),A.dispose(),J.dispose(),fe.dispose(),st.dispose(),yt.dispose(),Oe.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",un),lt.removeEventListener("sessionend",Nt),se&&(se.dispose(),se=null),_n.stop()};function me(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let I=ct.autoReset,Y=de.enabled,te=de.autoUpdate,ie=de.needsUpdate,Q=de.type;Ft(),ct.autoReset=I,de.enabled=Y,de.autoUpdate=te,de.needsUpdate=ie,de.type=Q}function ye(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ve(I){let Y=I.target;Y.removeEventListener("dispose",ve),Ze(Y)}function Ze(I){qe(I),Xe.remove(I)}function qe(I){let Y=Xe.get(I).programs;Y!==void 0&&(Y.forEach(function(te){Oe.releaseProgram(te)}),I.isShaderMaterial&&Oe.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,te,ie,Q,Ae){Y===null&&(Y=he);let Re=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=Sc(I,Y,te,ie,Q);Te.setMaterial(ie,Re);let je=te.index,rt=1;if(ie.wireframe===!0){if(je=ce.getWireframeAttribute(te),je===void 0)return;rt=2}let tt=te.drawRange,nt=te.attributes.position,Xt=tt.start*rt,An=(tt.start+tt.count)*rt;Ae!==null&&(Xt=Math.max(Xt,Ae.start*rt),An=Math.min(An,(Ae.start+Ae.count)*rt)),je!==null?(Xt=Math.max(Xt,0),An=Math.min(An,je.count)):nt!=null&&(Xt=Math.max(Xt,0),An=Math.min(An,nt.count));let Qt=An-Xt;if(Qt<0||Qt===1/0)return;st.setup(Q,ie,ke,te,je);let Xn,Ut=Je;if(je!==null&&(Xn=le.get(je),Ut=Ge,Ut.setIndex(Xn)),Q.isMesh)ie.wireframe===!0?(Te.setLineWidth(ie.wireframeLinewidth*Pe()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(Q.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Te.setLineWidth(Qe*Pe()),Q.isLineSegments?Ut.setMode(W.LINES):Q.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else Q.isPoints?Ut.setMode(W.POINTS):Q.isSprite&&Ut.setMode(W.TRIANGLES);if(Q.isBatchedMesh)Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Ut.renderInstances(Xt,Qt,Q.count);else if(te.isInstancedBufferGeometry){let Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xr=Math.min(te.instanceCount,Qe);Ut.renderInstances(Xt,Qt,Xr)}else Ut.render(Xt,Qt)};function At(I,Y,te){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=gn,I.needsUpdate=!0,js(I,Y,te),I.side=$n,I.needsUpdate=!0,js(I,Y,te),I.side=yn):js(I,Y,te)}this.compile=function(I,Y,te=null){te===null&&(te=I),m=Ye.get(te),m.init(),b.push(m),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),I!==te&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(_._useLegacyLights);let ie=new Set;return I.traverse(function(Q){let Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let Re=0;Re<Ae.length;Re++){let ke=Ae[Re];At(ke,te,Q),ie.add(ke)}else At(Ae,te,Q),ie.add(Ae)}),b.pop(),m=null,ie},this.compileAsync=function(I,Y,te=null){let ie=this.compile(I,Y,te);return new Promise(Q=>{function Ae(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){Q(I);return}setTimeout(Ae,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let It=null;function Et(I){It&&It(I)}function un(){_n.stop()}function Nt(){_n.start()}let _n=new fd;_n.setAnimationLoop(Et),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(I){It=I,lt.setAnimationLoop(I),I===null?_n.stop():_n.start()},lt.addEventListener("sessionstart",un),lt.addEventListener("sessionend",Nt),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Y),Y=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,Y,P),m=Ye.get(I,b.length),m.init(),b.push(m),oe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G.setFromProjectionMatrix(oe),K=this.localClippingEnabled,X=ot.init(this.clippingPlanes,K),x=Ne.get(I,p.length),x.init(),p.push(x),Wn(I,Y,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,z),this.info.render.frame++,X===!0&&ot.beginShadows();let te=m.state.shadowsArray;if(de.render(te,I,Y),X===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(x,I),m.setupLights(_._useLegacyLights),Y.isArrayCamera){let ie=Y.cameras;for(let Q=0,Ae=ie.length;Q<Ae;Q++){let Re=ie[Q];Oo(x,I,Re,Re.viewport)}}else Oo(x,I,Y);P!==null&&(N.updateMultisampleRenderTarget(P),N.updateRenderTargetMipmap(P)),I.isScene===!0&&I.onAfterRender(_,I,Y),st.resetDefaultState(),R=-1,y=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Wn(I,Y,te,ie){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||G.intersectsSprite(I)){ie&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(oe);let Re=fe.update(I),ke=I.material;ke.visible&&x.push(I,Re,ke,te,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||G.intersectsObject(I))){let Re=fe.update(I),ke=I.material;if(ie&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ce.copy(Re.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(oe)),Array.isArray(ke)){let je=Re.groups;for(let rt=0,tt=je.length;rt<tt;rt++){let nt=je[rt],Xt=ke[nt.materialIndex];Xt&&Xt.visible&&x.push(I,Re,Xt,te,Ce.z,nt)}}else ke.visible&&x.push(I,Re,ke,te,Ce.z,null)}}let Ae=I.children;for(let Re=0,ke=Ae.length;Re<ke;Re++)Wn(Ae[Re],Y,te,ie)}function Oo(I,Y,te,ie){let Q=I.opaque,Ae=I.transmissive,Re=I.transparent;m.setupLightsView(te),X===!0&&ot.setGlobalState(_.clippingPlanes,te),Ae.length>0&&wc(Q,Ae,Y,te),ie&&Te.viewport(w.copy(ie)),Q.length>0&&Ys(Q,Y,te),Ae.length>0&&Ys(Ae,Y,te),Re.length>0&&Ys(Re,Y,te),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wc(I,Y,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Ae=Ve.isWebGL2;se===null&&(se=new zi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?fo:is,minFilter:di,samples:Ae?4:0})),_.getDrawingBufferSize(pe),Ae?se.setSize(pe.x,pe.y):se.setSize(Aa(pe.x),Aa(pe.y));let Re=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(j),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear();let ke=_.toneMapping;_.toneMapping=ns,Ys(I,te,ie),N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se);let je=!1;for(let rt=0,tt=Y.length;rt<tt;rt++){let nt=Y[rt],Xt=nt.object,An=nt.geometry,Qt=nt.material,Xn=nt.group;if(Qt.side===yn&&Xt.layers.test(ie.layers)){let Ut=Qt.side;Qt.side=gn,Qt.needsUpdate=!0,Gr(Xt,te,ie,An,Qt,Xn),Qt.side=Ut,Qt.needsUpdate=!0,je=!0}}je===!0&&(N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se)),_.setRenderTarget(Re),_.setClearColor(j,O),_.toneMapping=ke}function Ys(I,Y,te){let ie=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ae=I.length;Q<Ae;Q++){let Re=I[Q],ke=Re.object,je=Re.geometry,rt=ie===null?Re.material:ie,tt=Re.group;ke.layers.test(te.layers)&&Gr(ke,Y,te,je,rt,tt)}}function Gr(I,Y,te,ie,Q,Ae){I.onBeforeRender(_,Y,te,ie,Q,Ae),I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(_,Y,te,ie,I,Ae),Q.transparent===!0&&Q.side===yn&&Q.forceSinglePass===!1?(Q.side=gn,Q.needsUpdate=!0,_.renderBufferDirect(te,Y,ie,Q,I,Ae),Q.side=$n,Q.needsUpdate=!0,_.renderBufferDirect(te,Y,ie,Q,I,Ae),Q.side=yn):_.renderBufferDirect(te,Y,ie,Q,I,Ae),I.onAfterRender(_,Y,te,ie,Q,Ae)}function js(I,Y,te){Y.isScene!==!0&&(Y=he);let ie=Xe.get(I),Q=m.state.lights,Ae=m.state.shadowsArray,Re=Q.state.version,ke=Oe.getParameters(I,Q.state,Ae,Y,te),je=Oe.getProgramCacheKey(ke),rt=ie.programs;ie.environment=I.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(I.isMeshStandardMaterial?J:A).get(I.envMap||ie.environment),rt===void 0&&(I.addEventListener("dispose",ve),rt=new Map,ie.programs=rt);let tt=rt.get(je);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Re)return Fo(I,ke),tt}else ke.uniforms=Oe.getUniforms(I),I.onBuild(te,ke,_),I.onBeforeCompile(ke,_),tt=Oe.acquireProgram(ke,je),rt.set(je,tt),ie.uniforms=ke.uniforms;let nt=ie.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(nt.clippingPlanes=ot.uniform),Fo(I,ke),ie.needsLights=Tc(I),ie.lightsStateVersion=Re,ie.needsLights&&(nt.ambientLightColor.value=Q.state.ambient,nt.lightProbe.value=Q.state.probe,nt.directionalLights.value=Q.state.directional,nt.directionalLightShadows.value=Q.state.directionalShadow,nt.spotLights.value=Q.state.spot,nt.spotLightShadows.value=Q.state.spotShadow,nt.rectAreaLights.value=Q.state.rectArea,nt.ltc_1.value=Q.state.rectAreaLTC1,nt.ltc_2.value=Q.state.rectAreaLTC2,nt.pointLights.value=Q.state.point,nt.pointLightShadows.value=Q.state.pointShadow,nt.hemisphereLights.value=Q.state.hemi,nt.directionalShadowMap.value=Q.state.directionalShadowMap,nt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,nt.spotShadowMap.value=Q.state.spotShadowMap,nt.spotLightMatrix.value=Q.state.spotLightMatrix,nt.spotLightMap.value=Q.state.spotLightMap,nt.pointShadowMap.value=Q.state.pointShadowMap,nt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function Wr(I){if(I.uniformsList===null){let Y=I.currentProgram.getUniforms();I.uniformsList=br.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function Fo(I,Y){let te=Xe.get(I);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Sc(I,Y,te,ie,Q){Y.isScene!==!0&&(Y=he),N.resetTextureUnits();let Ae=Y.fog,Re=ie.isMeshStandardMaterial?Y.environment:null,ke=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:sn,je=(ie.isMeshStandardMaterial?J:A).get(ie.envMap||Re),rt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),nt=!!te.morphAttributes.position,Xt=!!te.morphAttributes.normal,An=!!te.morphAttributes.color,Qt=ns;ie.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qt=_.toneMapping);let Xn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ut=Xn!==void 0?Xn.length:0,Qe=Xe.get(ie),Xr=m.state.lights;if(X===!0&&(K===!0||I!==y)){let bn=I===y&&ie.id===R;ot.setState(ie,I,bn)}let Bt=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xr.state.version||Qe.outputColorSpace!==ke||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Qe.envMap!==je||ie.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ot.numPlanes||Qe.numIntersection!==ot.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==tt||Qe.morphTargets!==nt||Qe.morphNormals!==Xt||Qe.morphColors!==An||Qe.toneMapping!==Qt||Ve.isWebGL2===!0&&Qe.morphTargetsCount!==Ut)&&(Bt=!0):(Bt=!0,Qe.__version=ie.version);let Ri=Qe.currentProgram;Bt===!0&&(Ri=js(ie,Y,Q));let qr=!1,Ms=!1,Yr=!1,fn=Ri.getUniforms(),vi=Qe.uniforms;if(Te.useProgram(Ri.program)&&(qr=!0,Ms=!0,Yr=!0),ie.id!==R&&(R=ie.id,Ms=!0),qr||y!==I){fn.setValue(W,"projectionMatrix",I.projectionMatrix),fn.setValue(W,"viewMatrix",I.matrixWorldInverse);let bn=fn.map.cameraPosition;bn!==void 0&&bn.setValue(W,Ce.setFromMatrixPosition(I.matrixWorld)),Ve.logarithmicDepthBuffer&&fn.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&fn.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Ms=!0,Yr=!0)}if(Q.isSkinnedMesh){fn.setOptional(W,Q,"bindMatrix"),fn.setOptional(W,Q,"bindMatrixInverse");let bn=Q.skeleton;bn&&(Ve.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),fn.setValue(W,"boneTexture",bn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(fn.setOptional(W,Q,"batchingTexture"),fn.setValue(W,"batchingTexture",Q._matricesTexture,N));let qt=te.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&Ve.isWebGL2===!0)&&ut.update(Q,te,Ri),(Ms||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,fn.setValue(W,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(vi.envMap.value=je,vi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ms&&(fn.setValue(W,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&Ec(vi,Yr),Ae&&ie.fog===!0&&Me.refreshFogUniforms(vi,Ae),Me.refreshMaterialUniforms(vi,ie,$,U,se),br.upload(W,Wr(Qe),vi,N)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(br.upload(W,Wr(Qe),vi,N),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&fn.setValue(W,"center",Q.center),fn.setValue(W,"modelViewMatrix",Q.modelViewMatrix),fn.setValue(W,"normalMatrix",Q.normalMatrix),fn.setValue(W,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let bn=ie.uniformsGroups;for(let jr=0,Bo=bn.length;jr<Bo;jr++)if(Ve.isWebGL2){let $r=bn[jr];yt.update($r,Ri),yt.bind($r,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Ec(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Tc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,Y,te){Xe.get(I.texture).__webglTexture=Y,Xe.get(I.depthTexture).__webglTexture=te;let ie=Xe.get(I);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,Y){let te=Xe.get(I);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,te=0){P=I,F=Y,S=te;let ie=!0,Q=null,Ae=!1,Re=!1;if(I){let je=Xe.get(I);je.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(W.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?N.setupRenderTarget(I):je.__hasExternalTextures&&N.rebindTextures(I,Xe.get(I.texture).__webglTexture,Xe.get(I.depthTexture).__webglTexture);let rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Re=!0);let tt=Xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?Q=tt[Y][te]:Q=tt[Y],Ae=!0):Ve.isWebGL2&&I.samples>0&&N.useMultisampledRTT(I)===!1?Q=Xe.get(I).__webglMultisampledFramebuffer:Array.isArray(tt)?Q=tt[te]:Q=tt,w.copy(I.viewport),B.copy(I.scissor),H=I.scissorTest}else w.copy(ee).multiplyScalar($).floor(),B.copy(Z).multiplyScalar($).floor(),H=re;if(Te.bindFramebuffer(W.FRAMEBUFFER,Q)&&Ve.drawBuffers&&ie&&Te.drawBuffers(I,Q),Te.viewport(w),Te.scissor(B),Te.setScissorTest(H),Ae){let je=Xe.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,te)}else if(Re){let je=Xe.get(I.texture),rt=Y||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,je.__webglTexture,te||0,rt)}R=-1},this.readRenderTargetPixels=function(I,Y,te,ie,Q,Ae,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){Te.bindFramebuffer(W.FRAMEBUFFER,ke);try{let je=I.texture,rt=je.format,tt=je.type;if(rt!==Yn&&De.convert(rt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=tt===fo&&(Ee.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(tt!==is&&De.convert(tt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Bi&&(Ve.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-ie&&te>=0&&te<=I.height-Q&&W.readPixels(Y,te,ie,Q,De.convert(rt),De.convert(tt),Ae)}finally{let je=P!==null?Xe.get(P).__webglFramebuffer:null;Te.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(I,Y,te=0){let ie=Math.pow(2,-te),Q=Math.floor(Y.image.width*ie),Ae=Math.floor(Y.image.height*ie);N.setTexture2D(Y,0),W.copyTexSubImage2D(W.TEXTURE_2D,te,0,0,I.x,I.y,Q,Ae),Te.unbindTexture()},this.copyTextureToTexture=function(I,Y,te,ie=0){let Q=Y.image.width,Ae=Y.image.height,Re=De.convert(te.format),ke=De.convert(te.type);N.setTexture2D(te,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment),Y.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ie,I.x,I.y,Q,Ae,Re,ke,Y.image.data):Y.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ie,I.x,I.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Re,Y.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ie,I.x,I.y,Re,ke,Y.image),ie===0&&te.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,te,ie,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=I.max.x-I.min.x+1,Re=I.max.y-I.min.y+1,ke=I.max.z-I.min.z+1,je=De.convert(ie.format),rt=De.convert(ie.type),tt;if(ie.isData3DTexture)N.setTexture3D(ie,0),tt=W.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)N.setTexture2DArray(ie,0),tt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ie.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ie.unpackAlignment);let nt=W.getParameter(W.UNPACK_ROW_LENGTH),Xt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),An=W.getParameter(W.UNPACK_SKIP_PIXELS),Qt=W.getParameter(W.UNPACK_SKIP_ROWS),Xn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ut=te.isCompressedTexture?te.mipmaps[Q]:te.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ut.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ut.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,I.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,I.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,I.min.z),te.isDataTexture||te.isData3DTexture?W.texSubImage3D(tt,Q,Y.x,Y.y,Y.z,Ae,Re,ke,je,rt,Ut.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(tt,Q,Y.x,Y.y,Y.z,Ae,Re,ke,je,Ut.data)):W.texSubImage3D(tt,Q,Y.x,Y.y,Y.z,Ae,Re,ke,je,rt,Ut),W.pixelStorei(W.UNPACK_ROW_LENGTH,nt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,An),W.pixelStorei(W.UNPACK_SKIP_ROWS,Qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Xn),Q===0&&ie.generateMipmaps&&W.generateMipmap(tt),Te.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Te.unbindTexture()},this.resetState=function(){F=0,S=0,P=null,Te.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===Ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?Is:ad}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Is?it:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Rl=class extends xo{};Rl.prototype.isWebGL1Renderer=!0;var rs=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new D,Os=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_o=class extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,eo=new D,dr=new D,pr=new D,mr=new He,to=new He,_d=new _e,ha=new D,no=new D,ua=new D,Ef=new He,nl=new He,Tf=new He,Ua=class extends Tt{constructor(e=new _o){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Os(n,3,0,!1)),fr.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),_d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;fa(ha.set(-.5,-.5,0),pr,o,dr,i,r),fa(no.set(.5,-.5,0),pr,o,dr,i,r),fa(ua.set(.5,.5,0),pr,o,dr,i,r),Ef.set(0,0),nl.set(1,0),Tf.set(1,1);let a=e.ray.intersectTriangle(ha,no,ua,!1,eo);if(a===null&&(fa(no.set(-.5,.5,0),pr,o,dr,i,r),nl.set(0,1),a=e.ray.intersectTriangle(ha,ua,no,!1,eo),a===null))return;let c=e.ray.origin.distanceTo(eo);c<e.near||c>e.far||t.push({distance:c,point:eo.clone(),uv:Cs.getInterpolation(eo,ha,no,ua,Ef,nl,Tf,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fa(s,e,t,n,i,r){mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(to.x=r*mr.x-i*mr.y,to.y=i*mr.x+r*mr.y):to.copy(mr),s.copy(e),s.x+=to.x,s.y+=to.y,s.applyMatrix4(_d)}var Af=new D,Rf=new mt,Cf=new mt,vy=new D,Pf=new _e,da=new D,il=new Hn,Lf=new _e,sl=new Us,os=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(i),e.ray.intersectsSphere(il)!==!1&&(Lf.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Lf),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Rf.fromBufferAttribute(i.attributes.skinIndex,e),Cf.fromBufferAttribute(i.attributes.skinWeight,e),Af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cf.getComponent(r);if(o!==0){let a=Rf.getComponent(r);Pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vy.copy(Af).applyMatrix4(Pf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Si=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Oa=class extends Zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},If=new _e,My=new _e,as=class s{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:My;If.multiplyMatrices(a,t[r]),If.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Oa(t,e,e,Yn,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Si),this.bones.push(o),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Fs=class extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new _e,Nf=new _e,pa=[],Df=new Ct,by=new _e,io=new Ie,so=new Hn,Fa=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,by)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Df.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),so.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gr),Nf.multiplyMatrices(n,gr),io.matrixWorld=Nf,io.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){let c=pa[o];c.instanceId=r,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var En=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uf=new D,Of=new D,Ff=new _e,rl=new Us,ma=new Hn,Zn=class extends Tt{constructor(e=new bt,t=new En){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uf.fromBufferAttribute(t,i-1),Of.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uf.distanceTo(Of);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ff.copy(i).invert(),rl.copy(e.ray).applyMatrix4(Ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let _=p,E=b-1;_<E;_+=d){let F=g.getX(_),S=g.getX(_+1);if(l.fromBufferAttribute(m,F),h.fromBufferAttribute(m,S),rl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let _=p,E=b-1;_<E;_+=d){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),rl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Bf=new D,kf=new D,Gi=class extends Zn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bf.fromBufferAttribute(t,i),kf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bf.distanceTo(kf);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ba=class extends Zn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ei=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zf=new _e,Cl=new Us,ga=new Hn,xa=new D,cs=class extends Tt{constructor(e=new bt,t=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;zf.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);xa.fromBufferAttribute(u,m),Hf(xa,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)xa.fromBufferAttribute(u,g),Hf(xa,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hf(s,e,t,n,i,r,o){let a=Cl.distanceSqToPoint(s);if(a<t){let c=new D;Cl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Wi=class extends Zt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ka=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new He:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],o=[],a=new D,c=new _e;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(mn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(mn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var za=class s extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pn=class s extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function b(){let E=new D,F=new D,S=0,P=(t-e)/n;for(let R=0;R<=r;R++){let y=[],w=R/r,B=w*(t-e)+e;for(let H=0;H<=i;H++){let j=H/i,O=j*c+a,V=Math.sin(O),U=Math.cos(O);F.x=B*V,F.y=-w*n+m,F.z=B*U,u.push(F.x,F.y,F.z),E.set(V,P,U).normalize(),f.push(E.x,E.y,E.z),d.push(j,1-w),y.push(g++)}x.push(y)}for(let R=0;R<i;R++)for(let y=0;y<r;y++){let w=x[y][R],B=x[y+1][R],H=x[y+1][R+1],j=x[y][R+1];h.push(w,B,j),h.push(B,H,j),S+=6}l.addGroup(p,S,0),p+=S}function _(E){let F=g,S=new He,P=new D,R=0,y=E===!0?e:t,w=E===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let B=g;for(let H=0;H<=i;H++){let O=H/i*c+a,V=Math.cos(O),U=Math.sin(O);P.x=y*U,P.y=m*w,P.z=y*V,u.push(P.x,P.y,P.z),f.push(0,w,0),S.x=V*.5+.5,S.y=U*.5*w+.5,d.push(S.x,S.y),g++}for(let H=0;H<i;H++){let j=F+H,O=B+H;E===!0?h.push(O,O+1,j):h.push(O+1,O,j),R+=3}l.addGroup(p,R,E===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wy={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=yd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Ry(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return yo(r,o,t,a,c,d,0),o}};function yd(s,e,t,n,i){let r,o;if(i===ky(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Vf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Vf(r,s[r],s[r+1],o);return o&&ec(o,o.next)&&(Mo(o),o=o.next),o}function Bs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ec(t,t.next)||jt(t.prev,t,t.next)===0)){if(Mo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Ny(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Ey(s,n,i,r):Sy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Mo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Ty(Bs(s),e,t),yo(s,e,t,n,i,r,2)):o===2&&Ay(s,e,t,n,i,r):yo(Bs(s),e,t,n,i,r,1);break}}}function Sy(s){let e=s.prev,t=s,n=s.next;if(jt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&yr(i,a,r,c,o,l,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ey(s,e,t,n){let i=s.prev,r=s,o=s.next;if(jt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Pl(d,g,e,t,n),b=Pl(x,m,e,t,n),_=s.prevZ,E=s.nextZ;for(;_&&_.z>=p&&E&&E.z<=b;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&yr(a,h,c,u,l,f,_.x,_.y)&&jt(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==i&&E!==o&&yr(a,h,c,u,l,f,E.x,E.y)&&jt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&yr(a,h,c,u,l,f,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==i&&E!==o&&yr(a,h,c,u,l,f,E.x,E.y)&&jt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ty(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!ec(i,r)&&vd(i,n,n.next,r)&&vo(i,r)&&vo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Mo(n),Mo(n.next),n=s=r),n=n.next}while(n!==s);return Bs(n)}function Ay(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Oy(o,a)){let c=Md(o,a);o=Bs(o,o.next),c=Bs(c,c.next),yo(o,e,t,n,i,r,0),yo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ry(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=yd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Uy(l));for(i.sort(Cy),r=0;r<i.length;r++)t=Py(i[r],t);return t}function Cy(s,e){return s.x-e.x}function Py(s,e){let t=Ly(s,e);if(!t)return e;let n=Md(t,s);return Bs(n,n.next),Bs(t,t.next)}function Ly(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&yr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),vo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Iy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Iy(s,e){return jt(s.prev,s,e.prev)<0&&jt(e.next,s,s.next)<0}function Ny(s,e,t,n){let i=s;do i.z===0&&(i.z=Pl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Dy(i)}function Dy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Pl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Uy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function yr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Oy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Fy(s,e)&&(vo(s,e)&&vo(e,s)&&By(s,e)&&(jt(s.prev,s,e.prev)||jt(s,e.prev,e))||ec(s,e)&&jt(s.prev,s,s.next)>0&&jt(e.prev,e,e.next)>0)}function jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ec(s,e){return s.x===e.x&&s.y===e.y}function vd(s,e,t,n){let i=ya(jt(s,e,t)),r=ya(jt(s,e,n)),o=ya(jt(t,n,s)),a=ya(jt(t,n,e));return!!(i!==r&&o!==a||i===0&&_a(s,t,e)||r===0&&_a(s,n,e)||o===0&&_a(t,s,n)||a===0&&_a(t,e,n))}function _a(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ya(s){return s>0?1:s<0?-1:0}function Fy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&vd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function vo(s,e){return jt(s.prev,s,s.next)<0?jt(s,e,s.next)>=0&&jt(s,s.prev,e)>=0:jt(s,e,s.prev)<0||jt(s,s.next,e)<0}function By(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Md(s,e){let t=new Ll(s.i,s.x,s.y),n=new Ll(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vf(s,e,t,n){let i=new Ll(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ll(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ky(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ha=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Gf(e),Wf(n,e);let o=e.length;t.forEach(Gf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Wf(n,t[c]);let a=wy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Wf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var bo=class s extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/i,d=new D,g=new He;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,E=b+n+1,F=b+n+2,S=b+1;a.push(_,E,S),a.push(E,F,S)}}this.setIndex(a),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ls=class s extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,E=0;p===0&&o===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let F=0;F<=t;F++){let S=F/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+E,1-_),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let _=h[p][b+1],E=h[p][b],F=h[p+1][b],S=h[p+1][b+1];(p!==0||o>0)&&d.push(_,E,S),(p!==n-1||c<Math.PI)&&d.push(E,F,S)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Va=class s extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,b=(i+1)*d+g;o.push(x,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ln=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},pi=class extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ir=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function va(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hy(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function bd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var hs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ou:r=e,a=2*t-n;break;case Fu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ou:o=e,c=2*n-t;break;case Fu:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,E=d*m-d*x;for(let F=0;F!==a;++F)r[F]=p*o[h+F]+b*o[l+F]+_*o[c+F]+E*o[u+F];return r}},Nl=class extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Dl=class extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&zy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ds;var us=class extends Qn{};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Tr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Qn{};Ga.prototype.ValueTypeName="color";var mi=class extends Qn{};mi.prototype.ValueTypeName="number";var Ul=class extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Gt.slerpFlat(r,0,o,l-a,o,l,c);return r}},In=class extends Qn{InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=Ds;In.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Qn{};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Tr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends Qn{};On.prototype.ValueTypeName="vector";var Xi=class{constructor(e,t=-1,n,i=im){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gy(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Hy(c);c=Xf(c,1,h),l=Xf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];bd(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){let _=f[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new mi(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(On,d+".position",f,"pos",i),n(In,d+".quaternion",f,"rot",i),n(On,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Vy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return On;case"color":return Ga;case"quaternion":return In;case"bool":case"boolean":return us;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Gy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vy(s.type);if(s.times===void 0){let t=[],n=[];bd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var es={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},wo=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Wy=new wo,cn=class{constructor(e){this.manager=e!==void 0?e:Wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Ol=class extends Error{constructor(e,t){super(e),this.response=t}},ei=class extends cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:i});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ui[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:E})=>{if(_)p.close();else{x+=E.byteLength;let F=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let S=0,P=h.length;S<P;S++){let R=h[S];R.onProgress&&R.onProgress(F)}p.enqueue(E),b()}})}}});return new Response(m)}else throw new Ol(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{es.add(e,l);let h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Fl=class extends cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=es.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=po("img");function c(){h(),es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Wa=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Oa,a=new ei(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Kt,o.wrapT=l.wrapT!==void 0?l.wrapT:Kt,o.magFilter=l.magFilter!==void 0?l.magFilter:pn,o.minFilter=l.minFilter!==void 0?l.minFilter:pn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=di),l.mipmapCount===1&&(o.minFilter=pn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}},gi=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=new Zt,o=new Fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ks=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Xa=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ol=new _e,qf=new D,Yf=new D,So=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(qf),Yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yf),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bl=class extends So{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ds=class extends ks{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jf=new _e,ro=new D,al=new D,kl=class extends So{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),al.copy(n.position),al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf)}},Vn=class extends ks{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zl=class extends So{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ti=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nr=class extends ks{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ti=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var qa=class extends cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=es.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return es.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});es.add(e,c),r.manager.itemStart(e)}};var Ya=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$f(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=$f();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function $f(){return(typeof performance>"u"?Date:performance).now()}var Kl="\\[\\]\\.:\\/",Xy=new RegExp("["+Kl+"]","g"),Zl="[^"+Kl+"]",qy="[^"+Kl.replace("\\.","")+"]",Yy=/((?:WC+[\/:])*)/.source.replace("WC",Zl),jy=/(WCOD+)?/.source.replace("WCOD",qy),$y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Zy=new RegExp("^"+Yy+jy+$y+Ky+"$"),Jy=["material","materials","bones","map"],Hl=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xy,"")}static parseTrackName(e){let t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Hl;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);var Eo=class{constructor(e,t,n=0,i=1/0){this.ray=new Us(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vl(e,this,n,t),n.sort(Kf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Vl(e[i],this,n,t);return n.sort(Kf),n}};function Kf(s,e){return s.distance-e.distance}function Vl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Vl(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var nc=class extends rs{constructor(e=null){super();let t=new Hi;t.deleteAttribute("uv");let n=new Ln({side:gn}),i=new Ln,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Vn(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ie(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Ie(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Ie(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Ie(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Ie(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Ie(t,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new Ie(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Ie(t,Ur(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Ie(t,Ur(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Ie(t,Ur(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Ie(t,Ur(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let b=new Ie(t,Ur(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let _=new Ie(t,Ur(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ur(s){let e=new zt;return e.color.setScalar(s),e}var wd=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))},Qy=function(s){return new Worker(s)};try{URL.revokeObjectURL(wd(""))}catch{wd=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Qy=function(e){return new Worker(e,{type:"module"})}}var ni=Uint8Array,ps=Uint16Array,eh=Uint32Array,Sd=new ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ed=new ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ev=new ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Td=function(s,e){for(var t=new ps(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new eh(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Ad=Td(Sd,2),Rd=Ad[0],tv=Ad[1];Rd[28]=258,tv[258]=28;var Cd=Td(Ed,0),nv=Cd[0],SM=Cd[1],th=new ps(32768);for(wt=0;wt<32768;++wt)qi=(wt&43690)>>>1|(wt&21845)<<1,qi=(qi&52428)>>>2|(qi&13107)<<2,qi=(qi&61680)>>>4|(qi&3855)<<4,th[wt]=((qi&65280)>>>8|(qi&255)<<8)>>>1;var qi,wt,Ao=(function(s,e,t){for(var n=s.length,i=0,r=new ps(e);i<n;++i)++r[s[i]-1];var o=new ps(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new ps(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[th[u]>>>c]=l}else for(a=new ps(n),i=0;i<n;++i)s[i]&&(a[i]=th[o[s[i]-1]++]>>>15-s[i]);return a}),Ro=new ni(288);for(wt=0;wt<144;++wt)Ro[wt]=8;var wt;for(wt=144;wt<256;++wt)Ro[wt]=9;var wt;for(wt=256;wt<280;++wt)Ro[wt]=7;var wt;for(wt=280;wt<288;++wt)Ro[wt]=8;var wt,Pd=new ni(32);for(wt=0;wt<32;++wt)Pd[wt]=5;var wt;var iv=Ao(Ro,9,1);var sv=Ao(Pd,5,1),Jl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},xi=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ql=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},rv=function(s){return(s/8|0)+(s&7&&1)},ov=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof ps?ps:s instanceof eh?eh:ni)(t-e);return n.set(s.subarray(e,t)),n},av=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new ni(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new ni(n*3));var o=function(se){var oe=e.length;if(se>oe){var pe=new ni(Math.max(oe*2,se));pe.set(e),e=pe}},a=t.f||0,c=t.p||0,l=t.b||0,h=t.l,u=t.d,f=t.m,d=t.n,g=n*8;do{if(!h){t.f=a=xi(s,c,1);var x=xi(s,c+1,3);if(c+=3,x)if(x==1)h=iv,u=sv,f=9,d=5;else if(x==2){var _=xi(s,c,31)+257,E=xi(s,c+10,15)+4,F=_+xi(s,c+5,31)+1;c+=14;for(var S=new ni(F),P=new ni(19),R=0;R<E;++R)P[ev[R]]=xi(s,c+R*3,7);c+=E*3;for(var y=Jl(P),w=(1<<y)-1,B=Ao(P,y,1),R=0;R<F;){var H=B[xi(s,c,w)];c+=H&15;var m=H>>>4;if(m<16)S[R++]=m;else{var j=0,O=0;for(m==16?(O=3+xi(s,c,3),c+=2,j=S[R-1]):m==17?(O=3+xi(s,c,7),c+=3):m==18&&(O=11+xi(s,c,127),c+=7);O--;)S[R++]=j}}var V=S.subarray(0,_),U=S.subarray(_);f=Jl(V),d=Jl(U),h=Ao(V,f,1),u=Ao(U,d,1)}else throw"invalid block type";else{var m=rv(c)+4,p=s[m-4]|s[m-3]<<8,b=m+p;if(b>n){if(r)throw"unexpected EOF";break}i&&o(l+p),e.set(s.subarray(m,b),l),t.b=l+=p,t.p=c=b*8;continue}if(c>g){if(r)throw"unexpected EOF";break}}i&&o(l+131072);for(var $=(1<<f)-1,q=(1<<d)-1,z=c;;z=c){var j=h[Ql(s,c)&$],ee=j>>>4;if(c+=j&15,c>g){if(r)throw"unexpected EOF";break}if(!j)throw"invalid length/literal";if(ee<256)e[l++]=ee;else if(ee==256){z=c,h=null;break}else{var Z=ee-254;if(ee>264){var R=ee-257,re=Sd[R];Z=xi(s,c,(1<<re)-1)+Rd[R],c+=re}var G=u[Ql(s,c)&q],X=G>>>4;if(!G)throw"invalid distance";c+=G&15;var U=nv[X];if(X>3){var re=Ed[X];U+=Ql(s,c)&(1<<re)-1,c+=re}if(c>g){if(r)throw"unexpected EOF";break}i&&o(l+131072);for(var K=l+Z;l<K;l+=4)e[l]=e[l-U],e[l+1]=e[l+1-U],e[l+2]=e[l+2-U],e[l+3]=e[l+3-U];l=K}}t.l=h,t.p=z,t.b=l,h&&(a=1,t.m=f,t.d=u,t.n=d)}while(!a);return l==e.length?e:ov(e,0,l)};var cv=new ni(0);var lv=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ld(s,e){return av((lv(s),s.subarray(2,-4)),e)}var hv=typeof TextDecoder<"u"&&new TextDecoder,uv=0;try{hv.decode(cv,{stream:!0}),uv=1}catch{}function Id(s,e,t){let n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function dv(s,e,t,n){let i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let c=0;for(let l=0;l<a;++l){let h=o[l+1],u=r[a-l],f=i[l]/(h+u);i[l]=c+h*f,c=u*f}i[a]=c}return i}function Nd(s,e,t,n){let i=Id(s,n,e),r=dv(i,n,s,e),o=new mt(0,0,0,0);for(let a=0;a<=s;++a){let c=t[i-s+a],l=r[a],h=c.w*l;o.x+=c.x*h,o.y+=c.y*h,o.z+=c.z*h,o.w+=c.w*l}return o}function pv(s,e,t,n,i){let r=[];for(let u=0;u<=t;++u)r[u]=0;let o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);let a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;let c=r.slice(0),l=r.slice(0);for(let u=1;u<=t;++u){c[u]=e-i[s+1-u],l[u]=i[s+u]-e;let f=0;for(let d=0;d<u;++d){let g=l[d+1],x=c[u-d];a[u][d]=g+x;let m=a[d][u-1]/a[u][d];a[d][u]=f+g*m,f=x*m}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,d=1,g=[];for(let x=0;x<=t;++x)g[x]=r.slice(0);g[0][0]=1;for(let x=1;x<=n;++x){let m=0,p=u-x,b=t-x;u>=x&&(g[d][0]=g[f][0]/a[b+1][p],m=g[d][0]*a[p][b]);let _=p>=-1?1:-p,E=u-1<=b?x-1:t-u;for(let S=_;S<=E;++S)g[d][S]=(g[f][S]-g[f][S-1])/a[b+1][p+S],m+=g[d][S]*a[p+S][b];u<=b&&(g[d][x]=-g[f][x-1]/a[b+1][u],m+=g[d][x]*a[u][b]),o[x][u]=m;let F=f;f=d,d=F}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function mv(s,e,t,n,i){let r=i<s?i:s,o=[],a=Id(s,n,e),c=pv(a,n,s,r,e),l=[];for(let h=0;h<t.length;++h){let u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,l[h]=u}for(let h=0;h<=r;++h){let u=l[a-s].clone().multiplyScalar(c[h][0]);for(let f=1;f<=s;++f)u.add(l[a-s+f].clone().multiplyScalar(c[h][f]));o[h]=u}for(let h=r+1;h<=i+1;++h)o[h]=new mt(0,0,0);return o}function gv(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function xv(s){let e=s.length,t=[],n=[];for(let r=0;r<e;++r){let o=s[r];t[r]=new D(o.x,o.y,o.z),n[r]=o.w}let i=[];for(let r=0;r<e;++r){let o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(gv(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function Dd(s,e,t,n,i){let r=mv(s,e,t,n,i);return xv(r)}var ic=class extends ka{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){let a=n[o];this.controlPoints[o]=new mt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new D){let n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Nd(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new D){let n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Dd(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}};var ft,Jt,Nn,rc=class extends cn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=r.path===""?ti.extractUrlBase(e):r.path,a=new ei(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){if(yv(e))ft=new ch().parse(e);else{let i=Bd(e);if(!vv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Ud(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ud(i));ft=new ah().parse(i)}let n=new gi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new sh(n,this.manager).parse(ft)}},sh=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Jt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new rh().parse(i);return this.parseScene(i,r,n),Nn}parseConnections(){let e=new Map;return"Connections"in ft&&ft.Connections.connections.forEach(function(n){let i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});let a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let c={ID:i,relationship:o};e.get(r).children.push(c)}),e}parseImages(){let e={},t={};if("Video"in ft.Objects){let n=ft.Objects.Video;for(let i in n){let r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){let a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(a||c){let l=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=l}}}}for(let n in e){let i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in ft.Objects){let n=ft.Objects.Texture;for(let i in n){let r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?vn:Kt,n.wrapT=a===0?vn:Kt,"Scaling"in e){let c=e.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in e){let c=e.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(e,t){let n,i=this.textureLoader.path,r=Jt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o,a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){let c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Zt):(c.setPath(this.textureLoader.path),o=c.load(n))}else if(a==="dds"){let c=this.manager.getHandler(".dds");c===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",e.RelativeFilename),o=new Zt):(c.setPath(this.textureLoader.path),o=c.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Zt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){let t=new Map;if("Material"in ft.Objects){let n=ft.Objects.Material;for(let i in n){let r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){let n=e.id,i=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Jt.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(r.toLowerCase()){case"phong":a=new pi;break;case"lambert":a=new Ir;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new pi;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){let i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new we().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new we().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new we().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new we().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new we().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new we().fromArray(e.SpecularColor.value).convertSRGBToLinear());let r=this;return Jt.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=it);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=it);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Ns,i.envMap.colorSpace=it);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=it);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in ft.Objects&&t in ft.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Jt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in ft.Objects){let n=ft.Objects.Deformer;for(let i in n){let r=n[i],o=Jt.get(parseInt(i));if(r.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){let a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(i){let r=t[i.ID];if(r.attrType!=="Cluster")return;let o={ID:i.ID,indices:[],weights:[],transformLink:new _e().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let i=0;i<e.children.length;i++){let r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Jt.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Nn=new _t;let i=this.parseModels(e.skeletons,t,n),r=ft.Objects.Model,o=this;i.forEach(function(c){let l=r[c.ID];o.setLookAtProperties(c,l),Jt.get(c.ID).parents.forEach(function(u){let f=i.get(u.ID);f!==void 0&&f.add(c)}),c.parent===null&&Nn.add(c)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Nn.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);let l=Od(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});let a=new oh().parse();Nn.children.length===1&&Nn.children[0].isGroup&&(Nn.children[0].animations=a,Nn=Nn.children[0]),Nn.animations=a}parseModels(e,t,n){let i=new Map,r=ft.Objects.Model;for(let o in r){let a=parseInt(o),c=r[o],l=Jt.get(a),h=this.buildSkeleton(l,e,a,c.attrName);if(!h){switch(c.attrType){case"Camera":h=this.createCamera(l);break;case"Light":h=this.createLight(l);break;case"Mesh":h=this.createMesh(l,t,n);break;case"NurbsCurve":h=this.createCurve(l,t);break;case"LimbNode":case"Root":h=new Si;break;default:h=new _t;break}h.name=c.attrName?vt.sanitizeNodeName(c.attrName):"",h.userData.originalName=c.attrName,h.ID=a}this.getTransformData(h,c),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(let a in t){let c=t[a];c.rawBones.forEach(function(l,h){if(l.ID===o.ID){let u=r;r=new Si,r.matrixWorld.copy(l.transformLink),r.name=i?vt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,c.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){let r=ft.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Tt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);let l=a/c,h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);let u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Ht(h,l,r,o),u!==null&&t.setFocalLength(u);break;case 1:t=new wi(-a/2,a/2,c/2,-c/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Tt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){let r=ft.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Tt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new we().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let c=1;switch(i){case 0:t=new Vn(r,o,a,c);break;case 1:t=new Ti(r,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=Pt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Pt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new ds(r,o,a,l,h,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Vn(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null,a=[];return e.children.forEach(function(c){t.has(c.ID)&&(r=t.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new pi({name:cn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(i=new os(r,o),i.normalizeSkinWeights()):i=new Ie(r,o),i}createCurve(e,t){let n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new En({name:cn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Zn(n,i)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Fd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Jt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){let r=ft.Objects.Model[i.ID];if("Lcl_Translation"in r){let o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Nn.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){let i=this.parsePoseNodes();for(let r in e){let o=e[r];Jt.get(parseInt(o.ID)).parents.forEach(function(c){if(t.has(c.ID)){let l=c.ID;Jt.get(l).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new as(o.bones),i[u.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in ft.Objects){let t=ft.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new _e().fromArray(r.Matrix.a)}):e[i.Node]=new _e().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in ft){if("AmbientColor"in ft.GlobalSettings){let e=ft.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){let r=new we(t,n,i).convertSRGBToLinear();Nn.add(new Nr(r,1))}}"UnitScaleFactor"in ft.GlobalSettings&&(Nn.userData.unitScaleFactor=ft.GlobalSettings.UnitScaleFactor.value)}}},rh=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in ft.Objects){let n=ft.Objects.Geometry;for(let i in n){let r=Jt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let i=n.skeletons,r=[],o=e.parents.map(function(u){return ft.Objects.Model[u.ID]});if(o.length===0)return;let a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});let c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=Fd(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);let h=Od(l);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,i){let r=new bt;e.attrName&&(r.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),c=new Ke(a.vertex,3);if(c.applyMatrix4(i),r.setAttribute("position",c),a.colors.length>0&&r.setAttribute("color",new Ke(a.colors,3)),t&&(r.setAttribute("skinIndex",new Rr(a.weightsIndices,4)),r.setAttribute("skinWeight",new Ke(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){let l=new et().getNormalMatrix(i),h=new Ke(a.normal,3);h.applyNormalMatrix(l),r.setAttribute("normal",h)}if(a.uvs.forEach(function(l,h){let u=h===0?"uv":`uv${h}`;r.setAttribute(u,new Ke(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==l&&(r.addGroup(h,f-h,l),l=u,h=f)}),r.groups.length>0){let u=r.groups[r.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,l)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,i=0,r=!1,o=[],a=[],c=[],l=[],h=[],u=[],f=this;return e.vertexIndices.forEach(function(d,g){let x,m=!1;d<0&&(d=d^-1,m=!0);let p=[],b=[];if(o.push(d*3,d*3+1,d*3+2),e.color){let _=sc(g,n,d,e.color);c.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(_){b.push(_.weight),p.push(_.id)}),b.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let _=[0,0,0,0],E=[0,0,0,0];b.forEach(function(F,S){let P=F,R=p[S];E.forEach(function(y,w,B){if(P>y){B[w]=P,P=y;let H=_[w];_[w]=R,R=H}})}),p=_,b=E}for(;b.length<4;)b.push(0),p.push(0);for(let _=0;_<4;++_)h.push(b[_]),u.push(p[_])}if(e.normal){let _=sc(g,n,d,e.normal);a.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=sc(g,n,d,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(_,E){let F=sc(g,n,d,_);l[E]===void 0&&(l[E]=[]),l[E].push(F[0]),l[E].push(F[1])}),i++,m&&(f.genFace(t,e,o,x,a,c,l,h,u,i),n++,i=0,o=[],a=[],c=[],l=[],h=[],u=[])}),t}getNormalNewell(e){let t=new D(0,0,0);for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new D(0,1,0):new D(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new He(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,c,l,h){let u;if(h>3){let f=[];for(let m=0;m<n.length;m+=3)f.push(new D(t.vertexPositions[n[m]],t.vertexPositions[n[m+1]],t.vertexPositions[n[m+2]]));let{tangent:d,bitangent:g}=this.getNormalTangentAndBitangent(f),x=[];for(let m of f)x.push(this.flattenVertex(m,d,g));u=Ha.triangulateShape(x,[])}else u=[[0,1,2]];for(let[f,d,g]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(c[f*4]),e.vertexWeights.push(c[f*4+1]),e.vertexWeights.push(c[f*4+2]),e.vertexWeights.push(c[f*4+3]),e.vertexWeights.push(c[d*4]),e.vertexWeights.push(c[d*4+1]),e.vertexWeights.push(c[d*4+2]),e.vertexWeights.push(c[d*4+3]),e.vertexWeights.push(c[g*4]),e.vertexWeights.push(c[g*4+1]),e.vertexWeights.push(c[g*4+2]),e.vertexWeights.push(c[g*4+3]),e.weightsIndices.push(l[f*4]),e.weightsIndices.push(l[f*4+1]),e.weightsIndices.push(l[f*4+2]),e.weightsIndices.push(l[f*4+3]),e.weightsIndices.push(l[d*4]),e.weightsIndices.push(l[d*4+1]),e.weightsIndices.push(l[d*4+2]),e.weightsIndices.push(l[d*4+3]),e.weightsIndices.push(l[g*4]),e.weightsIndices.push(l[g*4+1]),e.weightsIndices.push(l[g*4+2]),e.weightsIndices.push(l[g*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(x,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){let c=ft.Objects.Geometry[a.geoID];c!==void 0&&r.genMorphGeometry(e,t,c,i,a.name)})})}genMorphGeometry(e,t,n,i,r){let o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],l=e.attributes.position.count*3,h=new Float32Array(l);for(let g=0;g<c.length;g++){let x=c[g]*3;h[x]=a[g*3],h[x+1]=a[g*3+1],h[x+2]=a[g*3+2]}let u={vertexIndices:o,vertexPositions:h},f=this.genBuffers(u),d=new Ke(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new we;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new bt;let n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)r.push(new mt().fromArray(o,u));let a,c;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,c=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}let h=new ic(n,i,r,a,c).getPoints(r.length*12);return new bt().setFromPoints(h)}},oh=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ft.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=ft.Objects.AnimationCurveNode,t=new Map;for(let n in e){let i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=ft.Objects.AnimationCurve;for(let n in t){let i={id:t[n].id,times:t[n].KeyTime.a.map(Mv),values:t[n].KeyValueFloat.a},r=Jt.get(i.id);if(r!==void 0){let o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){let t=ft.Objects.AnimationLayer,n=new Map;for(let i in t){let r=[],o=Jt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(e.has(c.ID)){let h=e.get(c.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[l]===void 0){let u=Jt.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){let f=ft.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}let d={modelName:f.attrName?vt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Nn.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new _e),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[l]=d}}r[l]&&(r[l][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[l]===void 0){let u=Jt.get(c.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=Jt.get(u).parents[0].ID,d=Jt.get(f).parents[0].ID,g=Jt.get(d).parents[0].ID,x=ft.Objects.Model[g],m={modelName:x.attrName?vt.sanitizeNodeName(x.attrName):"",morphName:ft.Objects.Deformer[u].attrName};r[l]=m}r[l][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){let t=ft.Objects.AnimationStack,n={};for(let i in t){let r=Jt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Xi(e.name,-1,t)}generateTracks(e){let t=[],n=new D,i=new D;if(e.transform&&e.transform.decompose(n,new Gt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){let r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new On(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let u=this.interpolateRotations(t.x,t.y,t.z,r);o=u[0],a=u[1]}n!==void 0&&(n=n.map(Pt.degToRad),n.push(r),n=new Mn().fromArray(n),n=new Gt().setFromEuler(n)),i!==void 0&&(i=i.map(Pt.degToRad),i.push(r),i=new Mn().fromArray(i),i=new Gt().setFromEuler(i).invert());let c=new Gt,l=new Mn,h=[];if(!a||!o)return new In(e+".quaternion",[],[]);for(let u=0;u<a.length;u+=3)l.set(a[u],a[u+1],a[u+2],r),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),u>2&&new Gt().fromArray(h,(u-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,u/3*4);return new In(e+".quaternion",o,h)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Nn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new mi(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){let o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let i=n,r=[],o=-1,a=-1,c=-1;return e.forEach(function(l){if(t.x&&(o=t.x.times.indexOf(l)),t.y&&(a=t.y.times.indexOf(l)),t.z&&(c=t.z.times.indexOf(l)),o!==-1){let h=t.x.values[o];r.push(h),i[0]=h}else r.push(i[0]);if(a!==-1){let h=t.y.values[a];r.push(h),i[1]=h}else r.push(i[1]);if(c!==-1){let h=t.z.values[c];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){let r=[],o=[];r.push(e.times[0]),o.push(Pt.degToRad(e.values[0])),o.push(Pt.degToRad(t.values[0])),o.push(Pt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let c=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;let l=c.map(Pt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;let u=h.map(Pt.degToRad),f=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let x=Math.max(...d)/180,m=new Mn(...l,i),p=new Mn(...u,i),b=new Gt().setFromEuler(m),_=new Gt().setFromEuler(p);b.dot(_)&&_.set(-_.x,-_.y,-_.z,-_.w);let E=e.times[a-1],F=e.times[a]-E,S=new Gt,P=new Mn;for(let R=0;R<1;R+=1/x)S.copy(b.clone().slerp(_.clone(),R)),r.push(E+R*F),P.setFromQuaternion(S,i),o.push(P.x),o.push(P.y),o.push(P.z)}else r.push(e.times[a]),o.push(Pt.degToRad(e.values[a])),o.push(Pt.degToRad(t.values[a])),o.push(Pt.degToRad(n.values[a]))}return[r,o]}},ah=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ac,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){let o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;let c=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(i,c):l?t.parseNodeProperty(i,l,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){let c=r.split(",").slice(1),l=parseInt(c[0]),h=parseInt(c[1]),u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[l,h],wv(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=ih(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ih(t.a))}parseNodeSpecialProperty(e,t,n){let i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],c=i[3],l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=ih(l);break}this.getPrevNode()[r]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),r)}},ch=class{parse(e){let t=new oc(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let i=new ac;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(i===0)return null;let c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(e));let l=c.length>0?c[0]:"",h=c.length>1?c[1]:"",u=c.length>2?c[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){let f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=c,typeof l=="number"&&(n.id=l),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){let i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:c}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}let a=Ld(new Uint8Array(e.getArrayBuffer(o))),c=new oc(a.buffer);switch(t){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},oc=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}},ac=class{add(e,t){this[e]=t}};function yv(s){let e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Bd(s,0,e.length)}function vv(s){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(i){let r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Ud(s){let e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Mv(s){return s/46186158e3}var bv=[];function sc(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);let r=i*n.dataSize,o=r+n.dataSize;return Sv(bv,n.buffer,r,o)}var nh=new Mn,Or=new D;function Od(s){let e=new _e,t=new _e,n=new _e,i=new _e,r=new _e,o=new _e,a=new _e,c=new _e,l=new _e,h=new _e,u=new _e,f=new _e,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Or.fromArray(s.translation)),s.preRotation){let w=s.preRotation.map(Pt.degToRad);w.push(s.eulerOrder||Mn.DEFAULT_ORDER),t.makeRotationFromEuler(nh.fromArray(w))}if(s.rotation){let w=s.rotation.map(Pt.degToRad);w.push(s.eulerOrder||Mn.DEFAULT_ORDER),n.makeRotationFromEuler(nh.fromArray(w))}if(s.postRotation){let w=s.postRotation.map(Pt.degToRad);w.push(s.eulerOrder||Mn.DEFAULT_ORDER),i.makeRotationFromEuler(nh.fromArray(w)),i.invert()}s.scale&&r.scale(Or.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Or.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Or.fromArray(s.scalingPivot)),s.rotationOffset&&c.setPosition(Or.fromArray(s.rotationOffset)),s.rotationPivot&&l.setPosition(Or.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));let g=t.clone().multiply(n).multiply(i),x=new _e;x.extractRotation(h);let m=new _e;m.copyPosition(h);let p=m.clone().invert().multiply(h),b=x.clone().invert().multiply(p),_=r,E=new _e;if(d===0)E.copy(x).multiply(g).multiply(b).multiply(_);else if(d===1)E.copy(x).multiply(b).multiply(g).multiply(_);else{let B=new _e().scale(new D().setFromMatrixScale(u)).clone().invert(),H=b.clone().multiply(B);E.copy(x).multiply(g).multiply(H).multiply(_)}let F=l.clone().invert(),S=o.clone().invert(),P=e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(F).multiply(a).multiply(o).multiply(r).multiply(S),R=new _e().copyPosition(P),y=h.clone().multiply(R);return f.copyPosition(y),P=f.clone().multiply(E),P.premultiply(h.invert()),P}function Fd(s){s=s||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function ih(s){return s.split(",").map(function(t){return parseFloat(t)})}function Bd(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function wv(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function Sv(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function zd(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new bt,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=kd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=kd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function kd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<s.length;++l)o.set(s[l].array,a),a+=s[l].array.length;let c=new Vt(o,t,n);return i!==void 0&&(c.gpuType=i),c}function lh(s,e){if(e===od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===To||e===Ka){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===To)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Br=class extends cn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ti.extractUrlBase(e);o=ti.resolveURL(l,this.path)}else o=ti.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ei(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xd){try{o[dt.KHR_BINARY_GLTF]=new Ph(e)}catch(u){i&&i(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new ph;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Lh(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new Ih;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new Nh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Ev(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dh=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ti(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vn(h),l.distance=u;break;case"spot":l=new ds(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,gs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ph=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(i)}},mh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,it)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,it)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Th=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ah=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rh=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ch=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ii.TRIANGLES&&l.mode!==ii.TRIANGLE_STRIP&&l.mode!==ii.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let x=new _e,m=new D,p=new Gt,b=new D(1,1,1),_=new Fa(g.geometry,g.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&b.fromBufferAttribute(c.SCALE,E),_.setMatrixAt(E,x.compose(m,p,b));for(let E in c)if(E==="_COLOR_0"){let F=c[E];_.instanceColor=new Fs(F.array,F.itemSize,F.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);Tt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Xd="glTF",Co=12,Hd={JSON:1313821514,BIN:5130562},Ph=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Co,r=new DataView(e,Co),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Hd.JSON){let l=new Uint8Array(e,Co+o,a);this.content=n.decode(l)}else if(c===Hd.BIN){let l=Co+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Uh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Fr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(d)},a,l,sn,f)})})}},Ih=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Nh=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},cc=class extends hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,b=1-m,_=p-f+u;for(let E=0;E!==a;E++){let F=o[x+E+a],S=o[x+E+c]*h,P=o[g+E+a],R=o[g+E]*h;r[E]=b*F+_*S+m*P+p*R}return r}},Tv=new Gt,Dh=class extends cc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Tv.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:nn,9729:pn,9984:ba,9985:Xl,9986:oo,9987:di},Gd={33071:Kt,33648:uo,10497:vn},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Av={CUBICSPLINE:void 0,LINEAR:Ds,STEP:Tr},uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function zs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Pv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lv(s){let e,t=s.extensions&&s.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fh(t.attributes):e=s.indices+":"+fh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+fh(s.targets[n]);return e}function fh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Oh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Nv=new _e,Fh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ev,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new gi(this.options.manager):this.textureLoader=new qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ei(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zs(r,a,i),gs(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ti.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=hh[i.type],a=Fr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Vt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=hh[i.type],l=Fr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(b);_||(x=new l(a,p*d,i.count*d/h),_=new Lr(x,d/h),t.cache.add(b,_)),m=new Os(_,c,f%d/h,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new Vt(x,c,g);if(i.sparse!==void 0){let p=hh.SCALAR,b=Fr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,F=new b(o[1],_,i.sparse.count*p),S=new l(o[2],E,i.sparse.count*c);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let P=0,R=F.length;P<R;P++){let y=F[P];if(m.setX(y,S[P*c]),c>=2&&m.setY(y,S[P*c+1]),c>=3&&m.setZ(y,S[P*c+2]),c>=4&&m.setW(y,S[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vd[f.magFilter]||pn,h.minFilter=Vd[f.minFilter]||di,h.wrapS=Gd[f.wrapS]||vn,h.wrapT=Gd[f.wrapT]||vn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Zt(x);m.needsUpdate=!0,f(m)}),t.load(ti.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Iv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ei,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new En,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=i[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,it)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yn);let h=r.alphaMode||uh.OPAQUE;if(h===uh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===uh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==zt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zt){let u=r.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==zt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,it)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),gs(u,r),t.associations.set(u,{materials:e}),r.extensions&&zs(i,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Lv(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Wd(new bt,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Rv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,b=l[d];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new os(x,b):new Ie(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?p.geometry=lh(p.geometry,Ka):m.mode===ii.TRIANGLE_FAN&&(p.geometry=lh(p.geometry,To));else if(m.mode===ii.LINES)p=new Gi(x,b);else if(m.mode===ii.LINE_STRIP)p=new Zn(x,b);else if(m.mode===ii.LINE_LOOP)p=new Ba(x,b);else if(m.mode===ii.POINTS)p=new cs(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Pv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gs(p,r),m.extensions&&zs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&zs(i,u[0],r),u[0];let f=new _t;r.extensions&&zs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Pt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new _e;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new as(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,_=f.length;b<_;b++){let E=f[b],F=d[b],S=g[b],P=x[b],R=m[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let y=n._createAnimationTracks(E,F,S,P,R);if(y)for(let w=0;w<y.length;w++)p.push(y[w])}return new Xi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Nv)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Si:l.length>1?h=new _t:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),gs(h,r),r.extensions&&zs(n,h,r),r.matrix!==void 0){let u=new _e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _t;n.name&&(r.name=i.createUniqueName(n.name)),gs(r,n),n.extensions&&zs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof rn||f instanceof Zt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];ms[r.path]===ms.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ms[r.path]){case ms.weights:l=mi;break;case ms.rotation:l=In;break;case ms.position:case ms.scale:l=On;break;default:n.itemSize===1?l=mi:l=On;break}let h=i.interpolation!==void 0?Av[i.interpolation]:Ds,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+ms[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Oh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof In?Dh:cc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Dv(s,e,t){let n=e.attributes,i=new Ct;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Oh(Fr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Oh(Fr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Wd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Uh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Mt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),gs(s,e),Dv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cv(s,e.targets,t):s})}var Po=class extends Wa{constructor(e){super(e)}parse(e){function t(U){switch(U.image_type){case f:case x:if(U.colormap_length>256||U.colormap_size!==24||U.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case g:case m:case p:if(U.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+U.image_type)}if(U.width<=0||U.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(U.pixel_size!==8&&U.pixel_size!==16&&U.pixel_size!==24&&U.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+U.pixel_size)}function n(U,$,q,z,ee){let Z,re,G=q.pixel_size>>3,X=q.width*q.height*G;if($&&(re=ee.subarray(z,z+=q.colormap_length*(q.colormap_size>>3))),U){Z=new Uint8Array(X);let K,se,oe,pe=0,Ce=new Uint8Array(G);for(;pe<X;)if(K=ee[z++],se=(K&127)+1,K&128){for(oe=0;oe<G;++oe)Ce[oe]=ee[z++];for(oe=0;oe<se;++oe)Z.set(Ce,pe+oe*G);pe+=G*se}else{for(se*=G,oe=0;oe<se;++oe)Z[pe+oe]=ee[z++];pe+=se}}else Z=ee.subarray(z,z+=$?q.width*q.height:X);return{pixel_data:Z,palettes:re}}function i(U,$,q,z,ee,Z,re,G,X){let K=X,se,oe=0,pe,Ce,he=w.width;for(Ce=$;Ce!==z;Ce+=q)for(pe=ee;pe!==re;pe+=Z,oe++)se=G[oe],U[(pe+he*Ce)*4+3]=255,U[(pe+he*Ce)*4+2]=K[se*3+0],U[(pe+he*Ce)*4+1]=K[se*3+1],U[(pe+he*Ce)*4+0]=K[se*3+2];return U}function r(U,$,q,z,ee,Z,re,G){let X,K=0,se,oe,pe=w.width;for(oe=$;oe!==z;oe+=q)for(se=ee;se!==re;se+=Z,K+=2)X=G[K+0]+(G[K+1]<<8),U[(se+pe*oe)*4+0]=(X&31744)>>7,U[(se+pe*oe)*4+1]=(X&992)>>2,U[(se+pe*oe)*4+2]=(X&31)<<3,U[(se+pe*oe)*4+3]=X&32768?0:255;return U}function o(U,$,q,z,ee,Z,re,G){let X=0,K,se,oe=w.width;for(se=$;se!==z;se+=q)for(K=ee;K!==re;K+=Z,X+=3)U[(K+oe*se)*4+3]=255,U[(K+oe*se)*4+2]=G[X+0],U[(K+oe*se)*4+1]=G[X+1],U[(K+oe*se)*4+0]=G[X+2];return U}function a(U,$,q,z,ee,Z,re,G){let X=0,K,se,oe=w.width;for(se=$;se!==z;se+=q)for(K=ee;K!==re;K+=Z,X+=4)U[(K+oe*se)*4+2]=G[X+0],U[(K+oe*se)*4+1]=G[X+1],U[(K+oe*se)*4+0]=G[X+2],U[(K+oe*se)*4+3]=G[X+3];return U}function c(U,$,q,z,ee,Z,re,G){let X,K=0,se,oe,pe=w.width;for(oe=$;oe!==z;oe+=q)for(se=ee;se!==re;se+=Z,K++)X=G[K],U[(se+pe*oe)*4+0]=X,U[(se+pe*oe)*4+1]=X,U[(se+pe*oe)*4+2]=X,U[(se+pe*oe)*4+3]=255;return U}function l(U,$,q,z,ee,Z,re,G){let X=0,K,se,oe=w.width;for(se=$;se!==z;se+=q)for(K=ee;K!==re;K+=Z,X+=2)U[(K+oe*se)*4+0]=G[X+0],U[(K+oe*se)*4+1]=G[X+0],U[(K+oe*se)*4+2]=G[X+0],U[(K+oe*se)*4+3]=G[X+1];return U}function h(U,$,q,z,ee){let Z,re,G,X,K,se;switch((w.flags&b)>>_){default:case S:Z=0,G=1,K=$,re=0,X=1,se=q;break;case E:Z=0,G=1,K=$,re=q-1,X=-1,se=-1;break;case P:Z=$-1,G=-1,K=-1,re=0,X=1,se=q;break;case F:Z=$-1,G=-1,K=-1,re=q-1,X=-1,se=-1;break}if(j)switch(w.pixel_size){case 8:c(U,re,X,se,Z,G,K,z);break;case 16:l(U,re,X,se,Z,G,K,z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(U,re,X,se,Z,G,K,z,ee);break;case 16:r(U,re,X,se,Z,G,K,z);break;case 24:o(U,re,X,se,Z,G,K,z);break;case 32:a(U,re,X,se,Z,G,K,z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return U}let u=0,f=1,d=2,g=3,x=9,m=10,p=11,b=48,_=4,E=0,F=1,S=2,P=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let R=0,y=new Uint8Array(e),w={id_length:y[R++],colormap_type:y[R++],image_type:y[R++],colormap_index:y[R++]|y[R++]<<8,colormap_length:y[R++]|y[R++]<<8,colormap_size:y[R++],origin:[y[R++]|y[R++]<<8,y[R++]|y[R++]<<8],width:y[R++]|y[R++]<<8,height:y[R++]|y[R++]<<8,pixel_size:y[R++],flags:y[R++]};if(t(w),w.id_length+R>e.length)throw new Error("THREE.TGALoader: No data.");R+=w.id_length;let B=!1,H=!1,j=!1;switch(w.image_type){case x:B=!0,H=!0;break;case f:H=!0;break;case m:B=!0;break;case d:break;case p:B=!0,j=!0;break;case g:j=!0;break}let O=new Uint8Array(w.width*w.height*4),V=n(B,H,w,R,y);return h(O,w.width,w.height,V.pixel_data,V.palettes),{data:O,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:di}}};var lc=class extends cn{load(e,t,n,i){let r=this,o=r.path===""?ti.extractUrlBase(e):r.path,a=new ei(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(M,v){let C=[],T=M.childNodes;for(let L=0,ne=T.length;L<ne;L++){let ae=T[L];ae.nodeName===v&&C.push(ae)}return C}function i(M){if(M.length===0)return[];let v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,L=v.length;T<L;T++)C[T]=v[T];return C}function r(M){if(M.length===0)return[];let v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,L=v.length;T<L;T++)C[T]=parseFloat(v[T]);return C}function o(M){if(M.length===0)return[];let v=M.trim().split(/\s+/),C=new Array(v.length);for(let T=0,L=v.length;T<L;T++)C[T]=parseInt(v[T]);return C}function a(M){return M.substring(1)}function c(){return"three_default_"+pp++}function l(M){return Object.keys(M).length===0}function h(M){return{unit:u(n(M,"unit")[0]),upAxis:f(n(M,"up_axis")[0])}}function u(M){return M!==void 0&&M.hasAttribute("meter")===!0?parseFloat(M.getAttribute("meter")):1}function f(M){return M!==void 0?M.textContent:"Y_UP"}function d(M,v,C,T){let L=n(M,v)[0];if(L!==void 0){let ne=n(L,C);for(let ae=0;ae<ne.length;ae++)T(ne[ae])}}function g(M,v){for(let C in M){let T=M[C];T.build=v(M[C])}}function x(M,v){return M.build!==void 0||(M.build=v(M)),M.build}function m(M){let v={sources:{},samplers:{},channels:{}},C=!1;for(let T=0,L=M.childNodes.length;T<L;T++){let ne=M.childNodes[T];if(ne.nodeType!==1)continue;let ae;switch(ne.nodeName){case"source":ae=ne.getAttribute("id"),v.sources[ae]=k(ne);break;case"sampler":ae=ne.getAttribute("id"),v.samplers[ae]=p(ne);break;case"channel":ae=ne.getAttribute("target"),v.channels[ae]=b(ne);break;case"animation":m(ne),C=!0;break;default:console.log(ne)}}C===!1&&($e.animations[M.getAttribute("id")||Pt.generateUUID()]=v)}function p(M){let v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1&&L.nodeName==="input"){let ne=a(L.getAttribute("source")),ae=L.getAttribute("semantic");v.inputs[ae]=ne}}return v}function b(M){let v={},T=M.getAttribute("target").split("/"),L=T.shift(),ne=T.shift(),ae=ne.indexOf("(")!==-1,Le=ne.indexOf(".")!==-1;if(Le)T=ne.split("."),ne=T.shift(),v.member=T.shift();else if(ae){let ge=ne.split("(");ne=ge.shift();for(let be=0;be<ge.length;be++)ge[be]=parseInt(ge[be].replace(/\)/,""));v.indices=ge}return v.id=L,v.sid=ne,v.arraySyntax=ae,v.memberSyntax=Le,v.sampler=a(M.getAttribute("source")),v}function _(M){let v=[],C=M.channels,T=M.samplers,L=M.sources;for(let ne in C)if(C.hasOwnProperty(ne)){let ae=C[ne],Le=T[ae.sampler],ge=Le.inputs.INPUT,be=Le.inputs.OUTPUT,Be=L[ge],ue=L[be],Fe=F(ae,Be,ue);w(Fe,v)}return v}function E(M){return x($e.animations[M],_)}function F(M,v,C){let T=$e.nodes[M.id],L=Qe(T.id),ne=T.transforms[M.sid],ae=T.matrix.clone().transpose(),Le,ge,be,Be,ue,Fe,Ue={};switch(ne){case"matrix":for(be=0,Be=v.array.length;be<Be;be++)if(Le=v.array[be],ge=be*C.stride,Ue[Le]===void 0&&(Ue[Le]={}),M.arraySyntax===!0){let Yt=C.array[ge],Rt=M.indices[0]+4*M.indices[1];Ue[Le][Rt]=Yt}else for(ue=0,Fe=C.stride;ue<Fe;ue++)Ue[Le][ue]=C.array[ge+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break}let We=S(Ue,ae);return{name:L.uuid,keyframes:We}}function S(M,v){let C=[];for(let L in M)C.push({time:parseFloat(L),value:M[L]});C.sort(T);for(let L=0;L<16;L++)B(C,L,v.elements[L]);return C;function T(L,ne){return L.time-ne.time}}let P=new D,R=new D,y=new Gt;function w(M,v){let C=M.keyframes,T=M.name,L=[],ne=[],ae=[],Le=[];for(let ge=0,be=C.length;ge<be;ge++){let Be=C[ge],ue=Be.time,Fe=Be.value;Re.fromArray(Fe).transpose(),Re.decompose(P,y,R),L.push(ue),ne.push(P.x,P.y,P.z),ae.push(y.x,y.y,y.z,y.w),Le.push(R.x,R.y,R.z)}return ne.length>0&&v.push(new On(T+".position",L,ne)),ae.length>0&&v.push(new In(T+".quaternion",L,ae)),Le.length>0&&v.push(new On(T+".scale",L,Le)),v}function B(M,v,C){let T,L=!0,ne,ae;for(ne=0,ae=M.length;ne<ae;ne++)T=M[ne],T.value[v]===void 0?T.value[v]=null:L=!1;if(L===!0)for(ne=0,ae=M.length;ne<ae;ne++)T=M[ne],T.value[v]=C;else H(M,v)}function H(M,v){let C,T;for(let L=0,ne=M.length;L<ne;L++){let ae=M[L];if(ae.value[v]===null){if(C=j(M,L,v),T=O(M,L,v),C===null){ae.value[v]=T.value[v];continue}if(T===null){ae.value[v]=C.value[v];continue}V(ae,C,T,v)}}}function j(M,v,C){for(;v>=0;){let T=M[v];if(T.value[C]!==null)return T;v--}return null}function O(M,v,C){for(;v<M.length;){let T=M[v];if(T.value[C]!==null)return T;v++}return null}function V(M,v,C,T){if(C.time-v.time===0){M.value[T]=v.value[T];return}M.value[T]=(M.time-v.time)*(C.value[T]-v.value[T])/(C.time-v.time)+v.value[T]}function U(M){let v={name:M.getAttribute("id")||"default",start:parseFloat(M.getAttribute("start")||0),end:parseFloat(M.getAttribute("end")||0),animations:[]};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="instance_animation"&&v.animations.push(a(L.getAttribute("url")))}$e.clips[M.getAttribute("id")]=v}function $(M){let v=[],C=M.name,T=M.end-M.start||-1,L=M.animations;for(let ne=0,ae=L.length;ne<ae;ne++){let Le=E(L[ne]);for(let ge=0,be=Le.length;ge<be;ge++)v.push(Le[ge])}return new Xi(C,T,v)}function q(M){return x($e.clips[M],$)}function z(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"skin":v.id=a(L.getAttribute("source")),v.skin=ee(L);break;case"morph":v.id=a(L.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$e.controllers[M.getAttribute("id")]=v}function ee(M){let v={sources:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"bind_shape_matrix":v.bindShapeMatrix=r(L.textContent);break;case"source":let ne=L.getAttribute("id");v.sources[ne]=k(L);break;case"joints":v.joints=Z(L);break;case"vertex_weights":v.vertexWeights=re(L);break}}return v}function Z(M){let v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1&&L.nodeName==="input"){let ne=L.getAttribute("semantic"),ae=a(L.getAttribute("source"));v.inputs[ne]=ae}}return v}function re(M){let v={inputs:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ne=L.getAttribute("semantic"),ae=a(L.getAttribute("source")),Le=parseInt(L.getAttribute("offset"));v.inputs[ne]={id:ae,offset:Le};break;case"vcount":v.vcount=o(L.textContent);break;case"v":v.v=o(L.textContent);break}}return v}function G(M){let v={id:M.id},C=$e.geometries[v.id];return M.skin!==void 0&&(v.skin=X(M.skin),C.sources.skinIndices=v.skin.indices,C.sources.skinWeights=v.skin.weights),v}function X(M){let C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},T=M.sources,L=M.vertexWeights,ne=L.vcount,ae=L.v,Le=L.inputs.JOINT.offset,ge=L.inputs.WEIGHT.offset,be=M.sources[M.joints.inputs.JOINT],Be=M.sources[M.joints.inputs.INV_BIND_MATRIX],ue=T[L.inputs.WEIGHT.id].array,Fe=0,Ue,We,ze;for(Ue=0,ze=ne.length;Ue<ze;Ue++){let Rt=ne[Ue],gt=[];for(We=0;We<Rt;We++){let xt=ae[Fe+Le],Ci=ae[Fe+ge],Un=ue[Ci];gt.push({index:xt,weight:Un}),Fe+=2}for(gt.sort(Yt),We=0;We<4;We++){let xt=gt[We];xt!==void 0?(C.indices.array.push(xt.index),C.weights.array.push(xt.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(M.bindShapeMatrix?C.bindMatrix=new _e().fromArray(M.bindShapeMatrix).transpose():C.bindMatrix=new _e().identity(),Ue=0,ze=be.array.length;Ue<ze;Ue++){let Rt=be.array[Ue],gt=new _e().fromArray(Be.array,Ue*Be.stride).transpose();C.joints.push({name:Rt,boneInverse:gt})}return C;function Yt(Rt,gt){return gt.weight-Rt.weight}}function K(M){return x($e.controllers[M],G)}function se(M){let v={init_from:n(M,"init_from")[0].textContent};$e.images[M.getAttribute("id")]=v}function oe(M){return M.build!==void 0?M.build:M.init_from}function pe(M){let v=$e.images[M];return v!==void 0?x(v,oe):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",M),null)}function Ce(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="profile_COMMON"&&(v.profile=he(L))}$e.effects[M.getAttribute("id")]=v}function he(M){let v={surfaces:{},samplers:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"newparam":Pe(L,v);break;case"technique":v.technique=Ee(L);break;case"extra":v.extra=A(L);break}}return v}function Pe(M,v){let C=M.getAttribute("sid");for(let T=0,L=M.childNodes.length;T<L;T++){let ne=M.childNodes[T];if(ne.nodeType===1)switch(ne.nodeName){case"surface":v.surfaces[C]=W(ne);break;case"sampler2D":v.samplers[C]=Lt(ne);break}}}function W(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="init_from"&&(v.init_from=L.textContent)}return v}function Lt(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="source"&&(v.source=L.textContent)}return v}function Ee(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"constant":case"lambert":case"blinn":case"phong":v.type=L.nodeName,v.parameters=Ve(L);break;case"extra":v.extra=A(L);break}}return v}function Ve(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":v[L.nodeName]=Te(L);break;case"transparent":v[L.nodeName]={opaque:L.hasAttribute("opaque")?L.getAttribute("opaque"):"A_ONE",data:Te(L)};break}}return v}function Te(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":v[L.nodeName]=r(L.textContent);break;case"float":v[L.nodeName]=parseFloat(L.textContent);break;case"texture":v[L.nodeName]={id:L.getAttribute("texture"),extra:ct(L)};break}}return v}function ct(M){let v={technique:{}};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="extra"&&Xe(L,v)}return v}function Xe(M,v){for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="technique"&&N(L,v)}}function N(M,v){for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":v.technique[L.nodeName]=parseFloat(L.textContent);break;case"wrapU":case"wrapV":L.textContent.toUpperCase()==="TRUE"?v.technique[L.nodeName]=1:L.textContent.toUpperCase()==="FALSE"?v.technique[L.nodeName]=0:v.technique[L.nodeName]=parseInt(L.textContent);break;case"bump":v[L.nodeName]=le(L);break}}}function A(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="technique"&&(v.technique=J(L))}return v}function J(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"double_sided":v[L.nodeName]=parseInt(L.textContent);break;case"bump":v[L.nodeName]=le(L);break}}return v}function le(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="texture"&&(v[L.nodeName]={id:L.getAttribute("texture"),texcoord:L.getAttribute("texcoord"),extra:ct(L)})}return v}function ce(M){return M}function fe(M){return x($e.effects[M],ce)}function Oe(M){let v={name:M.getAttribute("name")};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="instance_effect"&&(v.url=a(L.getAttribute("url")))}$e.materials[M.getAttribute("id")]=v}function Me(M){let v,C=M.slice((M.lastIndexOf(".")-1>>>0)+2);return C=C.toLowerCase(),C==="tga"?v=Ac:v=$r,v}function Ne(M){let v=fe(M.url),C=v.profile.technique,T;switch(C.type){case"phong":case"blinn":T=new pi;break;case"lambert":T=new Ir;break;default:T=new zt;break}T.name=M.name||"";function L(ge,be=null){let Be=v.profile.samplers[ge.id],ue=null;if(Be!==void 0){let Fe=v.profile.surfaces[Be.source];ue=pe(Fe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=pe(ge.id);if(ue!==null){let Fe=Me(ue);if(Fe!==void 0){let Ue=Fe.load(ue),We=ge.extra;if(We!==void 0&&We.technique!==void 0&&l(We.technique)===!1){let ze=We.technique;Ue.wrapS=ze.wrapU?vn:Kt,Ue.wrapT=ze.wrapV?vn:Kt,Ue.offset.set(ze.offsetU||0,ze.offsetV||0),Ue.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Ue.wrapS=vn,Ue.wrapT=vn;return be!==null&&(Ue.colorSpace=be),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}let ne=C.parameters;for(let ge in ne){let be=ne[ge];switch(ge){case"diffuse":be.color&&T.color.fromArray(be.color),be.texture&&(T.map=L(be.texture,it));break;case"specular":be.color&&T.specular&&T.specular.fromArray(be.color),be.texture&&(T.specularMap=L(be.texture));break;case"bump":be.texture&&(T.normalMap=L(be.texture));break;case"ambient":be.texture&&(T.lightMap=L(be.texture,it));break;case"shininess":be.float&&T.shininess&&(T.shininess=be.float);break;case"emission":be.color&&T.emissive&&T.emissive.fromArray(be.color),be.texture&&(T.emissiveMap=L(be.texture,it));break}}T.color.convertSRGBToLinear(),T.specular&&T.specular.convertSRGBToLinear(),T.emissive&&T.emissive.convertSRGBToLinear();let ae=ne.transparent,Le=ne.transparency;if(Le===void 0&&ae&&(Le={float:1}),ae===void 0&&Le&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Le)if(ae.data.texture)T.transparent=!0;else{let ge=ae.data.color;switch(ae.opaque){case"A_ONE":T.opacity=ge[3]*Le.float;break;case"RGB_ZERO":T.opacity=1-ge[0]*Le.float;break;case"A_ZERO":T.opacity=1-ge[3]*Le.float;break;case"RGB_ONE":T.opacity=ge[0]*Le.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}T.opacity<1&&(T.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){let ge=C.extra.technique;for(let be in ge){let Be=ge[be];switch(be){case"double_sided":T.side=Be===1?yn:$n;break;case"bump":T.normalMap=L(Be.texture),T.normalScale=new He(1,1);break}}}return T}function Ye(M){return x($e.materials[M],Ne)}function ot(M){let v={name:M.getAttribute("name")};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="optics"&&(v.optics=de(L))}$e.cameras[M.getAttribute("id")]=v}function de(M){for(let v=0;v<M.childNodes.length;v++){let C=M.childNodes[v];if(C.nodeName==="technique_common")return St(C)}return{}}function St(M){let v={};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];switch(T.nodeName){case"perspective":case"orthographic":v.technique=T.nodeName,v.parameters=ut(T);break}}return v}function ut(M){let v={};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];switch(T.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":v[T.nodeName]=parseFloat(T.textContent);break}}return v}function Je(M){let v;switch(M.optics.technique){case"perspective":v=new Ht(M.optics.parameters.yfov,M.optics.parameters.aspect_ratio,M.optics.parameters.znear,M.optics.parameters.zfar);break;case"orthographic":let C=M.optics.parameters.ymag,T=M.optics.parameters.xmag,L=M.optics.parameters.aspect_ratio;T=T===void 0?C*L:T,C=C===void 0?T/L:C,T*=.5,C*=.5,v=new wi(-T,T,C,-C,M.optics.parameters.znear,M.optics.parameters.zfar);break;default:v=new Ht;break}return v.name=M.name||"",v}function Ge(M){let v=$e.cameras[M];return v!==void 0?x(v,Je):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",M),null)}function De(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];L.nodeType===1&&L.nodeName==="technique_common"&&(v=st(L))}$e.lights[M.getAttribute("id")]=v}function st(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"directional":case"point":case"spot":case"ambient":v.technique=L.nodeName,v.parameters=yt(L)}}return v}function yt(M){let v={};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":let ne=r(L.textContent);v.color=new we().fromArray(ne).convertSRGBToLinear();break;case"falloff_angle":v.falloffAngle=parseFloat(L.textContent);break;case"quadratic_attenuation":let ae=parseFloat(L.textContent);v.distance=ae?Math.sqrt(1/ae):0;break}}return v}function Ft(M){let v;switch(M.technique){case"directional":v=new Ti;break;case"point":v=new Vn;break;case"spot":v=new ds;break;case"ambient":v=new Nr;break}return M.parameters.color&&v.color.copy(M.parameters.color),M.parameters.distance&&(v.distance=M.parameters.distance),v}function lt(M){let v=$e.lights[M];return v!==void 0?x(v,Ft):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",M),null)}function me(M){let v={name:M.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=n(M,"mesh")[0];if(C!==void 0){for(let T=0;T<C.childNodes.length;T++){let L=C.childNodes[T];if(L.nodeType!==1)continue;let ne=L.getAttribute("id");switch(L.nodeName){case"source":v.sources[ne]=k(L);break;case"vertices":v.vertices=ye(L);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",L.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":v.primitives.push(ve(L));break;default:console.log(L)}}$e.geometries[M.getAttribute("id")]=v}}function k(M){let v={array:[],stride:3};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"float_array":v.array=r(T.textContent);break;case"Name_array":v.array=i(T.textContent);break;case"technique_common":let L=n(T,"accessor")[0];L!==void 0&&(v.stride=parseInt(L.getAttribute("stride")));break}}return v}function ye(M){let v={};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];T.nodeType===1&&(v[T.getAttribute("semantic")]=a(T.getAttribute("source")))}return v}function ve(M){let v={type:M.nodeName,material:M.getAttribute("material"),count:parseInt(M.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,T=M.childNodes.length;C<T;C++){let L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ne=a(L.getAttribute("source")),ae=L.getAttribute("semantic"),Le=parseInt(L.getAttribute("offset")),ge=parseInt(L.getAttribute("set")),be=ge>0?ae+ge:ae;v.inputs[be]={id:ne,offset:Le},v.stride=Math.max(v.stride,Le+1),ae==="TEXCOORD"&&(v.hasUV=!0);break;case"vcount":v.vcount=o(L.textContent);break;case"p":v.p=o(L.textContent);break}}return v}function Ze(M){let v={};for(let C=0;C<M.length;C++){let T=M[C];v[T.type]===void 0&&(v[T.type]=[]),v[T.type].push(T)}return v}function qe(M){let v=0;for(let C=0,T=M.length;C<T;C++)M[C].hasUV===!0&&v++;v>0&&v<M.length&&(M.uvsNeedsFix=!0)}function At(M){let v={},C=M.sources,T=M.vertices,L=M.primitives;if(L.length===0)return{};let ne=Ze(L);for(let ae in ne){let Le=ne[ae];qe(Le),v[ae]=It(Le,C,T)}return v}function It(M,v,C){let T={},L={array:[],stride:0},ne={array:[],stride:0},ae={array:[],stride:0},Le={array:[],stride:0},ge={array:[],stride:0},be={array:[],stride:4},Be={array:[],stride:4},ue=new bt,Fe=[],Ue=0;for(let We=0;We<M.length;We++){let ze=M[We],Yt=ze.inputs,Rt=0;switch(ze.type){case"lines":case"linestrips":Rt=ze.count*2;break;case"triangles":Rt=ze.count*3;break;case"polylist":for(let gt=0;gt<ze.count;gt++){let xt=ze.vcount[gt];switch(xt){case 3:Rt+=3;break;case 4:Rt+=6;break;default:Rt+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}ue.addGroup(Ue,Rt,We),Ue+=Rt,ze.material&&Fe.push(ze.material);for(let gt in Yt){let xt=Yt[gt];switch(gt){case"VERTEX":for(let Ci in C){let Un=C[Ci];switch(Ci){case"POSITION":let $s=L.array.length;if(Et(ze,v[Un],xt.offset,L.array),L.stride=v[Un].stride,v.skinWeights&&v.skinIndices&&(Et(ze,v.skinIndices,xt.offset,be.array),Et(ze,v.skinWeights,xt.offset,Be.array)),ze.hasUV===!1&&M.uvsNeedsFix===!0){let mp=(L.array.length-$s)/L.stride;for(let nu=0;nu<mp;nu++)ae.array.push(0,0)}break;case"NORMAL":Et(ze,v[Un],xt.offset,ne.array),ne.stride=v[Un].stride;break;case"COLOR":Et(ze,v[Un],xt.offset,ge.array),ge.stride=v[Un].stride;break;case"TEXCOORD":Et(ze,v[Un],xt.offset,ae.array),ae.stride=v[Un].stride;break;case"TEXCOORD1":Et(ze,v[Un],xt.offset,Le.array),ae.stride=v[Un].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ci)}}break;case"NORMAL":Et(ze,v[xt.id],xt.offset,ne.array),ne.stride=v[xt.id].stride;break;case"COLOR":Et(ze,v[xt.id],xt.offset,ge.array,!0),ge.stride=v[xt.id].stride;break;case"TEXCOORD":Et(ze,v[xt.id],xt.offset,ae.array),ae.stride=v[xt.id].stride;break;case"TEXCOORD1":Et(ze,v[xt.id],xt.offset,Le.array),Le.stride=v[xt.id].stride;break}}}return L.array.length>0&&ue.setAttribute("position",new Ke(L.array,L.stride)),ne.array.length>0&&ue.setAttribute("normal",new Ke(ne.array,ne.stride)),ge.array.length>0&&ue.setAttribute("color",new Ke(ge.array,ge.stride)),ae.array.length>0&&ue.setAttribute("uv",new Ke(ae.array,ae.stride)),Le.array.length>0&&ue.setAttribute("uv1",new Ke(Le.array,Le.stride)),be.array.length>0&&ue.setAttribute("skinIndex",new Ke(be.array,be.stride)),Be.array.length>0&&ue.setAttribute("skinWeight",new Ke(Be.array,Be.stride)),T.data=ue,T.type=M[0].type,T.materialKeys=Fe,T}function Et(M,v,C,T,L=!1){let ne=M.p,ae=M.stride,Le=M.vcount;function ge(ue){let Fe=ne[ue+C]*Be,Ue=Fe+Be;for(;Fe<Ue;Fe++)T.push(be[Fe]);if(L){let We=T.length-Be-1;ko.setRGB(T[We+0],T[We+1],T[We+2]).convertSRGBToLinear(),T[We+0]=ko.r,T[We+1]=ko.g,T[We+2]=ko.b}}let be=v.array,Be=v.stride;if(M.vcount!==void 0){let ue=0;for(let Fe=0,Ue=Le.length;Fe<Ue;Fe++){let We=Le[Fe];if(We===4){let ze=ue+ae*0,Yt=ue+ae*1,Rt=ue+ae*2,gt=ue+ae*3;ge(ze),ge(Yt),ge(gt),ge(Yt),ge(Rt),ge(gt)}else if(We===3){let ze=ue+ae*0,Yt=ue+ae*1,Rt=ue+ae*2;ge(ze),ge(Yt),ge(Rt)}else if(We>4)for(let ze=1,Yt=We-2;ze<=Yt;ze++){let Rt=ue+ae*0,gt=ue+ae*ze,xt=ue+ae*(ze+1);ge(Rt),ge(gt),ge(xt)}ue+=ae*We}}else for(let ue=0,Fe=ne.length;ue<Fe;ue+=ae)ge(ue)}function un(M){return x($e.geometries[M],At)}function Nt(M){let v={name:M.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&Oo(T,v)}$e.kinematicsModels[M.getAttribute("id")]=v}function _n(M){return M.build!==void 0?M.build:M}function Wn(M){return x($e.kinematicsModels[M],_n)}function Oo(M,v){for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"joint":v.joints[T.getAttribute("sid")]=wc(T);break;case"link":v.links.push(Gr(T));break}}}function wc(M){let v;for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"prismatic":case"revolute":v=Ys(T);break}}return v}function Ys(M){let v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",axis:new D,limits:{min:0,max:0},type:M.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"axis":let L=r(T.textContent);v.axis.fromArray(L);break;case"limits":let ne=T.getElementsByTagName("max")[0],ae=T.getElementsByTagName("min")[0];v.limits.max=parseFloat(ne.textContent),v.limits.min=parseFloat(ae.textContent);break}}return v.limits.min>=v.limits.max&&(v.static=!0),v.middlePosition=(v.limits.min+v.limits.max)/2,v}function Gr(M){let v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"attachment_full":v.attachments.push(js(T));break;case"matrix":case"translate":case"rotate":v.transforms.push(Wr(T));break}}return v}function js(M){let v={joint:M.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"link":v.links.push(Gr(T));break;case"matrix":case"translate":case"rotate":v.transforms.push(Wr(T));break}}return v}function Wr(M){let v={type:M.nodeName},C=r(M.textContent);switch(v.type){case"matrix":v.obj=new _e,v.obj.fromArray(C).transpose();break;case"translate":v.obj=new D,v.obj.fromArray(C);break;case"rotate":v.obj=new D,v.obj.fromArray(C),v.angle=Pt.degToRad(C[3]);break}return v}function Fo(M){let v={name:M.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];T.nodeType===1&&T.nodeName==="rigid_body"&&(v.rigidBodies[T.getAttribute("name")]={},Sc(T,v.rigidBodies[T.getAttribute("name")]))}$e.physicsModels[M.getAttribute("id")]=v}function Sc(M,v){for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];T.nodeType===1&&T.nodeName==="technique_common"&&Ec(T,v)}}function Ec(M,v){for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"inertia":v.inertia=r(T.textContent);break;case"mass":v.mass=r(T.textContent)[0];break}}}function Tc(M){let v={bindJointAxis:[]};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];T.nodeType===1&&T.nodeName==="bind_joint_axis"&&v.bindJointAxis.push(I(T))}$e.kinematicsScenes[a(M.getAttribute("url"))]=v}function I(M){let v={target:M.getAttribute("target").split("/").pop()};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType===1&&T.nodeName==="axis"){let L=T.getElementsByTagName("param")[0];v.axis=L.textContent;let ne=v.axis.split("inst_").pop().split("axis")[0];v.jointIndex=ne.substring(0,ne.length-1)}}return v}function Y(M){return M.build!==void 0?M.build:M}function te(M){return x($e.kinematicsScenes[M],Y)}function ie(){let M=Object.keys($e.kinematicsModels)[0],v=Object.keys($e.kinematicsScenes)[0],C=Object.keys($e.visualScenes)[0];if(M===void 0||v===void 0)return;let T=Wn(M),L=te(v),ne=qr(C),ae=L.bindJointAxis,Le={};for(let Be=0,ue=ae.length;Be<ue;Be++){let Fe=ae[Be],Ue=qt.querySelector('[sid="'+Fe.target+'"]');if(Ue){let We=Ue.parentElement;ge(Fe.jointIndex,We)}}function ge(Be,ue){let Fe=ue.getAttribute("name"),Ue=T.joints[Be];ne.traverse(function(We){We.name===Fe&&(Le[Be]={object:We,transforms:Q(ue),joint:Ue,position:Ue.zeroPosition})})}let be=new _e;tu={joints:T&&T.joints,getJointValue:function(Be){let ue=Le[Be];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Be+" doesn't exist.")},setJointValue:function(Be,ue){let Fe=Le[Be];if(Fe){let Ue=Fe.joint;if(ue>Ue.limits.max||ue<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Be+" value "+ue+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Be+" is static.");else{let We=Fe.object,ze=Ue.axis,Yt=Fe.transforms;Re.identity();for(let Rt=0;Rt<Yt.length;Rt++){let gt=Yt[Rt];if(gt.sid&&gt.sid.indexOf(Be)!==-1)switch(Ue.type){case"revolute":Re.multiply(be.makeRotationAxis(ze,Pt.degToRad(ue)));break;case"prismatic":Re.multiply(be.makeTranslation(ze.x*ue,ze.y*ue,ze.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(gt.type){case"matrix":Re.multiply(gt.obj);break;case"translate":Re.multiply(be.makeTranslation(gt.obj.x,gt.obj.y,gt.obj.z));break;case"scale":Re.scale(gt.obj);break;case"rotate":Re.multiply(be.makeRotationAxis(gt.obj,gt.angle));break}}We.matrix.copy(Re),We.matrix.decompose(We.position,We.quaternion,We.scale),Le[Be].position=ue}}else console.log("THREE.ColladaLoader: "+Be+" does not exist.")}}}function Q(M){let v=[],C=qt.querySelector('[id="'+M.id+'"]');for(let T=0;T<C.childNodes.length;T++){let L=C.childNodes[T];if(L.nodeType!==1)continue;let ne,ae;switch(L.nodeName){case"matrix":ne=r(L.textContent);let Le=new _e().fromArray(ne).transpose();v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:Le});break;case"translate":case"scale":ne=r(L.textContent),ae=new D().fromArray(ne),v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:ae});break;case"rotate":ne=r(L.textContent),ae=new D().fromArray(ne);let ge=Pt.degToRad(ne[3]);v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:ae,angle:ge});break}}return v}function Ae(M){let v=M.getElementsByTagName("node");for(let C=0;C<v.length;C++){let T=v[C];T.hasAttribute("id")===!1&&T.setAttribute("id",c())}}let Re=new _e,ke=new D;function je(M){let v={name:M.getAttribute("name")||"",type:M.getAttribute("type"),id:M.getAttribute("id"),sid:M.getAttribute("sid"),matrix:new _e,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];if(T.nodeType!==1)continue;let L;switch(T.nodeName){case"node":v.nodes.push(T.getAttribute("id")),je(T);break;case"instance_camera":v.instanceCameras.push(a(T.getAttribute("url")));break;case"instance_controller":v.instanceControllers.push(rt(T));break;case"instance_light":v.instanceLights.push(a(T.getAttribute("url")));break;case"instance_geometry":v.instanceGeometries.push(rt(T));break;case"instance_node":v.instanceNodes.push(a(T.getAttribute("url")));break;case"matrix":L=r(T.textContent),v.matrix.multiply(Re.fromArray(L).transpose()),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"translate":L=r(T.textContent),ke.fromArray(L),v.matrix.multiply(Re.makeTranslation(ke.x,ke.y,ke.z)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"rotate":L=r(T.textContent);let ne=Pt.degToRad(L[3]);v.matrix.multiply(Re.makeRotationAxis(ke.fromArray(L),ne)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"scale":L=r(T.textContent),v.matrix.scale(ke.fromArray(L)),v.transforms[T.getAttribute("sid")]=T.nodeName;break;case"extra":break;default:console.log(T)}}return Ut(v.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",v.id):$e.nodes[v.id]=v,v}function rt(M){let v={id:a(M.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<M.childNodes.length;C++){let T=M.childNodes[C];switch(T.nodeName){case"bind_material":let L=T.getElementsByTagName("instance_material");for(let ne=0;ne<L.length;ne++){let ae=L[ne],Le=ae.getAttribute("symbol"),ge=ae.getAttribute("target");v.materials[Le]=a(ge)}break;case"skeleton":v.skeletons.push(a(T.textContent));break;default:break}}return v}function tt(M,v){let C=[],T=[],L,ne,ae;for(L=0;L<M.length;L++){let be=M[L],Be;if(Ut(be))Be=Qe(be),nt(Be,v,C);else if(Ri(be)){let Fe=$e.visualScenes[be].children;for(let Ue=0;Ue<Fe.length;Ue++){let We=Fe[Ue];if(We.type==="JOINT"){let ze=Qe(We.id);nt(ze,v,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",be)}for(L=0;L<v.length;L++)for(ne=0;ne<C.length;ne++)if(ae=C[ne],ae.bone.name===v[L].name){T[L]=ae,ae.processed=!0;break}for(L=0;L<C.length;L++)ae=C[L],ae.processed===!1&&(T.push(ae),ae.processed=!0);let Le=[],ge=[];for(L=0;L<T.length;L++)ae=T[L],Le.push(ae.bone),ge.push(ae.boneInverse);return new as(Le,ge)}function nt(M,v,C){M.traverse(function(T){if(T.isBone===!0){let L;for(let ne=0;ne<v.length;ne++){let ae=v[ne];if(ae.name===T.name){L=ae.boneInverse;break}}L===void 0&&(L=new _e),C.push({bone:T,boneInverse:L,processed:!1})}})}function Xt(M){let v=[],C=M.matrix,T=M.nodes,L=M.type,ne=M.instanceCameras,ae=M.instanceControllers,Le=M.instanceLights,ge=M.instanceGeometries,be=M.instanceNodes;for(let ue=0,Fe=T.length;ue<Fe;ue++)v.push(Qe(T[ue]));for(let ue=0,Fe=ne.length;ue<Fe;ue++){let Ue=Ge(ne[ue]);Ue!==null&&v.push(Ue.clone())}for(let ue=0,Fe=ae.length;ue<Fe;ue++){let Ue=ae[ue],We=K(Ue.id),ze=un(We.id),Yt=Xn(ze,Ue.materials),Rt=Ue.skeletons,gt=We.skin.joints,xt=tt(Rt,gt);for(let Ci=0,Un=Yt.length;Ci<Un;Ci++){let $s=Yt[Ci];$s.isSkinnedMesh&&($s.bind(xt,We.skin.bindMatrix),$s.normalizeSkinWeights()),v.push($s)}}for(let ue=0,Fe=Le.length;ue<Fe;ue++){let Ue=lt(Le[ue]);Ue!==null&&v.push(Ue.clone())}for(let ue=0,Fe=ge.length;ue<Fe;ue++){let Ue=ge[ue],We=un(Ue.id),ze=Xn(We,Ue.materials);for(let Yt=0,Rt=ze.length;Yt<Rt;Yt++)v.push(ze[Yt])}for(let ue=0,Fe=be.length;ue<Fe;ue++)v.push(Qe(be[ue]).clone());let Be;if(T.length===0&&v.length===1)Be=v[0];else{Be=L==="JOINT"?new Si:new _t;for(let ue=0;ue<v.length;ue++)Be.add(v[ue])}return Be.name=L==="JOINT"?M.sid:M.name,Be.matrix.copy(C),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be}let An=new zt({name:cn.DEFAULT_MATERIAL_NAME,color:16711935});function Qt(M,v){let C=[];for(let T=0,L=M.length;T<L;T++){let ne=v[M[T]];ne===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",M[T]),C.push(An)):C.push(Ye(ne))}return C}function Xn(M,v){let C=[];for(let T in M){let L=M[T],ne=Qt(L.materialKeys,v);if(ne.length===0&&(T==="lines"||T==="linestrips"?ne.push(new En):ne.push(new pi)),T==="lines"||T==="linestrips")for(let be=0,Be=ne.length;be<Be;be++){let ue=ne[be];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){let Fe=new En;Fe.color.copy(ue.color),Fe.opacity=ue.opacity,Fe.transparent=ue.transparent,ne[be]=Fe}}let ae=L.data.attributes.skinIndex!==void 0,Le=ne.length===1?ne[0]:ne,ge;switch(T){case"lines":ge=new Gi(L.data,Le);break;case"linestrips":ge=new Zn(L.data,Le);break;case"triangles":case"polylist":ae?ge=new os(L.data,Le):ge=new Ie(L.data,Le);break}C.push(ge)}return C}function Ut(M){return $e.nodes[M]!==void 0}function Qe(M){return x($e.nodes[M],Xt)}function Xr(M){let v={name:M.getAttribute("name"),children:[]};Ae(M);let C=n(M,"node");for(let T=0;T<C.length;T++)v.children.push(je(C[T]));$e.visualScenes[M.getAttribute("id")]=v}function Bt(M){let v=new _t;v.name=M.name;let C=M.children;for(let T=0;T<C.length;T++){let L=C[T];v.add(Qe(L.id))}return v}function Ri(M){return $e.visualScenes[M]!==void 0}function qr(M){return x($e.visualScenes[M],Bt)}function Ms(M){let v=n(M,"instance_visual_scene")[0];return qr(a(v.getAttribute("url")))}function Yr(){let M=$e.clips;if(l(M)===!0){if(l($e.animations)===!1){let v=[];for(let C in $e.animations){let T=E(C);for(let L=0,ne=T.length;L<ne;L++)v.push(T[L])}zo.push(new Xi("default",-1,v))}}else for(let v in M)zo.push(q(v))}function fn(M){let v="",C=[M];for(;C.length;){let T=C.shift();T.nodeType===Node.TEXT_NODE?v+=T.textContent:(v+=`
`,C.push.apply(C,T.childNodes))}return v.trim()}if(e.length===0)return{scene:new rs};let vi=new DOMParser().parseFromString(e,"application/xml"),qt=n(vi,"COLLADA")[0],bn=vi.getElementsByTagName("parsererror")[0];if(bn!==void 0){let M=n(bn,"div")[0],v;return M?v=M.textContent:v=fn(bn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,v),null}let jr=qt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",jr);let Bo=h(n(qt,"asset")[0]),$r=new gi(this.manager);$r.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Ac;Po&&(Ac=new Po(this.manager),Ac.setPath(this.resourcePath||t));let ko=new we,zo=[],tu={},pp=0,$e={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(qt,"library_animations","animation",m),d(qt,"library_animation_clips","animation_clip",U),d(qt,"library_controllers","controller",z),d(qt,"library_images","image",se),d(qt,"library_effects","effect",Ce),d(qt,"library_materials","material",Oe),d(qt,"library_cameras","camera",ot),d(qt,"library_lights","light",De),d(qt,"library_geometries","geometry",me),d(qt,"library_nodes","node",je),d(qt,"library_visual_scenes","visual_scene",Xr),d(qt,"library_kinematics_models","kinematics_model",Nt),d(qt,"library_physics_models","physics_model",Fo),d(qt,"scene","instance_kinematics_scene",Tc),g($e.animations,_),g($e.clips,$),g($e.controllers,G),g($e.images,oe),g($e.effects,ce),g($e.materials,Ne),g($e.cameras,Je),g($e.lights,Ft),g($e.geometries,At),g($e.visualScenes,Bt),Yr(),ie();let Ho=Ms(n(qt,"scene")[0]);return Ho.animations=zo,Bo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ho.rotation.set(-Math.PI/2,0,0)),Ho.scale.multiplyScalar(Bo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),zo},kinematics:tu,library:$e,scene:Ho}}};var Uv=/^[og]\s*(.+)?/,Ov=/^mtllib /,Fv=/^usemtl /,Bv=/^usemap /,qd=/\s+/,Yd=new D,Bh=new D,jd=new D,$d=new D,si=new D,hc=new we;function kv(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;Yd.fromArray(i,e),Bh.fromArray(i,t),jd.fromArray(i,n),si.subVectors(jd,Bh),$d.subVectors(Yd,Bh),si.cross($d),si.normalize(),r.push(si.x,si.y,si.z),r.push(si.x,si.y,si.z),r.push(si.x,si.y,si.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,c,l){let h=this.vertices.length,u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(c,g),d=this.parseNormalIndex(l,g),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(i!==void 0&&i!==""){let g=this.uvs.length;u=this.parseUVIndex(i,g),f=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}var uc=class extends cn{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,o=new ei(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new kv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split(qd);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(hc.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),t.colors.push(hc.r,hc.g,hc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=l.slice(1).trim().split(qd),d=[];for(let x=0,m=f.length;x<m;x++){let p=f[x];if(p.length>0){let b=p.split("/");d.push(b)}}let g=d[0];for(let x=1,m=d.length-1;x<m;x++){let p=d[x],b=d[x+1];t.addFace(g[0],p[0],b[0],g[1],p[1],b[1],g[2],p[2],b[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),f=[],d=[];if(l.indexOf("/")===-1)f=u;else for(let g=0,x=u.length;g<x;g++){let m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(h==="p"){let f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Uv.exec(l))!==null){let u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Fv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Ov.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Bv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){let f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let r=new _t;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],h=l.geometry,u=l.materials,f=h.type==="Line",d=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let x=new bt;x.setAttribute("position",new Ke(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new Ke(h.normals,3)),h.colors.length>0&&(g=!0,x.setAttribute("color",new Ke(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new Ke(h.uvs,2));let m=[];for(let b=0,_=u.length;b<_;b++){let E=u[b],F=E.name+"_"+E.smooth+"_"+g,S=t.materials[F];if(this.materials!==null){if(S=this.materials.create(E.name),f&&S&&!(S instanceof En)){let P=new En;rn.prototype.copy.call(P,S),P.color.copy(S.color),S=P}else if(d&&S&&!(S instanceof Ei)){let P=new Ei({size:10,sizeAttenuation:!1});rn.prototype.copy.call(P,S),P.color.copy(S.color),P.map=S.map,S=P}}S===void 0&&(f?S=new En:d?S=new Ei({size:1,sizeAttenuation:!1}):S=new pi,S.name=E.name,S.flatShading=!E.smooth,S.vertexColors=g,t.materials[F]=S),m.push(S)}let p;if(m.length>1){for(let b=0,_=u.length;b<_;b++){let E=u[b];x.addGroup(E.groupStart,E.groupCount,b)}f?p=new Gi(x,m):d?p=new cs(x,m):p=new Ie(x,m)}else f?p=new Gi(x,m[0]):d?p=new cs(x,m[0]):p=new Ie(x,m[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){let a=new Ei({size:1,sizeAttenuation:!1}),c=new bt;c.setAttribute("position",new Ke(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ke(t.colors,3)),a.vertexColors=!0);let l=new cs(c,a);r.add(l)}return r}};function xs(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function Hs(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function fc(s,e=1,t=1){return`rgba(${Math.min(255,s[0]*e)|0},${Math.min(255,s[1]*e)|0},${Math.min(255,s[2]*e)|0},${t})`}function dc(s,e,t,n,i){s.strokeStyle=n,s.lineWidth=i,s.strokeRect(i/2,i/2,e-i,t-i)}function zv(s=3){let n=xs(512,1024),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#f4f2ee",i.fillRect(0,0,512,1024);for(let o=0;o<70;o++){let a=r()*512,c=r()*1024,l=40+r()*180,h=i.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(196,190,180,0.12)"),h.addColorStop(1,"rgba(196,190,180,0)"),i.fillStyle=h,i.fillRect(0,0,512,1024)}for(let o=0;o<10;o++){let a=r()*512,c=-20;for(i.beginPath(),i.moveTo(a,c),i.lineWidth=.6+r()*2.4,i.strokeStyle=`rgba(${115+r()*40|0},${108+r()*30|0},${96+r()*30|0},${.22+r()*.4})`;c<1044;)a+=(r()-.5)*70,c+=18+r()*50,i.lineTo(a,c);i.stroke()}return dc(i,512,1024,"#d8d2c8",3),n}function kh({w:s=512,h:e=768,planks:t=4,base:n=[178,134,90],seed:i=2,joints:r=!0}={}){let o=xs(s,e),a=o.getContext("2d"),c=Hs(i),l=s/t;for(let h=0;h<t;h++){let u=.86+c()*.28;a.fillStyle=fc(n,u),a.fillRect(h*l,0,l,e);for(let f=0;f<46;f++){let d=h*l+c()*l,g=1+c()*4,x=c()*6;a.strokeStyle=fc(n,u*.68,.12+c()*.25),a.lineWidth=.5+c()*1.6,a.beginPath(),a.moveTo(d,0);for(let m=0;m<=e;m+=24)a.lineTo(d+Math.sin(m*.012+x)*g,m);a.stroke()}t>1&&(a.fillStyle="rgba(45,28,12,0.55)",a.fillRect(h*l,0,2,e),r&&a.fillRect(h*l,c()*e,l,2))}return o}function Hv(s=5){let n=xs(512,512),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#9d9a94",i.fillRect(0,0,512,512);for(let o=0;o<9e3;o++){let a=120+r()*70|0;i.fillStyle=`rgba(${a},${a-2},${a-6},0.35)`,i.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}return dc(i,512,512,"#7c7973",4),n}function Vv(s=7){let n=xs(512,512),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#ebe5db",i.fillRect(0,0,512,512);let o=["#809671","#D2AB80","#725C3A","#B3B792","#c9c2b6","#8d8a85"];for(let a=0;a<520;a++){let c=r()*512,l=r()*512,h=2+r()*9,u=4+(r()*3|0);i.fillStyle=o[r()*o.length|0],i.beginPath();for(let f=0;f<u;f++){let d=f/u*Math.PI*2,g=h*(.6+r()*.6);i.lineTo(c+Math.cos(d)*g,l+Math.sin(d)*g)}i.fill()}return dc(i,512,512,"#d2cbc0",3),n}function Gv(s=9){let n=xs(512,512),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#cfcac2",i.fillRect(0,0,512,512);let o=512/2,a=512/4;for(let c=0;c<4;c++)for(let l=-1;l<3;l++){let h=l*o+(c%2?o/2:0),u=c*a,f=242+r()*10|0,d=i.createLinearGradient(0,u,0,u+a);d.addColorStop(0,`rgb(${f},${f},${f-3})`),d.addColorStop(1,`rgb(${f-14},${f-14},${f-16})`),i.fillStyle=d,i.fillRect(h+3,u+3,o-6,a-6)}return n}function Wv(s=11){let n=xs(512,512),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#e4e1d8",i.fillRect(0,0,512,512);let o=512/3;for(let a=0;a<3;a++)for(let c=0;c<3;c++){let l=.85+r()*.3,h=[128,150,113],u=i.createRadialGradient(a*o+o*r(),c*o+o*r(),4,a*o+o/2,c*o+o/2,o);u.addColorStop(0,fc(h,l*1.15)),u.addColorStop(1,fc(h,l*.85)),i.fillStyle=u,i.fillRect(a*o+3,c*o+3,o-6,o-6)}return n}function Xv(s=13){let n=xs(1024,512),i=n.getContext("2d"),r=Hs(s);i.fillStyle="#b9b6b0",i.fillRect(0,0,1024,512);for(let o=0;o<50;o++){let a=r()*1024,c=r()*512,l=60+r()*200,h=i.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(150,146,140,0.18)"),h.addColorStop(1,"rgba(150,146,140,0)"),i.fillStyle=h,i.fillRect(0,0,1024,512)}return dc(i,1024,512,"#9a968f",3),n}function Kd(){let s=xs(512,288),e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,288);t.addColorStop(0,"#9fc3d8"),t.addColorStop(.6,"#e8d3b0"),t.addColorStop(1,"#6f7f5a"),e.fillStyle=t,e.fillRect(0,0,512,288),e.fillStyle="rgba(80,95,70,0.9)",e.beginPath(),e.moveTo(0,230);for(let n=0;n<=512;n+=32)e.lineTo(n,200+Math.sin(n*.02)*25);return e.lineTo(512,288),e.lineTo(0,288),e.fill(),s}function Zd(){return{floor:{label:"Floor",options:[{name:"Statuario Marble",sub:"600 x 1200 mm",canvas:zv(),tile:[.6,1.2],rough:.12},{name:"Oak Plank",sub:"200 x 1200 mm",canvas:kh(),tile:[.8,1.2],rough:.55},{name:"Grey Stone",sub:"600 x 600 mm",canvas:Hv(),tile:[.6,.6],rough:.8},{name:"Terrazzo",sub:"600 x 600 mm",canvas:Vv(),tile:[.6,.6],rough:.35}]},walltile:{label:"Wall Tile",options:[{name:"White Subway",sub:"75 x 150 mm",canvas:Gv(),tile:[.3,.3],rough:.15},{name:"Sage Zellige",sub:"100 x 100 mm",canvas:Wv(),tile:[.3,.3],rough:.2},{name:"Grey Slab",sub:"600 x 1200 mm",canvas:Xv(),tile:[1.2,.6],rough:.3}]},wall:{label:"Wall Paint",options:[{name:"Almond",sub:"Matt emulsion",color:"#E5E0D8",rough:.92},{name:"Vanilla",sub:"Matt emulsion",color:"#E5D2B8",rough:.92},{name:"Soft Sage",sub:"Matt emulsion",color:"#BCC4AB",rough:.92},{name:"Warm White",sub:"Matt emulsion",color:"#F3F0EA",rough:.92}]},kitchen:{label:"Kitchen",options:[{name:"Matte Matcha",sub:"Laminate",color:"#809671",rough:.6},{name:"Walnut",sub:"Veneer",canvas:kh({w:256,h:512,planks:1,base:[112,74,46],joints:!1,seed:21}),tile:[.6,1.2],rough:.45},{name:"Gloss White",sub:"Acrylic",color:"#F4F3EF",rough:.08},{name:"Chai",sub:"Laminate",color:"#D2AB80",rough:.5}]},wardrobe:{label:"Wardrobe",options:[{name:"Light Oak",sub:"Veneer",canvas:kh({w:256,h:512,planks:1,base:[196,160,118],joints:!1,seed:31}),tile:[.6,1.2],rough:.5},{name:"Carob",sub:"Laminate",color:"#725C3A",rough:.55},{name:"Pistache",sub:"Laminate",color:"#B3B792",rough:.6},{name:"Almond Matte",sub:"Laminate",color:"#E5E0D8",rough:.7}]}}}function Jd(s,e,t){let n=new Wi(s);return n.colorSpace=it,n.wrapS=n.wrapT=vn,n.anisotropy=t,n.repeat.set(1/e[0],1/e[1]),n}var pc={};function pt(s,e,t=.7,n={}){return pc[s]||(pc[s]=new Ln({color:e,roughness:t,metalness:0,...n}),pc[s].name=s),pc[s]}function Se(s,e,t,n,i=0,r=0,o=0,a){let c=new Ie(new Hi(s,e,t),n);return c.position.set(i,r,o),a&&a.add(c),c}function ri(s,e,t=0,n=0,i=0){let r=new _t;return r.name=s,r.position.set(t,n,i),e&&e.add(r),r}function zh(s,e,t,n,i,r=1){Se(e,t,.018,i,0,t/2,.018/2,s),Se(.018,t,n,i,-e/2+.018/2,t/2,n/2,s),Se(.018,t,n,i,e/2-.018/2,t/2,n/2,s),Se(e,.018,n,i,0,.018/2,n/2,s),Se(e,.018,n,i,0,t-.018/2,n/2,s);for(let a=1;a<=r;a++)Se(e-2*.018,.018,n-.03,i,0,t*a/(r+1),n/2,s)}function Hh(){let s=new _t;s.name="demo_room";let e=5,t=6,n=3,i=pt("carcass","#ECE8E1",.75),r=pt("steel","#c8cacc",.25,{metalness:.9}),o=pt("black_glass","#141414",.15),a=pt("counter_quartz","#EEEBE5",.25),c=pt("handle","#2b2b2b",.35,{metalness:.6}),l=new Ie(new Kn(e,t),pt("floor","#ddd",.3));l.rotation.x=-Math.PI/2,l.name="floor",s.add(l);let h=new Ie(new Kn(e,t),pt("ceiling","#F7F5F1",.95));h.rotation.x=Math.PI/2,h.position.y=n,s.add(h);let u=pt("wall","#E5E0D8",.92);Se(e,n,.1,u,0,n/2,-t/2-.05,s),Se(e,n,.1,u,0,n/2,t/2+.05,s),Se(.1,n,t,u,-e/2-.05,n/2,0,s);{let he=e/2+.05,Pe=-1.95,W=-.45,Lt=.87,Ee=2.43;Se(.1,n,Pe+t/2,u,he,n/2,(-t/2+Pe)/2,s),Se(.1,n,t/2-W,u,he,n/2,(W+t/2)/2,s),Se(.1,Lt,W-Pe,u,he,Lt/2,(Pe+W)/2,s),Se(.1,n-Ee,W-Pe,u,he,(n+Ee)/2,(Pe+W)/2,s)}let f=pt("light_cove","#fff2dc",.5,{emissive:"#ffd9a0",emissiveIntensity:1});Se(e-.2,.02,.06,f,0,n-.02,-t/2+.12,s),Se(e-.2,.02,.06,f,0,n-.02,t/2-.12,s);let d=pt("light_down","#ffffff",.5,{emissive:"#fff0d8",emissiveIntensity:1.5});[[-1.2,-1.6],[1.2,-1.6],[-1.2,1.6],[1.2,.2],[-1.2,.2]].forEach(([he,Pe])=>{let W=new Ie(new Pn(.05,.05,.01,24),d);W.position.set(he,n-.006,Pe),s.add(W)});let g=new Ie(new Kn(1.4,1.5),new zt({color:"#eef4f7"}));g.material.name="window_sky",g.scale.set(1.15,1.1,1),g.position.set(e/2+.11,1.65,-1.2),g.rotation.y=-Math.PI/2,s.add(g);let x=pt("window_frame","#3a3a38",.5);Se(.06,1.6,.05,x,e/2-.03,1.65,-1.95,s),Se(.06,1.6,.05,x,e/2-.03,1.65,-.45,s),Se(.06,.05,1.55,x,e/2-.03,2.43,-1.2,s),Se(.06,.05,1.55,x,e/2-.03,.87,-1.2,s),Se(.06,1.5,.03,x,e/2-.03,1.65,-1.2,s);let m=pt("kitchen","#809671",.6),p=ri("kit_block",s,0,0,-t/2),b=-2.4,_=.6,E=.78,F=.1,S=.58;Se(3,F,.52,pt("plinth","#2a2a2a",.6),b+1.5,F/2,.26,p),["drawers3","doorL","doorR","drawers2","doorR"].forEach((he,Pe)=>{let W=b+_*Pe+_/2,Lt=ri("base_carcass_"+Pe,p,W,F,0);zh(Lt,_,E,S,i,he.startsWith("door")?1:0);let Ee=S+.01;if(he.startsWith("door")){let Ve=he==="doorL"?"L":"R",Te=ri(`door_${Ve}_base_${Pe}`,p);Se(_-.004,E-.004,.018,m,W,F+E/2,Ee,Te);let ct=Ve==="L"?W+_/2-.05:W-_/2+.05;Se(.012,.18,.025,c,ct,F+E-.16,Ee+.02,Te);for(let Xe=0;Xe<3;Xe++){let N=new Ie(new Pn(.06,.05,.08,20),pt("bowl","#f2efe9",.3));N.position.set(W-.15+Xe*.15,F+E/2+.05,.3),p.add(N)}}else{let Ve=he==="drawers3"?3:2,Te=Ve===3?[.2,.28,.3]:[.36,.42],ct=F;for(let Xe=Ve-1;Xe>=0;Xe--){let N=Te[Xe]*(E/Te.reduce((fe,Oe)=>fe+Oe,0)),A=ri(`drawer_base_${Pe}_${Xe}`,p);Se(_-.004,N-.004,.018,m,W,ct+N/2,Ee,A),Se(.3,.012,.025,c,W,ct+N-.05,Ee+.02,A);let J=_-.06,le=S-.06,ce=Math.min(N-.06,.16);if(Se(J,.012,le,i,W,ct+.03,Ee-le/2,A),Se(.012,ce,le,i,W-J/2,ct+.03+ce/2,Ee-le/2,A),Se(.012,ce,le,i,W+J/2,ct+.03+ce/2,Ee-le/2,A),Se(J,ce,.012,i,W,ct+.03+ce/2,Ee-le,A),Xe===Ve-1)for(let fe=0;fe<4;fe++)Se(.02,.01,.22,r,W-.12+fe*.08,ct+.045,Ee-.2,A);ct+=N}}}),Se(3.04,.04,.62,a,b+1.5,F+E+.02,.31,p),Se(.5,.012,.4,r,b+_*2.5,F+E+.046,.3,p),Se(.42,.01,.32,pt("sink_bowl","#8d9093",.3,{metalness:.8}),b+_*2.5,F+E+.053,.3,p);let R=new Ie(new Pn(.015,.015,.32,12),r);R.position.set(b+_*2.5,F+E+.2,.06),p.add(R),Se(.03,.03,.18,r,b+_*2.5,F+E+.36,.14,p),Se(.58,.008,.5,o,b+_*4,F+E+.044,.3,p),[[-.14,.2],[.14,.2],[-.14,.42],[.14,.42]].forEach(([he,Pe])=>{let W=new Ie(new Va(.07,.006,8,32),pt("burner","#555",.4,{metalness:.5}));W.rotation.x=Math.PI/2,W.position.set(b+_*4+he,F+E+.05,Pe),p.add(W)});let y=new Ie(new Kn(3.04,.6),pt("walltile","#eee",.2));y.position.set(b+1.5,F+E+.04+.3,.004),y.name="walltile_splash",p.add(y);let w=1.5,B=.72,H=.35;[0,1,2,4].forEach((he,Pe)=>{let W=b+_*he+_/2,Lt=ri("wall_carcass_"+he,p,W,w,0);zh(Lt,_,B,H,i,1);let Ee=Pe%2?"R":"L",Ve=ri(`door_${Ee}_wall_${he}`,p);Se(_-.004,B-.004,.018,m,W,w+B/2,H+.01,Ve),Se(.012,.16,.025,c,Ee==="L"?W+_/2-.05:W-_/2+.05,w+.12,H+.03,Ve);for(let Te=0;Te<4;Te++){let ct=new Ie(new Pn(.035,.035,.14,16),pt("jar","#cbb59a",.4));ct.position.set(W-.18+Te*.12,w+B/2+.08,.17),p.add(ct)}}),Se(.6,.12,.5,r,b+_*4.5,1.62,.25,p),Se(.28,1.3,.25,r,b+_*4.5,2.33,.13,p);let j=pt("wardrobe","#c4a076",.5),O=ri("ward_block",s,-e/2,0,.2),V=.6,U=2.4,$=0,q=ri("ward_carcass",O,0,0,.9);q.rotation.y=Math.PI/2,zh(q,1.8,U,V,i,0),Se(V-.03,U-.04,.018,i,V/2,U/2,.6,O),Se(V-.03,U-.04,.018,i,V/2,U/2,1.2,O),[.45,.9,1.35,1.8].forEach(he=>Se(V-.04,.018,.58,i,V/2,he,.3,O)),[1.9].forEach(he=>Se(V-.04,.018,1.18,i,V/2,he,1.2,O));let z=new Ie(new Pn(.012,.012,1.15,12),r);z.rotation.x=Math.PI/2,z.position.set(V/2,1.78,1.2),O.add(z);let ee=["#725C3A","#809671","#E5D2B8","#3d4a5c","#D2AB80","#f2efe9","#5c3a3a"];for(let he=0;he<11;he++)Se(.42,.85+he%3*.12,.03,pt("cloth"+he%7,ee[he%7],.9),V/2,1.76-(.85+he%3*.12)/2,.68+he*.1,O);[.45,.9,1.35].forEach((he,Pe)=>{for(let W=0;W<3;W++)Se(.4,.07,.3,pt("cloth"+(Pe+W)%7,ee[(Pe+W)%7],.9),V/2,he+.045+W*.072,.3,O)});let Z=V+.01;[["L",0],["R",1],["R",2]].forEach(([he,Pe])=>{let W=ri(`door_${he}_wardrobe_${Pe}`,O),Lt=$+Pe*.6+.3;Se(.02,U-.01,.596,j,Z,U/2,Lt,W);let Ee=he==="L"?Lt-.25:Lt+.25;Se(.025,.6,.015,c,Z+.025,1.1,Ee,W)});let re=ri("tv_unit",s);Se(.42,.45,1.9,pt("tv_unit_wood","#6e5135",.5),e/2-.21,.3,1.3,re);let G=new Ie(new Kn(1.4,.79),new zt({map:new Wi(Kd())}));G.material.map.colorSpace=it,G.material.name="tv_screen",G.position.set(e/2-.04,1.35,1.3),G.rotation.y=-Math.PI/2,s.add(G),Se(.03,.83,1.44,o,e/2-.02,1.35,1.3,s);let X=new Ie(new Kn(2,2.6),pt("rug","#cfc6b6",1));X.rotation.x=-Math.PI/2,X.position.set(.9,.005,1.3),s.add(X);let K=new Ie(new Pn(.42,.42,.04,48),pt("table_top","#8a6a48",.4));K.position.set(1.3,.4,1.3),s.add(K);let se=new Ie(new Pn(.08,.12,.38,24),pt("table_leg","#2b2b2b",.5));se.position.set(1.3,.19,1.3),s.add(se);let oe=new Ie(new Pn(.18,.14,.4,24),pt("pot","#725C3A",.8));oe.position.set(2.15,.2,2.6),s.add(oe);for(let he=0;he<7;he++){let Pe=new Ie(new ls(.16,12,10),pt("leaf","#5b7349",.8));Pe.position.set(2.15+Math.sin(he)*.15,.6+he*.08,2.6+Math.cos(he*1.7)*.15),s.add(Pe)}let pe=new D(0,0,1.3);s.add(qv("option_sofa_3-Seater Sage",pt("fabric_sage","#8f9f7e",.95),pe)),s.add(Yv("option_sofa_L-Shape Almond",pt("fabric_almond","#d9cfc0",.95),pe)),s.add(jv("option_sofa_Armchairs Chai",pt("fabric_chai","#c89a68",.95),pe)),[1.3].forEach(he=>{let Pe=new Ie(new Pn(.004,.004,.9,6),c);Pe.position.set(1.3,n-.45,he),s.add(Pe);let W=new Ie(new ls(.1,24,16),pt("light_shade","#fff4dd",.5,{emissive:"#ffe2b0",emissiveIntensity:1.2}));W.position.set(1.3,n-.95,he),s.add(W)});let Ce=Se(.1,.1,.1,pt("marker","#ff00ff"),.6,1.5,-.4,s);return Ce.name="photospot_kitchen",{root:s,start:new D(1.7,0,2.7),lights:[new D(1.3,2,1.3),new D(-.9,2.4,-1.8)]}}function Vh(s,e,t){let n=ri(s);return n.position.copy(t),n.rotation.y=Math.PI/2,n}function Gh(s,e,t){let n=pt("sofa_leg","#3a2c1e",.5);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([i,r])=>Se(.05,.08,.05,n,i*(e/2-.08),.04,r*(t/2-.08),s))}function qv(s,e,t){let n=Vh(s,e,t),i=2.1,r=.92;Gh(n,i,r),Se(i,.32,r,e,0,.24,0,n),Se(i,.42,.2,e,0,.61,-r/2+.1,n),Se(.18,.26,r,e,-i/2+.09,.53,0,n),Se(.18,.26,r,e,i/2-.09,.53,0,n);for(let o=0;o<3;o++)Se(.57,.14,.66,e,-.58+o*.58,.47,.08,n),Se(.55,.36,.14,e,-.58+o*.58,.68,-.27,n);return Se(.38,.38,.12,pt("cushion","#E5D2B8",.95),-.7,.66,-.15,n),n}function Yv(s,e,t){let n=Vh(s,e,t),i=2.3,r=.92;Gh(n,i,r),Se(i,.32,r,e,0,.24,0,n),Se(i,.42,.2,e,0,.61,-r/2+.1,n),Se(.18,.26,r,e,-i/2+.09,.53,0,n),Se(.75,.32,.8,e,i/2-.375,.24,r/2+.4,n),Se(.71,.14,1.5,e,i/2-.375,.47,.35,n);for(let o=0;o<2;o++)Se(.6,.14,.66,e,-.85+o*.62,.47,.08,n),Se(.58,.36,.14,e,-.85+o*.62,.68,-.27,n);return Se(.6,.36,.14,e,i/2-.375,.68,-.27,n),n}function jv(s,e,t){let n=Vh(s,e,t);[-.6,.6].forEach(r=>{let o=ri("",n,r,0,0);Gh(o,.85,.85),Se(.85,.3,.85,e,0,.23,0,o),Se(.85,.5,.18,e,0,.63,-.33,o),Se(.14,.26,.85,e,-.355,.51,0,o),Se(.14,.26,.85,e,.355,.51,0,o),Se(.56,.12,.62,e,0,.44,.06,o)});let i=new Ie(new Pn(.22,.22,.5,32),pt("side_table","#8a6a48",.4));return i.position.set(0,.25,0),n.add(i),n}var Lo={tile:/(tile|ceramic|porcelain|vitrified|mosaic|subway|zellige|marble|granite|stone|terrazzo|cladding)/i,wood:/(wood|oak|teak|walnut|plank|laminate|veneer|parquet)/i,paint:/(paint|emulsion|plaster|putty|colour|color)/i,light:/(light|lamp|led|bulb|cove|glow|emissive)/i,glass:/(glass|mirror|window|sky|screen|tv|monitor)/i,metal:/(metal|steel|chrome|brass|aluminium|aluminum|handle|black)/i},Yi=()=>new D;function Qd(s,e={}){s.updateMatrixWorld(!0);let t=new Ct().setFromObject(s),n=e.floorY??t.min.y,i=Math.min(t.max.y-n,3.2),r=R=>{let y=R.geometry,w=y.attributes.normal;if(!w)return 1;let B=new et().getNormalMatrix(R.matrixWorld),H=new D,j=0,O=0,V=Math.max(1,Math.floor(w.count/200));for(let U=0;U<w.count;U+=V)H.fromBufferAttribute(w,U).applyMatrix3(B).normalize(),j+=H.y,O++;return j/O},o={floors:[],walls:[],walltiles:[],doors:[],drawers:[],kitchen:0,wardrobe:0,lights:[],notes:[]},a=[];s.traverse(R=>{R.isMesh&&a.push(R)});let c=new Map;for(let R of a){let y=new Ct().setFromObject(R),w=y.getSize(Yi()),B=y.getCenter(Yi()),H=Array.isArray(R.material)?R.material:[R.material],j=Math.min(w.x,w.z),O=Math.max(w.x,w.z);c.set(R,{b:y,s:w,c:B,mats:H,thinH:j,longH:O,vol:w.x*w.y*w.z,horizontal:w.y<.06&&O>.3,vertSlab:w.y>.08&&j<.06&&O>.08&&w.y>j*2})}let l=new Map;for(let R of a)for(let y of c.get(R).mats)l.has(y)||l.set(y,[]),l.get(y).push(R);let h=R=>!!(R&&R.map),u=R=>R&&R.name||"";for(let R of l.keys())(R.emissive&&R.emissive.r+R.emissive.g+R.emissive.b>.3&&(R.emissiveIntensity??1)>0||Lo.light.test(u(R)))&&(o.lights.push(u(R)),R.name="light_auto_"+o.lights.length,R.userData.auto="light");let f=R=>{let y=c.get(R);return y.s.y>i*.9||y.longH>2.6},d=[],g=[];for(let R of a){let y=c.get(R);if(!y.vertSlab||f(R))continue;let w=y.longH,B=y.s.y;if(w<.15||w>1.3||B<.1||B>2.6||y.mats[0]?.userData?.auto==="light"||y.mats[0]?.transparent)continue;let H=y.s.x<y.s.z?"x":"z",j=H==="x"?"z":"x",O=null,V=1e9;for(let q of a){if(q===R)continue;let z=c.get(q);if(Math.max(z.s.x,z.s.y,z.s.z)>.65||z.vol>.004||z.mats[0]===y.mats[0]||Math.max(z.s.x,z.s.y,z.s.z)>.7*Math.max(w,B)||!(z.c[j]>y.b.min[j]-.01&&z.c[j]<y.b.max[j]+.01&&z.c.y>y.b.min.y-.01&&z.c.y<y.b.max.y+.01))continue;let Z=Math.max(z.b.min[H]-y.b.max[H],y.b.min[H]-z.b.max[H]);Z>.04||Z<-.03||Z<V&&(V=Z,O=q)}if(!O){let q=R.parent,z=0;q&&q!==s&&q.traverse(ee=>{ee.isMesh&&z++}),z===1&&B<=1&&y.b.min.y>n+.05&&g.push({m:R,i:y,thinAxis:H,wideAxis:j,w,h:B});continue}let U=c.get(O).c,$=Yi();$[H]=Math.sign(U[H]-y.c[H])||1,d.push({m:R,i:y,handle:O,thinAxis:H,wideAxis:j,w,h:B,nrm:$})}{let R=new Map,y=t.getCenter(Yi());for(let w of g){let B=[w.thinAxis,Math.round(w.w*50),Math.round(w.h*50),Math.round(w.i.c[w.thinAxis]*25),Math.round(w.i.b.min.y*20)].join("|");R.has(B)||R.set(B,[]),R.get(B).push(w)}for(let w of R.values())if(!(w.length<2)){w.sort((B,H)=>B.i.c[B.wideAxis]-H.i.c[H.wideAxis]);for(let B=0;B<w.length;B++){let H=w[B],j=H.wideAxis,O=Yi();O[H.thinAxis]=Math.sign(y[H.thinAxis]-H.i.c[H.thinAxis])||1;let V=Yi().crossVectors(O.clone().negate(),new D(0,1,0)),U=w[B+1],$=w[B-1],q=U&&Math.abs(U.i.b.min[j]-H.i.b.max[j])<.02,z=$&&Math.abs(H.i.b.min[j]-$.i.b.max[j])<.02,ee=q&&!(z&&$.pair==="first");H.pair=ee?"first":z&&$.pair==="first"?"second":"single";let Z=H.pair!=="second",re=V[j]>0?!Z:Z;d.push({m:H.m,i:H.i,handle:null,thinAxis:H.thinAxis,wideAxis:j,w:H.w,h:H.h,nrm:O,side:re?"R":"L"})}o.notes.push(`${w.length} handle-less fronts in a row treated as shutters.`)}}let x=new Set,m=new Set(d.map(R=>R.m)),p=new Set;for(let R of d){let{m:y,i:w,handle:B,wideAxis:H,w:j,h:O,nrm:V}=R;if(p.has(y)||B&&p.has(B)){R.skip=!0;continue}let U=B?c.get(B).c:null,$=B?U[H]-w.c[H]:0,q=B?j/O>1.25&&O<.5&&Math.abs($)<.2*j||O<.32&&Math.abs($)<.25*j:j/O>1.25&&O<.5,z=y;for(;z.parent&&z.parent!==s&&!x.has(z.parent);){let G=new Ct().setFromObject(z.parent),X=G.getSize(Yi()),K=0;if(z.parent.traverse(oe=>{oe.isMesh&&K++}),!(Math.abs(X[H]-j)<.06&&Math.abs(X.y-O)<.06&&X[R.thinAxis]<(q?.7:.1))||K>14)break;z=z.parent}if(z===y&&(!B||B.parent!==y)){let G=new _t,X=y.parent;if(X.add(G),G.attach(y),B&&G.attach(B),z=G,q){let K=R.thinAxis,se=H,oe=w.b;for(let pe of[...X.children]){if(!pe.isMesh||pe===y||pe===B||p.has(pe)||x.has(pe))continue;let Ce=c.get(pe);if(!Ce||Math.max(Ce.s.x,Ce.s.y,Ce.s.z)>.7||Ce.b.min[se]<oe.min[se]-.01||Ce.b.max[se]>oe.max[se]+.01||Ce.b.min.y<oe.min.y-.02||Ce.b.max.y>oe.max.y+.01)continue;let he=V[K]>0?oe.min[K]-Ce.b.max[K]:Ce.b.min[K]-oe.max[K],Pe=V[K]>0?oe.min[K]-Ce.b.min[K]:Ce.b.max[K]-oe.max[K];he<-.03||Pe>.65||(G.attach(pe),p.add(pe))}}}else B&&!$v(z,B)&&z.attach(B);x.add(z),R.node=z;let ee=O>=1.4;if(q)z.name=`drawer_auto_${o.drawers.length+1}`,o.drawers.push(z.name);else{let G=Yi().crossVectors(V.clone().negate(),new D(0,1,0)),X=B?Yi().subVectors(U,w.c).dot(G)>0?"L":"R":R.side;z.name=`door_${X}_auto_${o.doors.length+1}`,o.doors.push(z.name)}let Z=ee?"wardrobe":"kitchen",re=w.mats[0];if(re&&!re.userData.auto){let G=l.get(re).some(K=>!d.find(se=>se.m===K)),X=re;G&&(X=re.userData.autoClone?.[Z]||re.clone(),re.userData.autoClone={...re.userData.autoClone||{},[Z]:X},y.material=X),X.name=Z,X.userData.auto=Z}else if(re&&re.userData.auto&&re.userData.auto!==Z&&re.userData.auto!=="light"){let G=re.userData.autoClone?.[Z]||re.clone();re.userData.autoClone={...re.userData.autoClone||{},[Z]:G},G.name=Z,G.userData.auto=Z,y.material=G}o[Z]++}let b=new Set(d.filter(R=>!R.skip).map(R=>R.m)),_=R=>{let y=c.get(R);return y.horizontal?(y.f===void 0&&(y.f=y.b.max.y<=n+.06||y.b.max.y<t.max.y-2&&r(R)>.6),y.f):!1},E=new Map;for(let R of a){let y=c.get(R);if(!_(R)||y.s.x*y.s.z<.6)continue;let w=y.mats[0];!w||w.userData.auto||E.set(w,(E.get(w)||0)+y.s.x*y.s.z)}for(let[R,y]of[...E]){let w=0;for(let B of l.get(R)){let H=c.get(B);w+=Math.max(H.s.x*H.s.z,Math.max(H.s.x,H.s.z)*H.s.y)}(y<1.5||y/w<.5)&&E.delete(R)}let F=R=>{let y=new Ct;for(let w of l.get(R)){let B=c.get(w);_(w)&&y.union(B.b)}return y};for(let[R,y]of[...E])for(let[w,B]of E){if(w===R||B<=y*2.5)continue;let H=F(R),j=F(w);if(j.min.x<=H.min.x+.01&&j.min.z<=H.min.z+.01&&j.max.x>=H.max.x-.01&&j.max.z>=H.max.z-.01){E.delete(R),o.notes.push(`${u(R)||"A surface"} lies on the floor; treated as a rug.`);break}}let S=[...E.entries()].sort((R,y)=>y[1]-R[1]);S.forEach(([R],y)=>{let w=S.length===1?"floor":`floor_area${y+1}`;o.floors.push(`${u(R)||"(unnamed)"} -> ${w}`),R.name=w,R.userData.auto="floor"});let P=new Set;for(let R of d){let y=(R.node||R.m).parent;!y||y===s||y.traverse(w=>{w.isMesh&&P.add(w)})}for(let[R,y]of l){if(!R||R.userData.auto||R.transparent||Lo.glass.test(u(R)))continue;let w=0,B=0,H=0;for(let V of y){if(b.has(V))continue;let U=c.get(V),$=U.thinH<.03&&(U.s.x<U.s.z?Math.min(U.b.min.x-t.min.x,t.max.x-U.b.max.x):Math.min(U.b.min.z-t.min.z,t.max.z-U.b.max.z))<.15;if(P.has(V)&&!$){B+=Math.max(U.s.x,U.s.z)*U.s.y;continue}let q=Math.max(U.s.x,U.s.z)*U.s.y;B+=q;let z=U.s.y>.4&&U.thinH<.4&&U.longH>.9,ee=U.b.min.x-t.min.x<.3||t.max.x-U.b.max.x<.3||U.b.min.z-t.min.z<.3||t.max.z-U.b.max.z<.3;z&&(U.s.y>i*.5||ee)&&(w+=q);let Z=(U.s.x<U.s.z?Math.min(U.b.min.x-t.min.x,t.max.x-U.b.max.x):Math.min(U.b.min.z-t.min.z,t.max.z-U.b.max.z))<.15;U.thinH<.03&&U.s.y>.2&&U.s.y<i*.85&&U.longH>.3&&Z&&(H+=q)}if(B<.5)continue;let j=Lo.tile.test(u(R))||h(R)&&!Lo.wood.test(u(R))&&!Lo.paint.test(u(R)),O=H/B>.6;if(w/B>.6&&w>2||O&&H>.5){let V=j||O?"walltile":"wall",U=V==="wall"?o.walls:o.walltiles,$=U.length?`${V}_area${U.length+1}`:V;U.push(`${u(R)||"(unnamed)"} -> ${$}`),R.name=$,R.userData.auto=V}}return!o.doors.length&&!o.drawers.length&&o.notes.push("No shutters found: check that each shutter has a handle."),o}function $v(s,e){for(let t=e;t;t=t.parent)if(t===s)return!0;return!1}function ep(s){let e=!1;return s.traverse(t=>{if(/^(door_[lr]_|drawer_|option_[a-z0-9]+_)/i.test(t.name||"")&&(e=!0),t.isMesh)for(let n of[].concat(t.material))/^(floor|walltile|wall|kitchen|wardrobe)([_-][a-z]+)?([_-]?\d+)?$/i.test(n?.name||"")&&(e=!0)}),e}function tp(s,e=null){s.updateMatrixWorld(!0);let t=[],n=(p,b,_="")=>t.push({level:p,title:b,fix:_}),i=new Ct().setFromObject(s),r=i.getSize(new D);r.y>50||Math.max(r.x,r.z)>300?n("error",`Model looks too big (${r.x.toFixed(0)} \xD7 ${r.z.toFixed(0)} m). The units are probably wrong.`,"Export FBX with Units: Meters, and model at real size."):r.y<1.8?n("error",`Model is only ${r.y.toFixed(2)} m high. The units are probably wrong, or the walls are missing.`,"Model at real size and export with Units: Meters."):n("ok",`Real size OK (${r.x.toFixed(1)} \xD7 ${r.z.toFixed(1)} m, ${r.y.toFixed(1)} m high).`),Math.abs(i.min.y)>.05&&n("warn",`Lowest point is at ${(i.min.y*1e3).toFixed(0)} mm, not at 0.`,"Move the model so the finished floor is at height 0.");let o=0,a=[],c=p=>{let b=0;return p.traverse(_=>{if(_.isMesh){let E=_.geometry;b+=(E.index?E.index.count:E.attributes.position.count)/3}}),b},l=s;for(;l.children.length===1&&!l.children[0].isMesh;)l=l.children[0];for(let p of l.children){let b=c(p);o+=b,b>5e4&&p.children.length&&a.push(`${p.name||"unnamed group"} (${Math.round(b/1e3)}k faces)`)}a.length&&n("warn",`Heavy objects: ${a.slice(0,5).join(", ")}${a.length>5?` and ${a.length-5} more`:""}.`,"Replace with lighter models (under about 50,000 faces each) or simplify plants, curtains and decor."),o>15e5?n("error",`Whole model has ${(o/1e6).toFixed(1)} million faces. It will be slow in the headset.`,"Purge Unused and replace heavy downloaded models."):n("ok",`Model size OK (${Math.round(o/1e3)}k faces).`);let h=l.children.filter(p=>p.isMesh).length;h>0&&n("warn",`${h} loose surfaces are not inside any group.`,"Select them, right click, Make Group.");let u=new Map;s.traverse(p=>{if(p.isMesh)for(let b of[].concat(p.material))b&&u.set(b.uuid,b)});let f=[...u.values()].filter(p=>!p.name||/^(material|default|<auto>|mat)[\s_#-]*\d*$/i.test(p.name)||/^__/.test(p.name));f.length&&n("warn",`${f.length} materials have default names (like "Material12").`,"Rename them in Window \u203A Materials \u203A In Model so finishes can be found.");let d=[...u.values()].filter(p=>/(tile|marble|wood|oak|laminate|veneer|granite|stone)/i.test(p.name||"")&&!p.map&&!p.userData.auto);d.length&&n("warn",`Texture missing for: ${d.slice(0,4).map(p=>p.name).join(", ")}.`,"Tick Export texture maps and send the texture folder with the FBX.");let g=0;if(s.traverse(p=>{if(!p.isMesh)return;let b=p.geometry;if(!b.attributes.normal)return;let _=new Ct().setFromObject(p);if(_.max.y>i.min.y+.06||_.getSize(new D).y>.06)return;let E=new D,F=new et().getNormalMatrix(p.matrixWorld),S=0,P=0;for(let R=0;R<b.attributes.normal.count;R++)E.fromBufferAttribute(b.attributes.normal,R).applyMatrix3(F),E.y<-.9?S++:E.y>.9&&P++;S>P&&P===0&&g++}),g&&n("error",`${g} floor surfaces face downwards (reversed faces).`,"View \u203A Face Style \u203A Monochrome, right click the blue grey faces \u203A Reverse Faces."),e){let p=e.floors.length,b=e.walls.length+e.walltiles.length;n(p?"ok":"error",p?`Floors found: ${p} (each gets a tile menu).`:"No floor found.",p?"":"Model the floor as real faces at height 0."),n(b?"ok":"warn",b?`Wall finishes found: ${e.walls.length} paint, ${e.walltiles.length} tile.`:"No wall finish found.",b?"":"Paint walls with one paint material, and wall tiles with a tile material."),n(e.doors.length?"ok":"warn",`Opening shutters found: ${e.doors.length}. Drawers: ${e.drawers.length}.`,e.doors.length?"":"Give every shutter its own group with a handle, or name it door_L_ / door_R_."),e.loneP&&n("warn",`${e.loneP} shutter-sized panels have no handle, so they will not open.`,"Add a handle inside the shutter group, or name the group door_L_ / door_R_.")}let x=!1;s.traverse(p=>{if(p.isMesh){let b=new Ct().setFromObject(p),_=b.getSize(new D);_.y<.15&&b.min.y>i.min.y+2.2&&b.min.y<i.min.y+4.5&&_.x*_.z>4&&(x=!0)}}),n(x?"ok":"warn",x?"Ceiling found.":"No ceiling found.",x?"":"Model the ceiling so the rooms get real light and shadow.");let m={tris:Math.round(o),groups:{},mats:[...u.values()].map(p=>p.name).sort()};return s.traverse(p=>{p!==s&&p.name&&!p.isMesh&&(m.groups[p.name]=(m.groups[p.name]||0)+1)}),{items:t,sig:m}}function np(s,e){if(!s)return[];let t=[],n=Object.keys(s.groups),r=Object.keys(e.groups).filter(h=>!s.groups[h]),o=n.filter(h=>!e.groups[h]);r.length&&t.push(`Added: ${r.slice(0,6).join(", ")}${r.length>6?"\u2026":""}`),o.length&&t.push(`Removed: ${o.slice(0,6).join(", ")}${o.length>6?"\u2026":""}`);let a=e.mats.filter(h=>!s.mats.includes(h)),c=s.mats.filter(h=>!e.mats.includes(h));(a.length||c.length)&&t.push(`Materials changed: +${a.length} / -${c.length}`);let l=e.tris-s.tris;return Math.abs(l)>1e3&&t.push(`Faces: ${l>0?"+":""}${Math.round(l/1e3)}k`),t.length||t.push("No changes since the last upload."),t}var Kv=document.getElementById("stage"),Wt=new xo({antialias:!0});Wt.setPixelRatio(Math.min(window.devicePixelRatio,2));Wt.setSize(window.innerWidth,window.innerHeight);Wt.outputColorSpace=it;Wt.toneMapping=Wl;Wt.toneMappingExposure=.72;Wt.shadowMap.enabled=!0;Wt.shadowMap.type=Gl;Wt.xr.enabled=!0;Wt.xr.setReferenceSpaceType("local-floor");Kv.appendChild(Wt.domElement);var Gn=new rs;Gn.background=new we("#d9d4cb");var Zv=new Pr(Wt);Gn.environment=Zv.fromScene(new nc(Wt),.04).texture;var tn=new Ht(70,window.innerWidth/window.innerHeight,.05,100),$t=new _t;$t.add(tn);Gn.add($t);tn.position.set(0,1.6,0);var _i=new _t;Gn.add(_i);var cp=new Xa("#fff7ea","#a89c88",.3);Gn.add(cp);var ci=new Ti("#fff1dc",1.8);ci.castShadow=!0;ci.shadow.mapSize.set(2048,2048);ci.shadow.bias=-4e-4;ci.shadow.normalBias=.02;Gn.add(ci,ci.target);var mc=[],Jv=Wt.capabilities.getMaxAnisotropy(),Qv=Zd(),ip=6,sp=4,Wh=new Map,ln=null,yc=new D,eM=new D,tM=["walltile","floor","wall","kitchen","wardrobe"];function nM(s){let e=(s||"").toLowerCase().replace(/[^a-z0-9_]/g,"");for(let t of tM){if(e===t||e.startsWith(t+"_")||e.startsWith(t+"-")){let n=e.slice(t.length+1).split(/[_-]/)[0];return{key:n&&/^[a-z]+$/.test(n)?t+"_"+n:t,prefix:t,room:n&&/^[a-z]+$/.test(n)?n:""}}if(e.startsWith(t)&&/^[0-9]*$/.test(e.slice(t.length)))return{key:t,prefix:t,room:""}}return null}function Yh(s){return s.replace(/[_]+/g," ").replace(/\s+/g," ").trim()}function rp(s){return s.charAt(0).toUpperCase()+s.slice(1)}function iM(s){for(;s;){if(!s.visible)return!1;s=s.parent}return!0}function sM(s){let e=s.geometry.clone(),t=e.attributes.position;e.attributes.normal||e.computeVertexNormals();let i=e.attributes.normal,r=new Float32Array(t.count*2),o=s.matrixWorld,a=new et().getNormalMatrix(o),c=new D,l=new D;for(let h=0;h<t.count;h++){c.fromBufferAttribute(t,h).applyMatrix4(o),l.fromBufferAttribute(i,h).applyMatrix3(a).normalize();let u=Math.abs(l.x),f=Math.abs(l.y),d=Math.abs(l.z);f>=u&&f>=d?(r[h*2]=c.x,r[h*2+1]=-c.z):u>=d?(r[h*2]=c.z*Math.sign(l.x||1)*-1,r[h*2+1]=c.y):(r[h*2]=c.x*Math.sign(l.z||1),r[h*2+1]=c.y)}e.setAttribute("uv",new Vt(r,2)),s.geometry=e}function gc(s,{start:e,keepOriginalOption:t=!0,isDemo:n=!1,lightmap:i=null}={}){ln&&_i.clear(),_i.add(s),s.updateMatrixWorld(!0);let r=new Ct().setFromObject(s),o=r.min.y,a={root:s,finishes:{},variants:{},anims:[],floorY:o,bounds:r,isDemo:n};s.traverse(S=>{if(!S.isMesh)return;let P=R=>{if(R.isMeshStandardMaterial)return R.side=yn,R.map&&!R.transparent&&(R.alphaTest=.5),R;let y=new Ln({color:R.color?R.color.clone():new we("#ccc"),map:R.map||null,roughness:.7,metalness:0,transparent:!!R.transparent,opacity:R.opacity??1,side:yn});return y.map&&(y.map.colorSpace=it),y.name=R.name,y};if(S.material=Array.isArray(S.material)?S.material.map(P):P(S.material),S.receiveShadow=!0,i&&S.geometry.attributes.uv1){S.userData.lm=!0;let R=y=>{if(!Wh.has(y)){let w=y.clone();w.lightMap=i,w.lightMapIntensity=sp,w.envMapIntensity=.12,Wh.set(y,w)}return Wh.get(y)};S.material=Array.isArray(S.material)?S.material.map(R):R(S.material)}}),a.baked=!!i;let c=[],l=[],h=[],u=[];(function S(P){let R=(P.name||"").toLowerCase().trim();if(P!==s){let y;if(y=R.match(/^door[_\- ]?(l|r)(?:[_\- ]|$)/)){c.push({o:P,side:y[1]});return}if(/^drawer/.test(R)){l.push(P);return}if(y=P.name.match(/^photo[_\- ]?spot[_\- ](.+)$/i)){u.push({o:P,name:y[1].toLowerCase().trim()});return}(y=P.name.match(/^option[_\- ]([^_]+)[_\- ](.+)$/i))&&h.push({o:P,group:y[1].toLowerCase(),label:Yh(y[2])})}P.children.slice().forEach(S)})(s);let f=S=>{let P=S.getCenter(new D),R=[{axis:"x",sign:1,dist:P.x-r.min.x},{axis:"x",sign:-1,dist:r.max.x-P.x},{axis:"z",sign:1,dist:P.z-r.min.z},{axis:"z",sign:-1,dist:r.max.z-P.z}];return R.sort((y,w)=>y.dist-w.dist),R[0]};for(let{o:S,side:P}of c){S.updateMatrixWorld(!0);let R=new Ct().setFromObject(S),y=R.getSize(new D),w=R.getCenter(new D),B=y.x>=y.z?"x":"z",H=B==="x"?"z":"x",j=w[H]-r.min[H]<r.max[H]-w[H]?1:-1,O=new D;O[H]=j;let V=O.clone().negate(),U=new D().crossVectors(V,new D(0,1,0)),$=P==="l"?U.clone().negate():U.clone(),q=w.clone();q[B]=$[B]>0?R.max[B]:R.min[B],q[H]=j>0?R.max[H]:R.min[H];let z=new _t;z.name="pivot_"+S.name,z.position.copy(q),_i.add(z),z.updateMatrixWorld(!0),z.attach(S);let ee=w.clone().sub(q);ee.y=0;let Z=Pt.degToRad(100),G=(K=>new D(ee.x*Math.cos(K)+ee.z*Math.sin(K),0,-ee.x*Math.sin(K)+ee.z*Math.cos(K)))(Z).sub(ee).dot(O)>0?Z:-Z,X={obj:z,kind:"rot",from:0,to:G,t:0,target:0};a.anims.push(X),S.traverse(K=>{K.isMesh&&(K.userData.act={kind:"toggle",anim:X})})}for(let S of l){S.updateMatrixWorld(!0);let P=new Ct().setFromObject(S),R=P.getSize(new D),y=null;S.traverse(U=>{if(!U.isMesh)return;let $=new Ct().setFromObject(U).getSize(new D),q=$.x<$.z,z=(q?$.z:$.x)*$.y,ee=Math.min($.x,$.z);$.y>ee*2&&(!y||z>y.area)&&(y={area:z,axis:q?"x":"z"})});let w=y?y.axis:f(P).axis,B={axis:w,sign:P.min[w]-r.min[w]<r.max[w]-P.max[w]?1:-1},H=Math.min(.45,R[B.axis]*.8),j=new _t;j.name="slide_"+S.name,_i.add(j),j.attach(S);let O=new D;O[B.axis]=B.sign;let V={obj:j,kind:"move",dir:O,from:0,to:H,t:0,target:0};a.anims.push(V),S.traverse(U=>{U.isMesh&&(U.userData.act={kind:"toggle",anim:V})})}a.spots=[];for(let{o:S,name:P}of u){S.updateMatrixWorld(!0);let R=new Ct().setFromObject(S),y=R.isEmpty()?S.getWorldPosition(new D):R.getCenter(new D);S.visible=!1;let w=fM(Yh(P)),B=o;{let O=new Eo(y.clone(),new D(0,-1,0),.05,4).intersectObject(s,!0).find(V=>V.object.visible&&V.point.y<y.y-1.1);O&&(B=O.point.y)}w.position.set(y.x,B+.01,y.z),_i.add(w);let H={kind:"photo",name:P};w.traverse(j=>{(j.isMesh||j.isSprite)&&(j.userData.act=H)}),a.spots.push({name:P,pos:y,marker:w,floor:B,yaw:S.userData.yaw||0})}for(let{o:S,group:P,label:R}of h){let y="opt_"+P;a.variants[y]||(a.variants[y]={label:rp(P),items:[],sel:0}),a.variants[y].items.push({name:R,obj:S}),S.traverse(w=>{w.isMesh&&!w.userData.act&&(w.userData.act={kind:"menu",tab:y})})}for(let S of Object.values(a.variants))S.items.sort((P,R)=>P.name.localeCompare(R.name)),S.items=S.items.slice(0,ip),S.items.forEach((P,R)=>P.obj.visible=R===0);s.updateMatrixWorld(!0),_i.updateMatrixWorld(!0);let d=[];_i.traverse(S=>{S.isMesh&&d.push(S)});for(let S of d){let P=Array.isArray(S.material)?S.material:[S.material],R=P.map(B=>nM(B.name));if(!R.some(Boolean))continue;R.every(B=>B&&B.key===R[0].key)&&sM(S),S.userData.orig=S.material;let w=P.map((B,H)=>{let j=R[H];if(!j)return B;if(!a.finishes[j.key]){let O=Qv[j.prefix],V=new Ln({color:"#fff",roughness:.6,metalness:0,side:yn});V.name="finish_"+j.key;let U=V.clone();i&&(U.lightMap=i,U.lightMapIntensity=sp,U.envMapIntensity=.12),a.finishes[j.key]={label:O.label+(j.room?" \xB7 "+rp(j.room):""),prefix:j.prefix,mat:V,matLM:U,meshes:[],options:O.options.slice(0,ip),sel:0,allowOriginal:t}}return a.finishes[j.key].meshes.push(S),S.userData.lm?a.finishes[j.key].matLM:a.finishes[j.key].mat});S.material=Array.isArray(S.material)?w:w[0],S.userData.finishKeys=R.map(B=>B&&B.key),S.userData.act||(S.userData.act={kind:"finish"})}for(let[S,P]of Object.entries(a.finishes))Kh(a,S,P.allowOriginal?-1:0);d.forEach(S=>{let P=new Ct().setFromObject(S),R=P.getSize(yc);S.castShadow=R.y<2.2&&P.min.y<o+2&&Math.max(R.x,R.z)<4});let g=r.getCenter(new D),x=r.getSize(new D);ci.position.set(g.x+x.x*.3,r.max.y+4,g.z+x.z*.2),ci.target.position.set(g.x,o,g.z);let m=Math.max(x.x,x.z)*.75;Object.assign(ci.shadow.camera,{left:-m,right:m,top:m,bottom:-m,near:.5,far:x.y+10}),ci.shadow.camera.updateProjectionMatrix(),mc.forEach(S=>Gn.remove(S)),mc.length=0;let p=Math.max(1,Math.round(x.x/3)),b=Math.max(1,Math.round(x.z/3));for(let S=0;S<p;S++)for(let P=0;P<b;P++){let R=new Vn("#ffe4c2",1,6,1.8);R.position.set(r.min.x+(S+.5)*x.x/p,r.max.y-.35,r.min.z+(P+.5)*x.z/b),Gn.add(R),mc.push(R)}ci.intensity=a.baked?0:1.8,ci.castShadow=!a.baked,cp.intensity=a.baked?.12:.3,mc.forEach(S=>S.visible=!a.baked),Wt.toneMappingExposure=a.baked?.9:.72,ln=a;let _=e||new D(g.x,o,g.z),E=0,F=s.getObjectByName("vr_start");if(!e&&F){_=F.getWorldPosition(new D);let S=F.getWorldQuaternion(new Gt);E=new Mn().setFromQuaternion(S,"YXZ").y}return $t.position.set(_.x,_.y,_.z),$t.rotation.set(0,0,0),ai=E,qs=0,Gs=lp()[0]?.key||null,a}function Kh(s,e,t){let n=s.finishes[e];if(n.sel=t,t===-1){n.meshes.forEach(r=>{let o=r.userData.orig;Array.isArray(r.material)?r.material=r.material.map((a,c)=>a===n.mat||a===n.matLM?o[c]:a):r.material=o});return}n.meshes.forEach(r=>{let o=r.userData.finishKeys,a=r.userData.lm?n.matLM:n.mat;Array.isArray(r.material)?r.material=r.material.map((c,l)=>o[l]===e?a:c):r.material=a});let i=n.options[t];i.canvas&&(i.tex=i.tex||Jd(i.canvas,i.tile,Jv));for(let r of[n.mat,n.matLM])i.canvas?(r.map=i.tex,r.color.set("#ffffff")):(r.map=null,r.color.set(i.color)),r.roughness=i.rough,r.needsUpdate=!0}function lp(){if(!ln)return[];let s=[],e=["floor","walltile","wall","kitchen","wardrobe"];return Object.entries(ln.finishes).sort((t,n)=>e.indexOf(t[1].prefix)-e.indexOf(n[1].prefix)||t[0].localeCompare(n[0])).forEach(([t,n])=>s.push({key:t,label:n.label,type:"finish"})),Object.entries(ln.variants).forEach(([t,n])=>s.push({key:t,label:n.label,type:"variant"})),s}var Dn=1024,Xs=660,vc=document.createElement("canvas");vc.width=Dn;vc.height=Xs;var at=vc.getContext("2d"),Zh=new Wi(vc);Zh.colorSpace=it;var xn=new Ie(new Kn(1,Xs/Dn),new zt({map:Zh,toneMapped:!1,depthTest:!1,transparent:!0}));xn.renderOrder=999;xn.visible=!1;Gn.add(xn);var xc="help",Gs=null,_s=[],Ws=null,Ot={bg:"#F2EEE7",ink:"#2c2620",mute:"#7a7062",matcha:"#809671",carob:"#725C3A",line:"#d8d0c3",chip:"#E5E0D8"};function Vs(s,e,t,n,i){at.beginPath(),at.moveTo(s+i,e),at.arcTo(s+t,e,s+t,e+n,i),at.arcTo(s+t,e+n,s,e+n,i),at.arcTo(s,e+n,s,e,i),at.arcTo(s,e,s+t,e,i),at.closePath()}function Fn(s,e,t,n,i,r=400,o="left"){at.font=`${r} ${n}px "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,at.fillStyle=i,at.textAlign=o,at.textBaseline="alphabetic",at.fillText(s,e,t)}function Xh(s,e,t,n=400){if(at.font=`${n} ${t}px "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,at.measureText(s).width<=e)return s;for(;s.length>2&&at.measureText(s+"\u2026").width>e;)s=s.slice(0,-1);return s+"\u2026"}function Io(){if(_s=[],at.clearRect(0,0,Dn,Xs),Vs(0,0,Dn,Xs,36),at.fillStyle=Ot.bg,at.fill(),Fn("MZAF",44,66,34,Ot.carob,800),Fn("VR WALKTHROUGH",160,66,22,Ot.mute,600),Vs(Dn-104,26,64,56,16),at.fillStyle=Ws==="close"?Ot.line:Ot.chip,at.fill(),Fn("\u2715",Dn-72,66,30,Ot.ink,600,"center"),_s.push({id:"close",x:Dn-104,y:26,w:64,h:56,fn:()=>Do()}),xc==="help"){Fn("How to use",44,140,40,Ot.ink,700),[["Trigger on the floor","Move to that spot"],["Trigger on a door or drawer","Open or close it"],["Trigger on wall, cabinet, sofa","Change its finish or model"],["Grip on the floor","Change the floor tile"],["Trigger on a gold circle","Photo view of that spot"],["A / X button","Open this menu"],["Right thumbstick","Turn  \xB7  Left thumbstick: walk"]].forEach(([r,o],a)=>{let c=190+a*48;Fn(r,44,c,27,Ot.ink,600),Fn(o,470,c,27,Ot.mute,400)});let e=44,t=540,n=Dn-88,i=84;Vs(e,t,n,i,22),at.fillStyle=Ws==="start"?"#6d8360":Ot.matcha,at.fill(),Fn("Start walkthrough",Dn/2,t+55,34,"#fff",700,"center"),_s.push({id:"start",x:e,y:t,w:n,h:i,fn:()=>{xc="finish",Io()}})}else{let s=lp();s.find(a=>a.key===Gs)||(Gs=s[0]?.key);let e=44,t=104,n=(Dn-88)/Math.max(1,s.length),i=62;s.forEach((a,c)=>{let l=e+c*n,h=a.key===Gs;Vs(l+4,t,n-8,i,16),at.fillStyle=h?Ot.matcha:Ws==="tab"+c?Ot.line:Ot.chip,at.fill(),Fn(Xh(a.label,n-24,24,600),l+n/2,t+40,24,h?"#fff":Ot.ink,600,"center"),_s.push({id:"tab"+c,x:l+4,y:t,w:n-8,h:i,fn:()=>{Gs=a.key,Io()}})});let r=s.find(a=>a.key===Gs);if(r){let a,c,l;if(r.type==="finish"){let b=ln.finishes[r.key];a=b.options.map(_=>({name:_.name,sub:_.sub,canvas:_.canvas,color:_.color})),b.allowOriginal&&a.unshift({name:"As designed",sub:"From the model",original:!0}),c=b.allowOriginal?b.sel+1:b.sel,l=_=>Kh(ln,r.key,b.allowOriginal?_-1:_)}else{let b=ln.variants[r.key];a=b.items.map(_=>({name:_.name,sub:b.label+" option",variant:!0})),c=b.sel,l=_=>{b.sel=_,b.items.forEach((E,F)=>E.obj.visible=F===_)}}let h=a.length,u=Math.min(h,4),f=Math.ceil(h/u),d=22,g=Math.min(210,(Dn-88-d*(u-1))/u),x=f>1?150:230,m=(Dn-(u*g+(u-1)*d))/2,p=196;a.forEach((b,_)=>{let E=_%u,F=Math.floor(_/u),S=m+E*(g+d),P=p+F*(x+70);at.save(),Vs(S,P,g,x,18),at.clip(),b.canvas?at.drawImage(b.canvas,0,0,b.canvas.width,Math.min(b.canvas.height,b.canvas.width*x/g),S,P,g,x):b.color?(at.fillStyle=b.color,at.fillRect(S,P,g,x)):(at.fillStyle=b.original?"#ddd6ca":Ot.chip,at.fillRect(S,P,g,x),Fn(b.original?"\u25CE":"\u29C9",S+g/2,P+x/2+22,64,Ot.carob,400,"center")),at.restore(),Vs(S,P,g,x,18),at.lineWidth=_===c?8:2,at.strokeStyle=_===c?Ot.matcha:Ws==="it"+_?Ot.carob:Ot.line,at.stroke(),_===c&&(at.beginPath(),at.arc(S+g-26,P+26,18,0,Math.PI*2),at.fillStyle=Ot.matcha,at.fill(),Fn("\u2713",S+g-26,P+35,24,"#fff",700,"center")),Fn(Xh(b.name,g,24,600),S+g/2,P+x+32,24,Ot.ink,600,"center"),Fn(Xh(b.sub||"",g,19),S+g/2,P+x+58,19,Ot.mute,400,"center"),_s.push({id:"it"+_,x:S,y:P,w:g,h:x+60,fn:()=>{l(_),Io()}})})}let o=Xs-78;[["Open all doors",1],["Close all",0]].forEach(([a,c],l)=>{let h=44+l*250;Vs(h,o,230,52,14),at.fillStyle=Ws==="all"+l?Ot.line:Ot.chip,at.fill(),Fn(a,h+115,o+34,22,Ot.ink,600,"center"),_s.push({id:"all"+l,x:h,y:o,w:230,h:52,fn:()=>ln.anims.forEach(u=>u.target=c)})}),Fn("Point and pull the trigger to choose",Dn-44,o+34,20,Ot.mute,400,"right")}Zh.needsUpdate=!0}function ys(s,e){xc=s,e&&(Gs=e);let t=tn.getWorldPosition(yc),n=new D;tn.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize(),xn.position.copy(t).addScaledVector(n,1),xn.position.y=t.y-.12,xn.lookAt(t.x,xn.position.y,t.z),xn.visible=!0,Io(),Qh()}function Do(){xn.visible=!1,Qh()}function hp(s){let e=s.x*Dn,t=(1-s.y)*Xs,n=_s.find(i=>e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h);n&&n.fn()}function up(s){let e=null;if(s){let t=s.x*Dn,n=(1-s.y)*Xs,i=_s.find(r=>t>=r.x&&t<=r.x+r.w&&n>=r.y&&n<=r.y+r.h);e=i?i.id:null}e!==Ws&&(Ws=e,Io())}var vs=new Eo;vs.far=30;function Hr(){if(xn.visible){let e=vs.intersectObject(xn,!1)[0];if(e)return{type:"panel",uv:e.uv,point:e.point,dist:e.distance}}if(Uo)return{type:"none",dist:10};let s=vs.intersectObject(_i,!0);for(let e of s){if(!iM(e.object))continue;let t=e.face?e.face.normal.clone().transformDirection(e.object.matrixWorld):new D,n=null;for(let r=e.object;r&&!n;r=r.parent)n=r.userData.act||null;let i=t.y>.75&&e.point.y<ln.floorY+.25;if(n&&n.kind==="finish"){let r=e.object.userData.finishKeys||[];n={kind:"menu",tab:r[e.face?.materialIndex??0]||r.find(Boolean)}}return{type:i&&(!n||n.kind==="menu")?"floor":n?n.kind:"none",act:n,point:e.point,dist:e.distance,floorTab:i&&n?n.tab:null}}return{type:"none",dist:10}}function _c(s,e){if(s.type==="panel"){e&&hp(s.uv);return}if(Uo){pM();return}if(s.type==="photo"){dM(s.act.name);return}if(s.type==="floor"){e?fp(s.point):ys("finish",s.floorTab||Object.keys(ln.finishes).find(t=>t.startsWith("floor")));return}if(s.type==="toggle"){s.act.anim.target=s.act.anim.target?0:1;return}if(s.type==="menu"){ys("finish",s.act.tab);return}e||ys("finish")}function fp(s){let e=tn.getWorldPosition(yc);$t.position.x+=s.x-e.x,$t.position.z+=s.z-e.z,$t.position.y=s.y}var Ai=new Ie(new bo(.16,.22,40),new zt({color:"#9fd3a8",transparent:!0,opacity:.85,depthWrite:!1}));Ai.rotation.x=-Math.PI/2;Ai.visible=!1;Gn.add(Ai);var dp=[];for(let s=0;s<2;s++){let e=Wt.xr.getController(s),t=new bt().setFromPoints([new D(0,0,0),new D(0,0,-1)]),n=new Zn(t,new En({color:"#ffffff",transparent:!0,opacity:.7})),i=new Ie(new ls(.012,12,8),new zt({color:"#ffffff"}));e.add(n,i),$t.add(e);let r=Wt.xr.getControllerGrip(s),o=new Ie(new Pn(.018,.024,.12,16),new Ln({color:"#e8e4dc",roughness:.5}));o.rotation.x=Math.PI/2-.5,r.add(o),$t.add(r);let a={c:e,line:n,dot:i,source:null,last:null,btn:{}};e.addEventListener("connected",c=>{a.source=c.data}),e.addEventListener("disconnected",()=>{a.source=null}),e.addEventListener("select",()=>{jh(a),_c(Hr(),!0)}),e.addEventListener("squeeze",()=>{jh(a),_c(Hr(),!1)}),dp.push(a)}var op=new _e;function jh(s){op.identity().extractRotation(s.c.matrixWorld),vs.ray.origin.setFromMatrixPosition(s.c.matrixWorld),vs.ray.direction.set(0,0,-1).applyMatrix4(op)}var qh=!1;function rM(s){let e=tn.getWorldPosition(new D);$t.rotation.y+=s,$t.updateMatrixWorld(!0);let t=tn.getWorldPosition(new D);$t.position.x+=e.x-t.x,$t.position.z+=e.z-t.z}function oM(s){let e=!1,t=null;for(let n of dp){if(!n.source){n.line.visible=n.dot.visible=!1;continue}n.line.visible=n.dot.visible=!0,jh(n);let i=Hr(),r=Math.min(i.dist??10,10);n.line.scale.z=r,n.dot.position.set(0,0,-r);let o=i.type!=="none";n.line.material.color.set(o?"#9fd3a8":"#ffffff"),i.type==="floor"&&(Ai.position.copy(i.point).y+=.01,e=!0),i.type==="panel"&&(t=i.uv);let a=n.source.gamepad;if(!a)continue;let c=a.axes.length>=4?[a.axes[2],a.axes[3]]:[a.axes[0]||0,a.axes[1]||0];if(n.source.handedness==="right")Math.abs(c[0])>.7?qh||(rM(-Math.sign(c[0])*Math.PI/6),qh=!0):Math.abs(c[0])<.3&&(qh=!1);else if(Math.abs(c[1])>.25||Math.abs(c[0])>.25){let h=new D;tn.getWorldDirection(h),h.y=0,h.normalize();let u=new D().crossVectors(h,new D(0,1,0));$t.position.addScaledVector(h,-c[1]*1.3*s).addScaledVector(u,c[0]*1.3*s)}let l=a.buttons[4]?.pressed;l&&!n.btn.a&&(xn.visible?Do():ys(xc==="help"?"help":"finish")),n.btn.a=l}Ai.visible=e,xn.visible&&up(t)}var ai=0,qs=0,Bn=null,oi={},Jh=new He,Vr=Wt.domElement;Vr.addEventListener("contextmenu",s=>s.preventDefault());Vr.addEventListener("pointerdown",s=>{Bn={x:s.clientX,y:s.clientY,moved:0,button:s.button},Vr.setPointerCapture(s.pointerId)});Vr.addEventListener("pointermove",s=>{if(Jh.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),Bn){let e=s.clientX-Bn.x,t=s.clientY-Bn.y;Bn.moved+=Math.abs(e)+Math.abs(t),Bn.x=s.clientX,Bn.y=s.clientY,Bn.moved>6&&(ai-=e*.004,qs=Pt.clamp(qs-t*.004,-1.3,1.3))}});Vr.addEventListener("pointerup",s=>{Bn&&Bn.moved<=6&&(vs.setFromCamera(Jh,tn),_c(Hr(),Bn.button!==2)),Bn=null});addEventListener("keydown",s=>{oi[s.code]=!0,(s.code==="KeyM"||s.code==="Space")&&(xn.visible?Do():ys("finish"),s.preventDefault())});addEventListener("keyup",s=>{oi[s.code]=!1});function aM(s){tn.rotation.set(qs,ai,0,"YXZ");let e=new D(-Math.sin(ai),0,-Math.cos(ai)),t=new D(Math.cos(ai),0,-Math.sin(ai)),n=1.6*s;(oi.KeyW||oi.ArrowUp)&&$t.position.addScaledVector(e,n),(oi.KeyS||oi.ArrowDown)&&$t.position.addScaledVector(e,-n),(oi.KeyA||oi.ArrowLeft)&&$t.position.addScaledVector(t,-n),(oi.KeyD||oi.ArrowRight)&&$t.position.addScaledVector(t,n),oi.KeyQ&&(ai+=1.6*s),oi.KeyE&&(ai-=1.6*s),vs.setFromCamera(Jh,tn);let i=Hr();Vr.style.cursor=Bn&&Bn.moved>6?"grabbing":i.type!=="none"?"pointer":"grab",Ai.visible=i.type==="floor",Ai.visible&&(Ai.position.copy(i.point),Ai.position.y+=.01),xn.visible&&up(i.type==="panel"?i.uv:null)}function cM(){if(!ln)return;let s=ln.bounds,e=tn.getWorldPosition(eM),t=.25,n=Pt.clamp(e.x,s.min.x+t,s.max.x-t),i=Pt.clamp(e.z,s.min.z+t,s.max.z-t);$t.position.x+=n-e.x,$t.position.z+=i-e.z}var lM=new Ya;function hM(s){return s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2}Wt.setAnimationLoop(()=>{let s=Math.min(lM.getDelta(),.05);if(Wt.xr.isPresenting?(oM(s),$h>0&&--$h===0&&ys("help")):aM(s),cM(),ln)for(let e of ln.anims){if(e.t===e.target)continue;e.t=e.target>e.t?Math.min(e.target,e.t+s*1.6):Math.max(e.target,e.t-s*1.6);let t=e.from+(e.to-e.from)*hM(e.t);e.kind==="rot"?e.obj.rotation.y=t:e.obj.position.copy(e.dir).multiplyScalar(t)}Uo&&tn.getWorldPosition(yi.position),Wt.render(Gn,tn)});addEventListener("resize",()=>{tn.aspect=innerWidth/innerHeight,tn.updateProjectionMatrix(),Wt.setSize(innerWidth,innerHeight)});var Mc={},Uo=null,yi=new Ie(new ls(20,64,32),new zt({side:gn,toneMapped:!1,depthWrite:!1}));yi.scale.x=-1;yi.rotation.y=-Math.PI/2;yi.visible=!1;yi.renderOrder=-1;Gn.add(yi);var uM=new gi;function fM(s){let e=new _t,t=new Ie(new bo(.22,.3,48),new zt({color:"#D2AB80",transparent:!0,opacity:.95,depthWrite:!1}));t.rotation.x=-Math.PI/2,e.add(t);let n=new Ie(new za(.22,48),new zt({color:"#D2AB80",transparent:!0,opacity:.25,depthWrite:!1}));n.rotation.x=-Math.PI/2,e.add(n);let i=document.createElement("canvas");i.width=512,i.height=128;let r=i.getContext("2d");r.fillStyle="rgba(44,38,32,0.85)",r.beginPath(),r.roundRect(8,8,496,112,56),r.fill(),r.fillStyle="#fff",r.font="600 44px Segoe UI, Roboto, Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("Photo view \xB7 "+s,256,66);let o=new Wi(i);o.colorSpace=it;let a=new Ua(new _o({map:o,depthTest:!1,transparent:!0}));return a.scale.set(.8,.2,1),a.position.y=1,a.renderOrder=998,e.add(a),e}function dM(s){let e=Mc[s];if(!e){Tn('No panorama image found for "'+Yh(s)+'". Add photospot_'+s+".jpg to the files.");return}Tn("Opening photo view\u2026",0),uM.load(e,t=>{t.colorSpace=it,t.mapping=Ns,yi.material.map=t,yi.material.needsUpdate=!0;let n=ln.spots.find(i=>i.name===s);n&&fp(new D(n.pos.x,n.floor??ln.floorY,n.pos.z)),yi.rotation.y=-Math.PI/2-(n?.yaw||0)*Math.PI/180,Uo=s,yi.visible=!0,_i.visible=!1,Ai.visible=!1,hn("toast").hidden=!0,Tn("Photo view. Click or pull the trigger to go back.",4e3)},void 0,()=>Tn("Could not open the panorama image."))}function pM(){Uo=null,yi.visible=!1,_i.visible=!0}var hn=s=>document.getElementById(s);function Tn(s,e=3500){let t=hn("toast");t.textContent=s,t.hidden=!1,clearTimeout(Tn.h),e&&(Tn.h=setTimeout(()=>t.hidden=!0,e))}function Qh(){hn("btn-menu").textContent=xn.visible?"Close menu":"Finishes & options"}hn("btn-menu").addEventListener("click",()=>{xn.visible?Do():ys("finish")});hn("btn-demo").addEventListener("click",()=>bc());var kr=null,$h=0;async function mM(){let s=hn("btn-vr");if(!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr").catch(()=>!1))){s.disabled=!0,s.textContent="VR: open on headset",s.title="Open this link in the Pico browser, or in Chrome on a laptop with SteamVR running";return}s.disabled=!1,s.textContent="Enter VR",s.addEventListener("click",async()=>{if(kr){kr.end();return}try{kr=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]}),tn.position.set(0,0,0),tn.rotation.set(0,0,0),Wt.xr.setFoveation(1),await Wt.xr.setSession(kr),s.textContent="Exit VR",$h=30,kr.addEventListener("end",()=>{kr=null,s.textContent="Enter VR",tn.position.set(0,1.6,0)})}catch(t){Tn("Could not start VR: "+t.message)}})}hn("file").addEventListener("change",async s=>{let e=[...s.target.files];if(s.target.value="",!e.length)return;let t={};e.forEach(c=>t[c.name.toLowerCase()]=URL.createObjectURL(c)),e.forEach(c=>{let l=c.name.toLowerCase().match(/^photo[_\- ]?spot[_\- ](.+)\.(jpe?g|png)$/);l&&(Mc[l[1].trim()]=t[c.name.toLowerCase()])});let i=[".glb",".gltf",".fbx",".dae",".obj"].map(c=>e.find(l=>l.name.toLowerCase().endsWith(c))).find(Boolean);if(!i){Tn("Choose the exported model file (.fbx, .dae, .glb or .obj) together with its texture images.");return}Tn("Loading "+i.name+"\u2026",0);let r=new wo;r.setURLModifier(c=>{let l=decodeURIComponent(c.split(/[\\/]/).pop().split("?")[0]).toLowerCase();return t[l]||c});let o=i.name.toLowerCase().slice(i.name.lastIndexOf(".")),a=t[i.name.toLowerCase()];try{let c;o===".glb"||o===".gltf"?c=(await new Br(r).loadAsync(a)).scene:o===".fbx"?c=await new rc(r).loadAsync(a):o===".dae"?c=(await new lc(r).loadAsync(a)).scene:c=await new uc(r).loadAsync(a),eu(c,i.name)}catch(c){console.error(c),Tn("Could not read "+i.name+". Export again as FBX with texture maps.",8e3)}});function eu(s,e){let t=new Ct().setFromObject(s),n=t.getSize(yc).y||1,i=[1,.001,.01,.0254,.3048],r=n>=1.8&&n<=60?1:i.reduce((b,_)=>Math.abs(Math.log(n*_/3))<Math.abs(Math.log(n*b/3))?_:b,1);s.scale.multiplyScalar(r),s.updateMatrixWorld(!0);let o=new Ct().setFromObject(s),a=o.getCenter(new D);s.position.x-=a.x,s.position.z-=a.z,s.position.y-=o.min.y;let c=new _t;c.name="model",c.add(s),c.updateMatrixWorld(!0);let l=ep(c)?null:Qd(c),h=tp(c,l),u=null,f="mzafvr_sig_"+e.replace(/\.[^.]+$/,"").toLowerCase();try{u=JSON.parse(localStorage.getItem(f)||"null"),localStorage.setItem(f,JSON.stringify(h.sig))}catch{}let d=ap(c);xM(c),console.log("meshes",d,"->",ap(c));let g=gc(c,{keepOriginalOption:!0});_M(e,l,h.items,u?np(u,h.sig):null);let x=g.anims.length,m=Object.keys(g.finishes).length,p=Object.keys(g.variants).length;Tn(`${e}: ${x} opening parts, ${m} changeable finishes, ${p} furniture choices found.`,7e3),hn("title-sub").textContent=e.replace(/\.[^.]+$/,"")}function ap(s){let e=0;return s.traverse(t=>{t.isMesh&&e++}),e}var gM=/^(door_[LR]_|drawer_|option_|photospot_)/i;function xM(s){s.updateMatrixWorld(!0);let e=new _e().copy(s.matrixWorld).invert(),t=new Map,n=[];s.traverse(r=>{if(!r.isMesh)return;for(let h=r;h&&h!==s;h=h.parent)if(gM.test(h.name||""))return;let o=Array.isArray(r.material)?r.material:[r.material],a=r.geometry,c=Array.isArray(r.material)&&a.groups.length?a.groups:[{start:0,count:a.index?a.index.count:a.attributes.position.count,materialIndex:0}],l=new _e().multiplyMatrices(e,r.matrixWorld);for(let h of c){let u=o[h.materialIndex]||o[0],f=a.index?a:a.toNonIndexed();if(f=new bt().copy(f),!f.index){let d=f.attributes.position.count;f.setIndex([...Array(d).keys()])}if(c.length>1){let d=f.index.array.slice(h.start,h.start+h.count);f.setIndex(new Vt(d,1))}for(let d of Object.keys(f.attributes))["position","normal","uv"].includes(d)||f.deleteAttribute(d);f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new Vt(new Float32Array(f.attributes.position.count*2),2)),f.applyMatrix4(l),f.clearGroups(),f.morphAttributes={},t.has(u)||t.set(u,[]),t.get(u).push(f)}n.push(r)});for(let r of n)r.parent.remove(r);let i=new _t;i.name="merged_static",s.add(i);for(let[r,o]of t)for(let a=0;a<o.length;a+=4e3){let c=zd(o.slice(a,a+4e3),!1);if(!c)continue;let l=new Ie(c,r);l.name="static_"+(r.name||""),i.add(l)}}function _M(s,e,t,n){let i=hn("check");if(!i)return;let r=u=>String(u).replace(/[&<>]/g,f=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[f]),o=t.filter(u=>u.level==="error"),a=t.filter(u=>u.level==="warn"),c=t.filter(u=>u.level==="ok"),l=u=>`<li class="${u.level}"><span class="dot"></span><div><b>${r(u.title)}</b>${u.fix?`<small>Fix: ${r(u.fix)}</small>`:""}</div></li>`,h=`<header><div><b>Model check</b><span>${r(s)}</span></div><button type="button" id="check-x" aria-label="Close">\xD7</button></header>`;if(h+=`<p class="sum">${o.length?`<em class="e">${o.length} to fix</em>`:""}${a.length?`<em class="w">${a.length} to check</em>`:""}<em class="o">${c.length} OK</em></p>`,e){let u=[...e.floors,...e.walls,...e.walltiles];h+='<h4>Named automatically</h4><p class="note">This model did not use the naming rules, so the software detected the parts itself. Check them in the walkthrough.</p><ul class="auto">',h+=`<li>Floors: ${e.floors.length}</li><li>Paint walls: ${e.walls.length}</li><li>Wall tiles: ${e.walltiles.length}</li><li>Shutters: ${e.doors.length} (hinge side found from the handle)</li><li>Drawers: ${e.drawers.length}</li><li>Kitchen fronts: ${e.kitchen}, wardrobe fronts: ${e.wardrobe}</li><li>Lights: ${e.lights.length}</li>`,h+=`</ul>${u.length?`<details><summary>Material changes (${u.length})</summary><ul class="mono">${u.map(f=>`<li>${r(f)}</li>`).join("")}</ul></details>`:""}`,e.notes.length&&(h+=`<ul class="mono">${e.notes.map(f=>`<li>${r(f)}</li>`).join("")}</ul>`)}(o.length||a.length)&&(h+=`<h4>Problems to fix in SketchUp</h4><ul class="items">${[...o,...a].map(l).join("")}</ul>`),n&&(h+=`<h4>Changes since last upload</h4><ul class="mono">${n.map(u=>`<li>${r(u)}</li>`).join("")}</ul>`),h+=`<h4>Passed</h4><ul class="items">${c.map(l).join("")}</ul>`,i.innerHTML=h,i.hidden=!1,hn("btn-check").hidden=!1,hn("check-x").onclick=()=>{i.hidden=!0}}hn("btn-check")?.addEventListener("click",()=>{hn("check").hidden=!hn("check").hidden});function yM(){let e=Hh().root,t=[];e.traverse(r=>{/^option_sofa_(L-Shape|Armchairs)/.test(r.name)&&t.push(r)}),t.forEach(r=>r.parent.remove(r));let n=0,i=new Set;e.traverse(r=>{if(r.name=r.isMesh?"":"Group#"+n++,r.isMesh)for(let o of[].concat(r.material))i.has(o)||(i.add(o),o.name="Material"+i.size)}),eu(e,"Unnamed_SketchUp_model.fbx")}var No=!!window.DEMO_BAKED;async function bc(){let s=Hh();if(Object.assign(Mc,window.DEMO_PANOS||{}),No&&window.DEMO_BAKED){Tn("Loading realistic lighting\u2026",0);try{let[e,t]=await Promise.all([new Br().loadAsync(window.DEMO_BAKED.glb),new gi().loadAsync(window.DEMO_BAKED.lightmap)]);t.flipY=!1,t.channel=1,t.colorSpace=it;let n=new _t;n.add(e.scene),gc(n,{start:s.start,keepOriginalOption:!1,isDemo:!0,lightmap:t}),hn("toast").hidden=!0}catch(e){console.error(e),Tn("Realistic lighting could not load, showing simple lighting."),gc(s.root,{start:s.start,keepOriginalOption:!1,isDemo:!0})}}else gc(s.root,{start:s.start,keepOriginalOption:!1,isDemo:!0});hn("title-sub").textContent="Sample kitchen & living",vM()}function vM(){let s=hn("btn-light");s&&(s.hidden=!window.DEMO_BAKED||!ln?.isDemo,s.textContent=No?"Realistic light: On":"Realistic light: Off")}hn("btn-light")?.addEventListener("click",()=>{No=!No;let s=$t.position.clone(),e=ai,t=qs;bc().then(()=>{$t.position.copy(s),ai=e,qs=t})});var zr=new URLSearchParams(location.search).get("model");zr?(Tn("Loading "+zr+"\u2026",0),new Br().loadAsync(zr,s=>{s.total&&Tn("Loading model\u2026 "+Math.round(s.loaded/s.total*100)+"%",0)}).then(s=>{hn("toast").hidden=!0;let e=zr.replace(/[^/]*$/,"");for(let t of new URLSearchParams(location.search).getAll("spot")){let[n,i,r,o,a]=t.split(":"),c=new Tt;c.name="photospot_"+n,c.position.set(+i,+r,+o),c.userData.yaw=+(a||0),s.scene.add(c),Mc[n]=e+"photospot_"+n+".jpg"}eu(s.scene,zr.split("/").pop())}).catch(s=>{console.error(s),Tn("Could not load "+zr,8e3)})):/test=unnamed/.test(location.search)?yM():bc();mM();Qh();window.__vr={loadDemo:bc,applyFinish:Kh,setRealistic:s=>{No=s},state:()=>ln,pick:Hr,doAction:_c,openPanel:ys,closePanel:Do,raycaster:vs,camera:tn,rig:$t,panel:xn,panelClick:hp,setYaw:(s,e=0)=>{ai=s,qs=e},renderer:Wt,scene:Gn};})();
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
