// allows import 
import commonjs from "@rollup/plugin-commonjs";
//look to node modules for modules
import resolve from "@rollup/plugin-node-resolve";

import svelte from "rollup-plugin-svelte";

import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";


const production = !process.env.ROLLUP_WATCH;
const INPUT = "src";
const OUTPUT = "build";


const serve = () => {
    let started = false;
    return {
        writeBundle() {
            if(!started) {
                started = true;
                require("child_process").spawn("npm", [ "run", "serve", "--", "--dev" ], {
                    stdio : [ "ignore", "inherit", "inherit" ],
                    shell : true,
                });
            }
        },
    };
}
 

export default {
    input : `${INPUT}/main.js`,
    output : {
        format : "iife",
        file : `${OUTPUT}/bundle.js`,
        name : "ToDo",
        sourcemap : true,
    },
    plugins : [
        svelte({
            // we'll extract any component CSS out into
            // a separate file — better for performance
            dev        : !production,
            
            css : (css) => {
                css.write(`${OUTPUT}/bundle.css`);
            },
        }),
        resolve({
            browser : true,
            dedupe  : [ "svelte" ],
        }),
        commonjs(),
        copy({
            targets : [
                { src : `${INPUT}/public/**/*`, dest : OUTPUT },
                { src : `${INPUT}/index.html`, dest : OUTPUT },
            ],
        }),
        
        !production && livereload(`${OUTPUT}`),
        !production && serve(),
    ]
}
