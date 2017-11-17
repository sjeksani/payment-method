class TemplateService {

    templates: any = [];

    constructor () {
        this.parse(document.getElementById('_templates'));
    }

    parse = (dom) => {
        try {
            for(let node of dom.childNodes) {
                if ( node.nodeName === 'SCRIPT' ) {
                    this.templates[ node.id ] = node.innerHTML;
                }
            }
        } catch ( e ) {

        }
    }

    public GetTemplate(identifier: string)
    {
        if (this.templates[identifier])
            return this.templates[identifier];
        else
            return "";
    }

}
export var templates = new TemplateService();