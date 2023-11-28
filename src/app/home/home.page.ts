import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
//import { FilesystemDirectory, Plugins } from '@capacitor/core';

var $

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {Filesystem, Directory} from '@capacitor/filesystem'

import { viado } from "../viado.base64";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { LoadingService } from 'src/services/loading.service';
import { fira } from '../fira.base64';
//import { CountService } from 'src/services/count.service';
import { Subscription } from 'rxjs';
//import { count } from 'src/models/count.model';
import { ActivatedRoute } from '@angular/router';
//import { AuthService } from 'src/services/auth.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: FormGroup; 
  pdfObj = null; 
  photoPreview = null; 
  logoData = null; 
  logoData2 = null;
  logoData3 = null;
  logoData4 = null; 
  logoData5 = null;
  logoData6 = null;
  play =null; 
  apple = null;
  face = null; 
  insta = null; 
  twitter = null;
  mrMoney = null; 
  myAirtel = {};
  airtelM = null; 
  mrMoney2 = null;
  taxi = null;
  ceinture = null;

  image= null; 

  count : number; 

  countSubscription: Subscription; 
  //counts: count[];

  email: string; 
  //countt = {} as count;

  constructor(
    private fb: FormBuilder, 
    private plt: Platform, 
    private http: HttpClient, 
    private fileOpener: FileOpener, 
    private loadingService: LoadingService, 
    private toastController: ToastController, 
    private alertController: AlertController, 
   // private countService: CountService,
    private activatedRoute: ActivatedRoute, 
   // private authService: AuthService
  ) {


 //this.countt.email = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(){

      this.myForm = this.fb.group({
          showLogo: true, 
          from: "Fidèle", 
          to: "NDZIME N'KOGHET", 
          text: "", 
          ref: ''
      }); 

      this.loadLocalAssetToBase64();
      this.loadLocalAssetToBase642();
      this.loadLocalAssetToBase643();
      this.loadLocalAssetToBase644();
      this.loadLocalAssetToBase645();
      this.loadLocalAssetToBase646();
      this.loadLocalAssetToBase647();
      this.loadLocalAssetToBase648();
      this.loadLocalAssetToBase649();
      this.loadLocalAssetToBase6410();
      this.loadLocalAssetToBase6411();
      this.loadLocalAssetToBase65(); 
      this.loadLocalAssetToBase66();
      this.loadLocalAssetToBase6462();

      this.loadLocalAssetToBase6477();
      this.loadLocalAssetToBase656();
      this.loadLocalAssetToBase63();

     /* this.countSubscription = this.countService.getCounts().subscribe((data)=>{

          console.log(data);

          for(let d of data){

            this.count = d.count;
          }

      })*/
  }

  loadLocalAssetToBase64(){

    this.http.get('../assets/images/airtel.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase6477(){

    this.http.get('../assets/images/mrMoney2.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.mrMoney2 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase6462(){

    this.http.get('../assets/images/airtelM.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.airtelM = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase65(){

    this.http.get('../assets/images/mrMoney.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 

        reader.onloadend = () =>{

          this.mrMoney = reader.result

        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase66(){

    this.http.get('../assets/images/myAirtel.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 

        reader.onloadend = () =>{

          this.myAirtel = reader.result

        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase642(){

    this.http.get('../assets/images/bulle1.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData2 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }
  loadLocalAssetToBase643(){

    this.http.get('../assets/images/1.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData3 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase63(){

    this.http.get('../assets/images/ceinture.jpeg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.ceinture = reader.result
        }

        reader.readAsDataURL(res);
    })

  }
  loadLocalAssetToBase644(){

    this.http.get('../assets/images/2.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData4 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }
  loadLocalAssetToBase645(){

    this.http.get('../assets/images/3.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData5 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase646(){

    this.http.get('../assets/images/4.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.logoData6 = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase656(){

    this.http.get('../assets/images/taxi2.png', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.taxi = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  
  loadLocalAssetToBase647(){

    this.http.get('../assets/images/play.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.play = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  
  loadLocalAssetToBase648(){

    this.http.get('../assets/images/apple.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.apple = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase649(){

    this.http.get('../assets/images/facebook.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.face = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase6410(){

    this.http.get('../assets/images/twitter.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.twitter = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

  loadLocalAssetToBase6411(){

    this.http.get('../assets/images/instagram.jpg', {responseType: 'blob'}).subscribe((res)=>{

        const reader = new FileReader(); 
        reader.onloadend = () =>{
          this.insta = reader.result
        }

        reader.readAsDataURL(res);
    })

  }

   
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Télécharment en cours, prière de patienter.',
      duration: 4000
    });
    toast.present();
  }


  hi(){
    
  }

  async takePicture(){

    this.pdfObj = null; 
    const image = await Camera.getPhoto({
      quality: 100, 
      allowEditing: false, 
      resultType: CameraResultType.Base64, 
      source: CameraSource.Photos

    }); 



    
    console.log(image); 
    
    this.photoPreview = 'data:image/jpeg;base64,'+image.base64String;

  }

  disconnect(){

   //   this.authService.signOut();
  }

  allItems(){


   


      if(this.myForm.value.text){

        this.presentAlertRadio();
  
      }else{
  
        alert('Veuillez entrer un code commerce svp')
      }





    


  }

  async presentAlertRadio() {

    var value = "mini" ;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'Format 1',
          type: 'radio',
          label: 'Mini',
          value: 'mini',
          handler: () => {
          
            value = "mini"

          },
          checked: true
        },
        {
          name: 'Format 2',
          type: 'radio',
          label: 'Normal',
          value: 'normal',
          handler: () => {
           value = "normal";
          }
        }, 
        {
          name: 'Format 3',
          type: 'radio',
          label: 'Taxi',
          value: 'taxi',
          handler: () => {
           value = "taxi";
          }, 
          
        }, 
        {
          name: 'Format 4',
          type: 'radio',
          label: 'A6',
          value: 'a6',
          handler: () => {
           value = "a6";
          }

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.createPdf(value);
          }
        }
      ]
    });

    await alert.present();
  }



  createPdf(format){

 

      
    pdfMake.vfs['fira'] = fira; 
    pdfMake.vfs['viado_64'] = viado; 

    pdfMake.fonts = {
      Roboto: {
          normal:      'Roboto-Regular.ttf',
          bold:        'Roboto-Medium.ttf',
          italics:     'Roboto-Italic.ttf',
          bolditalics: 'Roboto-MediumItalic.ttf'
      },
      viado:{
          normal:      'viado_64',
          bold:        'viado_64',
          italics:     'viado_64',
          bolditalics: 'viado_64'
      },
      fira:{
        normal:      'fira',
        bold:        'fira',
        italics:     'fira',
        bolditalics: 'fira'
    },
  }
    
    const formValue = this.myForm.value; 
    const image = this.photoPreview ? {image: this.photoPreview, alignment: 'right', width: 50, height: 50, style: 'rightme'} : {}; 
    const imageR = this.photoPreview ? {image: this.photoPreview, alignment: 'right', width: 50, height: 50, style: 'rightme'} : {}; 
    const imageRR = this.photoPreview ? {image: this.photoPreview, alignment: 'right', width: 50, height: 50, style: 'rightme'} : {}; 
    const imageRRR = this.photoPreview ? {image: this.photoPreview, alignment: 'right', width: 50, height: 50, style: 'rightme'} : {}; 
    
    if(this.myForm.value.ref == ""){

      formValue.ref = "OK"

    }

    let logo = {}; 
    let logo2 = {};
    let image2 = {};
    let image3 = {};
    let image4 = {};
    let image5 = {};

    let logo3 = {}; 
    let logo4 = {};
    let logo5 = {};
    let logo6 = {};
    let image6 = {};
    let image7 = {};
    let image8 = {};
    let image9 = {};

    let mrMoney  = {};
    let mrMoney3 = {}; 
    let mrMoney4 = {}; 
    let mrMoney5 = {}; 
    let mrMoney6 = {}; 



    let apple = {};
    let play = {};

    let face = {};
    let twitter = {};
    let insta = {};

    let apple2 = {};
    let play2 = {};

    let face2 = {};
    let twitter2 = {};
    let insta2 = {};

    let apple3 = {};
    let play3 = {};

    let apple4 = {};
    let play4 = {};

    let apple5 = {};
    let play5 = {};

    let apple6 = {};
    let play6 = {};

    let face3 = {};
    let twitter3 = {};
    let insta3 = {};

    let myAirtel = {};
    let airtelM = {};
    let mrMoney2 = {};

    let logooo = {}
    let logoo = {};

    let taxi1 = {}; 
    let taxi2 = {}; 
    let taxi3 = {}; 
    let taxi4 = {}; 
    let ceinturee = {};
    let ceinturee2 = {};
    let ceinturee3 = {};
    let ceinturee4 = {};
    let imageR2 = {}; 
    let imageR3 = {};

    if(formValue.showLogo){

      logo = {image: this.logoData, width: 60}; 
 
      logoo = {image: this.logoData, width: 80}; 
      
      logooo = {image: this.logoData, width: 80}; 
    }


    taxi1 =  {image: this.taxi, width: 60, marginTop: -15}; 
    taxi2 =  {image: this.taxi, width: 60, marginTop: 15}; 
    taxi3 =  {image: this.taxi, width: 60, marginTop: -15}; 
    taxi4 =  {image: this.taxi, width: 60, marginTop: 15}; 
    logo5 = {image: this.logoData, width: 60}; 
    logo6 = {image: this.logoData, width: 60}; 
    logo2 = {image: this.logoData2, width: 145}; 
      image2 = {image: this.logoData3, width: 27}; 
      image3 = {image: this.logoData4, width: 27}; 
      image4 = {image: this.logoData5, width: 27}; 
      image5 = {image: this.logoData6, width: 27}; 

      logo3 = {image: this.logoData, width: 60}; 
      logo4 = {image: this.logoData2, width: 130}; 
      airtelM = {image: this.airtelM, width: 140, marginTop: 10, marginLeft: 10}; 
      image6 = {image: this.logoData3, width: 27}; 
      image7 = {image: this.logoData4, width: 27}; 
      image8 = {image: this.logoData5, width: 27}; 
      image9 = {image: this.logoData6, width: 27}; 

      apple = {image: this.apple, width: 12}; 
      play = {image: this.play, width: 12}; 

      apple4 = {image: this.apple, width: 12}; 
      play4 = {image: this.play, width: 12}; 

      apple5 = {image: this.apple, width: 12}; 
      play5 = {image: this.play, width: 12}; 

      apple6 = {image: this.apple, width: 12}; 
      play6 = {image: this.play, width: 12}; 

      face = {image: this.face, width: 7, marginTop:2, marginLeft: 15} 
      twitter = {image: this.twitter, width: 13, marginTop: 2}; 
      insta = {image: this.insta, width: 13}; 

      mrMoney = {image: this.mrMoney, width: 200, marginTop: 70 }
      mrMoney3 = {image: this.mrMoney, width: 80, marginTop: 50 }
      ceinturee = {image: this.ceinture, width: 90, marginTop: 50 }
      ceinturee2 = {image: this.ceinture, width: 90, marginTop: 50 }
      ceinturee3 = {image: this.ceinture, width: 90, marginTop: 50 }
      ceinturee4 = {image: this.ceinture, width: 90, marginTop: 50 }
      mrMoney4 = {image: this.mrMoney, width: 80, marginTop: 50 }
      mrMoney5 = {image: this.mrMoney, width: 80, marginTop: 50 }
      mrMoney6 = {image: this.mrMoney, width: 80, marginTop: 50 }
      mrMoney2 = {image: this.mrMoney2, width: 380, marginLeft: -30, marginTop: 60 }


      apple2 = {image: this.apple, width: 12}; 
      play2 = {image: this.play, width: 12}; 

      face2 = {image: this.face, width: 7, marginTop:2, marginLeft: 15} 
      twitter2 = {image: this.twitter, width: 13, marginTop: 2}; 
      insta2 = {image: this.insta, width: 13};

      apple3 = {image: this.apple, width: 12}; 
      play3 = {image: this.play, width: 12}; 

      face3 = {image: this.face, width: 7, marginTop:2, marginLeft: 15} 
      twitter3 = {image: this.twitter, width: 13, marginTop: 2}; 
      insta3 = {image: this.insta, width: 13};

      myAirtel = {image: this.myAirtel, width: 200};


      if(format == "mini"){

        const docDefinition = {
    
          pageMargins: [0,0,0,0],
          pageOrientation: 'landscape',
        

          content: [

           
            
           {
           margin:  [0,0,0,0],
           fillColor: '#fff',
            columns: [

              {
                
                padding: [25,25,25,25],
                columns : [
                 
                  {
                   
                    layout: "noBorders",
                   
                    
                     table :{
                       
                      body : [

                        [
                          logo5,
                          {
                            rowSpan: 2,
                            stack: [
                             imageRR
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 106, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                        [
                          {columns: [
                           play5,
                           apple5, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}
                         
                         ], 
                         ["\n",""],
                         [
                          logo6,
                          {
                            rowSpan: 2,
                            stack: [
                             imageRRR
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 106, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCEE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                        [
                          {columns: [
                           play6,
                           apple6, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}
                         
                         ]

                      ],
                      padding: [30, 30, 30, 30],
                      headerRows: 0,
                      widths: ["*", "*"], 
                    }, 


                    
        
        
                     width: "50%"
                   }, 
        
                   {                    
                     layout: "noBorders",
                   
                    
                   table :{
                     
                    body: [
                      [{text: "PROCEDURE DE PAIEMENT", bold: true,
                       fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                    ,
                    [
                      {
                        columns : [

                      mrMoney5, 
                      {
                        columns: [
                          {
                            text: [
                              "\nCOMPOSEZ :", 
                              {text: "\n\n*150*3*10#", fontSize: 11, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 8}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                  {text: "\n\nMONTANT : ", fontSize: 8}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                  {text: formValue.ref, fontSize: 8}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 8}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ],
                    [{text: "\nPROCEDURE DE PAIEMENT", bold: true,
                       fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                    , 
                    [
                      {
                        columns : [

                      mrMoney6, 
                      {
                        columns: [
                          {
                            text: [
                              "\nCOMPOSEZ :", 
                              {text: "\n\n*150*3*10#", fontSize: 11, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 8}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                  {text: "\n\nMONTANT : ", fontSize: 8}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                  {text: formValue.ref, fontSize: 8}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 8}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ]
                    ],

                    padding: [30, 20, 30, 20],
                    headerRows: 0,
                    fillColor: "#fff",
                    widths: ["*", "*"], 
                  },
                   width: "50%"
                 }

                  
                ],

                width: "45%"
              },
    
              
             
                        
                     
              {
    
    
                layout: "noBorders",
                 
                columns : [
                 
                  {
                   
                    layout: "noBorders",
                   
                    
                     table :{
                       
                      body : [

                        [
                          logo3,
                          {
                            rowSpan: 2,
                            stack: [
                             imageR
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 106, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                        [
                          {columns: [
                           play2,
                           apple2, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}
                         
                         ], 
                         ["\n",""],
                         [
                          logo,
                           {
                            rowSpan: 2,
                            stack: [
                             image
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 106, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCEE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, marginLeft: 5, paddingTop: 15}], 

                        [
                          {columns: [
                           play,
                           apple, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}                         
                         ]

                      ],
                      padding: [25, 25, 25, 25],
                      headerRows: 0,
                      widths: ["*", "*"], 
                    }, 


                    
        
        
                     width: "50%"
                   }, 
        
                   {                    
                     layout: "noBorders",
                   
                    
                   table :{
                     
                    body: [
                      [{text: "PROCEDURE DE PAIEMENT", bold: true,
                       fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                    ,
                    [
                      {
                        columns : [

                      mrMoney3, 
                      {
                        columns: [
                          {
                            text: [
                              "\nCOMPOSEZ :", 
                              {text: "\n\n*150*3*10#", fontSize: 11, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 8}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                  {text: "\n\nMONTANT : ", fontSize: 8}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                  {text: formValue.ref, fontSize: 8}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 8}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ],
                    [{text: "\nPROCEDURE DE PAIEMENT", bold: true,
                       fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                    , 
                    [
                      {
                        columns : [

                      mrMoney4, 
                      {
                        columns: [
                          {
                            text: [
                              "\nCOMPOSEZ :", 
                              {text: "\n\n*150*3*10#", fontSize: 11, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 8}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                  {text: "\n\nMONTANT : ", fontSize: 8}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                  {text: formValue.ref, fontSize: 8}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 8}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ]
                    ],

                    padding: [25, 25, 25, 25],
                    headerRows: 0,
                    fillColor: "#fff",
                    widths: ["*", "*"], 
                  },
                   width: "50%"
                 }

                  
                ],
                 
    
                width: '45%',
                marginLeft: 5, 
                borderLeft: true, 
              }
            ], 
            columnGap: 2
           },
           
          ], 
          defaultStyle: {
            font: 'viado'
          },
    
         styles:{
          rightme:
          {   
              alignment: 'right',
             
          }
      
      }, 
     
        }

        this.pdfObj = pdfMake.createPdf(docDefinition, null, );

      }else if(format == 'a6'){


        const docDefinition = {
          pageMargins: [0,0,0,0],
          pageOrientation: 'portrait',

          content : [


            {
              margin:  [0,0,0,0],
              fillColor: '#fff',
               columns: [
   
                 {

                   
                   padding: [25,25,25,25],
                   layout: "noBorders",
                      

                   table: {

                    body :[
                      [logo5, 
                      
                        {
                          rowSpan: 2,
                          stack: [
                           imageRR
                          ]
                        
                        
                        }
                      ], 
                      [{qr: "TIL_NUMBER|"+formValue.text, fit: 100, colSpan: 2, alignment: 'center', marginTop: 5, 
                      marginBottom: 5}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                        [
                          {columns: [
                           play5,
                           apple5, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}
                         
                         ], 

                         [{text: "PROCEDURE DE PAIEMENT", bold: true,
                         fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                      ,
                      [
                        {
                          columns : [
  
                        mrMoney5, 
                        {
                          columns: [
                            {
                              text: [
                                "\nCOMPOSEZ :", 
                                {text: "\n\n*150*3*10#", fontSize: 10, }, 
                                "  puis lancez l'appel", 
                                    {text: "\n\nCODE COMMERCE :  ", fontSize: 9}, 
                                    {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                    {text: "\n\nMONTANT : ", fontSize: 8}, 
                                    {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                    {text: formValue.ref, fontSize: 8}, 
                                    {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                    " (du client)",
                                    {text: "\n\nVALIDER", fontSize: 8}
                              ]
                            }
                          ]
                        }
  
                          ], colSpan: 2
                        }
                      ],
                      [logo6, 
                      
                        {
                          rowSpan: 2,
                          stack: [
                           imageRRR
                          ]
                        
                        
                        }
                      ], 
                      [{qr: "TIL_NUMBER|"+formValue.text, fit: 100, colSpan: 2, alignment: 'center', marginTop: 5, 
                      marginBottom: 5}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                        [
                          {columns: [
                           play6,
                           apple6, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 15}
                         
                         ], 

                         [{text: "PROCEDURE DE PAIEMENT", bold: true,
                         fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                      ,
                      [
                        {
                          columns : [
  
                        mrMoney6, 
                        {
                          columns: [
                            {
                              text: [
                                "\nCOMPOSEZ :", 
                                {text: "\n\n*150*3*10#", fontSize: 10, }, 
                                "  puis lancez l'appel", 
                                    {text: "\n\nCODE COMMERCE :  ", fontSize: 9}, 
                                    {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                    {text: "\n\nMONTANT : ", fontSize: 8}, 
                                    {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                    {text: formValue.ref, fontSize: 8}, 
                                    {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                    " (du client)",
                                    {text: "\n\nVALIDER", fontSize: 8}
                              ]
                            }
                          ]
                        }
  
                          ], colSpan: 2
                        }
                      ],
                    ]

                   }, 
   
                   width: "50%"
                 },
       
                 
                
                           
                        
                 {
       
       
                  padding: [25,25,25,25],
                  layout: "noBorders",
                     

                  table: {

                   body :[
                     [logo3, 
                     
                       {
                         rowSpan: 2,
                         stack: [
                          imageR
                         ]
                       
                       
                       }
                     ], 
                     [{qr: "TIL_NUMBER|"+formValue.text, fit: 100, colSpan: 2, alignment: 'center', marginTop: 5, 
                     marginBottom: 5}]
                       ,
                       
                       [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                       background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                       [
                         {columns: [
                          play2,
                          apple2, 
                          {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                          {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                         ], colSpan:2, marginTop: 5, marginLeft: 15}
                        
                        ], 

                        [{text: "PROCEDURE DE PAIEMENT", bold: true,
                        fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                     ,
                     [
                       {
                         columns : [
 
                       mrMoney3, 
                       {
                         columns: [
                           {
                             text: [
                               "\nCOMPOSEZ :", 
                               {text: "\n\n*150*3*10#", fontSize: 10, }, 
                               "  puis lancez l'appel", 
                                   {text: "\n\nCODE COMMERCE :  ", fontSize: 9}, 
                                   {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                   {text: "\n\nMONTANT : ", fontSize: 8}, 
                                   {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                   {text: formValue.ref, fontSize: 8}, 
                                   {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                   " (du client)",
                                   {text: "\n\nVALIDER", fontSize: 8}
                             ]
                           }
                         ]
                       }
 
                         ], colSpan: 2
                       }
                     ],
                     [logo, 
                     
                       {
                         rowSpan: 2,
                         stack: [
                          image
                         ]
                       
                       
                       }
                     ], 
                     [{qr: "TIL_NUMBER|"+formValue.text, fit: 100, colSpan: 2, alignment: 'center', marginTop: 5, 
                     marginBottom: 5}]
                       ,
                       
                       [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                       background: "#f4f4f4", fontSize: 11, paddingTop: 15, marginLeft: 5}], 

                       [
                         {columns: [
                          play,
                          apple, 
                          {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                          {text: "#Soyons prudents", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                         ], colSpan:2, marginTop: 5, marginLeft: 15}
                        
                        ], 

                        [{text: "PROCEDURE DE PAIEMENT", bold: true,
                        fontSize: 11, font: 'Roboto',  colSpan: 2, alignment: "center", decoration: 'underline', marginTop: 20} ]
                     ,
                     [
                       {
                         columns : [
 
                       mrMoney4, 
                       {
                         columns: [
                           {
                             text: [
                               "\nCOMPOSEZ :", 
                               {text: "\n\n*150*3*10#", fontSize: 10, }, 
                               "  puis lancez l'appel", 
                                   {text: "\n\nCODE COMMERCE :  ", fontSize: 9}, 
                                   {text: formValue.text.toUpperCase(), fontSize: 8}, 
                                   {text: "\n\nMONTANT : ", fontSize: 8}, 
                                   {text: "\n\nREFERENCE : ", fontSize: 8}, 
                                   {text: formValue.ref, fontSize: 8}, 
                                   {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 8},
                                   " (du client)",
                                   {text: "\n\nVALIDER", fontSize: 8}
                             ]
                           }
                         ]
                       }
 
                         ], colSpan: 2
                       }
                     ],
                   ]

                  },
                    
       
                   width: '50%',
                   marginLeft: 5, 
                   borderLeft: true, 
                 }
               ]
              }


          ],  
          defaultStyle: {
            font: 'viado'
          },
    
         styles:{
          rightme:
          {   
              alignment: 'right',
             
          }
      
      }, 
     
        }

        this.pdfObj = pdfMake.createPdf(docDefinition, null, );

      }else if(format == 'normal'){

        const docDefinition = {
    
          pageMargins: [5,5,5,5],
          pageOrientation: 'landscape',
          fillColor: "#fff",
          content: [
            
           {
           margin:  [0,0,0,0],
           fillColor: "#fff",
            columns: [
    
              
              {
                  layout: "noBorders",
                 
                  table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    margin: [5,5,5,5],
                    body : [
                      [
                        logo,
                        {
                          rowSpan: 2,
                   
                          stack: [
                           image
                          ]
                        
                          
                        }, 
                      
                      ],
                      ['\n'], 
                      [ {},logo2], 
                      ['\n', '\n'], 
                      [{qr: "TIL_NUMBER|"+formValue.text, fit: 140, colSpan: 2, alignment: 'center'}], 
                      [{},'\n'],
                      [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(),
                      alignment: "center", colSpan: 2, fontSize: 22,  fillColor: "#f4f4f4"}],
    
                     [{text: "POUR EFFECTUER VOS ACHATS AVEC LE QR CODE SUR MY AIRTEL IL FAUT :", fontSize: 11, colSpan: 2, marginTop: 15, marginBottom: 5, 
                    alignment: "center",  }]
                      
                     , [
                       {columns: [
                         image2,
                         {text: "CLIQUER SUR LA RUBRIQUE ''SCANNEZ ET PAYEZ''", fontSize: 13,  bold: true, width: "*", marginTop: 5}
                       ] ,colSpan: 2, marginLeft: 10  }
                     ], 
                     [
                      {columns: [
                        image3,
                        {text: "POSITIONNER LE TELEPHONE JUSTE DEVANT LE QR CODE",fontSize: 13, width: "*", marginTop: 5}
                      ] ,colSpan: 2, marginLeft: 10  }
                    ], 
                    [
                      {columns: [
                        image4,
                        {text: "ENTRER LE MONTANT DES ACHATS", width: "*", fontSize: 13, marginTop: 5}
                      ] ,colSpan: 2, marginLeft: 10  }
                    ], 
                    [
                      {columns: [
                        image5,
                        {text: "COMPOSER VOTRE CODE SECRET ET VALIDER", fontSize: 13, width: "*", marginTop: 5}
                      ] ,colSpan: 2, marginLeft: 10  }
                    ], 
                    [
                     {columns: [
                      play,
                      apple, 
                      {text: "Télécharger \nmaintenant My Airtel", fontSize: "6", color: "red"}, 
                      {columns :[ face, insta, twitter], width: "33,33%", alignment: 'center', marginLeft: 40},
                      {text: "#Soyons prudents", fontSize: 8, color: "red", paddingRight: 7, alignment: "right", marginLeft: -5}
                     ], colSpan:2, margin: [5,10,5,5]}
                    
                    ]
    
    
    
                    ], 
                    
    
                  },
    
                 
           
                width: '50%', 
                
                
              }, 
              
                        
                     
              {
    
    
                layout: "noBorders",
                 
                  table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    body : [
                      [{text: "PROCEDURE DE PAIEMENT", bold: true,
                       fontSize: 28, font: 'Roboto',  colSpan: 2, alignment: "center", marginTop: 35, decoration: 'underline'} ]
                    ,
                    [
                      {
                        columns : [
                          mrMoney, 
                          {
                            columns: [
                              {
                                text: [
                                  {text: "\nCOMPOSEZ :", },
                                  {text: "\n\n*150*3*10#", fontSize: 14, }, 
                                  "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 10}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 13}, 
                                  {text: "\n\nMONTANT : ", fontSize: 14}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 14}, 
                                  {text: formValue.ref, fontSize: 12}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 14},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 14}, ]
                              } 
                              
                             
                            ], 
                            
                          }, 
                          
                        ], 
                        colSpan: 2, 
                        marginTop: 25
                      }
                    ],
                    [
    
    
                      {
                        columns: [
                          myAirtel,
                          {
                            columns: [ 
                            {text: [{text: "FACILITEZ VOS PAIEMENTS AVEC MY AIRTEL\n", color: "red"},  {text: "Télechargez l'application sur Playstore et Appstore\n", play2, apple2}]}, 
                            ]
                            ,  
                            marginTop: 20, 
                          
    
                          }
                        ], 
                        colSpan: 2, 
                        marginTop: 10
                      },
                      
                      
               
                    ]
    
                    ], 
                    
                  },
    
                width: '50%',
                marginLeft: 5, 
                borderLeft: true, 
                margin: [0, 0, 0, 0]
              }
            ], 
            columnGap: 2
           },
           
          ], 
          defaultStyle: {
            font: 'viado'
          },
    
         styles:{
          rightme:
          {   
              alignment: 'right',
             
          }
      
      }, 
     
        }

        this.pdfObj = pdfMake.createPdf(docDefinition, null, );
      
      }else{


        const docDefinition = {
    
          pageMargins: [0,0,0,0],
          pageOrientation: 'landscape',
        

          content: [

           
            
           {
           margin:  [0,0,0,0],
           fillColor: '#fff',
            columns: [

              {
                
                padding: [10,10,10,10],
                columns : [
                 
                  {
                   
                    layout: "noBorders",
                   
                    
                     table :{
                       
                      body : [

                        [
                          logo5,
                          {
                            rowSpan: 2,
                            stack: [
                             imageR
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 146, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 13, paddingTop: 15}], 

                        [
                          {columns: [
                           play5,
                           apple5, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Mettez votre ceinture de sécurité", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 5}
                         
                         ], 
                         ["\n",""],
                         [
                          logo6,
                          {
                            rowSpan: 2,
                            stack: [
                             image
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 146, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCEE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 13, paddingTop: 15}], 

                        [
                          {columns: [
                           play6,
                           apple6, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Mettez votre ceinture de sécurité", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 5}
                         
                         ]

                      ],
                      padding: [10, 10, 10, 10],
                      headerRows: 0,
                      widths: ["*", "*"], 
                    }, 


                    
        
        
                     width: "50%"
                   }, 
        
                   {                    
                     layout: "noBorders",
                   
                    
                   table :{
                     
                    body: [
                      [
                        taxi1
                       ]
                    ,
                    [
                      {
                        columns : [

                      ceinturee, 
                      {
                        columns: [
                          {
                            text: [
                              "PAYEZ PAR AM :", 
                              {text: "\n\n*150*3*10#", fontSize: 12, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 10}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 10}, 
                                  {text: "\n\nMONTANT : ", fontSize: 10}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 10}, 
                                  {text: formValue.ref, fontSize: 10}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 10},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 10}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ],
                    [
                      taxi2
                     ]
                    , 
                    [
                      {
                        columns : [

                      ceinturee2, 
                      {
                        columns: [
                          {
                            text: [
                              "PAYER PAR AM :", 
                              {text: "\n\n*150*3*10#", fontSize: 12, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 10}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 10}, 
                                  {text: "\n\nMONTANT : ", fontSize: 10}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 10}, 
                                  {text: formValue.ref, fontSize: 10}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 10},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 10}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ]
                    ],

                    padding: [30, 20, 30, 20],
                    headerRows: 0,
                    fillColor: "#fff",
                    widths: ["*", "*"], 
                  },
                   width: "50%"
                 }

                  
                ],

                width: "50%"
              },
    
              
             
                        
                     
              {
    
    
                layout: "noBorders",
                 
                columns : [
                 
                  {
                   
                    layout: "noBorders",
                   
                    
                     table :{
                       
                      body : [

                        [
                          logo3,
                          {
                            rowSpan: 2,
                            stack: [
                             imageR
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 146, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 13, paddingTop: 15}], 

                        [
                          {columns: [
                           play2,
                           apple2, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Mettez votre ceinture de sécurité", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 5}
                         
                         ], 
                         ["\n",""],
                         [
                          logo,
                          {
                            rowSpan: 2,
                            stack: [
                             image
                            ]
                          
                          
                          }
                        ],


                        [{qr: "TIL_NUMBER|"+formValue.text, fit: 146, colSpan: 2, alignment: 'center', marginTop: 10, 
                      marginBottom: 10}]
                        ,
                        
                        [{text: "CODE COMMERCEE : "+formValue.text.toUpperCase(), alignment: "center", colSpan: 2, 
                        background: "#f4f4f4", fontSize: 13, paddingTop: 15}], 

                        [
                          {columns: [
                           play,
                           apple, 
                           {text: "Télécharger maintenant My Airtel", fontSize: 5, color: "red", marginTop: 3}, 
                           {text: "#Mettez votre ceinture de sécurité", fontSize: 5, color: "red", alignment: "right", marginTop: 3}
                          ], colSpan:2, marginTop: 5, marginLeft: 5}
                         
                         ]

                      ],
                      padding: [10, 10, 10, 10],
                      headerRows: 0,
                      widths: ["*", "*"], 
                    }, 


                    
        
        
                     width: "50%"
                   }, 
        
                   {                    
                     layout: "noBorders",
                   
                    
                   table :{
                     
                    body: [
                      [
                        taxi3
                       ]
                    ,
                    [
                      {
                        columns : [

                      ceinturee3, 
                      {
                        columns: [
                          {
                            text: [
                              "PAYER PAR AM :", 
                              {text: "\n\n*150*3*10#", fontSize: 12, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 10}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 10}, 
                                  {text: "\n\nMONTANT : ", fontSize: 10}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 10}, 
                                  {text: formValue.ref, fontSize: 10}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 10},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 10}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ],
                    [
                      taxi4
                     ]
                    , 
                    [
                      {
                        columns : [

                      ceinturee4, 
                      {
                        columns: [
                          {
                            text: [
                              "PAYER PAR AM :", 
                              {text: "\n\n*150*3*10#", fontSize: 12, }, 
                              "  puis lancez l'appel", 
                                  {text: "\n\nCODE COMMERCE :  ", fontSize: 10}, 
                                  {text: formValue.text.toUpperCase(), fontSize: 10}, 
                                  {text: "\n\nMONTANT : ", fontSize: 10}, 
                                  {text: "\n\nREFERENCE : ", fontSize: 10}, 
                                  {text: formValue.ref, fontSize: 10}, 
                                  {text: "\n\nMOT DE PASSE PERSONNEL : ", fontSize: 10},
                                  " (du client)",
                                  {text: "\n\nVALIDER", fontSize: 10}
                            ]
                          }
                        ]
                      }

                        ], colSpan: 2
                      }
                    ]
                    ],

                    padding: [10, 10, 10, 10],
                    headerRows: 0,
                    fillColor: "#fff",
                    widths: ["*", "*"], 
                  },
                   width: "50%"
                 }

                  
                ],
                 
    
                width: '50%',
                marginLeft: 5, 
                borderLeft: true, 
              }
            ], 
            columnGap: 2
           },
           
          ], 
          defaultStyle: {
            font: 'viado'
          },
    
         styles:{
          rightme:
          {   
              alignment: 'right',
             
          }
      
      }, 
     
        }

        this.pdfObj = pdfMake.createPdf(docDefinition, null, );



      }



    
 
    

  }

  downloadPdf(){

    alert('Téléchargement en cours, Cliquez sur OK pour finaliser');



    if(this.plt.is('cordova')){

      try{
        
    
      this.pdfObj.getBase64(async (data)=>{

    

        let path = this.myForm.value.text+Date.now()+".pdf"; 

        const result  = await Filesystem.writeFile({
          path, 
          data, 
          directory: Directory.Documents, 
          recursive: true
        }); 

       
      

        this.fileOpener.open(result.uri, 'application/pdf').then(()=>{

          this.presentToast();

          setTimeout(() => {

            this.photoPreview = null;

          }, 3000);
         


        }, (err)=>{

     
         

        })
    }, (err)=>{


    })

      }catch (e){

        console.log('Impossible de créer le fichier', e); 

       
      }


    }else{
      this.pdfObj.download();
      this.presentToast();
     
    }

  }

        
dump(obj) {
  var out = '';
  for (var i in obj) {
      out += i + ": " + obj[i] + "\n";
  }

  alert(out);

  // or, if you wanted to avoid alerts...

  var pre = document.createElement('pre');
  pre.innerHTML = out;
  document.body.appendChild(pre)
}

}