import {Component, OnInit} from '@angular/core';

import {
    Plugins,
} from '@capacitor/core';
import {RecordingData, GenericResponse, PlayOptions, RecordSource} from 'capacitor-voice-player-recorder';

const {VoiceRecorder, VoicePlayer} = Plugins;

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    async startRecording() {
        VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));


        VoiceRecorder.startRecording();

        VoiceRecorder.addListener('audioRecorded', (data: RecordingData) => {
            console.log(data.recordDataBase64.length);
            VoicePlayer.play({
                base64: data.recordDataBase64
            });
        });
    }

    stopRecording() {
        VoiceRecorder.stopRecording();
    }

}
