import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { SDKService } from './services/sdk-service';
import { InitialObject } from './interfaces/InitialObject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postRedirection';

  private ShowPayment:boolean = false;
  private CypherKey : string = 'MySecretKey12345';
  private ENCRYPTION_KEY:string = 'your_secret_key_here'; // Replace with your secret key
  

  private sdkService = inject(SDKService)

  constructor(private route:ActivatedRoute,
    private router:Router){

  }

  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      // Process the postback data here
      console.log("Parameters received: ", JSON.stringify(params))
  
      //this.router.navigate(['/financial']);
    });

    console.log("parametro1: ", this.route.snapshot.params["param1"]);

  }


  llamarSDK(){

    const element = document.getElementById("iframe-container")!;
 
    const iframe = document.createElement('iframe');
    //iframe.src = `https://azwapaymentsdkv3pciusedev.az-asev3-use-dev-pci.appserviceenvironment.net/?query=${encodedUrl}`;
    iframe.src = `http://localhost:4200`;
    iframe.id = 'tuIframe';
    iframe.style.width = '70%';
    iframe.style.height = '100vh';
    iframe.style.border = '0';
    element.appendChild(iframe);

    var data = { pnr: "pnr123", valor: "1231", franquicia: "VI"};

    console.log("antes de enviar post al SDK");

    // this.http
    //   .post(
    //     'http://localhost:4200/api/initialize',
    //     JSON.stringify(data)
    //   ).pipe(
    //     map(response => {
    //       console.log("respuesta SDK: ", response)
    //     })
    //   ).subscribe(res => {
    //     console.log("respuesta SDK1: ", res)
    //   });

    this.sdkService.postSDK(data).subscribe((resp: InitialObject) => {
      console.log("respuesta SDK1: ", resp)
    });

  }

  async encriptar(){

    //var objeto = '{"initialize-payment":{"channel":"AVCOM","account":"101131","client-id":"10101","language":"es"}}';
    var objeto = '{"initialize-payment":{"channel":"AVCOM","account":"101131","client-id":"10101","language":"es","sdk-version":"2.0.0","version":"2.0.0","platform":"HTML5","mobile":"31234567890","country-id":"170","email":"gilramirez.angela@tcs.com","device-id":"2E8667F78B23402BBFF6176313BD58D314566333","customer-ref":"pruebas234k@gmail.com","ip":"112.1.1.1","hmac":"","transaction":{"callback-url":"http://localhost:50412/callback","accept-url":"https://www.avianca.com/es/itinerary/","cancel-url":"https://www.avianca.com/es/booking/booking/payment/wait/","order-no":"AGH595","type-id":"1","session-id":"","amount":"604000","country-id":"170","currency-id":"170","additionals":[{"name":"office-id","value":"BOGAVO8LK"},{"name":"hold-fee-currency-code","value":"COP"},{"name":"transaction-type","value":"flight"}],"product":{"name":"RETURN","trips":[{"tag":"1","seq":"1","origin":{"origin":"MDE","external-id":"MDE","country-id":"170","time-zone":"-5:00"},"destinations":{"destination":"NYC","external-id":"JFK","country-id":"840","time-zone":"-4:00"},"departure-time":"2024-03-30T22:40:00","arrival-time":"2023-08-01T05:15:00","booking-class":"S","service-level":"M","transportation-code":"AV","transportation-number":"042","carrier-code":"AV","carrier-number":"042","carrier-type-id":"AIRBUS A320","additionals":[{"name":"fare-basis","value":"SEOB2BRS"},{"name":"base-fare","value":"196150000"}]},{"tag":"2","seq":"1","origin":{"origin":"NYC","external-id":"JFK","country-id":"840","time-zone":"-4:00"},"destinations":{"destination":"MDE","external-id":"MDE","country-id":"170","time-zone":"-5:00"},"departure-time":"2024-03-30T22:40:00","arrival-time":"2023-08-15T11:10:00","booking-class":"U","service-level":"L","transportation-code":"AV","transportation-number":"043","carrier-code":"AV","carrier-number":"043","carrier-type-id":"AIRBUS A320","additionals":[{"name":"fare-basis","value":"UEOB3BR9"},{"name":"base-fare","value":"196150000"}]}],"profiles":[{"seq":"1","title":"Mr.","first-name":"Dilan","last-name":"Roman","type":"ADT","email":"gilramirez.angela@tcs.com","mobile":"3123456789","country-id":"170","additionals":[]}],"fare-detail":[{"description":"basefare","currency":"COP","amount":"195400000","profile-seq":"1","product-code":"BASE","product-category":"FARE","product-item":"Base Fare"},{"description":"taxDescriptionQ","currency":"COP","amount":"750000","profile-seq":"1","product-code":"BASE","product-category":"FARE","product-item":"Impuestos - Sobrecargos por combustible (Q)"},{"description":"COAE","currency":"COP","amount":"19540000","profile-seq":"1","product-code":"COAE","product-category":"TAX","product-item":"Cobro por instalación en el aeropuerto internacional (Colombia) (COAE)"},{"description":"DGVZ","currency":"COP","amount":"11000000","profile-seq":"1","product-code":"DGVZ","product-category":"TAX","product-item":"Impuesto de salida de residentes (Colombia) (DGVZ)"},{"description":"YSTR","currency":"COP","amount":"18634000","profile-seq":"1","product-code":"YSTR","product-category":"TAX","product-item":"Impuesto a las ventas (Colombia) (YSTR)"},{"description":"AYSE","currency":"COP","amount":"2280000","profile-seq":"1","product-code":"AYSE","product-category":"TAX","product-item":"Cuota de seguridad del 11 de septiembre (EE. UU.) (AYSE)"},{"description":"USAP","currency":"COP","amount":"8590000","profile-seq":"1","product-code":"USAP","product-category":"TAX","product-item":"Impuesto de llegada internacional (EE. UU.) (USAP)"},{"description":"USAS","currency":"COP","amount":"8590000","profile-seq":"1","product-code":"USAS","product-category":"TAX","product-item":"Impuesto de salida internacional (EE. UU.) (USAS)"},{"description":"XACO","currency":"COP","amount":"1560000","profile-seq":"1","product-code":"XACO","product-category":"TAX","product-item":"Tarifa de inspección de sanidad animal y vegetal (EE. UU.) (XACO)"},{"description":"XYCR","currency":"COP","amount":"2850000","profile-seq":"1","product-code":"XYCR","product-category":"TAX","product-item":"Tarifa de servicio de inmigración (EE. UU.) (XYCR)"},{"description":"YCAE","currency":"COP","amount":"2660000","profile-seq":"1","product-code":"YCAE","product-category":"TAX","product-item":"Tarifa de usuario personalizada (EE. UU.) (YCAE)"},{"description":"XF","currency":"COP","amount":"1840000","profile-seq":"1","product-code":"XF","product-category":"TAX","product-item":"Facilidad de pasajeros y cargo de seguridad. (XF)"}],"add-ons":[{"description":"service.SEAT-PRICE","currency":"COP","amount":"17780000","profile-seq":"1","trip-tag":"1","trip-seq":"1","product-code":"SEAT","product-category":"SERVICE","product-item":"12A"},{"description":"service.SEAT-PRICE-TAX","currency":"COP","amount":"3390000","profile-seq":"1","trip-tag":"1","trip-seq":"1","product-code":"SEAT","product-category":"TAX","product-item":"12A"},{"description":"service.SEAT-PRICE","currency":"COP","amount":"0","profile-seq":"1","trip-tag":"2","trip-seq":"1","product-code":"SEAT","product-category":"FREE-SERVICE","product-item":"5C"},{"description":"service.BBAG","currency":"COP","amount":"23940000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"BBAG","product-category":"SERVICE","product-item":"2ND CHECKED BAG 23KG"},{"description":"service.BBAG-TAX","currency":"COP","amount":"4550000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"BBAG","product-category":"TAX","product-item":"2ND CHECKED BAG 23KG"},{"description":"service.SPEQBIKE","currency":"COP","amount":"27360000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"SPEQBIKE","product-category":"SERVICE","product-item":"BICYCLE"},{"description":"service.SPEQBIKE-TAX","currency":"COP","amount":"5200000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"SPEQBIKE","product-category":"TAX","product-item":"BICYCLE"},{"description":"service.BBAG","currency":"COP","amount":"28490000","profile-seq":"1","trip-tag":"2","trip-seq":"0","product-code":"BBAG","product-category":"SERVICE","product-item":"2ND CHECKED BAG 23KG"},{"description":"service.SPEQGOLF","currency":"COP","amount":"32560000","profile-seq":"1","trip-tag":"2","trip-seq":"0","product-code":"SPEQGOLF","product-category":"SERVICE","product-item":"GOLF EQUIPMENT"},{"description":"service.VIPD","currency":"COP","amount":"11340000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"VIPD","product-category":"SERVICE","product-item":"VIP LOUNGE DAY PASS"},{"description":"service.VIPD-TAX","currency":"COP","amount":"2160000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"VIPD","product-category":"TAX","product-item":"VIP LOUNGE DAY PASS"},{"description":"service.ASST","currency":"COP","amount":"14250000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"ASST","product-category":"SERVICE","product-item":"TRAVEL ASISTANCE"},{"description":"service.PBRD","currency":"COP","amount":"4100000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"PBRD","product-category":"SERVICE","product-item":"PRIORITY BOARDING"},{"description":"service.PBRD-TAX","currency":"COP","amount":"790000","profile-seq":"1","trip-tag":"1","trip-seq":"0","product-code":"PBRD","product-category":"TAX","product-item":"PRIORITY BOARDING"}],"additionals-lineitem":[{"name":"deviceFingerPrint","value":"kjkldjkldjglkdsjfkldsjfklsd"}]}}}}';

    // this.Encrypt(objeto, this.CypherKey).then(resp =>{
          
    //   //this.shaHash(JSON.parse(resp));

    //   console.log('objeto encriptado', resp);

    //   this.Decrypt(resp, this.CypherKey).then(resp1 =>{
          
    //     console.log('objeto desen-criptado', resp1);
  
    //   });

    // });

    var str_encript:string = "";//muy largo
    var str_decript:string = "";

    // str_encript = encodeURIComponent(objeto);//muy largo
    // console.log('objeto encriptado', encodeURIComponent(str_encript));

    // str_decript = decodeURIComponent(str_encript);
    // console.log('objeto desen-criptado', str_decript);

    // str_encript = btoa(objeto);
    // console.log('objeto encriptado', str_encript);

    // str_decript = atob(str_encript);
    // console.log('objeto desen-criptado', str_decript);


    console.log('objeto encriptado', str_encript);
    console.log('objeto desen-criptado', str_decript);

  }

  /**
   * Encrypt
   */
  public async Encrypt(message:any, secretKey: any):Promise<string> {
    //var CryptoJS = require("crypto-js");

    try {
      const key = CryptoJS.enc.Utf8.parse(secretKey);
      const encrypted = CryptoJS.AES.encrypt(message, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      //console.log("Encrypted string: ", encrypted.toString());
      return encrypted.toString();
    } catch (error:any) {
      Swal.fire({
        //iconHtml: `<img src="${environment.APP_URL}/assets/images/icons/modal-icon.svg">`,
        title: 'Error en el objeto final',
        text: 'Verifique la información que sera enviada.',
        confirmButtonText: "Cerrar"
      });

      this.ShowPayment = false
      return error.toString();
    }
    
  }


  /**
   * Decrypt
   */
  public async Decrypt(ciphertext:any, secretKey: any):Promise<string> {
    //var CryptoJS = require("crypto-js");
    try {

      const key = CryptoJS.enc.Utf8.parse(secretKey);
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      //console.log("Decrypted string: ", decrypted.toString(CryptoJS.enc.Utf8));
      return decrypted.toString(CryptoJS.enc.Utf8);
      
    } catch (error:any) {
      Swal.fire({
        //iconHtml: `<img src="${environment.APP_URL}/assets/images/icons/modal-icon.svg">`,
        title: 'Error en el objeto inicial',
        text: 'Verifique la información recibida.',
        confirmButtonText: "Cerrar"
      });
      this.ShowPayment = false
      return error.toString();
    }
  }


}
