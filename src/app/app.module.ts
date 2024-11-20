import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FaceRecognitionComponent } from './pages/face/face-recognition/face-recognition.component';
import { FaceRecognitionCaptureComponent } from './pages/face/face-recognition-capture/face-recognition-capture.component';
import { ScanIdComponent } from './pages/id/scan-id/scan-id.component';
import { ScanIdCaptureComponent } from './pages/id/scan-id-capture/scan-id-capture.component';
import { ScanBackIdComponent } from './pages/id/scan-back-id/scan-back-id.component';
import { ScanFrontIDComponent } from './pages/id/scan-front-id/scan-front-id.component';
import { FingerprintComponent } from './pages/fingerprints/fingerprint/fingerprint.component';
import { FingerprintScanStageOneComponent } from './pages/fingerprints/fingerprint-scan-stage-one/fingerprint-scan-stage-one.component';
import { FingerprintScanStageTwoComponent } from './pages/fingerprints/fingerprint-scan-stage-two/fingerprint-scan-stage-two.component';
import { FingerprintScanStageFailComponent } from './pages/fingerprints/fingerprint-scan-stage-fail/fingerprint-scan-stage-fail.component';
import { FingerprintScanStageThreeComponent } from './pages/fingerprints/fingerprint-scan-stage-three/fingerprint-scan-stage-three.component';
import { ScanSignatureComponent } from './pages/signatures/scan-signature/scan-signature.component';
import { SignatureCaptureComponent } from './pages/signatures/signature-capture/signature-capture.component';
import { OtpComponent } from './pages/otp/otp.component';
import {FormsModule} from "@angular/forms";
import { OtperrorComponent } from './pages/signatures/otp/otperror/otperror.component';
import { CamComponent } from './pages/test/cam/cam.component';
import { WebcamComponent } from './pages/test/webcam/webcam.component';
import { SuccessComponent } from './pages/ends/success/success.component';
import { FailedComponent } from './pages/ends/failed/failed.component';
import { AddInformationComponent } from './pages/add-information/add-information.component';
import { ConfirmComponent } from './pages/test/confirm/confirm.component';
import { PlugComponent } from './pages/test/plug/plug.component';
import {RouterModule, Routes} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FaceRecognitionComponent,
    FaceRecognitionCaptureComponent,
    ScanIdComponent,
    ScanIdCaptureComponent,
    ScanBackIdComponent,
    ScanFrontIDComponent,
    FingerprintComponent,
    FingerprintScanStageOneComponent,
    FingerprintScanStageTwoComponent,
    FingerprintScanStageFailComponent,
    FingerprintScanStageThreeComponent,
    ScanSignatureComponent,
    SignatureCaptureComponent,
    OtpComponent,
    OtperrorComponent,
    CamComponent,
    WebcamComponent,
    SuccessComponent,
    FailedComponent,
    AddInformationComponent,
    ConfirmComponent,
    PlugComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
