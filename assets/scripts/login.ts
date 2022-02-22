// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import axios from "axios";
interface my {
    id: number,
    name: string,
    power: number,
    currency: number
}
declare global {
    interface Window { scence: Array<string>; my: my }
}

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property(cc.Node)
    // button: cc.Node = null;

    @property(cc.Label)
    account: cc.Label = null;

    private isLogingin: boolean = false;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    login(): void {

        if (this.account.string && !this.isLogingin) {
            this.isLogingin = true
            axios.post("http://api.nightowl.name/api/user/login").then(r => {
                window.my = r.data;
                window.scence.push("hall");
                cc.director.loadScene("hall");
            })
        }

    }

    start(): void {
        window.scence = [];

        // console.log(this);
        // axios.post("http://api.nightowl.name/api/user/login").then(r => {
        //     console.log(r.data)
        // })
    }

    // update (dt) {}
}
