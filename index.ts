import {
    Extension,
    Block,
} from "dalkak";

export default new Extension({
    name: "extension name",
    blocks: {
        block: new Block({
            name: "block name",
            template: "example (input)",
            func: ({input}, project) => {

            }
        }),
    },
});