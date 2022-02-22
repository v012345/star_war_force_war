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
    weapon: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    equip(): void {
        // console.log(this)
        this.weapon.string = "sword"
    }

    choose(): void {
        cc.resources.load("UI/sr-ring-selected", cc.SpriteFrame, (err, s) => {
            // this.icon = prefab;
            // console.log("prefabs / Hero Icon")
            console.log(this.node.getChildByName("Ring").getComponent(cc.Sprite));
            this.node.getChildByName("Ring").getComponent(cc.Sprite).spriteFrame = s as unknown as cc.SpriteFrame;
            // .spriteFrame = s as unknown as cc.Sprite;
            // this.node
            // if (this.node) this.node.emit("refreshHeroesList");
        });
        // console.log(this)
    }



    // update (dt) {}
}
