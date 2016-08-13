/**
 * Build system.
 */

(function () {
    var fs = require("fs");
    var path = require("path");
    var exec = require("child_process").execSync;

    var tsc = require("typescript");
    var sass = require("node-sass");

    // Platform
    var platform = process.platform;

    // Tasks
    // Compile -------------------------------------
    desc("Builds the project and all source files.");
    task("default", function () {
        console.log("Building...");

        // 1. Compile TS files
        console.log("Compiling TypeScript files...");
        compileTs();

        // 2. Compile SASS files
        console.log("Compiling SASS files...");
        compileSass();

        // 2. Copy remaining files to out folder
        console.log("Copying static artifacts...");
        copyStaticArtifacts();

        console.log("Build done!");
    });

    // Cleanup -------------------------------------------------------------
    desc("Removes output files from source locations and cleans up folders");
    task("cleanup", function () {
        console.log("Cleaning up output folder...");

        deleteFolderRecursive("out/");

        console.log("Cleanup done!");
    });

    function compileTs() {
        var compiler = "tsc.js";
        var node = "node";
        var execPath = path.join(
            "node_modules",
            "typescript",
            "lib",
            compiler);

        exec(node + " " + execPath + " " + "--project src");
    }

    function compileSass() {
        var result = sass.renderSync({
            file: path.join("src", "style", "application.scss"),
            outputStyle: "compressed", /* nested | compact | expanded | compressed */
            sourceMap: true
        });

        fs.writeFileSync(path.join("out", "style.css"), result.css);
    }

    function deleteFolderRecursive(pathToFolder, removeRoot) {
        if (!removeRoot) {
            removeRoot = true;
        }

        if (fs.existsSync(pathToFolder)) {
            fs.readdirSync(pathToFolder).forEach(function (file, index) {
                var curPath = path.join(pathToFolder, file);

                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });

            // Empty folder, safe to delete
            if (removeRoot) {
                fs.rmdirSync(pathToFolder);
            }
        }
    }

    function copyStaticArtifacts() {
        fs.createReadStream(path.join("src", "index.html"))
            .pipe(fs.createWriteStream(path.join("out", "index.html")));
    }
})();