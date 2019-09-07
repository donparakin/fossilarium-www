
const addSvelte = (component) => {
    if (component.tag) {
        addSvelte(document.getElementsByTagName(component.tag), component.svelte);
    }
    if (component.class) {
        addSvelte(document.getElementsByClassName(component.class), component.svelte);
    }
    function addSvelte(elements, svelteClass) {
        for (let el of elements) {
            let props = { innerHTML: el.innerHTML };
            for (let i=0; i<el.attributes.length; i++) {
                let attr = el.attributes.item(i);
                props[attr.name] = attr.value;
            }
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
            new svelteClass({
                target: el,
                props: props
            });
        }
    }
};

export default addSvelte;
