// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (window.my) {
            // console.log(window.my)
            console.log()
            this.node.getChildByName("Power").getComponentInChildren(cc.Label).string = window.my.power.toString();
            this.node.getChildByName("Currency").getComponentInChildren(cc.Label).string = window.my.currency.toString();
        }
    }

    // update (dt) {}
}
