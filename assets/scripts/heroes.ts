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

    @property(cc.Node)
    scroll_content: cc.Node = null;

    icon: cc.Asset = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start(): void {
        if (!window.scence && !window.my) {
            cc.director.loadScene("login")
        }
        this.node.on("refreshHeroesList", this.refreshHeroesList, this);

        cc.resources.load("prefabs/Hero Icon", cc.Prefab, (err, prefab) => {
            this.icon = prefab;
            console.log("prefabs / Hero Icon")
            if (this.node) this.node.emit("refreshHeroesList");
        });
    }

    refreshHeroesList() {
        let list: cc.Layout = this.scroll_content.getComponentInChildren(cc.Layout);

        for (let i = 0; i < 10; i++) {
            let n: cc.Node = cc.instantiate(this.icon) as unknown as cc.Node
            n.height *= 0.5;
            n.width *= 0.5;
            n.scale *= 0.5;
            // console.log(n)
            list.node.addChild(n);
        }
        list.updateLayout();
        this.scroll_content.height = list.node.height;
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
