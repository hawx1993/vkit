/**
 * Created by trigkit4 on 2017/5/11.
 */
import './index.less';
import mainTpl from './module/main.tpl.html'

class Index {
    constructor() {
        this.mainContainer = $('#main');
        this.handleTpl();
    }
    handleTpl(){
        this.mainContainer.html(mainTpl());
    }
}
new Index();


