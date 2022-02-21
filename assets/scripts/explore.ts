// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (!window.scence) {
            cc.director.loadScene("login")
        }
    }
    back() {
        if (window.scence) {
            window.scence.pop();
            cc.director.loadScene(window.scence[window.scence.length - 1]);
        } else {
            cc.director.loadScene("login");
        }
    }


    // update (dt) {}
}
