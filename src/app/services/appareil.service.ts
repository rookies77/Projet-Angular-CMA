import { Subject } from 'rxjs/Subject';

export class AppareilService {
    private appareils = [
        { id: 12, name: 'Machine à laver', status: 'Éteint' },
        { id: 22, name: 'Four', status: 'Allumé' },
        { id: 42, name: 'Ordinateur', status: 'Éteint' }
    ];

    apapreilsSubject = new Subject<any[]>();

    emitAppareilSubject(){
        this.apapreilsSubject.next(this.appareils.slice())
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find((app) => { return app.id === id });
        return appareil;
    }
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Éteint';
        }
        this.emitAppareilSubject();
    }
    switchOnOne(i: number) {
        this.appareils[i].status = 'Allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(i: number) {
        this.appareils[i].status = 'Éteint';
        this.emitAppareilSubject();
    }
}